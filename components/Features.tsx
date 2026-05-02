"use client";

import { Droplets, Anchor, BarChart3, Truck, FlaskRound } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: Droplets,
    title: "Marine Fuel Supply",
    text: "High-quality VLSFO, MGO, HSFO and LSMGO delivered to your vessel.",
  },
  {
    icon: Anchor,
    title: "Ship-to-Ship Bunkering",
    text: "Safe, efficient and experienced STS bunkering operations.",
  },
  {
    icon: BarChart3,
    title: "Fuel Trading",
    text: "Competitive pricing and reliable supply you can trust.",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    text: "End-to-end logistics and operational support.",
  },
  {
    icon: FlaskRound,
    title: "Quality & Compliance",
    text: "Strict quality control and compliance with IMO regulations.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Features() {
  return (
    <section className="border-b border-slate-100 bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-500">
            Our Expertise
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Built for reliability and speed
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {features.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f8fafc",
                borderColor: "#fbbf24"
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b2d57] text-amber-400">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}