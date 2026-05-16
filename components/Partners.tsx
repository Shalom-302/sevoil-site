"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Anchor, Truck } from "lucide-react";

const PARTNERS: ReadonlyArray<string> = [
  "PETROCI",
  "GESTOCI",
  "PORT D'ABIDJAN",
  "ENDEAVOUR",
  "TRAFIGURA",
  "SMB",
];

const CERTIFICATIONS = [
  { code: "ISO 9001", label: "Qualité", Icon: BadgeCheck },
  { code: "IMO MARPOL", label: "Pollution marine", Icon: Anchor },
  { code: "ASN", label: "Sécurité", Icon: ShieldCheck },
  { code: "ADR", label: "Transport matières", Icon: Truck },
];

export default function Partners() {
  return (
    <section className="border-y border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-extrabold uppercase tracking-[0.28em] text-slate-500"
        >
          Ils nous font confiance
        </motion.p>

        <div className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex items-center justify-center"
            >
              <span className="font-display text-sm font-extrabold uppercase tracking-[0.22em] text-slate-400 transition-colors hover:text-slate-700">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-yellow-600 ring-1 ring-yellow-300/60">
                <c.Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="font-display truncate text-sm font-extrabold text-slate-900">{c.code}</p>
                <p className="truncate text-[11px] text-slate-500">{c.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
