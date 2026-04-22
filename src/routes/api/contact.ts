import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const RECIPIENT = "get2shay@gmail.com";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(5).max(30),
  problem: z.string().trim().min(1).max(2000),
});

function encodeRFC2047(text: string): string {
  // UTF-8 base64 encoded subject for non-ASCII (Hebrew) support
  const b64 = Buffer.from(text, "utf-8").toString("base64");
  return `=?UTF-8?B?${b64}?=`;
}

function buildRawEmail(to: string, subject: string, body: string, replyTo?: string): string {
  const headers = [
    `To: ${to}`,
    `Subject: ${encodeRFC2047(subject)}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "MIME-Version: 1.0",
  ];
  if (replyTo) headers.push(`Reply-To: ${replyTo}`);
  const encodedBody = Buffer.from(body, "utf-8").toString("base64");
  const message = headers.join("\r\n") + "\r\n\r\n" + encodedBody;
  return Buffer.from(message, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = ContactSchema.safeParse(json);
          if (!parsed.success) {
            return Response.json(
              { error: "Invalid input", details: parsed.error.issues },
              { status: 400 },
            );
          }
          const { name, phone, problem } = parsed.data;

          const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
          const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY;
          if (!LOVABLE_API_KEY) {
            return Response.json({ error: "LOVABLE_API_KEY not configured" }, { status: 500 });
          }
          if (!GOOGLE_MAIL_API_KEY) {
            return Response.json({ error: "GOOGLE_MAIL_API_KEY not configured" }, { status: 500 });
          }

          const subject = `פנייה חדשה מהאתר - ${name}`;
          const body = `התקבלה פנייה חדשה מהאתר:\n\nשם: ${name}\nטלפון: ${phone}\n\nתיאור הבעיה:\n${problem}\n`;
          const raw = buildRawEmail(RECIPIENT, subject, body);

          const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ raw }),
          });

          if (!res.ok) {
            const errText = await res.text();
            console.error(`Gmail send failed [${res.status}]: ${errText}`);
            return Response.json(
              { error: "Failed to send email", status: res.status },
              { status: 502 },
            );
          }

          return Response.json({ success: true });
        } catch (err) {
          console.error("Contact route error:", err);
          return Response.json({ error: "Server error" }, { status: 500 });
        }
      },
    },
  },
});
