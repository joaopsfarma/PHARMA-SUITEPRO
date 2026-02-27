import React, { useState } from 'react';
import { LayoutDashboard, BrainCircuit, FlaskConical, Github, BookOpen, Sparkles, ShieldAlert, Activity, Droplets, Clock } from 'lucide-react';
import Calculator from './components/Calculator';
import PharmaAI from './components/PharmaAI';
import Manual from './components/Manual';
import RiskScoreCalculator from './components/RiskScoreCalculator';
import ICUScales from './components/ICUScales';
import ProceduralSedation from './components/ProceduralSedation';
import PediatricCalculator from './components/PediatricCalculator';
import VancomycinProtocol from './components/VancomycinProtocol';
import Chatbot from './components/Chatbot';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeView, setActiveView] = useState<'calculator' | 'pharma_ai' | 'manual' | 'risk_score' | 'icu_scales' | 'pediatric_calc' | 'vancomycin'>('calculator');

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="bg-white/40 backdrop-blur-2xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-slate-900 rounded-[1.25rem] flex items-center justify-center shadow-2xl shadow-slate-900/20 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              <FlaskConical className="text-white w-7 h-7 relative z-10" />
            </div>
            <div>
              <h1 className="font-display font-black text-2xl uppercase tracking-tighter text-slate-900 leading-none">
                Pharma<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Suite</span>
              </h1>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex items-center gap-1 px-2 py-0.5 bg-blue-50 rounded-md border border-blue-100">
                  <Sparkles size={10} className="text-blue-600" />
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">AI Powered</span>
                </div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">v2.6.0</span>
              </div>
            </div>
          </div>

          <nav className="hidden xl:flex bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => setActiveView('calculator')} 
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap ${activeView === 'calculator' ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}`}
            >
              <LayoutDashboard size={14} />
              Calculadora
            </button>
            <button 
              onClick={() => setActiveView('pediatric_calc')} 
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap ${activeView === 'pediatric_calc' ? 'bg-white text-pink-600 shadow-md shadow-slate-200/50' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}`}
            >
              <Activity size={14} />
              Pediatria
            </button>
            <button 
              onClick={() => setActiveView('risk_score')} 
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap ${activeView === 'risk_score' ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}`}
            >
              <ShieldAlert size={14} />
              Risco
            </button>
            <button 
              onClick={() => setActiveView('icu_scales')} 
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap ${activeView === 'icu_scales' ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}`}
            >
              <Activity size={14} />
              Escalas
            </button>
            <button 
              onClick={() => setActiveView('vancomycin')} 
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap ${activeView === 'vancomycin' ? 'bg-white text-amber-700 shadow-md shadow-slate-200/50' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}`}
            >
              <Clock size={14} />
              Vancomicina
            </button>
            <button 
              onClick={() => setActiveView('pharma_ai')} 
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap ${activeView === 'pharma_ai' ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}`}
            >
              <BrainCircuit size={14} />
              IA
            </button>
            <button 
              onClick={() => setActiveView('manual')} 
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 whitespace-nowrap ${activeView === 'manual' ? 'bg-white text-blue-600 shadow-md shadow-slate-200/50' : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'}`}
            >
              <FlaskConical size={14} />
              Manual
            </button>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Servidor Clínico</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                <span className="text-xs font-bold text-slate-700">Conectado</span>
              </div>
            </div>
            <a 
              href="https://github.com/joaopsfarma/PHARMA-SUITEPRO.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <nav className="bg-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-2xl flex">
          <button 
            onClick={() => setActiveView('calculator')} 
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${activeView === 'calculator' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
          >
            <LayoutDashboard size={18} />
            <span className="text-[9px] font-bold uppercase">Calc</span>
          </button>
          <button 
            onClick={() => setActiveView('pediatric_calc')} 
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${activeView === 'pediatric_calc' ? 'bg-pink-600 text-white' : 'text-slate-400'}`}
          >
            <Activity size={18} />
            <span className="text-[9px] font-bold uppercase">Ped</span>
          </button>
          <button 
            onClick={() => setActiveView('risk_score')} 
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${activeView === 'risk_score' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
          >
            <ShieldAlert size={18} />
            <span className="text-[9px] font-bold uppercase">Risco</span>
          </button>
          <button 
            onClick={() => setActiveView('icu_scales')} 
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${activeView === 'icu_scales' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
          >
            <Activity size={18} />
            <span className="text-[9px] font-bold uppercase">Escalas</span>
          </button>
          <button 
            onClick={() => setActiveView('vancomycin')} 
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${activeView === 'vancomycin' ? 'bg-amber-600 text-white' : 'text-slate-400'}`}
          >
            <Clock size={18} />
            <span className="text-[9px] font-bold uppercase">Vanco</span>
          </button>
          <button 
            onClick={() => setActiveView('pharma_ai')} 
            className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all ${activeView === 'pharma_ai' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
          >
            <BrainCircuit size={18} />
            <span className="text-[9px] font-bold uppercase">IA</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeView === 'calculator' && <Calculator />}
            {activeView === 'risk_score' && <RiskScoreCalculator />}
            {activeView === 'icu_scales' && <ICUScales />}
            {activeView === 'pediatric_calc' && <PediatricCalculator />}
            {activeView === 'vancomycin' && <VancomycinProtocol />}
            {activeView === 'pharma_ai' && <PharmaAI />}
            {activeView === 'manual' && <Manual />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Chatbot />

      {/* Footer */}
      <footer className="p-8 border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © 2026 Pharma Suite Pro • Gestão Farmacêutica Hospitalar
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-xs font-bold">Documentação</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-xs font-bold">Suporte</a>
            <div className="w-px h-4 bg-slate-200" />
            <a 
              href="https://github.com/joaopsfarma/PHARMA-SUITEPRO.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-900 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
