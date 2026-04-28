"use client";
import React from "react";
import { 
  ShieldCheck, Ship, Truck, BarChart3, 
  ChevronRight, ArrowRight, Zap, 
  Layers, Database, Lock 
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// --- ANIMATIONS HARMONISÉES ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

export default function LandingPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION : IMPACT VISUEL --- */}
      <section className="relative min-h-screen flex items-center justify-center bg-sevoil-dark overflow-hidden">
        {/* Gradients d'ambiance harmonisés */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-sevoil-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sevoil-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center space-y-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 text-sevoil-accent rounded-full text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-xl"
          >
            <Zap size={14} className="fill-sevoil-accent" /> Partenaire Stratégique SIR
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-[0.9] tracking-tighter"
            >
              SEV<span className="text-sevoil-accent">-</span>OIL <br /> 
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-sevoil-accent to-blue-400">
                L'Énergie Pure.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Expertise chirurgicale dans la distribution d'hydrocarbures. 
              Maîtrisez votre logistique avec la précision du leader ivoirien.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-sevoil-accent text-sevoil-dark rounded-2xl font-black text-sm shadow-[0_20px_40px_rgba(0,163,196,0.2)] hover:bg-white transition-all flex items-center justify-center gap-3">
              DEMANDER UNE COTATION <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white rounded-2xl font-bold text-sm backdrop-blur-md hover:bg-white/5 transition-all">
              NOTRE EXPERTISE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION : CRÉDIBILITÉ --- */}
      <section className="py-24 px-6 relative z-30 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          <StatItem number="142k" label="Litres / Mois" sub="Flux optimisé SIR" />
          <StatItem number="184" label="Partenaires" sub="Réseau Panafricain" />
          <StatItem number="0" label="Pénalité DSR" sub="Sécurité financière totale" />
        </motion.div>
      </section>

      {/* --- EXPERTISE : LES PÔLES --- */}
      <section className="py-32 px-6 bg-sevoil-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4 text-center md:text-left">
            <h2 className="text-sm font-black text-sevoil-primary uppercase tracking-[0.5em]">Domaines d'Intervention</h2>
            <p className="text-4xl md:text-6xl font-serif font-bold text-sevoil-dark leading-tight">
              Une logistique <span className="italic text-sevoil-accent">sans faille.</span>
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ExpertiseCard 
              icon={<Ship size={32} />} 
              title="Soute Maritime" 
              desc="Avitaillement haute performance au Port d'Abidjan pour les flottes internationales."
            />
            <ExpertiseCard 
              icon={<Truck size={32} />} 
              title="Réseau Terre" 
              desc="Distribution stratégique et approvisionnement des sites industriels et miniers."
            />
            <ExpertiseCard 
              icon={<ShieldCheck size={32} />} 
              title="Conformité SIR" 
              desc="Gestion rigoureuse des stocks et respect absolu des normes de la raffinerie."
            />
          </motion.div>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW : L'INNOVATION --- */}
      <section className="py-32 px-6 bg-sevoil-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sevoil-primary/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              La technologie au service <br />
              <span className="text-sevoil-accent italic">de vos décisions.</span>
            </h2>
            <div className="space-y-6">
              <FeatureItem icon={<Layers size={20} />} title="Monitoring Temps Réel" desc="Suivi des stocks SIR avec une précision algorithmique." />
              <FeatureItem icon={<Lock size={20} />} title="Sécurisation des Flux" desc="Contrôle automatique de solvabilité pour chaque transaction." />
              <FeatureItem icon={<Database size={20} />} title="Data Transparency" desc="Accès complet à l'historique de vos livraisons." />
            </div>
            <Link href="/login" className="inline-flex items-center gap-3 text-sevoil-accent font-black tracking-widest text-xs group">
              ACCÉDER À L'ESPACE PRO <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sevoil-accent to-blue-500 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-sevoil-dark p-8 rounded-[40px] border border-white/10 shadow-2xl">
                <div className="w-full h-[400px] bg-white/5 rounded-[30px] flex items-center justify-center border border-white/5 overflow-hidden">
                   <BarChart3 size={120} className="text-sevoil-accent/20 absolute" />
                   <div className="flex gap-2 items-end">
                      {[40, 70, 45, 90, 65, 80].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: h }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                          className="w-8 bg-sevoil-accent rounded-t-lg shadow-[0_0_20px_rgba(0,163,196,0.4)]"
                        />
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// --- SOUS-COMPOSANTS HARMONISÉS ---

function StatItem({ number, label, sub }: { number: string, label: string, sub: string }) {
  return (
    <motion.div variants={fadeInUp} className="space-y-2 border-l-2 border-sevoil-accent/30 pl-8">
      <h3 className="text-6xl font-black text-sevoil-dark tracking-tighter italic">{number}</h3>
      <p className="text-xs font-black text-sevoil-primary uppercase tracking-[0.3em]">{label}</p>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{sub}</p>
    </motion.div>
  );
}

function ExpertiseCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="group p-12 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="w-16 h-16 bg-sevoil-light text-sevoil-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sevoil-accent group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-sevoil-dark mb-4 uppercase italic tracking-tight">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sevoil-accent shadow-inner">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}