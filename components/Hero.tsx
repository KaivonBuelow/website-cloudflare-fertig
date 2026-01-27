
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Sophisticated Depth Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh]">
           {/* Central Pulse Core */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full animate-[pulse_8s_infinite_alternate]" />
           
           {/* Subtle Floating Orbs - Purely Vertical / Depth */}
           <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full animate-[float-v_12s_infinite_ease-in-out]" />
           <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full animate-[float-v_15s_infinite_ease-in-out_reverse]" />
        </div>
        
        {/* Abstract Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-7xl md:text-8xl lg:text-[120px] font-extrabold mb-10 tracking-tighter leading-[0.85] animate-[fadeInScale_1.2s_ease-out]">
          Die neue Ära der <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-600/80">
            Unternehmens-KI.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_forwards_0.6s]">
          Wir entwickeln autonome Systeme, die nicht nur Prozesse automatisieren, sondern Ihr gesamtes Business auf Skalierung trimmen.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 opacity-0 animate-[fadeInUp_1s_ease-out_forwards_0.9s]">
          <button className="group relative px-14 py-6 bg-blue-600 text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(59,130,246,0.4)] overflow-hidden">
            <span className="relative z-10">Projekt anfragen</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
          <button className="px-14 py-6 glass text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all border border-white/10">
            Unsere Methode
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <style>{`
        @keyframes float-v {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
