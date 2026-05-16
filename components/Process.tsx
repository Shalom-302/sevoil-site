"use client";

import { FileText, Mail, CheckCircle2, Ship, ClipboardList } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const stepIcons = [FileText, Mail, CheckCircle2, Ship, ClipboardList];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-yellow-600">
            {t.process.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.process.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 lg:grid-cols-5"
        >
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.article key={step.title} variants={stepVariants} className="relative group">
                <div className="relative z-10 rounded-3xl border border-slate-200 bg-sky-50/40 p-8 text-center shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-yellow-400 shadow-lg transition-transform duration-300 group-hover:rotate-12">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div className="mx-auto mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xs font-black text-slate-900 shadow-sm">
                    {index + 1}
                  </div>

                  <h3 className="font-display mt-5 text-sm font-extrabold uppercase tracking-wide text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.text}</p>
                </div>

                {index < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-200 z-0" />
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
