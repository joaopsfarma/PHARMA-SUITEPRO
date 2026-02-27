import React, { useState, useMemo, useEffect } from 'react';
import { PEDIATRIC_SEDATION_DRUGS } from '../data/pediatricSedationData';
import { PEDIATRIC_INFUSION_DRUGS, PediatricInfusionDrug } from '../data/pediatricInfusionData';
import { Calculator as CalcIcon, Info, AlertTriangle, Activity, Zap, Droplets, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PediatricCalculator() {
  const [weight, setWeight] = useState(10);
  const [activeMode, setActiveMode] = useState<'bolus' | 'infusion'>('bolus');
  
  // Bolus Mode State
  const [searchTerm, setSearchTerm] = useState('');

  // Infusion Mode State
  const [selectedDrug, setSelectedDrug] = useState<PediatricInfusionDrug>(PEDIATRIC_INFUSION_DRUGS[0]);
  const [mg, setMg] = useState(PEDIATRIC_INFUSION_DRUGS[0].standardMg);
  const [volume, setVolume] = useState(PEDIATRIC_INFUSION_DRUGS[0].standardMl);
  const [inputDose, setInputDose] = useState(PEDIATRIC_INFUSION_DRUGS[0].defaultDose);
  const [inputRate, setInputRate] = useState(1);
  const [calcTab, setCalcTab] = useState<'doseToRate' | 'rateToDose'>('doseToRate');
  const [massUnit, setMassUnit] = useState<'MG' | 'MCG' | 'UI'>('MG');
  const [resultRate, setResultRate] = useState("0");
  const [resultDose, setResultDose] = useState(0);
  const [isOutOfRange, setIsOutOfRange] = useState(false);

  // Sync infusion state when drug changes
  useEffect(() => {
    setMg(selectedDrug.standardMg);
    setVolume(selectedDrug.standardMl);
    setInputDose(selectedDrug.defaultDose);
    setMassUnit(selectedDrug.isUnitUI ? 'UI' : (selectedDrug.isUnitMcg ? 'MCG' : 'MG'));
  }, [selectedDrug]);

  // Infusion Calculation Logic
  useEffect(() => {
    let currentMassInTargetUnit = mg;
    const targetIsMcg = selectedDrug.unit.includes('mcg');
    const targetIsMg = selectedDrug.unit.includes('mg') || selectedDrug.unit.includes('mEq');

    if (massUnit === 'MG' && targetIsMcg) {
      currentMassInTargetUnit = mg * 1000;
    } else if (massUnit === 'MCG' && targetIsMg) {
      currentMassInTargetUnit = mg / 1000;
    }
    
    let conc = currentMassInTargetUnit / volume;
    if (conc <= 0 || volume <= 0) return;

    const timeFactor = selectedDrug.isHourly ? 1 : 60;

    if (calcTab === 'doseToRate') {
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
  }, [weight, selectedDrug, mg, volume, inputDose, inputRate, calcTab, massUnit]);

  useEffect(() => {
    setIsOutOfRange(resultDose < selectedDrug.minDose || resultDose > selectedDrug.maxDose);
  }, [resultDose, selectedDrug]);

  const filteredBolusDrugs = useMemo(() => {
    return PEDIATRIC_SEDATION_DRUGS.filter(drug => 
      drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drug.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const calculateBolusDose = (doseStr: string, weight: number) => {
    const match = doseStr.match(/([\d,.]+)-([\d,.]+)\s*(mg|mcg)\/kg/);
    if (match) {
      const min = parseFloat(match[1].replace(',', '.'));
      const max = parseFloat(match[2].replace(',', '.'));
      const unit = match[3];
      return `${(min * weight).toFixed(2)} - ${(max * weight).toFixed(2)} ${unit}`;
    }
    
    const singleMatch = doseStr.match(/([\d,.]+)\s*(mg|mcg)\/kg/);
    if (singleMatch) {
      const val = parseFloat(singleMatch[1].replace(',', '.'));
      const unit = singleMatch[2];
      return `${(val * weight).toFixed(2)} ${unit}`;
    }

    return doseStr;
  };

  return (
    <div className="space-y-8">
      {/* Mode Toggle & Weight Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
          <div className="w-full lg:w-1/3 space-y-3">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] ml-1">Peso da Criança</label>
            <div className="relative group">
              <input 
                type="number" 
                value={weight} 
                onChange={e => setWeight(Number(e.target.value))} 
                className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] font-black text-4xl text-blue-600 focus:border-blue-500 focus:bg-white outline-none transition-all shadow-inner" 
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 font-black text-lg">KG</div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex bg-slate-100 p-1.5 rounded-[2rem] border border-slate-200">
              <button 
                onClick={() => setActiveMode('bolus')}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[1.75rem] text-xs font-black uppercase tracking-widest transition-all ${activeMode === 'bolus' ? 'bg-white text-blue-600 shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Zap size={16} />
                Doses e Bolus
              </button>
              <button 
                onClick={() => setActiveMode('infusion')}
                className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[1.75rem] text-xs font-black uppercase tracking-widest transition-all ${activeMode === 'infusion' ? 'bg-white text-indigo-600 shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Activity size={16} />
                Bomba de Infusão
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeMode === 'bolus' ? (
          <motion.div 
            key="bolus"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="relative">
                <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Buscar medicamento para bolus (Ex: Cetamina, Midazolam...)"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-2xl font-bold focus:border-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBolusDrugs.map((drug, idx) => (
                <motion.div 
                  key={drug.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:shadow-blue-200/30 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[3rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-display font-black text-2xl text-slate-800 tracking-tight leading-none mb-2">{drug.name}</h3>
                        <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">{drug.category}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {drug.doses.filter(d => d.route === 'EV' || d.route === 'IM').map((d, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100/50 group-hover:bg-white transition-colors">
                          <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{d.route}</span>
                            <span className="text-[10px] font-bold text-slate-500">{d.dose}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-black text-blue-600 tracking-tight">
                              {calculateBolusDose(d.dose, weight)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-50 grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Início</span>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Clock size={12} className="text-blue-400" />
                          <span className="text-xs font-bold">{drug.onset}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Duração</span>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Activity size={12} className="text-indigo-400" />
                          <span className="text-xs font-bold">{drug.duration}</span>
                        </div>
                      </div>
                    </div>

                    {drug.notes && (
                      <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100/50 flex gap-3 items-start">
                        <Info size={14} className="text-amber-500 mt-0.5 shrink-0" />
                        <p className="text-[10px] text-amber-800 font-medium leading-relaxed italic">
                          {drug.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="infusion"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Column: Inputs */}
            <div className="lg:col-span-7 bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <div className="flex items-center gap-4 mb-2 relative">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                  <Activity size={24} />
                </div>
                <div>
                  <h2 className="font-display font-black text-2xl text-slate-800 tracking-tight">Cálculo de Infusão Ped</h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Parâmetros específicos para pediatria</p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Fármaco de Infusão</label>
                <div className="relative group">
                  <select 
                    value={selectedDrug.id} 
                    onChange={e => setSelectedDrug(PEDIATRIC_INFUSION_DRUGS.find(d => d.id === e.target.value) || PEDIATRIC_INFUSION_DRUGS[0])} 
                    className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] font-black text-2xl focus:border-indigo-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer group-hover:border-slate-200 text-slate-800"
                  >
                    {PEDIATRIC_INFUSION_DRUGS.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Info size={24} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Massa Total</label>
                  <div className="relative group">
                    <input 
                      type="number" 
                      value={mg} 
                      onChange={e => setMg(Number(e.target.value))} 
                      className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] font-black text-2xl focus:border-indigo-500 focus:bg-white outline-none transition-all group-hover:border-slate-200" 
                    />
                    <button 
                      onClick={() => setMassUnit(massUnit === 'MG' ? 'MCG' : 'MG')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-indigo-600 font-black text-[10px] hover:bg-indigo-50 transition-colors shadow-sm"
                    >
                      {massUnit}
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Volume Diluente</label>
                  <div className="relative group">
                    <input 
                      type="number" 
                      value={volume} 
                      onChange={e => setVolume(Number(e.target.value))} 
                      className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] font-black text-2xl focus:border-indigo-500 focus:bg-white outline-none transition-all group-hover:border-slate-200" 
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 font-black text-sm">ML</div>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-[3rem] transition-all duration-500 relative overflow-hidden ${calcTab === 'doseToRate' ? 'bg-indigo-50/50 border-2 border-indigo-100' : 'bg-teal-50/50 border-2 border-teal-100'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 relative z-10">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] block">
                      {calcTab === 'doseToRate' ? 'Definir Dose Alvo' : 'Vazão na Bomba'}
                    </label>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {calcTab === 'doseToRate' ? `Unidade: ${selectedDrug.unit}` : 'Unidade: mL/h'}
                    </p>
                  </div>
                  <div className="flex bg-white p-1.5 rounded-[1.5rem] border border-slate-200 shadow-sm">
                    <button 
                      onClick={() => setCalcTab('doseToRate')} 
                      className={`px-6 py-3 text-[10px] font-black uppercase rounded-xl transition-all ${calcTab === 'doseToRate' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      Dose ➜ Vazão
                    </button>
                    <button 
                      onClick={() => setCalcTab('rateToDose')} 
                      className={`px-6 py-3 text-[10px] font-black uppercase rounded-xl transition-all ${calcTab === 'rateToDose' ? 'bg-teal-600 text-white shadow-lg shadow-teal-200' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      Vazão ➜ Dose
                    </button>
                  </div>
                </div>
                <div className="relative z-10">
                  <input 
                    type="number" 
                    step="0.01"
                    value={calcTab === 'doseToRate' ? inputDose : inputRate} 
                    onChange={e => calcTab === 'doseToRate' ? setInputDose(Number(e.target.value)) : setInputRate(Number(e.target.value))} 
                    className={`w-full p-10 rounded-[2.5rem] text-7xl font-black text-center bg-white border-2 border-transparent focus:ring-0 outline-none shadow-inner transition-all ${calcTab === 'doseToRate' ? 'focus:border-indigo-500 text-indigo-600' : 'focus:border-teal-500 text-teal-600'}`} 
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Results */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-12 rounded-[3rem] text-white text-center shadow-2xl transition-all duration-700 relative overflow-hidden flex flex-col items-center justify-center min-h-[320px] ${calcTab === 'doseToRate' ? 'bg-gradient-to-br from-indigo-600 to-blue-700' : 'bg-gradient-to-br from-teal-600 to-emerald-700'} ${isOutOfRange ? 'ring-4 ring-amber-400 ring-offset-4 ring-offset-slate-50' : ''}`}
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
                </div>

                {isOutOfRange && (
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-8 right-8 text-amber-300"
                  >
                    <AlertTriangle size={32} />
                  </motion.div>
                )}

                <div className="relative">
                  <div className="text-9xl font-black leading-none tracking-tighter drop-shadow-2xl">
                    {calcTab === 'doseToRate' ? resultRate : resultDose}
                  </div>
                  <div className="text-sm font-black uppercase mt-8 opacity-70 tracking-[0.4em] flex items-center justify-center gap-3">
                    <div className="w-10 h-px bg-white/30" />
                    {calcTab === 'doseToRate' ? 'mL/h' : selectedDrug.unit}
                    <div className="w-10 h-px bg-white/30" />
                  </div>
                </div>
                
                {isOutOfRange && (
                  <div className="mt-10 text-[11px] font-black bg-amber-400 text-amber-950 py-2 px-6 rounded-full shadow-lg uppercase tracking-[0.2em]">
                    Alerta: Fora da Faixa Pediátrica
                  </div>
                )}
              </motion.div>

              <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
                
                <div className="flex justify-between items-center relative">
                  <h3 className="text-[11px] font-black uppercase text-slate-500 tracking-[0.3em]">Resumo Técnico Ped</h3>
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500">
                    <CalcIcon size={18} />
                  </div>
                </div>
                
                <div className="space-y-5 relative">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400 font-medium tracking-tight">Concentração</span>
                    <span className="text-sm font-mono font-bold text-indigo-400">
                      {((mg * (massUnit === 'MG' && selectedDrug.unit.includes('mcg') ? 1000 : (massUnit === 'MCG' && selectedDrug.unit.includes('mg') ? 0.001 : 1))) / volume).toFixed(2)} 
                      <span className="text-[10px] text-slate-500 ml-1.5 font-sans">
                        {selectedDrug.unit.split('/')[0]} / mL
                      </span>
                    </span>
                  </div>
                  <div className="h-px bg-slate-800/50 w-full" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400 font-medium tracking-tight">Faixa Terapêutica</span>
                    <span className="text-sm font-mono font-bold text-slate-200">
                      {selectedDrug.minDose} <span className="text-slate-600 mx-1.5">→</span> {selectedDrug.maxDose}
                    </span>
                  </div>
                  <div className="h-px bg-slate-800/50 w-full" />
                  <div className="p-4 bg-slate-800/30 rounded-2xl border border-slate-800/50">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2">Nota de Segurança</span>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed italic">"{selectedDrug.note}"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
