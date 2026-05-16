"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.coverage, href: "#port" },
    { label: t.nav.insights, href: "#process" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-yellow-400 bg-white">
              <Image
                src="/logosev.jpg"
                alt="SEV-OIL logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-display text-lg font-extrabold">SEV-OIL</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                Maritime &amp; Logistique
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-7 text-sky-100/80">
            {t.footer.tagline}
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#contact"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sky-100 transition hover:bg-yellow-400 hover:text-slate-900"
            >
              <MailIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-yellow-400">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-sky-100/80">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-yellow-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-yellow-400">
            {t.footer.servicesTitle}
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-sky-100/80">
            {t.services.items.map((item) => (
              <li key={item.title} className="transition hover:text-yellow-300 cursor-default">
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-yellow-400">
            {t.footer.contactTitle}
          </h3>

          <div className="mt-6 space-y-5 text-sm text-sky-100/80">
            <p className="flex items-start gap-4">
              <Phone className="mt-1 h-4 w-4 text-yellow-400 shrink-0" />
              <span className="hover:text-white transition-colors cursor-pointer">+225 05 02 71 76 76</span>
            </p>
            <p className="flex items-start gap-4">
              <Mail className="mt-1 h-4 w-4 text-yellow-400 shrink-0" />
              <span className="hover:text-white transition-colors cursor-pointer">sevemaritime@sev-oil.com</span>
            </p>
            <p className="flex items-start gap-4">
              <MapPin className="mt-1 h-4 w-4 text-yellow-400 shrink-0" />
              <span>{t.footer.address}</span>
            </p>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-xs text-sky-200/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
