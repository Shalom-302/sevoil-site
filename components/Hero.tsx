"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Truck, HardHat, Ship, Layers, MapPin, Clock3, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const sectorIcons: Record<"land" | "mining" | "marine", typeof Truck> = {
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
  const { t } = useLanguage();
  const slides = t.hero.slides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const active = slides[index];
  const ActiveIcon = sectorIcons[active.sector];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-lime-50 pt-28 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-5 inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-700 backdrop-blur"
          >
            {t.hero.badge}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {t.hero.title1} <br />
            {t.hero.title2}{" "}
            <span className="bg-gradient-to-r from-sky-600 to-lime-500 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800 hover:scale-[1.02] active:scale-95"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-sky-200 bg-white px-6 py-4 text-sm font-bold text-sky-800 transition hover:border-sky-700 hover:bg-sky-50 hover:scale-[1.02] active:scale-95"
            >
              {t.hero.cta2}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.sector}
                onClick={() => setIndex(i)}
                aria-label={`Show ${s.label}`}
                className={`group flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition ${
                  i === index
                    ? "border-sky-700 bg-sky-700 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-sky-300"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition ${
                    i === index ? "bg-lime-300" : "bg-slate-300 group-hover:bg-sky-400"
                  }`}
                />
                {s.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[520px]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-sky-900/15">
            {slides.map((s, i) => (
              <motion.div
                key={s.sector}
                animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.04 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute inset-0"
                style={{ zIndex: i === index ? 1 : 0 }}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  loading="eager"
                  fetchPriority={i === 0 ? "high" : "auto"}
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-sky-950/30 to-transparent" />
              </motion.div>
            ))}

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
              <ActiveIcon className="h-3.5 w-3.5 text-lime-300" />
              {active.label}
            </div>

            <div className="absolute inset-x-5 bottom-5 text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.sector + "-caption"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl font-extrabold leading-snug">{active.title}</p>
                  <p className="mt-1 text-sm text-sky-100/90">{active.text}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 flex items-center gap-2">
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
                        transition={{ duration: 4.5, ease: "linear" }}
                        className="block h-full bg-lime-400"
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-16">
        <div className="mx-auto grid max-w-7xl gap-0 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {t.hero.highlights.map((item, i) => {
            const Icon = highlightIcons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex items-start gap-4 px-0 py-4 ${
                  i !== t.hero.highlights.length - 1 ? "lg:border-r lg:border-slate-200 lg:pr-6" : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lime-300 bg-lime-50 text-lime-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
