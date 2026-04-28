"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-40 pb-32 bg-sevoil-dark overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-sevoil-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* TEXTE GAUCHE */}
            <div className="space-y-12">
              <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-6xl md:text-7xl font-serif font-bold text-white tracking-tighter">
                Parlons <br/> <span className="text-sevoil-accent italic">Énergie.</span>
              </motion.h1>
              
              <div className="space-y-8">
                <ContactInfo icon={<MapPin />} label="Siège Social" value="Zone Industrielle Vridi, Abidjan" />
                <ContactInfo icon={<Phone />} label="Ligne Pro" value="+225 00 00 00 00" />
                <ContactInfo icon={<Mail />} label="Email" value="contact@sev-oil.ci" />
              </div>
            </div>

            {/* FORMULAIRE DROITE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100"
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-2">Nom complet</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sevoil-accent outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-2">Secteur</label>
                    <select className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sevoil-accent outline-none">
                      <option>Soute Maritime</option>
                      <option>Logistique Mines</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-2">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-sevoil-accent outline-none"></textarea>
                </div>
                <button className="w-full py-5 bg-sevoil-dark text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-sevoil-primary transition-all">
                  Envoyer la requête <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex gap-6 items-center">
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-sevoil-accent border border-white/10">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">{label}</p>
        <p className="text-xl text-white font-medium">{value}</p>
      </div>
    </div>
  );
}