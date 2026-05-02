"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[400px] overflow-hidden rounded-3xl shadow-2xl sm:h-[480px]"
        >
          <Image
            src="/about.jpg"
            alt="SEV-OIL team at port"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-500">
            About SEV-OIL
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Your Trusted Bunkering Partner
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            SEV-OIL is a leading marine fuel supplier based at Abidjan Port,
            delivering reliable and cost-effective bunker solutions.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            We are committed to safety, quality, and compliance, ensuring seamless
            operations for our clients in the West African maritime corridor.
          </p>

          <motion.div 
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mt-10"
          >
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#0b2d57] px-8 py-4 text-sm font-extrabold text-white shadow-lg transition hover:bg-[#123b73]"
            >
              Learn more about us
              <ArrowRight className="h-5 w-5 text-amber-400" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}