import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Droplets,
  Zap,
  ShieldCheck,
  Target,
  Building2,
  SquaresExclude,
  Hammer,
  Layers,
  BadgeCheck,
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

const WHATSAPP = "https://wa.me/972500000000?text=" + encodeURIComponent("שלום, אשמח לקבל הצעת מחיר לאיטום בסנפלינג");
const PHONE = "tel:+972500000000";

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
          <span className="font-display font-bold text-lg tracking-tight">סנפלינג איטום</span>
        </a>
        <a
          href={PHONE}
          className="hidden sm:inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium"
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
          className="w-full h-full object-cover object-[30%_center] sm:object-[40%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, oklch(0.18 0.1 258 / 0.96) 0%, oklch(0.2 0.12 258 / 0.85) 45%, oklch(0.24 0.13 258 / 0.45) 100%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 ring-1 ring-white/20 text-sm mb-6">
            <BadgeCheck className="size-4" />
            10 שנות אחריות בכתב
          </div>
          <h1 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            פתרון סופי לנזילות ורטיבות –
            <span className="block mt-2 bg-gradient-to-l from-white to-white/70 bg-clip-text text-transparent">
              איטום קירות חיצוניים בסנפלינג
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
            צוות מקצועי של טכנאי גובה מוסמכים, עם מעל עשור של ניסיון באיטום בניינים גבוהים.
            עבודה מהירה ומדויקת ללא צורך בפיגומים – אחריות מלאה ל-10 שנים.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="h-14 px-7 text-base font-bold bg-[#25D366] hover:bg-[#1ebe5a] text-white shadow-glow">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
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
              { n: "+10", l: "שנות ניסיון" },
              { n: "500+", l: "בניינים" },
              { n: "10", l: "שנות אחריות" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-extrabold text-3xl">{s.n}</div>
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
    { icon: Hammer, title: "שיקום בטונים", desc: "תיקון בטון מתפורר, חשיפת זיון, חידוש שכבת מגן ושימור הבניין." },
    { icon: Layers, title: "חיזוק חיפויי קרמיקה", desc: "ייצוב אריחים רופפים, איטום פוגות והגנה מנפילת חיפויים." },
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
    { icon: BadgeCheck, title: "טכנאי גובה מוסמכים", desc: "תעודות הסמכה בתוקף ממשרד העבודה ומכון התקנים" },
    { icon: ShieldCheck, title: "ביטוח אחריות מלא", desc: "כיסוי ביטוחי לעבודה ולצד שלישי" },
    { icon: Target, title: "10 שנות אחריות", desc: "אחריות בכתב על כל עבודת איטום" },
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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("הפנייה התקבלה! נחזור אליך בהקדם.");
    }, 700);
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
                { icon: Phone, text: "050-000-0000", href: PHONE },
                { icon: Mail, text: "info@sealing.co.il", href: "mailto:info@sealing.co.il" },
                { icon: MapPin, text: "שירות בכל הארץ", href: "#" },
              ].map((c) => (
                <a key={c.text} href={c.href} className="flex items-center gap-3 text-foreground hover:text-brand transition-smooth">
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
              <span className="font-display font-bold text-lg">סנפלינג איטום</span>
            </div>
            <p className="text-sm leading-relaxed">
              מומחי איטום קירות חיצוניים בשיטת הסנפלינג. שירות מקצועי, מהיר ובטוח לבניינים בכל הגבהים.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">צרו קשר</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={PHONE} className="hover:text-white">050-000-0000</a></li>
              <li><a href="mailto:info@sealing.co.il" className="hover:text-white">info@sealing.co.il</a></li>
              <li>שירות בכל הארץ</li>
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
          © {new Date().getFullYear()} סנפלינג איטום. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="צור קשר בוואטסאפ"
      className="fixed bottom-6 left-6 z-50 size-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white flex items-center justify-center shadow-glow transition-smooth hover:scale-110"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
    </a>
  );
}
