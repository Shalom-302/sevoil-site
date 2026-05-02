"use client";

import { FileText, Mail, CheckCircle2, Ship, ClipboardList } from "lucide-react";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Request Quote",
    text: "Send us your requirements through our easy form.",
  },
  {
    icon: Mail,
    number: "2",
    title: "Receive Offer",
    text: "Get a competitive offer within minutes.",
  },
  {
    icon: CheckCircle2,
    number: "3",
    title: "Confirm Order",
    text: "Confirm the offer and place your order.",
  },
  {
    icon: Ship,
    number: "4",
    title: "Delivery Execution",
    text: "We deliver your fuel safely and on time.",
  },
  {
    icon: ClipboardList,
    number: "5",
    title: "Documentation",
    text: "Receive all documents and complete the payment.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Process() {
  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-500">
            How we work
          </p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            Simple process, fast execution
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 lg:grid-cols-5"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={stepVariants}
              className="relative group"
            >
              <div className="relative z-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b2d57] text-amber-400 shadow-lg transition-transform duration-300 group-hover:rotate-12">
                  <step.icon className="h-8 w-8" />
                </div>

                <div className="mx-auto mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-slate-900 shadow-sm">
                  {step.number}
                </div>

                <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-200 z-0" />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}