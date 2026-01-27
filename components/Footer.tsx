
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showImpressum, setShowImpressum] = useState(false);

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">V</div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">von Bülow Consulting</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Strategische Partner für ganzheitliche KI-Automatisierung und CRM-Exzellenz im deutschen Mittelstand.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#methodology" className="hover:text-blue-400 transition-colors">Methode</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projekte</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Kontakt</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>Telefon: 0155 63073305</li>
              <li>E-Mail: info@vonbuelow-consulting.de</li>
              <li>LinkedIn: /kai-von-buelow</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Rechtliches</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <button 
                  onClick={() => setShowImpressum(!showImpressum)} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Impressum
                </button>
              </li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        {showImpressum && (
          <div className="mb-16 p-10 glass rounded-[32px] text-sm text-slate-400 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-white mb-6">Impressum</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="font-bold text-slate-200">Angaben gemäß § 5 TMG</p>
                <p>
                  Von Bülow Consulting by Kai Von Bülow<br />
                  Grünstraße 6<br />
                  15711 Königs Wusterhausen
                </p>
                <p className="font-bold text-slate-200">Kontakt</p>
                <p>
                  Telefon: 0155 63073305<br />
                  E-Mail: info@vonbuelow-consulting.de
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-bold text-slate-200">Redaktionell verantwortlich</p>
                <p>Kai von Bülow, Grünstraße 6, 15711 Königs Wusterhausen</p>
                <p className="font-bold text-slate-200">EU-Streitschlichtung</p>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
                <p className="font-bold text-slate-200">Verbraucherstreitbeilegung</p>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <div>&copy; {new Date().getFullYear()} von Bülow Consulting. Alle Rechte vorbehalten.</div>
          <div className="flex space-x-6 uppercase tracking-widest">
            <span>Strategie</span>
            <span>Automatisierung</span>
            <span>KI-Agents</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
