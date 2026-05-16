"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Truck, HardHat, Ship } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import type { Dictionary } from "@/lib/translations";

type SectorKey = "land" | "mining" | "marine";
type SectorEntry = Dictionary["about"]["sectors"][number];

const SECTOR_ANGLES: Record<SectorKey, number> = {
  land: 180, // center-left
  mining: 60, // top-right
  marine: 300, // bottom-right
};

const SECTOR_ICONS: Record<SectorKey, typeof Truck> = {
  land: Truck,
  mining: HardHat,
  marine: Ship,
};

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    if (!orbitRef.current) return;
    const update = () => {
      const w = orbitRef.current?.clientWidth ?? 0;
      // 36% of container width — keeps cards comfortably inside
      setRadius(Math.max(110, Math.min(220, w * 0.36)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(orbitRef.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-sky-50/40 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-yellow-600">
              {t.about.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              {t.about.p1}
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              {t.about.p2}
            </p>

            <motion.div
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
              className="mt-10"
            >
              <Link
                href="#mission"
                className="inline-flex items-center gap-3 rounded-lg bg-sky-700 px-8 py-4 text-sm font-extrabold text-white shadow-lg transition hover:bg-sky-800"
              >
                {t.about.button}
                <ArrowRight className="rtl-flip h-5 w-5 text-yellow-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Desktop: trigonometric orbit composition */}
          <div className="hidden md:block">
            <div
              ref={orbitRef}
              className="relative mx-auto aspect-square w-full max-w-[560px]"
            >
              {/* Subtle dashed reference circle */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeDasharray="1 2"
                  strokeWidth="0.3"
                />
              </svg>

              {/* Center node — "3 sectors. 1 partner." */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-br from-sky-700 to-slate-900 text-center text-white shadow-xl">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-300">
                    {t.about.centerLabel}
                  </p>
                  <p className="font-display mt-1 px-3 text-sm font-extrabold leading-tight">
                    {t.about.centerTitle}
                  </p>
                </div>
              </motion.div>

              {t.about.sectors.map((sector, i) => (
                <OrbitImage
                  key={sector.key}
                  index={i}
                  sector={sector}
                  radius={radius}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          {/* Mobile: stacked sector cards */}
          <div className="grid gap-4 md:hidden">
            {t.about.sectors.map((s, i) => {
              const Icon = SECTOR_ICONS[s.key as SectorKey];
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative h-48">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      <Icon className="h-3 w-3 text-yellow-300" />
                      {s.label}
                    </div>
                    <div className="absolute inset-x-4 bottom-4 text-white">
                      <p className="text-base font-extrabold">{s.title}</p>
                      <p className="mt-1 text-xs text-sky-100/90">{s.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrbitImage({
  index,
  sector,
  radius,
  scrollYProgress,
}: {
  index: number;
  sector: SectorEntry;
  radius: number;
  scrollYProgress: MotionValue<number>;
}) {
  const baseAngle = SECTOR_ANGLES[sector.key as SectorKey];
  const Icon = SECTOR_ICONS[sector.key as SectorKey];

  // Each sector progressively appears at a later scroll threshold
  const appearStart = 0.1 + index * 0.12;
  const appearEnd = appearStart + 0.18;

  const opacity = useTransform(scrollYProgress, [appearStart, appearEnd], [0, 1]);
  const scale = useTransform(scrollYProgress, [appearStart, appearEnd], [0.7, 1]);
  // Slight orbital drift over the whole scroll: ±15°
  const angle = useTransform(scrollYProgress, [0, 1], [baseAngle - 15, baseAngle + 15]);
  const xPx = useTransform(angle, (deg) => radius * Math.cos((deg * Math.PI) / 180));
  const yPx = useTransform(angle, (deg) => -radius * Math.sin((deg * Math.PI) / 180));

  const halfW = 70; // half card width
  const halfH = 80; // half card height
  const left = useMotionTemplate`calc(50% + ${xPx}px - ${halfW}px)`;
  const top = useMotionTemplate`calc(50% + ${yPx}px - ${halfH}px)`;

  return (
    <motion.div
      style={{ left, top, opacity, scale }}
      className="absolute h-[160px] w-[140px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
    >
      <div className="relative h-full w-full">
        <Image
          src={sector.image}
          alt={sector.title}
          fill
          sizes="180px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
        <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur">
          <Icon className="h-2.5 w-2.5 text-yellow-300" />
          {sector.label}
        </div>
        <div className="absolute inset-x-2 bottom-2 text-white">
          <p className="text-xs font-extrabold leading-tight">{sector.title}</p>
        </div>
      </div>
    </motion.div>
  );
}
