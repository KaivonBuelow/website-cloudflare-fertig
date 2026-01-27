
import React from 'react';

const ICPSection: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Unser Fokus</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Partner für den modernen Mittelstand.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass p-10 rounded-[32px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Marktführer & Innovatoren</h4>
            <ul className="space-y-3 text-slate-400 font-light">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Umsatzstarke Mittelständler</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Wachstumsorientierte Teams</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>Dienstleistung & High-Tech</span>
              </li>
            </ul>
          </div>

          <div className="glass p-10 rounded-[32px] relative overflow-hidden border-blue-500/40">
            <h4 className="text-xl font-bold text-white mb-4">Gezielte Problemlösung</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Expertise sichern trotz Fachkräftemangel</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Veraltete CRM-Silos aufbrechen</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 mt-1">→</span>
                <span>Skalierung ohne Personalkosten-Explosion</span>
              </li>
            </ul>
          </div>

          <div className="glass p-10 rounded-[32px] relative overflow-hidden group">
            <h4 className="text-xl font-bold text-white mb-4">Langfristige Begleitung</h4>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              Wir sind kein einmaliger Tool-Lieferant. Wir verstehen uns als externe KI-Abteilung, 
              die Ihre Ziele zu unseren eigenen macht.
            </p>
            <div className="flex items-center space-x-3 text-blue-400 font-bold">
              <span>Strategische Kooperation</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICPSection;
