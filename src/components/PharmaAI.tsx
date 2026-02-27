import React, { useState } from 'react';
import { ClipboardPaste, Sparkles, Copy, Trash2, FileText, BrainCircuit } from 'lucide-react';
import { analyzeClinicalData } from '../services/gemini';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';

export default function PharmaAI() {
  const [rawData, setRawData] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!rawData.trim()) return;
    setIsGenerating(true);
    setError(null);
    try {
      const result = await analyzeClinicalData(rawData);
      setAiOutput(result);
    } catch (e: any) {
      setError(e.message || "Falha na comunicação com a IA. Verifique sua conexão.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(aiOutput);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-240px)] min-h-[600px]">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col gap-6 shadow-xl shadow-slate-200/40"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              <ClipboardPaste size={18} />
            </div>
            <h2 className="font-display font-bold text-xl text-slate-800 tracking-tight">Entrada de Dados</h2>
          </div>
          <button 
            onClick={() => setRawData('')}
            className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            title="Limpar"
          >
            <Trash2 size={16} />
          </button>
        </div>
        
        <div className="flex-1 relative group">
          <textarea 
            value={rawData} 
            onChange={e => setRawData(e.target.value)} 
            className="w-full h-full p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl focus:border-blue-500 focus:bg-white focus:ring-0 outline-none font-mono text-sm resize-none transition-all custom-scrollbar leading-relaxed" 
            placeholder="Cole aqui: Evoluções médicas, prescrições, resultados de exames laboratoriais ou notas de enfermagem..."
          />
          <div className="absolute bottom-4 right-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest pointer-events-none group-focus-within:opacity-0 transition-opacity">
            {rawData.length} caracteres
          </div>
        </div>
        
        <button 
          onClick={handleAnalyze} 
          disabled={isGenerating || !rawData.trim()} 
          className="group relative bg-slate-900 disabled:bg-slate-200 text-white py-5 rounded-2xl font-display font-bold uppercase tracking-widest shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 hover:bg-blue-600 hover:shadow-blue-200 transition-all active:scale-[0.98] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center gap-3">
            {isGenerating ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Gerar Evolução Farmacêutica
              </>
            )}
          </div>
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col gap-6 shadow-xl shadow-slate-200/40 relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
              <FileText size={18} />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-800 tracking-tight">Relatório Clínico</h3>
          </div>
          {aiOutput && (
            <button 
              onClick={copyToClipboard} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
            >
              <Copy size={14} /> Copiar
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar z-10">
          <AnimatePresence mode="wait">
            {isGenerating ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center gap-6 text-slate-500"
              >
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-500/10 border-t-blue-500 rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BrainCircuit className="w-6 h-6 text-blue-500/40" />
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-500/80 animate-pulse">Analisando Evidências</p>
                  <p className="text-[10px] text-slate-600 font-medium max-w-[200px]">Cruzando dados com protocolos UpToDate e Lexicomp...</p>
                </div>
              </motion.div>
            ) : aiOutput ? (
              <motion.div 
                key="content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose-report max-w-none"
              >
                <ReactMarkdown>{aiOutput}</ReactMarkdown>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 text-center space-y-4">
                <div className="w-16 h-16 bg-slate-800/50 rounded-3xl flex items-center justify-center text-slate-700">
                  <Sparkles size={32} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-500">Pronto para Analisar</p>
                  <p className="text-xs text-slate-600 max-w-[240px]">Insira os dados clínicos à esquerda para gerar uma evolução estruturada com IA.</p>
                </div>
                {error && (
                  <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-[10px] font-bold uppercase tracking-widest">
                    {error}
                  </div>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
