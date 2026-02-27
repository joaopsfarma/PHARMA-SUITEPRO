import React from 'react';
import { motion } from 'motion/react';
import { Shield, Activity, ClipboardList, AlertCircle } from 'lucide-react';

export default function ProceduralSedation() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-4 tracking-tight">Sedação para Procedimentos</h2>
          <p className="text-blue-100 max-w-2xl font-medium leading-relaxed">
            Recomendações baseadas no sistema GRADE para sedação segura em crianças e adolescentes por não anestesiologistas.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Classification Table */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
              <Activity size={20} />
            </div>
            <h3 className="font-display font-black text-xl text-slate-800 uppercase tracking-tight">Níveis de Sedação</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { level: 'Mínima (Ansiólise)', resp: 'Normal', airway: 'Pérvia', vent: 'Espontânea', cv: 'Preservada' },
              { level: 'Moderada', resp: 'Despertar ao comando', airway: 'Pérvia', vent: 'Espontânea', cv: 'Preservada' },
              { level: 'Profunda', resp: 'Resposta a estímulos dolorosos', airway: 'Pode ser necessário suporte', vent: 'Pode haver hipoventilação', cv: 'Frequentemente preservada' },
              { level: 'Anestesia Geral', resp: 'Sem despertar', airway: 'Necessário suporte', vent: 'Apneia / Ventilação Positiva', cv: 'Pode estar comprometida' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="font-black text-blue-600 mb-2">{item.level}</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px]">
                  <div className="text-slate-400 font-bold uppercase">Responsividade:</div>
                  <div className="text-slate-700 font-bold">{item.resp}</div>
                  <div className="text-slate-400 font-bold uppercase">Via Aérea:</div>
                  <div className="text-slate-700 font-bold">{item.airway}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Preparation SAMPLE */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
              <ClipboardList size={20} />
            </div>
            <h3 className="font-display font-black text-xl text-slate-800 uppercase tracking-tight">Preparo (SAMPLE)</h3>
          </div>

          <div className="space-y-3">
            {[
              { letter: 'S', title: 'Sinais e Sintomas', desc: 'Alteração de consciência, instabilidade circulatória, vômitos.' },
              { letter: 'A', title: 'Alergias', desc: 'Medicamentos, alimentos, asma.' },
              { letter: 'M', title: 'Medicamentos', desc: 'Anticonvulsivantes, sedativos, diuréticos.' },
              { letter: 'P', title: 'Passado Médico', desc: 'Doenças neurológicas, cardiopatias, prematuridade.' },
              { letter: 'L', title: 'Líquidos', desc: 'Última refeição (Regra 2-4-6).' },
              { letter: 'E', title: 'Eventos', desc: 'A situação que indicou a sedação.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors group">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  {item.letter}
                </div>
                <div>
                  <div className="font-black text-slate-800 text-sm">{item.title}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fasting Rules */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
            <Shield size={20} />
          </div>
          <h3 className="font-display font-black text-xl text-amber-900 uppercase tracking-tight">Regra de Jejum (2-4-6)</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-amber-200/50">
            <div className="text-2xl font-black text-amber-600 mb-1">2 Horas</div>
            <div className="text-xs font-bold text-slate-600">Líquidos claros (água, chá, suco coado).</div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-amber-200/50">
            <div className="text-2xl font-black text-amber-600 mb-1">4 Horas</div>
            <div className="text-xs font-bold text-slate-600">Leite materno.</div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-amber-200/50">
            <div className="text-2xl font-black text-amber-600 mb-1">6 Horas</div>
            <div className="text-xs font-bold text-slate-600">Sólidos, fórmulas ou outros leites.</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
