"use client";

import { Anchor, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    icon: Anchor,
    title: "Single Operating Port",
    text: "Abidjan, Côte d'Ivoire",
  },
  {
    icon: Users,
    title: "Local Team, Local Knowledge",
    text: "We understand your needs",
  },
  {
    icon: Zap,
    title: "Faster Service",
    text: "Quick turnaround at Abidjan Port",
  },
];

export default function Advantage() {
  return (
    <section id="advantage" className="bg-[#0b2d57] py-24 text-white overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-400">
            Local advantage
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl leading-tight">
            Abidjan Port, Our Home
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            We are strategically based in Abidjan Port to serve you better with
            quick response, flexible operations, and a deep understanding of local
            requirements.
          </p>
        </motion.div>

        <div className="flex justify-center relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/20 bg-white/5 p-6"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-dashed border-amber-400/30"
            />
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full rounded-full border-2 border-amber-400 flex items-center justify-center bg-[#0b2d57] relative z-10"
            >
              <div className="text-center">
                <p className="text-sm font-black tracking-[0.2em] text-amber-400">
                  ABIDJAN
                </p>
                <p className="mt-2 text-2xl font-black">PORT</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="space-y-8">
          {points.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-5 group"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-400/35 bg-amber-400/10 text-amber-300 transition-colors group-hover:bg-amber-400 group-hover:text-[#0b2d57]">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}