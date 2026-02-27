import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, Info, AlertTriangle, Clock, Activity, ShieldAlert, Droplets } from 'lucide-react';

export default function VancomycinProtocol() {
  const [age, setAge] = useState<number>(60);
  const [weight, setWeight] = useState<number>(70);
  const [creatinine, setCreatinine] = useState<number>(1.0);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [isDialysis, setIsDialysis] = useState(false);

  const clearance = useMemo(() => {
    if (creatinine <= 0) return 0;
    let cl = ((140 - age) * weight) / (creatinine * 72);
    if (gender === 'female') cl *= 0.85;
    return Math.round(cl);
  }, [age, weight, creatinine, gender]);

  const attackDose = useMemo(() => {
    const factor = isDialysis ? 17.5 : 27.5; // Average of 15-20 and 25-30
    const dose = weight * factor;
    // Round to nearest 250mg for clinical practicality, max 2000mg
    return Math.min(2000, Math.round(dose / 250) * 250);
  }, [weight, isDialysis]);

  const maintenanceDose = useMemo(() => {
    if (isDialysis) return "500 a 1000mg após cada sessão de diálise";
    
    // Simplified logic based on Table 7
    if (clearance >= 100) return "1250mg a 1500mg cada 12h";
    if (clearance >= 80) return "1000mg a 1250mg cada 12h";
    if (clearance >= 60) return "750mg a 1000mg cada 12h";
    if (clearance >= 40) return "750mg a 1000mg cada 24h";
    if (clearance >= 20) return "500mg a 750mg cada 24h";
    return "500mg a 1000mg cada 48h (Monitorar NSV)";
  }, [clearance, isDialysis]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-amber-700 to-orange-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2 tracking-tight uppercase">Protocolo Vancomicina</h2>
          <p className="text-amber-100 max-w-2xl font-medium leading-relaxed">
            Monitoramento de níveis séricos e ajuste posológico conforme Hospital Sírio-Libanês.
          </p>
          <div className="mt-6 flex gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-sm">
              <span className="text-[10px] font-black uppercase block opacity-60">Alvo Terapêutico</span>
              <span className="text-lg font-black tracking-tighter">15 - 20 mg/L</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-sm">
              <span className="text-[10px] font-black uppercase block opacity-60">Dose Máxima</span>
              <span className="text-lg font-black tracking-tighter">2g / dose</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Calculator Side */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-200">
                <CalcIcon size={20} />
              </div>
              <h3 className="font-display font-black text-xl text-slate-800 uppercase tracking-tight">Calculadora de Dose</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Idade</label>
                <input 
                  type="number" 
                  value={age} 
                  onChange={e => setAge(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:border-amber-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Peso (kg)</label>
                <input 
                  type="number" 
                  value={weight} 
                  onChange={e => setWeight(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:border-amber-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Creatinina Sérica</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={creatinine} 
                  onChange={e => setCreatinine(Number(e.target.value))}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:border-amber-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Sexo</label>
                <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
                  <button 
                    onClick={() => setGender('male')}
                    className={`flex-1 py-3 text-[10px] font-black uppercase rounded-xl transition-all ${gender === 'male' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-400'}`}
                  >
                    Masc
                  </button>
                  <button 
                    onClick={() => setGender('female')}
                    className={`flex-1 py-3 text-[10px] font-black uppercase rounded-xl transition-all ${gender === 'female' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-400'}`}
                  >
                    Fem
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <input 
                type="checkbox" 
                checked={isDialysis} 
                onChange={e => setIsDialysis(e.target.checked)}
                className="w-5 h-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
              />
              <label className="text-xs font-black text-amber-900 uppercase tracking-widest">Paciente em Diálise</label>
            </div>

            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900 rounded-3xl text-white">
                <span className="text-[9px] font-black text-slate-500 uppercase block mb-1">Clearance Estimado</span>
                <span className="text-2xl font-black text-amber-400">{isDialysis ? 'N/A' : `${clearance} mL/min`}</span>
              </div>
              <div className="p-4 bg-amber-600 rounded-3xl text-white shadow-lg shadow-amber-200">
                <span className="text-[9px] font-black text-amber-200 uppercase block mb-1">Dose de Ataque</span>
                <span className="text-2xl font-black">{attackDose} mg</span>
                <span className="text-[9px] block opacity-70 mt-1">25-30 mg/kg peso atual</span>
              </div>
            </div>

            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-2">Sugestão de Manutenção</span>
              <p className="text-lg font-black text-emerald-900 leading-tight">{maintenanceDose}</p>
              <p className="text-[10px] text-emerald-600 mt-2 font-medium italic">*Sempre validar com o nível sérico (vale) antes da 4ª dose.</p>
            </div>
          </motion.div>
        </div>

        {/* Info Side */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <Activity size={20} />
              </div>
              <h3 className="font-display font-black text-xl text-slate-800 uppercase tracking-tight">Ajuste por Nível Sérico</h3>
            </div>

            <div className="space-y-3">
              {[
                { range: 'Até 9,9 mg/L', action: 'Aumentar dose em 50%', color: 'text-red-600' },
                { range: '10 - 14,9 mg/L', action: 'Aumentar dose em 25%', color: 'text-amber-600' },
                { range: '15 - 20,9 mg/L', action: 'Manter a dose', color: 'text-emerald-600' },
                { range: '21 - 24,9 mg/L', action: 'Reduzir dose em 25%', color: 'text-amber-600' },
                { range: '25 - 30 mg/L', action: 'Reduzir dose em 50%', color: 'text-red-600' },
                { range: '> 31 mg/L', action: 'Suspender e reavaliar em 24h', color: 'text-red-700 font-black' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-700">{item.range}</span>
                  <span className={`text-[10px] font-black uppercase ${item.color}`}>{item.action}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <ShieldAlert size={18} className="text-amber-400" />
                <h4 className="text-xs font-black uppercase tracking-widest">Nefrotoxicidade</h4>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                Monitorar creatinina diariamente. Risco aumentado se uso concomitante de:
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-300">
                <span>• Aminoglicosídeos</span>
                <span>• Anfotericina B</span>
                <span>• Polimixinas</span>
                <span>• Contrastes Iodados</span>
                <span>• AINES</span>
                <span>• Tacrolimus</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mb-16 -mr-16" />
          </motion.div>

          <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex gap-4 items-start">
            <Info size={20} className="text-blue-600 shrink-0 mt-1" />
            <div className="text-[11px] text-blue-800 font-medium leading-relaxed">
              <span className="font-black uppercase block mb-1">Coleta do Vale</span>
              Realizar a coleta imediatamente antes da próxima dose (até 1h antes). A primeira coleta deve ocorrer antes da 4ª dose (estado de equilíbrio).
            </div>
          </div>
        </div>
      </div>

      {/* Dilution Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
            <Droplets size={20} />
          </div>
          <h3 className="font-display font-black text-xl text-slate-800 uppercase tracking-tight">Diluição e Infusão</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-100">
                <th className="pb-4 px-4">Dose Calculada</th>
                <th className="pb-4 px-4">Volume Recomendado</th>
                <th className="pb-4 px-4">Volume Mínimo (CVC/Restrição)</th>
                <th className="pb-4 px-4">Tempo de Infusão</th>
              </tr>
            </thead>
            <tbody className="text-xs font-bold text-slate-700">
              <tr className="border-b border-slate-50">
                <td className="py-4 px-4">500 a 1000 mg</td>
                <td className="py-4 px-4">250 mL</td>
                <td className="py-4 px-4">100 mL</td>
                <td className="py-4 px-4">60 minutos</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-4 px-4">1250 a 1500 mg</td>
                <td className="py-4 px-4">250 mL</td>
                <td className="py-4 px-4">150 mL</td>
                <td className="py-4 px-4">90 minutos</td>
              </tr>
              <tr>
                <td className="py-4 px-4">1750 a 2000 mg</td>
                <td className="py-4 px-4">350 mL</td>
                <td className="py-4 px-4">200 mL</td>
                <td className="py-4 px-4">120 minutos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-red-50 rounded-2xl border border-red-100 flex gap-3 items-center">
          <AlertTriangle size={18} className="text-red-500 shrink-0" />
          <p className="text-[10px] text-red-800 font-bold leading-tight">
            Risco de Síndrome do Homem Vermelho se infusão rápida. Manter velocidade ≤ 15 mg/minuto.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
