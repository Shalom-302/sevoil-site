"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Anchor, Zap, Factory, HardHat, Droplets, FastForward } from "lucide-react";

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
    transition: { staggerChildren: 0.2 }
  }
};

export default function ProjetsPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-24 overflow-hidden">
      
      {/* --- HEADER SECTION --- */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <h1 className="text-sm font-black text-sevoil-primary uppercase tracking-[0.5em]">
            Portfolio Opérationnel
          </h1>
          <p className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-sevoil-dark leading-[0.9] tracking-tighter">
            Infrastructures & <br />
            <span className="italic text-sevoil-accent">Flux Stratégiques.</span>
          </p>
        </motion.div>
      </section>

      {/* --- GRILLE DES PROJETS --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Projet 1 - Maritime */}
          <ProjectCard 
            title="Hub Marine Vridi" 
            category="Soute Maritime"
            desc="Optimisation du terminal d'avitaillement pour les navires à fort tirant d'eau. Intégration de débitmètres numériques haute précision."
            icon={<Anchor size={28} />}
            image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800"
          />

          {/* Projet 2 - Mines */}
          <ProjectCard 
            title="Logistique Minière Nord" 
            category="Réseau Terre"
            desc="Déploiement d'une chaîne logistique dédiée pour l'approvisionnement ininterrompu des sites d'extraction aurifère."
            icon={<Zap size={28} />}
            image="https://images.unsplash.com/photo-1578306172771-847b28c7d618?q=80&w=800"
          />

          {/* Projet 3 - Qualité */}
          <ProjectCard 
            title="Lab Certification SIR" 
            category="Conformité"
            desc="Mise en place d'une unité de contrôle qualité mobile pour garantir la pureté des produits SIR lors du transport."
            icon={<Droplets size={28} />}
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
          />

          {/* Projet 4 - Digital */}
          <ProjectCard 
            title="Smart Distribution" 
            category="Digitalisation"
            desc="Lancement de la plateforme de suivi algorithmique des stocks pour nos partenaires distributeurs."
            icon={<FastForward size={28} />}
            image="https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=800"
          />
        </motion.div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="mt-32 px-6 max-w-7xl mx-auto">
        <div className="bg-sevoil-dark rounded-[50px] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sevoil-accent/10 blur-[100px]" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
            Prêt à optimiser <br/> <span className="text-sevoil-accent">votre énergie ?</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-sevoil-accent text-sevoil-dark rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all">
            Démarrer un projet <HardHat size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

// --- SOUS-COMPOSANT CARTE PROJET ---

function ProjectCard({ title, category, desc, icon, image }: { 
  title: string, 
  category: string, 
  desc: string, 
  icon: React.ReactNode,
  image: string 
}) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group relative"
    >
      {/* Conteneur Image avec Overlay */}
      <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden mb-8 border border-gray-100 shadow-sm">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sevoil-dark/90 via-sevoil-dark/20 to-transparent" />
        
        {/* Badge Icone */}
        <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-sevoil-accent group-hover:bg-sevoil-accent group-hover:text-sevoil-dark transition-all duration-500">
          {icon}
        </div>

        {/* Texte flottant sur l'image */}
        <div className="absolute bottom-8 left-8">
          <span className="text-[10px] font-black text-sevoil-accent uppercase tracking-[0.4em] mb-2 block">
            {category}
          </span>
          <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter">
            {title}
          </h3>
        </div>
      </div>

      {/* Description en dessous */}
      <div className="px-4">
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

import Link from "next/link";