"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Abidjan Port", href: "#advantage" },
  { label: "Insights", href: "#process" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber-400 bg-white text-amber-500 shadow-sm"
          >
            <span className="text-lg font-extrabold">S</span>
          </motion.div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-wide text-slate-900 group-hover:text-amber-500 transition-colors">
              SEV-OIL
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Maritime & Logistique
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm font-semibold text-slate-700 transition hover:text-amber-500 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-extrabold text-slate-900 shadow-md transition hover:bg-amber-300"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-amber-500"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-4 text-sm font-extrabold text-slate-900"
                >
                  Request a Quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}