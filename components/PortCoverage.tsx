"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Anchor, Map, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const pointIcons = [Anchor, Map, Users];

export default function PortCoverage() {
  const { t } = useLanguage();

  return (
    <section id="port" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-lime-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-lime-600">
            {t.portCoverage.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {t.portCoverage.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {t.portCoverage.subtitle}
          </p>

          <div className="mt-10 space-y-6">
            {t.portCoverage.points.map((p, i) => {
              const Icon = pointIcons[i];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-300 bg-lime-50 text-lime-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-slate-900">{p.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{p.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-[520px]"
        >
          <div className="relative h-full w-full">
            <Image
              src="/sev-ci.png"
              alt="Côte d'Ivoire map"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-contain"
            />

            {/* Abidjan marker — south-east coast (on the coastline) */}
            <div className="absolute" style={{ top: "83%", left: "63%" }}>
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-12 rounded-full border-2 border-dashed border-lime-500/70"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-20 rounded-full border border-sky-400/60"
                />
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400"
                  style={{ width: 28, height: 28 }}
                />
                <span className="relative block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-700 ring-4 ring-white shadow-lg" />
                <span className="absolute left-6 top-1 whitespace-nowrap rounded-md bg-sky-900 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                  {t.portCoverage.mapLabel}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
