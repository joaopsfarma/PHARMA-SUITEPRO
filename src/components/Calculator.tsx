import React, { useState, useEffect } from 'react';
import { DRUGS, Drug } from '../constants';
import { Calculator as CalcIcon, Info, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<'doseToRate' | 'rateToDose'>('doseToRate');
  const [weight, setWeight] = useState(70);
  const [selectedDrug, setSelectedDrug] = useState<Drug>(DRUGS[0]);
  const [mg, setMg] = useState(DRUGS[0].standardMg);
  const [volume, setVolume] = useState(DRUGS[0].standardMl);
  const [inputDose, setInputDose] = useState(DRUGS[0].defaultDose);
  const [inputRate, setInputRate] = useState(10);
  const [resultRate, setResultRate] = useState("0");
  const [resultDose, setResultDose] = useState(0);
  const [isOutOfRange, setIsOutOfRange] = useState(false);

  useEffect(() => {
    // Reset values when drug changes
    setMg(selectedDrug.standardMg);
    setVolume(selectedDrug.standardMl);
    setInputDose(selectedDrug.defaultDose);
  }, [selectedDrug]);

  useEffect(() => {
    // Concentration calculation
    let conc = (selectedDrug.isUnitUI || selectedDrug.isUnitMg) ? mg / volume : (mg * 1000) / volume;
    
    if (conc <= 0 || volume <= 0) return;

    const timeFactor = selectedDrug.isHourly ? 1 : 60;

    if (activeTab === 'doseToRate') {
      let calcRate = selectedDrug.weightIndependent 
        ? (inputDose * timeFactor) / conc 
        : (inputDose * weight * timeFactor) / conc;
      
      setResultRate(Number(calcRate).toFixed(2));
      setResultDose(inputDose);
    } else {
      let calcDose = selectedDrug.weightIndependent 
        ? (inputRate * conc) / timeFactor 
        : (inputRate * conc) / (weight * timeFactor);
      
      setResultDose(Number(Number(calcDose).toFixed(4)));
    }
  }, [weight, selectedDrug, mg, volume, inputDose, inputRate, activeTab]);

  useEffect(() => {
    setIsOutOfRange(resultDose < selectedDrug.minDose || resultDose > selectedDrug.maxDose);
  }, [resultDose, selectedDrug]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-7 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 space-y-8 relative overflow-hidden"
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="flex items-center justify-between mb-2 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <CalcIcon size={20} />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-slate-800 tracking-tight">Parâmetros de Infusão</h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ajuste os valores para cálculo em tempo real</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Cálculo Ativo</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Peso do Paciente</label>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Obrigatório</span>
            </div>
            <div className="relative group">
              <input 
                type="number" 
                value={weight} 
                onChange={e => setWeight(Number(e.target.value))} 
                className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-2xl focus:border-blue-500 focus:bg-white outline-none transition-all group-hover:border-slate-200" 
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 font-black text-sm">KG</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Fármaco Selecionado</label>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{selectedDrug.category}</span>
            </div>
            <div className="relative group">
              <select 
                value={selectedDrug.id} 
                onChange={e => setSelectedDrug(DRUGS.find(d => d.id === e.target.value) || DRUGS[0])} 
                className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-xl focus:border-blue-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer group-hover:border-slate-200"
              >
                {DRUGS.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <Info size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 relative">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Massa Total</label>
            <div className="relative group">
              <input 
                type="number" 
                value={mg} 
                onChange={e => setMg(Number(e.target.value))} 
                className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-xl focus:border-blue-500 focus:bg-white outline-none transition-all group-hover:border-slate-200" 
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 font-bold text-xs">{selectedDrug.isUnitUI ? 'UI' : 'MG'}</div>
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Volume do Diluente</label>
            <div className="relative group">
              <input 
                type="number" 
                value={volume} 
                onChange={e => setVolume(Number(e.target.value))} 
                className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-xl focus:border-blue-500 focus:bg-white outline-none transition-all group-hover:border-slate-200" 
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 font-bold text-xs">ML</div>
            </div>
          </div>
        </div>

        <div className={`p-8 rounded-[2.5rem] transition-all duration-500 relative overflow-hidden ${activeTab === 'doseToRate' ? 'bg-blue-50/50 border-2 border-blue-100' : 'bg-emerald-50/50 border-2 border-emerald-100'}`}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 relative z-10">
            <div>
              <label className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] block mb-1">
                {activeTab === 'doseToRate' ? 'Definir Dose Alvo' : 'Definir Vazão na Bomba'}
              </label>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                {activeTab === 'doseToRate' ? `Unidade: ${selectedDrug.unit}` : 'Unidade: mL/h'}
              </p>
            </div>
            <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
              <button 
                onClick={() => setActiveTab('doseToRate')} 
                className={`px-5 py-2 text-[10px] font-black uppercase rounded-xl transition-all ${activeTab === 'doseToRate' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Dose ➜ Vazão
              </button>
              <button 
                onClick={() => setActiveTab('rateToDose')} 
                className={`px-5 py-2 text-[10px] font-black uppercase rounded-xl transition-all ${activeTab === 'rateToDose' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Vazão ➜ Dose
              </button>
            </div>
          </div>
          <div className="relative z-10">
            <input 
              type="number" 
              step="0.01"
              value={activeTab === 'doseToRate' ? inputDose : inputRate} 
              onChange={e => activeTab === 'doseToRate' ? setInputDose(Number(e.target.value)) : setInputRate(Number(e.target.value))} 
              className={`w-full p-8 rounded-3xl text-6xl font-black text-center bg-white border-2 border-transparent focus:ring-0 outline-none shadow-inner transition-all ${activeTab === 'doseToRate' ? 'focus:border-blue-500 text-blue-600' : 'focus:border-emerald-500 text-emerald-600'}`} 
            />
          </div>
        </div>
      </motion.div>

      <div className="lg:col-span-5 space-y-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-10 rounded-[2.5rem] text-white text-center shadow-2xl transition-all duration-700 relative overflow-hidden flex flex-col items-center justify-center min-h-[280px] ${activeTab === 'doseToRate' ? 'bg-gradient-to-br from-blue-600 to-indigo-700' : 'bg-gradient-to-br from-emerald-600 to-teal-700'} ${isOutOfRange ? 'ring-4 ring-amber-400/50 ring-offset-4 ring-offset-slate-50' : ''}`}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
          </div>

          {isOutOfRange && (
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-6 right-6 text-amber-300"
            >
              <AlertTriangle size={28} />
            </motion.div>
          )}

          <div className="relative">
            <div className="text-8xl font-black leading-none tracking-tighter drop-shadow-lg">
              {activeTab === 'doseToRate' ? resultRate : resultDose}
            </div>
            <div className="text-sm font-black uppercase mt-6 opacity-70 tracking-[0.3em] flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-white/30" />
              {activeTab === 'doseToRate' ? 'mL/h' : selectedDrug.unit}
              <div className="w-8 h-px bg-white/30" />
            </div>
          </div>
          
          {isOutOfRange && (
            <div className="mt-8 text-[11px] font-black bg-amber-400 text-amber-950 py-1.5 px-4 rounded-full shadow-lg uppercase tracking-widest">
              Alerta: Fora da Faixa
            </div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-5 items-start relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
            <Info size={20} />
          </div>
          <div className="text-sm leading-relaxed text-slate-600">
            <span className="font-display font-bold uppercase block mb-1.5 text-slate-400 text-[10px] tracking-widest">Nota Clínica</span>
            <p className="italic font-medium">"{selectedDrug.note}"</p>
          </div>
        </motion.div>

        <div className="bg-slate-900 p-8 rounded-[2rem] text-white space-y-5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <div className="flex justify-between items-center relative">
            <h3 className="text-[11px] font-black uppercase text-slate-500 tracking-[0.2em]">Resumo Técnico</h3>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
              <CalcIcon size={14} />
            </div>
          </div>
          
          <div className="space-y-4 relative">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400 font-medium">Concentração</span>
              <span className="text-sm font-mono font-bold text-blue-400">
                {((mg * (selectedDrug.isUnitUI || selectedDrug.isUnitMg ? 1 : 1000)) / volume).toFixed(2)} 
                <span className="text-[10px] text-slate-500 ml-1">
                  {selectedDrug.isUnitUI ? 'UI/mL' : (selectedDrug.isUnitMg ? 'mg/mL' : 'mcg/mL')}
                </span>
              </span>
            </div>
            <div className="h-px bg-slate-800/50 w-full" />
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400 font-medium">Faixa Terapêutica</span>
              <span className="text-sm font-mono font-bold text-slate-200">
                {selectedDrug.minDose} <span className="text-slate-600 mx-1">→</span> {selectedDrug.maxDose}
              </span>
            </div>
            {(selectedDrug.lowDose || selectedDrug.modDose || selectedDrug.highDose) && (
              <>
                <div className="h-px bg-slate-800/50 w-full" />
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {selectedDrug.lowDose !== undefined && (
                    <div className="text-center">
                      <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">Baixa</span>
                      <span className="text-xs font-bold text-emerald-400">{selectedDrug.lowDose}</span>
                    </div>
                  )}
                  {selectedDrug.modDose !== undefined && (
                    <div className="text-center">
                      <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">Mod.</span>
                      <span className="text-xs font-bold text-amber-400">{selectedDrug.modDose}</span>
                    </div>
                  )}
                  {selectedDrug.highDose !== undefined && (
                    <div className="text-center">
                      <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">Alta</span>
                      <span className="text-xs font-bold text-red-400">{selectedDrug.highDose}</span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
