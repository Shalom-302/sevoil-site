"use client";

import { motion, type Variants } from "framer-motion";
import { Compass, Telescope } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MissionVision() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Compass,
      title: t.mission.missionTitle,
      text: t.mission.missionText,
      accent: "from-sky-500 to-sky-700",
      tone: "sky",
    },
    {
      icon: Telescope,
      title: t.mission.visionTitle,
      text: t.mission.visionText,
      accent: "from-yellow-400 to-yellow-600",
      tone: "yellow",
    },
  ];

  return (
    <section id="mission" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-yellow-600">
            {t.mission.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            {t.mission.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-8 lg:grid-cols-2"
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${card.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />

              <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.accent} text-white shadow-md`}>
                <card.icon className="h-6 w-6" />
              </div>

              <h3 className="font-display text-2xl font-black text-slate-900">{card.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{card.text}</p>

              <div className={`mt-8 h-1 w-16 rounded-full bg-gradient-to-r ${card.accent}`} />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
