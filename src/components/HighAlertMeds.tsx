import React, { useState } from 'react';
import { HIGH_ALERT_MEDS } from '../data/highAlertMedsData';
import { motion } from 'motion/react';
import { Search, AlertTriangle, Droplets, Clock, ShieldCheck } from 'lucide-react';

export default function HighAlertMeds() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMeds = HIGH_ALERT_MEDS.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group"
      >
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Buscar medicamento de alta vigilância..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full pl-16 pr-8 py-6 bg-white border-2 border-slate-100 rounded-[2rem] font-bold text-lg shadow-xl shadow-slate-200/40 focus:border-blue-500 outline-none transition-all"
        />
      </motion.div>

      {/* Meds List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredMeds.map((med, idx) => (
          <motion.div 
            key={med.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden group"
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 shadow-inner">
                    <AlertTriangle size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">{med.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{med.presentation}</p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">
                  Alta Vigilância
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Droplets size={14} className="text-blue-500" />
                    Diluição
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl text-sm font-bold text-slate-700 border border-slate-100">
                    {med.dilution}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <Clock size={14} className="text-emerald-500" />
                    Estabilidade
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl text-sm font-bold text-slate-700 border border-slate-100">
                    {med.stability}
                  </div>
                </div>

                <div className="space-y-2 lg:col-span-2">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-indigo-500" />
                    Administração
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl text-sm font-bold text-slate-700 border border-slate-100">
                    {med.administration}
                  </div>
                </div>
              </div>

              {med.reconstitution && (
                <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4 items-center">
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest whitespace-nowrap">Reconstituição:</div>
                  <div className="text-sm font-bold text-blue-800">{med.reconstitution}</div>
                </div>
              )}

              <div className="mt-6 p-6 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Notas Clínicas & Segurança</div>
                  <p className="text-sm font-medium leading-relaxed text-slate-300 italic">
                    "{med.notes}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Conc. Máxima:</span>
                    <span className="text-sm font-black text-blue-400">{med.maxConc}</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
