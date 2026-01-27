
import React from 'react';

const ServiceCard = ({ title, description, badge, actionText, subAction, className = "" }: any) => (
  <div className={`glass group p-8 md:p-10 rounded-[48px] border-white/5 hover:border-blue-500/40 transition-all duration-700 relative overflow-hidden flex flex-col ${className}`}>
    {/* Animated Background Highlight */}
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full group-hover:bg-blue-600/15 transition-all duration-700" />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-8">
        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
          {badge}
        </span>
      </div>
      
      <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{title}</h4>
      <p className="text-slate-400 font-light leading-relaxed mb-10 text-lg">
        {description}
      </p>
      
      {/* UI Mockup Fragment */}
      <div className="mt-auto bg-slate-950/50 border border-white/5 rounded-3xl p-5 space-y-4 group-hover:border-blue-500/30 transition-colors shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/40" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
            <div className="w-2 h-2 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[9px] font-bold text-blue-500/80 uppercase tracking-widest animate-pulse">Live Status</span>
        </div>
        
        <div className="font-mono text-xs text-blue-100/70 leading-relaxed italic">
          <span className="text-blue-500">{">"}</span> {actionText}
        </div>

        <div className="flex flex-wrap gap-2">
          {subAction.map((tag: string) => (
            <span key={tag} className="text-[9px] bg-white/5 px-2.5 py-1.5 rounded-lg text-slate-500 border border-white/5 group-hover:text-blue-300 group-hover:border-blue-500/20 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-32 px-6 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs mb-6">Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1]">
              KI-Lösungen für den <br /> 
              <span className="text-slate-500">entscheidenden Vorsprung.</span>
            </h3>
          </div>
          <p className="text-slate-400 text-lg max-w-sm font-light leading-relaxed">
            Wir transformieren komplexe Geschäftsprozesse in skalierbare, autonome Workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <ServiceCard 
            className="lg:col-span-7"
            badge="Strategie"
            title="KI-Beratung & Roadmap"
            description="Wir analysieren Ihre bestehende Infrastruktur und entwickeln eine maßgeschneiderte KI-Strategie, die echte ROI-Hebel im Mittelstand aktiviert."
            actionText="Audit abgeschlossen: 14 Automatisierungspotenziale identifiziert..."
            subAction={["Prozess-Audit", "ROI Kalkulation", "Tech-Stack Design"]}
          />
          
          <ServiceCard 
            className="lg:col-span-5"
            badge="Intelligence"
            title="KI-Agenten"
            description="Autonome Agenten, die 24/7 arbeiten, logische Entscheidungen treffen und Ihre Teams entlasten."
            actionText="Agent führt Rechnungsabgleich durch: 100% Match."
            subAction={["Logik-Layer", "API-Connect", "24/7 Autonomie"]}
          />

          <ServiceCard 
            className="lg:col-span-5"
            badge="Knowledge"
            title="Company Wiki"
            description="Verwandeln Sie statische Dokumente in ein interaktives Gehirn Ihres Unternehmens. Wissen ist sofort abrufbar."
            actionText="Abfrage: 'Urlaubsregelung 2024' -> Info extrahiert."
            subAction={["Semantic Search", "RAG Technology", "Instant Data"]}
          />

          <ServiceCard 
            className="lg:col-span-7"
            badge="Growth"
            title="Sales & Support Auto"
            description="Vollautomatisierte Lead-Qualifizierung und Kundensupport-Systeme, die personalisiert kommunizieren und Termine buchen."
            actionText="Neuer Lead qualifiziert. Zoom-Link versendet."
            subAction={["CRM Integration", "Auto-Dialing", "Sentiment Analysis"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
