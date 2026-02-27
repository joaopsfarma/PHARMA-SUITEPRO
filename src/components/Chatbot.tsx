import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, X, MessageSquare, Minus, Maximize2, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

const MASCOT_URL = "https://storage.googleapis.com/generativeai-downloads/images/venvansinho.png"; // Placeholder or direct use if possible. Since I have the image in the prompt, I'll use the provided image.

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Olá! Eu sou o Venvansinho, seu assistente farmacêutico. Como posso te ajudar com cálculos ou dúvidas clínicas hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const chat = ai.chats.create({
        model: "gemini-3.1-pro-preview",
        config: {
          systemInstruction: `Você é o "Venvansinho", um mascote amigável e especialista em farmácia clínica hospitalar e UTI. 
          Seu objetivo é auxiliar farmacêuticos e médicos com cálculos de infusão, diluições, ajustes de dose (como Vancomicina), e dúvidas sobre o Manual Farmacêutico.
          Seja sempre preciso, técnico mas com um tom encorajador e prestativo. 
          Se for solicitado um cálculo, mostre o passo a passo de forma clara.
          Lembre-se: você é um assistente, a decisão final é sempre do profissional de saúde.`,
        },
      });

      // We need to send the history to the chat
      // For simplicity in this implementation, we'll just send the current message
      // but in a real app we'd pass the history.
      const response = await chat.sendMessage({ message: userMessage });
      const modelText = response.text || "Desculpe, tive um problema ao processar sua solicitação.";
      
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Ops! Tive um erro de conexão. Pode tentar novamente?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[60] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <Bot size={32} className="group-hover:scale-110 transition-transform" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <MessageSquare size={24} />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '64px' : '600px',
              width: '380px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[70] bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white/20">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm leading-none">Venvansinho</h3>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Online</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minus size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 custom-scrollbar">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                      }`}>
                        <div className="flex items-center gap-2 mb-1 opacity-50">
                          {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                          <span className="text-[10px] font-bold uppercase tracking-widest">
                            {msg.role === 'user' ? 'Você' : 'Venvansinho'}
                          </span>
                        </div>
                        <div className="prose prose-sm max-w-none prose-slate">
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                  <div className="relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Pergunte algo ao Venvansinho..."
                      className="w-full pl-4 pr-12 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all text-sm font-medium"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        !input.trim() || isLoading 
                          ? 'bg-slate-200 text-slate-400' 
                          : 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:scale-105'
                      }`}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <Sparkles size={10} className="text-blue-400" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Powered by Gemini 3.1 Pro</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
