"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-sevoil-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black italic tracking-tighter text-white">
          SEV<span className="text-sevoil-accent">-</span>OIL
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <Link href="/about" className="hover:text-sevoil-accent transition-colors">L'Entreprise</Link>
          <Link href="/projets" className="hover:text-sevoil-accent transition-colors">Projets</Link>
          <Link href="/team" className="hover:text-sevoil-accent transition-colors">Équipe</Link>
          <Link href="/contact" className="hover:text-sevoil-accent transition-colors">Contact</Link>
          <Link href="/login" className="bg-sevoil-accent text-sevoil-dark px-6 py-2 rounded-full hover:bg-white transition-all shadow-[0_10px_20px_rgba(0,163,196,0.2)]">
            Espace Pro
          </Link>
        </div>
      </div>
    </nav>
  );
}