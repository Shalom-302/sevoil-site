"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.coverage, href: "#port" },
    { label: t.nav.insights, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-lime-400 bg-white text-sky-700 shadow-sm"
          >
            <span className="text-lg font-extrabold">S</span>
          </motion.div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold tracking-wide text-slate-900 group-hover:text-sky-700 transition-colors">
              SEV-OIL
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Maritime &amp; Logistique
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-slate-700 transition hover:text-sky-700 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime-400 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle lang={lang} onToggle={toggleLang} />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:bg-sky-800"
            >
              {t.nav.requestQuote}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle lang={lang} onToggle={toggleLang} compact />
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700"
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
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-4 py-4 text-sm font-extrabold text-white"
                >
                  {t.nav.requestQuote}
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

function LangToggle({
  lang,
  onToggle,
  compact = false,
}: {
  lang: "en" | "fr";
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle language"
      className={`relative inline-flex items-center rounded-full border border-slate-200 bg-white text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm transition hover:border-sky-300 ${
        compact ? "h-9 px-2" : "h-10 px-3"
      }`}
    >
      <span
        className={`flex items-center gap-1 rounded-full px-2 py-1 transition ${
          lang === "en" ? "bg-sky-700 text-white" : "text-slate-500"
        }`}
      >
        <span aria-hidden>🇬🇧</span> EN
      </span>
      <span
        className={`ml-1 flex items-center gap-1 rounded-full px-2 py-1 transition ${
          lang === "fr" ? "bg-sky-700 text-white" : "text-slate-500"
        }`}
      >
        <span aria-hidden>🇫🇷</span> FR
      </span>
    </button>
  );
}
