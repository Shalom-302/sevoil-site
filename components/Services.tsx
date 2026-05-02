"use client";

import { Fuel, Ship, BadgeCheck, Boxes, Headset, MapPinned } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: Fuel,
    title: "Marine Fuel Supply",
    text: "Reliable supply of marine fuel products for vessels in Abidjan and beyond.",
  },
  {
    icon: Ship,
    title: "Ship-to-Ship Operations",
    text: "Efficient bunkering coordination with attention to safety and timing.",
  },
  {
    icon: Boxes,
    title: "Fuel Trading & Procurement",
    text: "Smart sourcing and flexible supply planning for your marine operations.",
  },
  {
    icon: MapPinned,
    title: "Port Logistics",
    text: "Smooth coordination around Abidjan Port for faster execution.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance Assurance",
    text: "Processes aligned with quality, documentation, and maritime standards.",
  },
  {
    icon: Headset,
    title: "Client Support",
    text: "Clear communication and quick response from inquiry to delivery.",
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-500">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Services designed for operations
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((item) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-colors hover:bg-white"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b2d57] text-amber-400">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}