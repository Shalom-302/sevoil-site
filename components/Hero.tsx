"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Truck, HardHat, Ship, Layers, MapPin, Clock3, ShieldCheck, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { SECTOR_THEME, type SectorKey } from "@/lib/sectors";

const sectorIcons: Record<SectorKey, typeof Truck> = {
  land: Truck,
  mining: HardHat,
  marine: Ship,
};

const highlightIcons = [Layers, MapPin, Clock3, ShieldCheck];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { lang, t } = useLanguage();
  const slides = t.hero.slides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, [slides.length]);

  const active = slides[index];
  const ActiveIcon = sectorIcons[active.sector];
  const theme = SECTOR_THEME[active.sector];
  const isRTL = lang === "ar";

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-32 pb-24 min-h-[100vh] flex flex-col"
    >
      {/* Full-screen rotating background images with Ken Burns */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <motion.div
            key={s.sector}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1.08 : 1,
            }}
            transition={{
              opacity: { duration: 1.2, ease: "easeOut" },
              scale: { duration: 8, ease: "linear" },
            }}
            className="absolute inset-0"
            style={{ zIndex: i === index ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              loading="eager"
              fetchPriority={i === 0 ? "high" : "auto"}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md"
          >
            <ActiveIcon className="h-3.5 w-3.5" style={{ color: theme.accent }} />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl font-black leading-[1.05] text-white drop-shadow-lg sm:text-5xl lg:text-7xl"
          >
            {t.hero.title1} <br />
            {t.hero.title2}{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-sky-100/90 drop-shadow sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-7 py-4 text-sm font-extrabold text-slate-900 shadow-xl shadow-yellow-400/20 transition hover:bg-yellow-300 hover:scale-[1.02] active:scale-95"
            >
              {t.hero.cta1}
              <ArrowRight className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0" : ""}`} />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.02] active:scale-95"
            >
              {t.hero.cta2}
              <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.sector + "-caption"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <p
                  className="text-base font-extrabold uppercase tracking-[0.22em]"
                  style={{ color: theme.accent }}
                >
                  {active.label}
                </p>
                <p className="font-display mt-2 text-lg font-bold sm:text-xl">{active.title}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {slides.map((s, i) => {
              const t = SECTOR_THEME[s.sector];
              const isActive = i === index;
              return (
                <button
                  key={s.sector}
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${s.label}`}
                  className={`group flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md transition ${
                    isActive
                      ? "border-white/80 bg-white text-slate-900"
                      : "border-white/30 bg-white/10 text-white hover:border-white/60"
                  }`}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: isActive ? t.accent : "rgba(255,255,255,0.5)" }}
                  />
                  {s.label}
                </button>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto mt-6 flex max-w-xs items-center gap-2">
            {slides.map((s, i) => (
              <span
                key={s.sector + "-bar"}
                className={`h-1 flex-1 overflow-hidden rounded-full ${
                  i === index ? "bg-white/30" : "bg-white/15"
                }`}
              >
                {i === index && (
                  <motion.span
                    key={`${s.sector}-${index}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5.5, ease: "linear" }}
                    className="block h-full"
                    style={{ backgroundColor: theme.accent }}
                  />
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16">
        <div className="mx-auto grid max-w-7xl gap-0 rounded-2xl border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md sm:px-6 lg:grid-cols-4 lg:px-6">
          {t.hero.highlights.map((item, i) => {
            const Icon = highlightIcons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex items-start gap-4 px-2 py-4 ${
                  i !== t.hero.highlights.length - 1 ? "lg:border-r lg:border-white/15 lg:pr-6" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-yellow-300/60 bg-yellow-400/20 text-yellow-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-extrabold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-sky-100/80">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 z-10 mx-auto hidden h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md sm:flex"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
