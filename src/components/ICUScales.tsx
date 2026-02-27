import React from 'react';
import { motion } from 'motion/react';
import { Activity, Thermometer, Brain, Info } from 'lucide-react';

export default function ICUScales() {
  return (
    <div className="space-y-12">
      {/* RASS Scale */}
      <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Brain size={20} />
          </div>
          <div>
            <h2 className="font-display font-black text-xl text-slate-900 tracking-tight">Escala RASS</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Richmond Agitation-Sedation Scale</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { score: '+4', label: 'Combativo', desc: 'Abertamente combativo, violento, perigo imediato para a equipe.', color: 'bg-red-500' },
            { score: '+3', label: 'Muito Agitado', desc: 'Puxa ou retira tubos ou cateteres; agressivo.', color: 'bg-red-400' },
            { score: '+2', label: 'Agitado', desc: 'Movimentos não intencionais frequentes, luta contra o ventilador.', color: 'bg-orange-400' },
            { score: '+1', label: 'Ansioso', desc: 'Ansioso, mas movimentos não são agressivos ou enérgicos.', color: 'bg-amber-400' },
            { score: '0', label: 'Alerta e Calmo', desc: 'Desperto e calmo.', color: 'bg-emerald-500' },
            { score: '-1', label: 'Sonolento', desc: 'Não completamente desperto, mas mantém-se acordado à voz (>10s).', color: 'bg-blue-300' },
            { score: '-2', label: 'Sedação Leve', desc: 'Acorda brevemente à voz (<10s).', color: 'bg-blue-400' },
            { score: '-3', label: 'Sedação Moderada', desc: 'Movimento ou abertura ocular à voz (sem contato visual).', color: 'bg-blue-500' },
            { score: '-4', label: 'Sedação Profunda', desc: 'Sem resposta à voz, mas com movimento à estimulação física.', color: 'bg-indigo-600' },
            { score: '-5', label: 'Não Desperto', desc: 'Sem resposta à voz ou estimulação física.', color: 'bg-slate-900' },
          ].map((item) => (
            <div key={item.score} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
              <div className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-110 transition-transform`}>
                {item.score}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-tight">{item.label}</h4>
                <p className="text-[11px] text-slate-500 leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-3">
          <Info size={16} className="text-blue-600 mt-0.5 shrink-0" />
          <p className="text-[11px] text-blue-800 font-medium leading-relaxed">
            <strong>Alvo AMIB:</strong> RASS 0 a -2 para sedação leve. RASS -3 a -5 para sedação profunda (necessária em SDRA grave ou uso de BNM).
          </p>
        </div>
      </section>

      {/* BPS Scale */}
      <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
            <Activity size={20} />
          </div>
          <div>
            <h2 className="font-display font-black text-xl text-slate-900 tracking-tight">Escala BPS</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Behavioral Pain Scale</p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              title: 'Expressão Facial',
              items: [
                { pts: 1, label: 'Relaxada' },
                { pts: 2, label: 'Parcialmente contraída (testa franzida)' },
                { pts: 3, label: 'Completamente contraída (pálpebras fechadas)' },
                { pts: 4, label: 'Careta' },
              ]
            },
            {
              title: 'Movimentos dos Membros Superiores',
              items: [
                { pts: 1, label: 'Sem movimentos' },
                { pts: 2, label: 'Parcialmente fletidos' },
                { pts: 3, label: 'Totalmente fletidos com flexão dos dedos' },
                { pts: 4, label: 'Permanentemente fletidos' },
              ]
            },
            {
              title: 'Adaptação ao Ventilador',
              items: [
                { pts: 1, label: 'Tolera a ventilação' },
                { pts: 2, label: 'Tosse, mas tolera a ventilação na maior parte do tempo' },
                { pts: 3, label: 'Luta contra o ventilador' },
                { pts: 4, label: 'Incapaz de controlar a ventilação' },
              ]
            }
          ].map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{section.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {section.items.map((item) => (
                  <div key={item.label} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-2">
                    <span className="text-xs font-black text-emerald-600">{item.pts} Ponto{item.pts > 1 ? 's' : ''}</span>
                    <p className="text-[11px] text-slate-700 font-bold leading-tight">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-3">
            <Info size={16} className="text-emerald-600 mt-0.5 shrink-0" />
            <p className="text-[11px] text-emerald-800 font-medium leading-relaxed">
              <strong>Objetivo AMIB:</strong> BPS &lt; 3 pontos. Pontuações &gt; 5 são consideradas inadequadas e requerem intervenção analgésica.
            </p>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-3">
            <Thermometer size={16} className="text-amber-600 mt-0.5 shrink-0" />
            <p className="text-[11px] text-amber-800 font-medium leading-relaxed">
              <strong>Escala CPOT:</strong> Valor &gt; 3 indica dor significativa em pacientes incapazes de se comunicar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
