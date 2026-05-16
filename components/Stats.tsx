"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Fuel, Building2, Ship, Clock } from "lucide-react";

type Stat = {
  icon: typeof Fuel;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

const STATS: ReadonlyArray<Stat> = [
  { icon: Building2, value: 3, suffix: "", label: "Secteurs couverts" },
  { icon: Fuel, value: 25, prefix: "+", label: "Stations livrées" },
  { icon: Ship, value: 150, prefix: "+", label: "Soutages réalisés" },
  { icon: Clock, value: 24, suffix: "/7", label: "Opérations" },
];

function Counter({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{val}</span>;
}

export default function Stats() {
  return (
    <section className="relative bg-slate-900 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
                  {stat.prefix}
                  <Counter to={stat.value} />
                  {stat.suffix}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
