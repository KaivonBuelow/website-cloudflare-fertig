
import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-slate-950/40">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">Unser 3-Stufen-System</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
            Wählen Sie eine Agentur, welche <br /> Ihnen Ergebnisse garantiert!
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Phase 1 */}
          <div className="relative glass p-10 rounded-[40px] group overflow-hidden border-white/5 hover:border-blue-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 text-7xl font-bold opacity-5 group-hover:opacity-10 transition-opacity">01</div>
            <h4 className="text-2xl font-bold text-white mb-6">Analyse</h4>
            <p className="text-slate-400 mb-8 font-light">Wir identifizieren Ihre größten Zeitfresser und Kostenfaktoren durch ein tiefgreifendes Prozess-Audit.</p>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-widest">
                <span>Manuelle Last</span>
                <span className="text-red-400">Status Quo</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-red-500 w-[92%] h-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative glass p-10 rounded-[40px] border-blue-500/40 group overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 right-0 p-8 text-7xl font-bold opacity-5 group-hover:opacity-10">02</div>
            <h4 className="text-2xl font-bold text-white mb-6">Implementierung</h4>
            <p className="text-slate-400 mb-8 font-light">KI-Lösungen, die wir nahtlos mit Ihren Systemen integrieren – für maximale Skalierbarkeit.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-3xl text-center border-green-500/20 bg-green-500/5 group-hover:scale-105 transition-transform">
                <div className="text-3xl font-extrabold text-green-400">80%</div>
                <div className="text-[9px] text-slate-400 uppercase tracking-tighter">Automatisiert</div>
              </div>
              <div className="glass p-5 rounded-3xl text-center border-blue-500/20 bg-blue-500/5 group-hover:scale-105 transition-transform delay-75">
                <div className="text-3xl font-extrabold text-blue-400">10%</div>
                <div className="text-[9px] text-slate-400 uppercase tracking-tighter">Kosten-Reduktion</div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative glass p-10 rounded-[40px] group overflow-hidden border-white/5 hover:border-blue-500/30 transition-all duration-500">
             <div className="absolute top-0 right-0 p-8 text-7xl font-bold opacity-5 group-hover:opacity-10">03</div>
            <h4 className="text-2xl font-bold text-white mb-6">Optimierung</h4>
            <p className="text-slate-400 mb-8 font-light">Feintuning und Mitarbeiterschulung für maximale Effizienz und langfristigen Erfolg.</p>
            
            <div className="flex flex-wrap gap-2">
              {['Schnellere Innovation', 'Virtuelle Assistenz', 'Skalierbare Systeme', 'Echtzeit Analysen'].map(tag => (
                <div key={tag} className="text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full border border-blue-500/20 transition-all group-hover:bg-blue-500/20">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Massive Comparison Visualizer */}
        <div className="glass p-1 text-[10px] rounded-[50px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-red-500/5 p-16 flex flex-col items-center justify-center space-y-8 border-r border-white/5 relative">
              <span className="absolute top-8 left-8 text-xs font-bold text-red-500/50 uppercase tracking-[0.4em]">Vorher</span>
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-slate-600 grayscale opacity-40">Starre Prozesse</div>
                <div className="flex gap-3 justify-center">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-slate-500">Manuell</span>
                  <span className="px-3 py-1 bg-white/5 rounded-md text-slate-500">Fehleranfällig</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-600/10 p-16 flex flex-col items-center justify-center space-y-8 relative overflow-hidden group/nachher">
              <div className="absolute inset-0 bg-blue-600/5 animate-pulse pointer-events-none" />
              <span className="absolute top-8 left-8 text-xs font-bold text-blue-400 uppercase tracking-[0.4em]">Nachher</span>
              <div className="text-center space-y-4 relative z-10">
                <div className="text-5xl font-bold text-white animate-pulse">Agile Innovation</div>
                <div className="flex gap-3 justify-center">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-md text-blue-400 border border-blue-500/30">Automatisiert</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-md text-blue-400 border border-blue-500/30">KI-Gesteuert</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                 {['Kosten-Effizient', 'Datenbasiert', 'Skalierbar'].map(badge => (
                   <span key={badge} className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full">{badge}</span>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
