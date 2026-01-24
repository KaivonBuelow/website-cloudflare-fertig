
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const AnimatedAvatar = ({ type }: { type: string }) => {
  const baseClasses = "w-full h-full flex items-center justify-center relative bg-gradient-to-br from-slate-950 to-blue-950/30";
  
  const visuals: Record<string, React.ReactNode> = {
    'avatar-green': (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-green-500/5 blur-[100px] rounded-full animate-pulse" />
        <svg className="w-64 h-64 text-green-400/90" viewBox="0 0 100 100" fill="none">
          {/* Modern Education Building (No Cross) */}
          <path d="M15 85 H85 V45 L50 25 L15 45 Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M30 85 V65 H45 V85" stroke="currentColor" strokeWidth="1" />
          <rect x="55" y="55" width="15" height="10" stroke="currentColor" strokeWidth="1" />
          {/* Academic Touch: Stylized Pillars or Windows */}
          <path d="M25 45 V85 M50 25 V45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          {/* Steady Knowledge Glow (No wandering circle) */}
          <circle cx="50" cy="40" r="12" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
          <path d="M10 85 Q 50 15 90 85" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        </svg>
      </div>
    ),
    'avatar-vip': (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-blue-400/5 blur-[100px] rounded-full animate-pulse" />
        <svg className="w-64 h-64 text-blue-400" viewBox="0 0 100 100" fill="none">
          {/* Humanoid Avatar Figure */}
          <circle cx="50" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M30 80 Q 50 50 70 80" stroke="currentColor" strokeWidth="1.5" />
          {/* Holding the Engagement Hub */}
          <g className="animate-pulse">
            <circle cx="50" cy="55" r="15" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
            <path d="M42 55 L58 55 M50 47 L50 63" stroke="currentColor" strokeWidth="1.5" />
            {/* Connection Rays from the Hub */}
            <path d="M35 40 L42 48 M65 40 L58 48 M50 75 L50 70" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          </g>
        </svg>
      </div>
    ),
    'avatar-teletech': (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] rounded-full animate-pulse" />
        <svg className="w-64 h-64 text-indigo-400" viewBox="0 0 100 100" fill="none">
          {/* Modern Headset Design */}
          <path d="M30 50 C 30 20, 70 20, 70 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="22" y="45" width="10" height="15" rx="2" fill="currentColor" />
          <rect x="68" y="45" width="10" height="15" rx="2" fill="currentColor" />
          <path d="M73 60 Q 73 80 55 80" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* SIP / Data Pulse Waves */}
          <path d="M10 50 Q 30 50 50 50 T 90 50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[flow_4s_linear_infinite]" />
          <g className="animate-pulse">
             <circle cx="55" cy="80" r="3" fill="currentColor" />
          </g>
          <style>{`
            @keyframes flow {
              from { stroke-dashoffset: 40; }
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </svg>
      </div>
    ),
    'avatar-kosecom': (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-purple-500/5 blur-[100px] rounded-full animate-pulse" />
        <svg className="w-64 h-64 text-purple-400" viewBox="0 0 100 100" fill="none">
          {/* Browser / Canvas Frame */}
          <rect x="15" y="20" width="70" height="55" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <rect x="15" y="20" width="70" height="10" rx="4" fill="currentColor" fillOpacity="0.1" />
          <circle cx="22" cy="25" r="1.5" fill="currentColor" />
          <circle cx="28" cy="25" r="1.5" fill="currentColor" />
          {/* Growth Chart (Steady, no bouncing point) */}
          <path d="M25 65 L40 50 L55 60 L75 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[draw_5s_ease-in-out_infinite]" strokeDasharray="100" strokeDashoffset="100" />
          <style>{` @keyframes draw { to { stroke-dashoffset: 0; } } `}</style>
          {/* UI Elements */}
          <rect x="25" y="38" width="15" height="4" rx="1" fill="currentColor" opacity="0.5" />
          <rect x="45" y="38" width="25" height="4" rx="1" fill="currentColor" opacity="0.3" />
        </svg>
      </div>
    ),
    'avatar-loene': (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
        <svg className="w-64 h-64 text-cyan-400" viewBox="0 0 100 100" fill="none">
          {/* Vault Door Design */}
          <rect x="25" y="20" width="50" height="60" rx="4" stroke="currentColor" strokeWidth="2" />
          <line x1="75" y1="20" x2="75" y2="80" stroke="currentColor" strokeWidth="4" opacity="0.3" />
          {/* Prominent Dial */}
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <path d="M50 35 V42" stroke="currentColor" strokeWidth="2" className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: '50px 50px' }} />
          {/* Numerical Display */}
          <rect x="40" y="28" width="20" height="8" rx="1" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.05" />
          <g className="text-[4px] font-mono animate-pulse">
            <text x="43" y="34" fill="currentColor">8 4 2 1</text>
          </g>
          <style>{`
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          `}</style>
        </svg>
      </div>
    ),
    'avatar-becker': (
      <div className={baseClasses}>
        <div className="absolute inset-0 bg-slate-400/5 blur-[100px] rounded-full animate-pulse" />
        <svg className="w-64 h-64 text-slate-300" viewBox="0 0 100 100" fill="none">
          {/* Hardware Monitoring Radar */}
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          {/* Radar Sweep */}
          <path d="M50 50 L50 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="origin-center animate-[radar_4s_linear_infinite]" />
          {/* Monitored Assets */}
          <rect x="70" y="20" width="8" height="6" rx="1" fill="currentColor" className="animate-pulse" />
          <circle cx="20" cy="60" r="3" fill="currentColor" opacity="0.6" className="animate-ping" />
          <path d="M75 70 H85 V80 H75 Z" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <style>{`
            @keyframes radar {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </svg>
      </div>
    )
  };

  return visuals[type] || (
    <div className={baseClasses}>
      <div className="text-7xl font-black text-white/5 select-none">VBC</div>
    </div>
  );
};

const ProjectShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = PROJECTS[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">Projekte</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              Echte Ergebnisse. <br /> Messbarer Erfolg.
            </h3>
          </div>
          
          <div className="flex space-x-4">
            <button onClick={handlePrev} className="w-14 h-14 flex items-center justify-center glass rounded-2xl hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNext} className="w-14 h-14 flex items-center justify-center glass rounded-2xl hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-7 glass rounded-[50px] overflow-hidden relative group h-[500px] lg:h-auto bg-slate-950/40">
            <div className="absolute inset-0">
               <AnimatedAvatar type={currentProject.image} />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-12 flex flex-col justify-end">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center p-3 border-blue-500/30">
                   <span className="text-2xl font-bold text-white">{currentProject.client.charAt(0)}</span>
                 </div>
                 <div>
                   <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em]">{currentProject.industry}</span>
                   <h4 className="text-4xl font-extrabold text-white tracking-tight">{currentProject.client}</h4>
                 </div>
               </div>
               <p className="text-slate-300 text-xl font-light italic leading-relaxed max-w-xl">
                 "{currentProject.summary}"
               </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 flex flex-col">
            <div className="glass p-10 rounded-[40px] flex-grow space-y-10 border-white/5">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-red-500/50"></div>
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">VORHER: Die Herausforderung</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pl-10 border-l border-red-500/20">
                  {currentProject.before}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-px w-8 bg-green-500/50"></div>
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">PROJEKTPHASE: Die Lösung</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed pl-10 border-l border-green-500/20">
                  {currentProject.after}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-4">Ergebnisse & Metriken</span>
                <div className="flex flex-wrap gap-2">
                  {currentProject.results.map((res, i) => (
                    <span key={i} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-200 text-[10px] font-bold uppercase tracking-wider">
                      {res}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 space-x-3">
          {PROJECTS.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ${activeIndex === i ? 'w-24 bg-blue-600' : 'w-4 bg-white/10 hover:bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
