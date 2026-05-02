"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock3, MapPinned, Flame } from "lucide-react";
import { motion, Variants } from "framer-motion";

const highlights = [
  {
    icon: Clock3,
    title: "24/7 Operations",
    text: "Always at your service",
  },
  {
    icon: MapPinned,
    title: "Local Focus",
    text: "Based at Abidjan Port",
  },
  {
    icon: Flame,
    title: "Fast Response",
    text: "Quick quotes, faster delivery",
  },
  {
    icon: ShieldCheck,
    title: "Verified Quality",
    text: "Tested, Compliant, Reliable",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="pt-24">
      <div className="relative overflow-hidden">
        <div className="relative min-h-[760px]">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/hero.jpg"
              alt="ship"
              fill
              priority
              quality={75}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/35" />

          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-white"
            >
              <motion.p
                variants={itemVariants}
                className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-300"
              >
                Local bunkering partner in Abidjan
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
              >
                Your Local Bunkering <br />
                Partner in <span className="text-amber-400">Abidjan</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg"
              >
                Reliable bunker fuel supply with precision, speed, and transparency.
                Built for safety, compliance, and smooth operations.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-4 text-sm font-extrabold text-slate-900 shadow-lg transition hover:bg-amber-300 hover:scale-105 active:scale-95"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10 hover:scale-105 active:scale-95"
                >
                  Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#0b2d57]">
          <div className="mx-auto grid max-w-7xl gap-0 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`flex items-start gap-4 px-0 py-4 ${
                  index !== highlights.length - 1
                    ? "lg:border-r lg:border-white/10 lg:pr-6"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}