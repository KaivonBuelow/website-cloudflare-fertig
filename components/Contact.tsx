
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[48px] text-center border-blue-500/20 relative overflow-hidden group">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full group-hover:bg-indigo-600/20 transition-all" />
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight transform group-hover:scale-105 transition-transform">
          Bereit für das nächste Level?
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          Lassen Sie uns in einem 30-minütigen Audit gemeinsam Ihre größten Automatisierungs-Potenziale identifizieren.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <button className="btn-shimmer w-full sm:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all shadow-[0_15px_40px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95">
            Jetzt Strategiegespräch buchen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
