"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, MailIcon } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Abidjan Port", href: "#advantage" },
  { label: "Insights", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Marine Fuel Supply",
  "Ship-to-Ship Bunkering",
  "Fuel Trading",
  "Logistics Coordination",
  "Quality & Compliance",
];

export default function Footer() {
  return (
    <footer className="bg-[#07213f] text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-400 text-amber-400">
              <span className="text-lg font-extrabold">S</span>
            </div>
            <div>
              <p className="text-lg font-extrabold">SEV-OIL</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Maritime & Logistique
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
            Reliable Fuel. Local Focus. Trusted Partnership. We are your dedicated bunkering partner in the Gulf of Guinea.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:bg-amber-400 hover:text-[#0b2d57]"
            >
              <MailIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-400">
            Quick Links
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-amber-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-400">
            Services
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            {services.map((item) => (
              <li key={item} className="transition hover:text-amber-400 cursor-default">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-400">
            Contact Us
          </h3>

          <div className="mt-6 space-y-5 text-sm text-slate-300">
            <p className="flex items-start gap-4">
              <Phone className="mt-1 h-4 w-4 text-amber-400 shrink-0" />
              <span className="hover:text-white transition-colors cursor-pointer">+225 07 77 77 77 77</span>
            </p>
            <p className="flex items-start gap-4">
              <Mail className="mt-1 h-4 w-4 text-amber-400 shrink-0" />
              <span className="hover:text-white transition-colors cursor-pointer">info@sev-oil.ci</span>
            </p>
            <p className="flex items-start gap-4">
              <MapPin className="mt-1 h-4 w-4 text-amber-400 shrink-0" />
              <span>Abidjan Port, Abidjan, <br />Côte d’Ivoire</span>
            </p>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-xs text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2024 SEV-OIL Maritime & Logistique. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}