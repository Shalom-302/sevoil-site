"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <main className="bg-sevoil-dark min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-sevoil-primary/5 blur-[120px] pointer-events-none" />
      
      <section className="px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter mb-6">
            Le <span className="italic text-sevoil-accent">Board.</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto font-light">
            Une synergie d'experts dédiés à la souveraineté énergétique de la Côte d'Ivoire.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          <MemberCard name="Direction Générale" role="Stratégie & Vision" />
          <MemberCard name="Pôle Logistique" role="Opérations Terre & Mer" />
          <MemberCard name="Département SIR" role="Conformité & Qualité" />
        </div>
      </section>
    </main>
  );
}

function MemberCard({ name, role }: { name: string, role: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center group">
      <div className="w-full aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-[50px] border border-white/5 mb-8 flex items-center justify-center group-hover:border-sevoil-accent transition-all overflow-hidden relative">
         <div className="absolute inset-0 bg-sevoil-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
         <div className="text-white/20 text-8xl font-black italic">OIL</div>
      </div>
      <h3 className="text-2xl font-bold text-white uppercase italic">{name}</h3>
      <p className="text-sevoil-accent text-[10px] font-black uppercase tracking-[0.4em] mt-2">{role}</p>
    </motion.div>
  );
}