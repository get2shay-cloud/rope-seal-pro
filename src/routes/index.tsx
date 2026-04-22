import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatedStat } from "@/components/AnimatedStat";
import {
  Droplets,
  Zap,
  Target,
  Building2,
  SquaresExclude,
  Hammer,
  Layers,
  BadgeCheck,
  HardHat,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import heroImg from "@/assets/hero-abseiling.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://wa.me/972525472518?text=" + encodeURIComponent("שלום, אשמח לקבל הצעת מחיר לאיטום בסנפלינג");
const PHONE = "tel:+972525472518";
const EMAIL = "Get2Shay@gmail.com";
const PHONE_DISPLAY = "052-547-2518";
const SERVICE_AREA = "שירות בכל צפון הארץ";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const gtagReportConversion = (url?: string, target?: string) => {
  const navigate = () => {
    if (url) {
      if (target === "_blank") {
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = url;
      }
    }
  };
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18106205849/8yZjCKLA-Z8cEJmN27lD",
      event_callback: navigate,
    });
    // Fallback in case gtag never fires the callback (blocked, slow network)
    window.setTimeout(navigate, 1500);
  } else {
    navigate();
  }
  return false;
};


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <TrustBar />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
      <Toaster richColors position="top-center" dir="rtl" />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="size-9 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center ring-1 ring-white/20">
            <Building2 className="size-5" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">שי ביצוע בגובה</span>
        </a>
        <a
          href={PHONE}
          onClick={(e) => { e.preventDefault(); gtagReportConversion(PHONE); }}
          className="hidden sm:inline-flex flex-row-reverse items-center gap-2 text-white/90 hover:text-white text-sm font-medium"
        >
          <Phone className="size-4" />
          חייגו עכשיו
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="טכנאי סנפלינג מאטם קיר חיצוני של בניין גבוה"
          className="w-full h-full object-cover object-[78%_center] sm:object-[60%_center] lg:object-[50%_center] scale-x-[-1]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, oklch(0.13 0.09 258 / 0.97) 0%, oklch(0.15 0.1 258 / 0.9) 35%, oklch(0.18 0.12 258 / 0.7) 70%, oklch(0.2 0.12 258 / 0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.15 0.09 258 / 0.45) 0%, oklch(0.15 0.09 258 / 0.15) 50%, oklch(0.15 0.09 258 / 0.55) 100%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 ring-1 ring-white/20 text-sm mb-6">
            <BadgeCheck className="size-4" />
            5 שנות אחריות בכתב
          </div>
          <h1 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            פתרון סופי לנזילות ורטיבות –
            <span className="block mt-2 bg-gradient-to-l from-white to-white/70 bg-clip-text text-transparent">
              איטום קירות חיצוניים בסנפלינג
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
            מומחים לאיטום ושיקום מבנים בסנפלינג עם מעל 10 שנות ניסיון. עבודה נקייה, מהירה ומדויקת ללא פיגומים. אחריות מלאה ל-5 שנים ומחיר ללא תחרות.{" "}
            <strong className="font-bold text-white">התקשרו עכשיו לייעוץ חינם!</strong>
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="h-14 px-7 text-base font-bold bg-[#25D366] hover:bg-[#1ebe5a] text-white shadow-glow">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP, "_blank"); }}>
                <MessageCircle className="size-5" />
                שיחה מיידית בוואטסאפ
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-7 text-base font-bold bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-brand-deep"
            >
              <a href="#contact">
                קבלת הצעת מחיר
                <ArrowLeft className="size-5" />
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: 10, l: "שנות ניסיון", prefix: "+", mode: "count" as const },
              { n: 500, l: "בניינים", suffix: "+", mode: "count" as const },
              { n: 5, l: "שנות אחריות", mode: "pulse" as const },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-extrabold text-3xl">
                  <AnimatedStat value={s.n} prefix={s.prefix} suffix={s.suffix} mode={s.mode} />
                </div>
                <div className="text-sm text-white/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: Zap,
      title: "מהירות ביצוע",
      desc: "הקמה מיידית של מערך עבודה ללא הקמת פיגומים. חוסכים שבועות של עבודה.",
    },
    {
      icon: Droplets,
      title: "חיסכון משמעותי",
      desc: "ללא עלויות פיגומים, היתרים ושכירות ציוד כבד – חיסכון של עד 60% בעלות הפרויקט.",
    },
    {
      icon: Target,
      title: "דיוק מקסימלי",
      desc: "גישה ישירה לכל נקודת בעיה בקיר, איתור מדויק של מקור הנזילה ופתרון נקודתי.",
    },
  ];
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-brand text-sm font-bold tracking-wider uppercase mb-3">היתרונות שלנו</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-foreground">
            למה סנפלינג הוא הפתרון הנכון?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative bg-background rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth border border-border/60"
            >
              <div
                className="size-14 rounded-xl flex items-center justify-center mb-6 text-brand-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <it.icon className="size-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">{it.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Building2, title: "איטום קירות חיצוניים", desc: "טיפול יסודי בסדקים ובאזורי חדירת מים בקירות הבניין." },
    { icon: SquaresExclude, title: "איטום חלונות ומסגרות", desc: "אטימת היקפי חלונות, סיליקון איכותי ומניעת חדירת רטיבות." },
    { icon: Hammer, title: "שיקום בטונים", desc: "תיקון בטון מתפורר, חשיפת סגרגציה, חידוש שכבת מגן ושימור הבניין." },
    { icon: Layers, title: "חיזוק חיפויי אבן", desc: "ייצוב אריחים רופפים, איטום פוגות והגנה מנפילת חיפויים." },
  ];
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-brand text-sm font-bold tracking-wider uppercase mb-3">השירותים שלנו</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight">
            פתרונות מקצה לקצה לבניין שלך
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-2xl p-7 border border-border bg-card hover:bg-brand transition-smooth group"
            >
              <s.icon className="size-10 text-brand group-hover:text-brand-foreground transition-smooth mb-5" />
              <h3 className="font-display font-bold text-xl text-foreground group-hover:text-brand-foreground transition-smooth mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-brand-foreground/85 transition-smooth leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: BadgeCheck, title: "גולשי מעטפת מוסמכים", desc: "תעודות הסמכה בתוקף ממשרד העבודה" },
    { icon: HardHat, title: "ציוד תקני ומאושר", desc: "ציוד גלישה ובטיחות העומד בכל התקנים והתקנות" },
    { icon: Target, title: "5 שנות אחריות", desc: "אחריות בכתב על כל עבודת איטום" },
  ];
  return (
    <section className="py-16" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-4 text-white">
              <div className="shrink-0 size-12 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
                <it.icon className="size-6" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">{it.title}</div>
                <div className="text-white/75 text-sm mt-0.5">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      problem: String(data.get("problem") || "").trim(),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      toast.success("הפנייה נשלחה בהצלחה! נחזור אליך בהקדם.");
    } catch {
      toast.error("שליחת הפנייה נכשלה. אנא נסו שוב או צרו קשר טלפוני.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="text-brand text-sm font-bold tracking-wider uppercase mb-3">צרו קשר</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight mb-5">
              קבלו הצעת מחיר תוך 24 שעות
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              ספרו לנו על הבעיה בבניין – אנחנו נחזור אליכם עם פתרון מקצועי, לוחות זמנים והצעת מחיר ללא התחייבות.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, text: PHONE_DISPLAY, href: PHONE },
                { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
                { icon: MapPin, text: SERVICE_AREA, href: "#" },
              ].map((c) => (
                <a
                  key={c.text}
                  href={c.href}
                  onClick={c.href === PHONE ? (e) => { e.preventDefault(); gtagReportConversion(PHONE); } : undefined}
                  className="flex items-center gap-3 text-foreground hover:text-brand transition-smooth"
                >
                  <div className="size-10 rounded-lg bg-background flex items-center justify-center shadow-card">
                    <c.icon className="size-5 text-brand" />
                  </div>
                  <span className="font-medium">{c.text}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-background rounded-2xl p-8 shadow-elegant border border-border/60"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">שם מלא</label>
                <Input required name="name" placeholder="ישראל ישראלי" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">טלפון</label>
                <Input required type="tel" name="phone" placeholder="050-1234567" className="h-12" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">תיאור הבעיה</label>
                <Textarea
                  required
                  name="problem"
                  placeholder="ספרו על הנזילה / רטיבות / סדקים בבניין..."
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full h-14 text-base font-bold text-brand-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {loading ? "שולח..." : "שלחו פנייה"}
                <ArrowLeft className="size-5" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                המידע שלך מאובטח ולא יועבר לצדדים שלישיים
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-deep text-white/80">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <div className="size-9 rounded-lg bg-white/10 flex items-center justify-center ring-1 ring-white/20">
                <Building2 className="size-5" />
              </div>
              <span className="font-display font-bold text-lg">שי ביצוע בגובה</span>
            </div>
            <p className="text-sm leading-relaxed">
              מומחי איטום קירות חיצוניים בסנפלינג. שירות מקצועי, מהיר ובטוח לבניינים בכל הגבהים.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">צרו קשר</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={PHONE} onClick={(e) => { e.preventDefault(); gtagReportConversion(PHONE); }} className="hover:text-white">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></li>
              <li>{SERVICE_AREA}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">השירותים</h4>
            <ul className="space-y-2 text-sm">
              <li>איטום קירות חיצוניים</li>
              <li>איטום חלונות</li>
              <li>שיקום בטונים</li>
              <li>חיזוק חיפויים</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-center text-white/60">
          © {new Date().getFullYear()}כל הזכויות שמורות שי ביצוע בגובה
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { e.preventDefault(); gtagReportConversion(WHATSAPP, "_blank"); }}
        aria-label="צור קשר בוואטסאפ"
        className="relative size-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white flex items-center justify-center shadow-glow transition-smooth hover:scale-110"
      >
        <MessageCircle className="size-7" />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
      </a>
      <a
        href={PHONE}
        onClick={(e) => { e.preventDefault(); gtagReportConversion(PHONE); }}
        aria-label="התקשר עכשיו"
        className="relative size-14 rounded-full bg-brand hover:opacity-90 text-brand-foreground flex items-center justify-center shadow-glow transition-smooth hover:scale-110"
      >
        <Phone className="size-7" />
        <span className="absolute inset-0 rounded-full animate-ping bg-brand opacity-30" />
      </a>
    </div>
  );
}
