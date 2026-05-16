"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="relative overflow-hidden bg-slate-900 py-20">
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 opacity-15"
      >
        <Image src="/cta.jpg" alt="cargo ship" fill className="object-cover" />
      </motion.div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h2 className="font-display text-3xl font-black sm:text-4xl lg:text-5xl leading-tight">
            {t.cta.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-sky-100/90">{t.cta.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-yellow-400 px-8 py-4 text-sm font-extrabold text-slate-900 shadow-xl transition hover:bg-yellow-300"
            >
              {t.cta.button1}
              <ArrowRight className="rtl-flip h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#about"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {t.cta.button2}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
