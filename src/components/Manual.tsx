import React, { useState, useMemo } from 'react';
import { MANUAL_DRUGS, ManualDrug } from '../data/manualData';
import { Search, BookOpen, ChevronRight, Info, AlertCircle, Droplets, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Manual() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrug, setSelectedDrug] = useState<ManualDrug | null>(null);

  const filteredDrugs = useMemo(() => {
    return MANUAL_DRUGS.filter(drug => 
      drug.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-240px)] min-h-[600px]">
      {/* Sidebar - Drug List */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`lg:col-span-4 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col shadow-xl shadow-slate-200/40 overflow-hidden ${selectedDrug ? 'hidden lg:flex' : 'flex'}`}
      >
        <div className="p-6 border-b border-slate-50 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <BookOpen size={18} />
            </div>
            <h2 className="font-display font-bold text-xl text-slate-800 tracking-tight">Manual de Injetáveis</h2>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar medicamento..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all text-sm font-medium"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
          {filteredDrugs.length > 0 ? (
            <div className="space-y-1">
              {filteredDrugs.map((drug) => (
                <button
                  key={drug.name}
                  onClick={() => setSelectedDrug(drug)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${selectedDrug?.name === drug.name ? 'bg-blue-50 text-blue-700 shadow-sm' : 'hover:bg-slate-50 text-slate-600'}`}
                >
                  <span className="font-semibold text-sm">{drug.name}</span>
                  <ChevronRight size={16} className={`transition-transform duration-300 ${selectedDrug?.name === drug.name ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 text-center">
              <Search size={32} className="mb-3 opacity-20" />
              <p className="text-xs font-bold uppercase tracking-widest">Nenhum resultado</p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Content Area - Drug Details */}
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
              {/* Header Details */}
              <div className="p-8 border-b border-slate-50 bg-gradient-to-r from-slate-50/50 to-transparent">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <button 
                      onClick={() => setSelectedDrug(null)}
                      className="lg:hidden mb-6 flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] bg-blue-50 px-4 py-2 rounded-full w-fit"
                    >
                      <ChevronRight size={14} className="rotate-180" />
                      Voltar para a lista
                    </button>
                    <h3 className="font-display font-black text-5xl text-slate-900 tracking-tighter mb-4 leading-none">{selectedDrug.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Uso Hospitalar</span>
                      </div>
                      <div className="w-px h-3 bg-slate-200" />
                      {selectedDrug.ph && (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">pH: {selectedDrug.ph}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-center p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
                  <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 group-hover:scale-110 transition-transform duration-500">
                    <Info size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block mb-1">Apresentação Farmacêutica</span>
                    <p className="text-base text-slate-700 font-bold tracking-tight leading-relaxed">{selectedDrug.presentation}</p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 space-y-12 custom-scrollbar">
                {/* Reconstitution */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-100" />
                    <div className="flex items-center gap-2 text-blue-600 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                      <Droplets size={16} />
                      <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Preparo e Reconstituição</h4>
                    </div>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] block mb-4">Diretrizes de Preparo</span>
                      <p className="text-sm text-slate-700 leading-relaxed font-semibold">{selectedDrug.reconstitution}</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                      <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] block mb-4">Estabilidade Pós-Reconstituição</span>
                      <p className="text-sm text-slate-700 leading-relaxed font-semibold">{selectedDrug.stabilityPostReconstitution}</p>
                    </div>
                  </div>
                </section>

                {/* Administration */}
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-100" />
                    <div className="flex items-center gap-2 text-emerald-600 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                      <ShieldCheck size={16} />
                      <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Vias de Administração</h4>
                    </div>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedDrug.administration.im && (
                      <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                        <span className="font-black text-[10px] text-emerald-500 uppercase tracking-[0.2em] block mb-3">Intramuscular</span>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed">{selectedDrug.administration.im}</p>
                      </div>
                    )}
                    {selectedDrug.administration.evDirect && (
                      <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                        <span className="font-black text-[10px] text-emerald-500 uppercase tracking-[0.2em] block mb-3">EV Direto</span>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed">{selectedDrug.administration.evDirect}</p>
                      </div>
                    )}
                    {selectedDrug.administration.sc && (
                      <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                        <span className="font-black text-[10px] text-emerald-500 uppercase tracking-[0.2em] block mb-3">Subcutâneo</span>
                        <p className="text-xs text-slate-600 font-bold leading-relaxed">{selectedDrug.administration.sc}</p>
                      </div>
                    )}
                  </div>

                  {selectedDrug.administration.evInfusion && (
                    <div className="mt-6 p-8 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                      <div className="flex items-center gap-3 mb-8 relative z-10">
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                          <Clock size={20} />
                        </div>
                        <div>
                          <span className="font-black text-[11px] uppercase tracking-[0.2em] text-emerald-400">Infusão Endovenosa</span>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Protocolo de Administração Lenta</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="space-y-2">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Diluição Recomendada</span>
                          <p className="text-sm text-slate-200 font-bold leading-relaxed">{selectedDrug.administration.evInfusion.dilution}</p>
                        </div>
                        <div className="space-y-2">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Velocidade de Infusão</span>
                          <p className="text-sm text-slate-200 font-bold leading-relaxed">{selectedDrug.administration.evInfusion.speed}</p>
                        </div>
                        <div className="space-y-2">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Estabilidade da Solução</span>
                          <p className="text-sm text-slate-200 font-bold leading-relaxed">{selectedDrug.administration.evInfusion.stabilityPostDilution}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </section>

                {/* Notes */}
                {selectedDrug.notes && (
                  <section className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-slate-100" />
                      <div className="flex items-center gap-2 text-amber-600 px-4 py-1.5 bg-amber-50 rounded-full border border-amber-100">
                        <AlertCircle size={16} />
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Observações Clínicas</h4>
                      </div>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className="p-10 bg-amber-50/30 rounded-[3rem] border-2 border-dashed border-amber-200/50 relative overflow-hidden">
                      <div className="absolute top-4 left-4 text-amber-200/50">
                        <Info size={40} />
                      </div>
                      <p className="text-lg text-amber-900 leading-relaxed font-serif italic text-center relative z-10">
                        "{selectedDrug.notes}"
                      </p>
                    </div>
                  </section>
                )}
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 p-12 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-200">
                <BookOpen size={40} />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-slate-500 tracking-tight">Selecione um Medicamento</p>
                <p className="text-sm text-slate-400 max-w-[300px]">Escolha um item da lista à esquerda para visualizar as diretrizes completas de preparo e administração.</p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
