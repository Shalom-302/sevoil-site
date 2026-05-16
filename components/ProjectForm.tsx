"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";
type Sector = "" | "land" | "mining" | "marine";

export default function ProjectForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<{
    name: string;
    email: string;
    phone: string;
    company: string;
    sector: Sector;
    description: string;
  }>({ name: "", email: "", phone: "", company: "", sector: "", description: "" });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function sectorLabel(s: Sector): string {
    switch (s) {
      case "land":
        return t.form.sectorLand;
      case "mining":
        return t.form.sectorMining;
      case "marine":
        return t.form.sectorMarine;
      default:
        return "—";
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const subject = encodeURIComponent(`Project request — ${form.name}`);
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Phone: ${form.phone}`,
          `Company: ${form.company || "—"}`,
          `Sector: ${sectorLabel(form.sector)}`,
          "",
          "Project description:",
          form.description,
        ].join("\n")
      );
      window.location.href = `mailto:info@sev-oil.ci?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-100";

  return (
    <section id="contact" className="relative overflow-hidden bg-sky-50/60 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-yellow-600">
            {t.form.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            {t.form.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {t.form.subtitle}
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">✓</span>
              24/7 Abidjan Port operations
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">✓</span>
              Reply within 24 hours
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">✓</span>
              Local team, global standards
            </li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/10 sm:p-10"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="pf-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.form.name} <span className="text-yellow-600">*</span>
              </label>
              <input
                id="pf-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder={t.form.namePlaceholder}
                className={inputClasses}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="pf-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t.form.email} <span className="text-yellow-600">*</span>
                </label>
                <input
                  id="pf-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder={t.form.emailPlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="pf-phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t.form.phone} <span className="text-yellow-600">*</span>
                </label>
                <input
                  id="pf-phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder={t.form.phonePlaceholder}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="pf-company" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t.form.company}
                </label>
                <input
                  id="pf-company"
                  type="text"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder={t.form.companyPlaceholder}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="pf-sector" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t.form.sector} <span className="text-yellow-600">*</span>
                </label>
                <select
                  id="pf-sector"
                  required
                  value={form.sector}
                  onChange={(e) => update("sector", e.target.value as Sector)}
                  className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22none%22%20viewBox=%220%200%2024%2024%22%20stroke=%22%2364748b%22%20stroke-width=%222%22><path%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20d=%22M19%209l-7%207-7-7%22/></svg>')] bg-[length:18px_18px] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                >
                  <option value="" disabled>
                    {t.form.sectorPlaceholder}
                  </option>
                  <option value="land">{t.form.sectorLand}</option>
                  <option value="mining">{t.form.sectorMining}</option>
                  <option value="marine">{t.form.sectorMarine}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="pf-description" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.form.description} <span className="text-yellow-600">*</span>
              </label>
              <textarea
                id="pf-description"
                required
                rows={5}
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder={t.form.descriptionPlaceholder}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800 disabled:opacity-60"
            >
              {status === "sending" ? t.form.sending : t.form.submit}
              <Send className="h-4 w-4" />
            </motion.button>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-lg bg-yellow-50 px-4 py-3 text-sm font-semibold text-yellow-700"
              >
                <CheckCircle2 className="h-4 w-4" /> {t.form.success}
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
              >
                <AlertCircle className="h-4 w-4" /> {t.form.error}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
