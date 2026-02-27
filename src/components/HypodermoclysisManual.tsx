import React, { useState, useMemo } from 'react';
import { HYPODERMOCLYSIS_DRUGS, HypodermoclysisDrug } from '../data/hypodermoclysisData';
import { Search, Droplets, ChevronRight, Info, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HypodermoclysisManual() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrug, setSelectedDrug] = useState<HypodermoclysisDrug | null>(null);

  const filteredDrugs = useMemo(() => {
    return HYPODERMOCLYSIS_DRUGS.filter(drug => 
      drug.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-240px)] min-h-[600px]">
      {/* Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`lg:col-span-4 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col shadow-xl shadow-slate-200/40 overflow-hidden ${selectedDrug ? 'hidden lg:flex' : 'flex'}`}
      >
        <div className="p-6 border-b border-slate-50 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
              <Droplets size={18} />
            </div>
            <h2 className="font-display font-bold text-xl text-slate-800 tracking-tight">Hipodermóclise</h2>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar medicamento..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white rounded-2xl outline-none transition-all text-sm font-medium"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
          {filteredDrugs.map((drug) => (
            <button
              key={drug.name}
              onClick={() => setSelectedDrug(drug)}
              className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${selectedDrug?.name === drug.name ? 'bg-emerald-50 text-emerald-700 shadow-sm' : 'hover:bg-slate-50 text-slate-600'}`}
            >
              <div className="flex flex-col items-start">
                <span className="font-bold text-sm">{drug.name}</span>
                <span className="text-[9px] uppercase font-black opacity-40">{drug.category}</span>
              </div>
              <ChevronRight size={16} className={`transition-transform duration-300 ${selectedDrug?.name === drug.name ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
            </button>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`lg:col-span-8 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col shadow-2xl relative overflow-hidden ${!selectedDrug ? 'hidden lg:flex' : 'flex'}`}
      >
        <AnimatePresence mode="wait">
          {selectedDrug ? (
            <motion.div 
              key={selectedDrug.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full flex flex-col"
            >
              <div className="p-8 border-b border-slate-50 bg-gradient-to-r from-emerald-50/50 to-transparent">
                <button 
                  onClick={() => setSelectedDrug(null)}
                  className="lg:hidden mb-6 flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-[0.2em] bg-emerald-50 px-4 py-2 rounded-full w-fit"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  Voltar
                </button>
                <h3 className="font-display font-black text-5xl text-slate-900 tracking-tighter mb-6">{selectedDrug.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dose e Posologia</span>
                    <p className="text-sm font-bold text-slate-800">{selectedDrug.dose}</p>
                  </div>
                  <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Tempo de Infusão</span>
                    <p className="text-sm font-bold text-slate-800">{selectedDrug.infusionTime}</p>
                  </div>
                  <div className="p-5 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Categoria</span>
                    <p className="text-sm font-bold text-emerald-600 uppercase">{selectedDrug.category}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <ShieldCheck size={20} />
                    <h4 className="font-black text-xs uppercase tracking-widest">Diluição Recomendada</h4>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-base text-slate-700 font-semibold leading-relaxed">{selectedDrug.dilution}</p>
                  </div>
                </section>

                {selectedDrug.notes && (
                  <section className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-600">
                      <AlertCircle size={20} />
                      <h4 className="font-black text-xs uppercase tracking-widest">Observações Importantes</h4>
                    </div>
                    <div className="p-6 bg-amber-50/50 rounded-3xl border border-amber-100">
                      <p className="text-sm text-amber-900 font-medium leading-relaxed italic">"{selectedDrug.notes}"</p>
                    </div>
                  </section>
                )}

                <div className="p-6 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  <div className="flex items-center gap-3 mb-4">
                    <Info size={18} className="text-emerald-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Diretriz Geral HDC</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    A hipodermóclise é uma via segura para pacientes em cuidados paliativos. Troque o sítio de punção a cada 7 dias para medicamentos e a cada 24-48h para hidratação.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 p-12 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-200">
                <Droplets size={40} />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-slate-500 tracking-tight">Manual de Hipodermóclise</p>
                <p className="text-sm text-slate-400 max-w-[300px]">Selecione um medicamento para visualizar as diretrizes de administração via subcutânea.</p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
