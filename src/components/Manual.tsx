import React, { useState, useMemo } from 'react';
import { MANUAL_DRUGS, ManualDrug } from '../data/manualData';
import { HIGH_ALERT_MEDS, HighAlertMed } from '../data/highAlertMedsData';
import { ENTERAL_DRUGS, EnteralDrug } from '../data/enteralData';
import { HYPODERMOCLYSIS_DRUGS, HypodermoclysisDrug } from '../data/hypodermoclysisData';
import { 
  Search, BookOpen, ChevronRight, Info, AlertCircle, Droplets, 
  Clock, ShieldCheck, AlertTriangle, Stethoscope, Syringe, 
  Zap, Beaker, CheckCircle2, XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type UnifiedDrug = 
  | (ManualDrug & { type: 'injetavel' }) 
  | (HighAlertMed & { type: 'alta_vigilancia' })
  | (EnteralDrug & { type: 'enteral' })
  | (HypodermoclysisDrug & { type: 'hypodermoclysis' });

export default function Manual() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrug, setSelectedDrug] = useState<UnifiedDrug | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'injetavel' | 'alta_vigilancia' | 'enteral' | 'hypodermoclysis'>('all');

  const allDrugs = useMemo(() => {
    const manual = MANUAL_DRUGS.map(d => ({ ...d, type: 'injetavel' as const }));
    const highAlert = HIGH_ALERT_MEDS.map(d => ({ ...d, type: 'alta_vigilancia' as const }));
    const enteral = ENTERAL_DRUGS.map(d => ({ ...d, type: 'enteral' as const }));
    const hypodermoclysis = HYPODERMOCLYSIS_DRUGS.map(d => ({ ...d, type: 'hypodermoclysis' as const }));
    
    return [...manual, ...highAlert, ...enteral, ...hypodermoclysis].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredDrugs = useMemo(() => {
    return allDrugs.filter(drug => {
      const matchesSearch = drug.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           ('generic' in drug && drug.generic.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesFilter = activeFilter === 'all' || drug.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [allDrugs, searchTerm, activeFilter]);

  const getTypeLabel = (type: UnifiedDrug['type']) => {
    switch (type) {
      case 'injetavel': return 'Injetável';
      case 'alta_vigilancia': return 'Alta Vigilância';
      case 'enteral': return 'Medicamento Oral / Sonda';
      case 'hypodermoclysis': return 'Hipodermóclise';
    }
  };

  const getTypeColor = (type: UnifiedDrug['type']) => {
    switch (type) {
      case 'injetavel': return 'text-blue-600 bg-blue-50 border-blue-100 shadow-blue-100/50 shadow-sm';
      case 'alta_vigilancia': return 'text-red-600 bg-red-50 border-red-100 shadow-red-100/50 shadow-sm';
      case 'enteral': return 'text-emerald-600 bg-emerald-50 border-emerald-100 shadow-emerald-100/50 shadow-sm';
      case 'hypodermoclysis': return 'text-indigo-600 bg-indigo-50 border-indigo-100 shadow-indigo-100/50 shadow-sm';
    }
  };

  const getTypeIcon = (type: UnifiedDrug['type']) => {
    switch (type) {
      case 'injetavel': return <Syringe size={14} />;
      case 'alta_vigilancia': return <AlertTriangle size={14} />;
      case 'enteral': return <Stethoscope size={14} />;
      case 'hypodermoclysis': return <Droplets size={14} />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-240px)] min-h-[600px]">
      {/* Sidebar - Drug List */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={`lg:col-span-4 bg-white rounded-[2.5rem] border border-slate-100 flex flex-col shadow-xl shadow-slate-200/40 overflow-hidden ${selectedDrug ? 'hidden lg:flex' : 'flex'}`}
      >
        <div className="p-6 border-b border-slate-50 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <BookOpen size={18} />
              </div>
              <h2 className="font-display font-bold text-xl text-slate-800 tracking-tight">Manual Farmacêutico</h2>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar por nome ou princípio ativo..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all text-sm font-medium"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {(['all', 'injetavel', 'alta_vigilancia', 'enteral', 'hypodermoclysis'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap border ${
                  activeFilter === filter 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                    : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100'
                }`}
              >
                {filter === 'all' ? 'Todos' : getTypeLabel(filter)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
          {filteredDrugs.length > 0 ? (
            <div className="space-y-1">
              {filteredDrugs.map((drug) => (
                <button
                  key={`${drug.type}-${drug.name}`}
                  onClick={() => setSelectedDrug(drug)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${selectedDrug?.name === drug.name && selectedDrug?.type === drug.type ? 'bg-blue-50 text-blue-700 shadow-sm' : 'hover:bg-slate-50 text-slate-600'}`}
                >
                  <div className="flex flex-col items-start text-left">
                    <span className="font-semibold text-sm leading-tight">{drug.name}</span>
                    <div className={`flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded-md border ${getTypeColor(drug.type)}`}>
                      {getTypeIcon(drug.type)}
                      <span className="text-[8px] font-black uppercase tracking-widest">{getTypeLabel(drug.type)}</span>
                    </div>
                  </div>
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
              key={`${selectedDrug.type}-${selectedDrug.name}`}
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
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getTypeColor(selectedDrug.type)}`}>
                        {getTypeIcon(selectedDrug.type)}
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                          {getTypeLabel(selectedDrug.type)}
                        </span>
                      </div>
                      {'ph' in selectedDrug && selectedDrug.ph && (
                        <div className="flex items-center gap-2">
                          <div className="w-px h-3 bg-slate-200" />
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">pH: {selectedDrug.ph}</span>
                        </div>
                      )}
                      {'generic' in selectedDrug && selectedDrug.generic && (
                        <div className="flex items-center gap-2">
                          <div className="w-px h-3 bg-slate-200" />
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{selectedDrug.generic}</span>
                        </div>
                      )}
                      {'category' in selectedDrug && selectedDrug.category && (
                        <div className="flex items-center gap-2">
                          <div className="w-px h-3 bg-slate-200" />
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{selectedDrug.category}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`flex gap-6 items-center p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20 relative overflow-hidden group`}>
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${selectedDrug.type === 'alta_vigilancia' ? 'bg-red-600' : 'bg-blue-600'}`} />
                  <div className="p-3 bg-slate-50 rounded-2xl text-slate-400 group-hover:scale-110 transition-transform duration-500">
                    {selectedDrug.type === 'alta_vigilancia' ? <AlertTriangle size={20} className="text-red-500" /> : <Info size={20} />}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block mb-1">Apresentação / Dose</span>
                    <p className="text-base text-slate-700 font-bold tracking-tight leading-relaxed">
                      {'presentation' in selectedDrug ? selectedDrug.presentation : ('dose' in selectedDrug ? selectedDrug.dose : 'Verificar bula')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 space-y-12 custom-scrollbar">
                
                {/* INJETÁVEL & ALTA VIGILÂNCIA VIEW */}
                {(selectedDrug.type === 'injetavel' || selectedDrug.type === 'alta_vigilancia') && (
                  <>
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
                          <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                            {selectedDrug.type === 'alta_vigilancia' ? (selectedDrug.reconstitution || 'Não requer reconstituição (solução pronta)') : selectedDrug.reconstitution}
                          </p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                          <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] block mb-4">Estabilidade</span>
                          <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                            {selectedDrug.type === 'alta_vigilancia' ? selectedDrug.stability : selectedDrug.stabilityPostReconstitution}
                          </p>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-100" />
                        <div className="flex items-center gap-2 text-emerald-600 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                          <ShieldCheck size={16} />
                          <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Administração</h4>
                        </div>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>
                      
                      {selectedDrug.type === 'alta_vigilancia' ? (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] block mb-4">Diluição</span>
                              <p className="text-sm text-slate-700 font-bold leading-relaxed">{selectedDrug.dilution}</p>
                            </div>
                            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] block mb-4">Conc. Máxima</span>
                              <p className="text-sm text-slate-700 font-bold leading-relaxed">{selectedDrug.maxConc}</p>
                            </div>
                          </div>
                          <div className="p-8 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                              <Clock size={20} className="text-emerald-400" />
                              <span className="font-black text-[11px] uppercase tracking-[0.2em] text-emerald-400">Diretrizes de Infusão</span>
                            </div>
                            <p className="text-base text-slate-200 font-bold leading-relaxed relative z-10">{selectedDrug.administration}</p>
                          </div>
                        </div>
                      ) : (
                        <>
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
                        </>
                      )}
                    </section>
                  </>
                )}

                {/* ENTERAL VIEW */}
                {selectedDrug.type === 'enteral' && (
                  <>
                    <section className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-100" />
                        <div className="flex items-center gap-2 text-emerald-600 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                          <Zap size={16} />
                          <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Preparo da Sonda</h4>
                        </div>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
                          <div className={`p-4 rounded-2xl ${selectedDrug.triturate === true ? 'bg-emerald-50 text-emerald-600' : selectedDrug.triturate === false ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'}`}>
                            {selectedDrug.triturate === true ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                          </div>
                          <div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-1">Pode Triturar?</span>
                            <p className="text-lg font-bold text-slate-800">
                              {selectedDrug.triturate === true ? 'Sim' : selectedDrug.triturate === false ? 'Não' : 'Não Recomendado'}
                            </p>
                          </div>
                        </div>
                        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
                          <div className={`p-4 rounded-2xl ${selectedDrug.dissolveWithoutTrituration ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'}`}>
                            {selectedDrug.dissolveWithoutTrituration ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                          </div>
                          <div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-1">Dissolver sem Triturar?</span>
                            <p className="text-lg font-bold text-slate-800">{selectedDrug.dissolveWithoutTrituration ? 'Sim' : 'Não'}</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-100" />
                        <div className="flex items-center gap-2 text-blue-600 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                          <Beaker size={16} />
                          <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Diluição e Resíduo</h4>
                        </div>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] block mb-4">Volume de Diluição</span>
                          <p className="text-2xl font-black text-slate-800 tracking-tight">{selectedDrug.dilutionVolume}</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                          <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] block mb-4">Nível de Resíduo</span>
                          <p className="text-2xl font-black text-slate-800 tracking-tight">{selectedDrug.residue}</p>
                        </div>
                      </div>
                    </section>
                  </>
                )}

                {/* HYPODERMOCLYSIS VIEW */}
                {selectedDrug.type === 'hypodermoclysis' && (
                  <>
                    <section className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-100" />
                        <div className="flex items-center gap-2 text-indigo-600 px-4 py-1.5 bg-indigo-50 rounded-full border border-indigo-100">
                          <Droplets size={16} />
                          <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Protocolo HDC</h4>
                        </div>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                          <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] block mb-4">Dose Recomendada</span>
                          <p className="text-lg font-bold text-slate-800">{selectedDrug.dose}</p>
                        </div>
                        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                          <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] block mb-4">Diluição</span>
                          <p className="text-lg font-bold text-slate-800">{selectedDrug.dilution}</p>
                        </div>
                      </div>
                      <div className="p-8 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                        <div className="flex items-center gap-3 mb-4 relative z-10">
                          <Clock size={20} className="text-indigo-400" />
                          <span className="font-black text-[11px] uppercase tracking-[0.2em] text-indigo-400">Tempo de Infusão</span>
                        </div>
                        <p className="text-2xl font-black text-white tracking-tight relative z-10">{selectedDrug.infusionTime}</p>
                      </div>
                    </section>
                  </>
                )}

                {/* Common Notes Section */}
                {selectedDrug.notes && (
                  <section className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-slate-100" />
                      <div className={`flex items-center gap-2 ${selectedDrug.type === 'alta_vigilancia' ? 'text-red-600 bg-red-50 border-red-100' : 'text-amber-600 bg-amber-50 border-amber-100'} px-4 py-1.5 rounded-full border`}>
                        <AlertCircle size={16} />
                        <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">Observações Clínicas</h4>
                      </div>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>
                    <div className={`${selectedDrug.type === 'alta_vigilancia' ? 'bg-red-50/30 border-red-200/50' : 'bg-amber-50/30 border-amber-200/50'} p-10 rounded-[3rem] border-2 border-dashed relative overflow-hidden`}>
                      <div className={`absolute top-4 left-4 ${selectedDrug.type === 'alta_vigilancia' ? 'text-red-200/50' : 'text-amber-200/50'}`}>
                        <Info size={40} />
                      </div>
                      <p className={`text-lg ${selectedDrug.type === 'alta_vigilancia' ? 'text-red-900' : 'text-amber-900'} leading-relaxed font-serif italic text-center relative z-10`}>
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
