export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 text-slate-500 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-xl font-black italic text-white mb-2">SEV-OIL</h2>
          <p className="text-xs max-w-xs uppercase tracking-widest font-bold">
            Partenaire Stratégique SIR — Côte d'Ivoire
          </p>
        </div>
        
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
          <span className="text-white">© 2026 SEV-OIL</span>
          <a href="#" className="hover:text-white transition">Mentions Légales</a>
          <a href="#" className="hover:text-white transition">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}