import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "איטום קירות חיצוניים בסנפלינג | פתרון סופי לנזילות ורטיבות" },
      {
        name: "description",
        content:
          "מומחי איטום וסנפלינג לבניינים גבוהים. פתרון סופי לנזילות ורטיבות בקירות חיצוניים, חלונות ובטון. אחריות 10 שנים, ביטוח מלא וטכנאים מוסמכים.",
      },
      { property: "og:title", content: "איטום קירות חיצוניים בסנפלינג | פתרון סופי לנזילות ורטיבות" },
      {
        property: "og:description",
        content: "מומחי איטום בסנפלינג עם 10 שנות אחריות, ללא פיגומים, מהיר ומדויק.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "איטום קירות חיצוניים בסנפלינג | פתרון סופי לנזילות ורטיבות" },
      { name: "description", content: "שי ביצוע בגובה: מומחים באיטום קירות חיצוניים בסנפלינג, שיקום מבנים וחיזוק אריחים. פתרון סופי לנזילות ורטיבות עם אחריות מלאה. שירות מקצועי, אמין ובטוח." },
      { property: "og:description", content: "שי ביצוע בגובה: מומחים באיטום קירות חיצוניים בסנפלינג, שיקום מבנים וחיזוק אריחים. פתרון סופי לנזילות ורטיבות עם אחריות מלאה. שירות מקצועי, אמין ובטוח." },
      { name: "twitter:description", content: "שי ביצוע בגובה: מומחים באיטום קירות חיצוניים בסנפלינג, שיקום מבנים וחיזוק אריחים. פתרון סופי לנזילות ורטיבות עם אחריות מלאה. שירות מקצועי, אמין ובטוח." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/RapLoX7SMAghrGbUUoHssbU98KG2/social-images/social-1776675144386-IMG-20240421-WA0002.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/RapLoX7SMAghrGbUUoHssbU98KG2/social-images/social-1776675144386-IMG-20240421-WA0002.webp" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
