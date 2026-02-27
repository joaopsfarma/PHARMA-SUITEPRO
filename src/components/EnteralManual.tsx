import React, { useState, useMemo } from 'react';
import { ENTERAL_DRUGS, EnteralDrug } from '../data/enteralData';
import { Search, Snail, ChevronRight, Info, AlertTriangle, Droplets, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function EnteralManual() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDrug, setSelectedDrug] = useState<EnteralDrug | null>(null);

  const filteredDrugs = useMemo(() => {
    return ENTERAL_DRUGS.filter(drug => 
      drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drug.generic.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
              <Snail size={18} />
            </div>
            <h2 className="font-display font-bold text-xl text-slate-800 tracking-tight">Acessos Enterais</h2>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar medicamento..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all text-sm font-medium"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
          {filteredDrugs.map((drug) => (
            <button
              key={drug.name}
              onClick={() => setSelectedDrug(drug)}
              className={`w-full flex flex-col p-4 rounded-2xl transition-all group mb-1 ${selectedDrug?.name === drug.name ? 'bg-orange-50 text-orange-700 shadow-sm' : 'hover:bg-slate-50 text-slate-600'}`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="font-bold text-sm">{drug.name}</span>
                <ChevronRight size={14} className={`transition-transform duration-300 ${selectedDrug?.name === drug.name ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
              </div>
              <span className="text-[10px] uppercase font-bold opacity-60">{drug.generic}</span>
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
              <div className="p-8 border-b border-slate-50 bg-gradient-to-r from-orange-50/50 to-transparent">
                <button 
                  onClick={() => setSelectedDrug(null)}
                  className="lg:hidden mb-6 flex items-center gap-2 text-orange-600 font-black text-[10px] uppercase tracking-[0.2em] bg-orange-50 px-4 py-2 rounded-full w-fit"
                >
                  <ChevronRight size={14} className="rotate-180" />
                  Voltar
                </button>
                <h3 className="font-display font-black text-4xl text-slate-900 tracking-tighter mb-2">{selectedDrug.name}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{selectedDrug.generic}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">Triturar?</span>
                    <span className={`text-xs font-bold ${selectedDrug.triturate === true ? 'text-emerald-600' : 'text-red-600'}`}>
                      {selectedDrug.triturate === true ? 'SIM' : (selectedDrug.triturate === false ? 'NÃO' : selectedDrug.triturate)}
                    </span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">Dissolve sem Triturar?</span>
                    <span className={`text-xs font-bold ${selectedDrug.dissolveWithoutTrituration ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {selectedDrug.dissolveWithoutTrituration ? 'SIM' : 'NÃO'}
                    </span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">Resíduo</span>
                    <span className="text-xs font-bold text-blue-600">{selectedDrug.residue || '---'}</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">Vol. Diluição</span>
                    <span className="text-xs font-bold text-indigo-600">{selectedDrug.dilutionVolume || '---'}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Info size={18} className="text-orange-500" />
                    <h4 className="font-black text-xs uppercase tracking-widest">Orientações de Administração</h4>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedDrug.notes || "Siga o protocolo padrão de lavagem da sonda com 20mL de água antes e após a administração."}
                    </p>
                  </div>
                </section>

                <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 flex items-start gap-4">
                  <AlertTriangle className="text-orange-600 shrink-0" size={20} />
                  <div className="space-y-1">
                    <h5 className="text-[10px] font-black text-orange-800 uppercase tracking-widest">Atenção EMTN</h5>
                    <p className="text-[11px] text-orange-700 font-medium leading-relaxed">
                      Nunca misture medicamentos no mesmo recipiente. Lave a sonda com água entre cada fármaco para evitar obstruções e interações.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 p-12 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-200">
                <Snail size={40} />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-slate-500 tracking-tight">Manual de Sondas</p>
                <p className="text-sm text-slate-400 max-w-[300px]">Selecione um medicamento para ver as regras de trituração e diluição via acesso enteral.</p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
