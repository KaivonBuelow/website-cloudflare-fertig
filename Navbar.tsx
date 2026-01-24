
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">V</div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">von Bülow Consulting</span>
          <span className="font-heading font-bold text-xl tracking-tight sm:hidden">VBC</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projekte</a>
          <a href="#strategy" className="hover:text-blue-400 transition-colors">Strategie</a>
          <a href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all">
            Kontakt aufnehmen
          </a>
        </div>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
