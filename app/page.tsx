"use client";
import React from "react";
import { 
  ShieldCheck, Ship, Truck, BarChart3, 
  ChevronRight, ArrowRight, Globe, Zap, 
  Layers, Database, Lock 
} from "lucide-react";
import Link from "next/link";

// 1. Importe le type Variants
import { motion, Variants } from "framer-motion";

// 2. Ajoute ": Variants" et "as const" pour l'easing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" // TypeScript acceptera car l'objet est typé Variants
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
export default function LandingPage() {
  return (
    <div className="bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION AVEC ANIMATION --- */}
      <section className="relative min-h-screen flex items-center justify-center bg-sevoil-dark overflow-hidden">
        {/* Cercles de lumière en background (Effet Premium) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sevoil-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sevoil-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-sevoil-accent rounded-full text-[10px] font-bold uppercase tracking-[0.4em] backdrop-blur-md"
          >
            <Zap size={14} fill="currentColor" /> Innovation Logistique
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-tight tracking-tighter"
            >
              Énergie <br /> 
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sevoil-accent to-blue-300">
                 Sans Frontières.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Maîtrisez chaque goutte, chaque kilomètre, chaque seconde. 
              La plateforme SEV OIL révolutionne la traçabilité SIR et la distribution Panafricaine.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <Link href="/login" className="w-full sm:w-auto px-12 py-5 bg-sevoil-accent text-sevoil-dark rounded-2xl font-bold text-sm shadow-[0_20px_40px_rgba(0,163,196,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
              Découvrir l'Espace Pro <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION (REVEAL ON SCROLL) --- */}
      <section className="py-24 px-6 relative z-30">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <StatItem number="142k" label="Volume Litres / Mois" sub="Flux optimisé SIR" />
          <StatItem number="184" label="Partenaires Actifs" sub="Réseau Terre & Soute" />
          <StatItem number="0" label="Délai de Séjour" sub="Zéro pénalité DSR" />
        </motion.div>
      </section>

      {/* --- EXPERTISE (CARDS INTERACTIVES) --- */}
      <section className="py-32 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 space-y-4"
          >
            <h2 className="text-sm font-bold text-sevoil-primary uppercase tracking-[0.4em]">Nos Pôles d'Excellence</h2>
            <p className="text-4xl md:text-6xl font-serif font-bold text-sevoil-dark max-w-3xl leading-tight">
              Une logistique <span className="text-sevoil-primary">chirurgicale</span> pour un marché exigeant.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ExpertiseCard 
              icon={<Ship size={32} />} 
              title="Pôle Soute" 
              desc="Ravitaillement maritime haute précision au Port d'Abidjan. Fiabilité totale pour les flottes internationales."
            />
            <ExpertiseCard 
              icon={<Truck size={32} />} 
              title="Pôle Terre" 
              desc="Maillage complet des réseaux de stations-service et support logistique aux sites miniers stratégiques."
            />
            <ExpertiseCard 
              icon={<ShieldCheck size={32} />} 
              title="Sécurisation DSR" 
              desc="Monitoring algorithmique des délais de garde. Sécurité financière absolue face aux régulations SIR."
            />
          </motion.div>
        </div>
      </section>

      {/* --- DASHBOARD PREVIEW (L'EFFET WOW) --- */}
      <section className="py-32 px-6 overflow-hidden bg-sevoil-dark">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            {/* Simulation UI Chic */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sevoil-accent to-blue-500 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#001D26] p-4 rounded-[40px] border border-white/10 shadow-2xl">
                <div className="w-full h-[400px] bg-white/5 rounded-[30px] flex items-center justify-center border border-white/5">
                  <BarChart3 size={100} className="text-sevoil-accent animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Un tableau de bord <br />
              <span className="text-sevoil-accent">pour les décideurs.</span>
            </h2>
            <div className="space-y-6">
              <FeatureItem icon={<Layers size={20} />} title="Calcul de stock temps réel" desc="Stock = ∑ Achats SIR - ∑ Ventes. Zéro erreur." />
              <FeatureItem icon={<Lock size={20} />} title="Vérification de solvabilité" desc="Blocage intelligent des transactions hors-stock." />
              <FeatureItem icon={<Database size={20} />} title="Archivage Cloud SIR" desc="Historique complet de chaque goutte distribuée." />
            </div>
            <Link href="/login" className="inline-flex items-center gap-2 text-sevoil-accent font-bold group">
              DÉCOUVRIR L'OUTIL PRO <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// --- SOUS-COMPOSANTS ANIMÉS ---

function StatItem({ number, label, sub }: { number: string, label: string, sub: string }) {
  return (
    <motion.div variants={fadeInUp} className="text-center md:text-left space-y-2 border-l-2 border-gray-100 pl-8">
      <h3 className="text-5xl font-bold text-sevoil-dark tracking-tighter">{number}</h3>
      <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">{label}</p>
      <p className="text-xs text-gray-400 font-medium italic">{sub}</p>
    </motion.div>
  );
}

function ExpertiseCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="group p-12 bg-white rounded-[50px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500"
    >
      <div className="w-16 h-16 bg-sevoil-light text-sevoil-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sevoil-primary group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-sevoil-dark mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-5">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-sevoil-accent/20 flex items-center justify-center text-sevoil-accent">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}