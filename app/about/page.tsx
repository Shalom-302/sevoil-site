"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <section className="relative pt-40 pb-24 bg-sevoil-dark overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-sevoil-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter"
          >
            L'ADN <span className="italic text-sevoil-accent">SEV OIL.</span>
          </motion.h1>
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Une expertise forgée au cœur du marché pétrolier ivoirien, pour une distribution sans compromis.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
            <h2 className="text-sm font-bold text-sevoil-primary uppercase tracking-[0.4em]">Notre Mission</h2>
            <p className="text-4xl font-serif font-bold text-sevoil-dark leading-tight">
              Garantir la <span className="text-sevoil-primary">fluidité énergétique</span> de la nation.
            </p>
            <p className="text-gray-500 leading-relaxed text-lg">
              Depuis notre partenariat stratégique avec la SIR, nous avons développé des outils de traçabilité exclusifs 
              permettant de sécuriser chaque mètre cube de carburant, de la raffinerie jusqu'au consommateur final.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            <ValueCard icon={<ShieldCheck className="text-sevoil-accent" />} title="Transparence" desc="Chaque transaction est archivée et vérifiable en temps réel." />
            <ValueCard icon={<Target className="text-sevoil-accent" />} title="Précision" desc="Zéro écart de stock grâce à notre monitoring algorithmique." />
            <ValueCard icon={<Users className="text-sevoil-accent" />} title="Impact" desc="Soutenir la croissance des entreprises minières et maritimes." />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div whileHover={{ x: 10 }} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-6 transition-all">
      <div className="p-4 bg-white rounded-2xl shadow-sm">{icon}</div>
      <div>
        <h4 className="text-sevoil-dark font-bold text-xl">{title}</h4>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}