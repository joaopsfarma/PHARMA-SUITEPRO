import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Minus, Maximize2, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const MASCOT_URL = "https://storage.googleapis.com/generativeai-downloads/images/venvansinho.png"; // Placeholder or direct use if possible. Since I have the image in the prompt, I'll use the provided image.

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Olá! Eu sou o Venvansinho, seu assistente farmacêutico. Como posso te ajudar com cálculos ou dúvidas clínicas hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showKeyButton, setShowKeyButton] = useState(false);
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
      setShowKeyButton(false);
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to connect to AI server.");
      }

      const data = await response.json();
      const modelText = data.text || "Desculpe, tive um problema ao processar sua solicitação.";
      
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      
      const isKeyError = error.message?.includes("API key") || 
                         error.message?.includes("not found") || 
                         error.message?.includes("403") ||
                         error.message?.includes("401");

      if (isKeyError) {
        setShowKeyButton(true);
      }
      
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: isKeyError 
          ? "Ops! Parece que a chave de API do Gemini não está configurada corretamente no servidor. Clique no botão abaixo para configurar (apenas no ambiente de desenvolvimento)."
          : "Ops! Tive um erro de conexão com o servidor. Por favor, tente novamente em instantes." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenKeySelector = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setMessages(prev => [...prev, { role: 'model', text: "Chave de API selecionada! Pode tentar enviar sua mensagem novamente agora." }]);
      setShowKeyButton(false);
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
                        {msg.role === 'model' && showKeyButton && i === messages.length - 1 && (
                          <button
                            onClick={handleOpenKeySelector}
                            className="mt-3 w-full py-2 bg-blue-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                          >
                            <Sparkles size={12} />
                            Configurar Chave de API
                          </button>
                        )}
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
