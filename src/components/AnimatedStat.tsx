import { useEffect, useRef, useState } from "react";

export function AnimatedStat({
  value,
  prefix = "",
  suffix = "",
  mode = "count",
  duration = 1800,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  mode?: "count" | "pulse";
  duration?: number;
}) {
  const [display, setDisplay] = useState(mode === "count" ? 0 : value);
  const [pulse, setPulse] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            if (mode === "count") {
              const start = performance.now();
              const tick = (now: number) => {
                const p = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - p, 3);
                setDisplay(Math.round(eased * value));
                if (p < 1) requestAnimationFrame(tick);
              };
              requestAnimationFrame(tick);
            } else {
              setPulse(true);
              setTimeout(() => setPulse(false), 900);
            }
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, mode]);

  return (
    <span
      ref={ref}
      className="inline-block"
      dir="ltr"
      style={mode === "pulse" && pulse ? { animation: "pulseGrow 0.9s ease-out" } : undefined}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
