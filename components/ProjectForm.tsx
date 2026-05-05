"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

export default function ProjectForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", description: "" });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
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
          `Company: ${form.company || "—"}`,
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
        <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-lime-200/40 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-lime-600">
            {t.form.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            {t.form.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {t.form.subtitle}
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 text-lime-700">✓</span>
              24/7 Abidjan Port operations
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 text-lime-700">✓</span>
              Reply within 24 hours
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 text-lime-700">✓</span>
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
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-sky-900/5 sm:p-10"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="pf-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.form.name} <span className="text-lime-600">*</span>
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

            <div>
              <label htmlFor="pf-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.form.email} <span className="text-lime-600">*</span>
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
              <label htmlFor="pf-description" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                {t.form.description} <span className="text-lime-600">*</span>
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
                className="flex items-center gap-2 rounded-lg bg-lime-50 px-4 py-3 text-sm font-semibold text-lime-700"
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
