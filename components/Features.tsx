"use client";

import { Droplets, Anchor, BarChart3, Truck, FlaskRound } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const featureIcons = [Droplets, Anchor, BarChart3, Truck, FlaskRound];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-slate-100 bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-lime-600">
            {t.features.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.features.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {t.features.items.map((item, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.article
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  borderColor: "#a3e635",
                }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:bg-sky-50/40"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-900 text-lime-400">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
