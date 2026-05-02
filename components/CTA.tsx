"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0b2d57] py-20">
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 opacity-20"
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
          <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl leading-tight">
            Ready to fuel your next voyage?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            Our team is ready 24/7 to provide the best bunker solutions for your vessel in Abidjan.
          </p>
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
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-amber-400 px-8 py-4 text-sm font-extrabold text-slate-900 shadow-xl transition hover:bg-amber-300"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#about"
              className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}