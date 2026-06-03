import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, Sparkles, AlertCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface TheologicalChatProps {
  lessonId: string;
  courseId: string;
  lessonTitle: string;
  lessonContent: any;
}

const MAX_USES = 5;
const COOLDOWN_MS = 60 * 60 * 1000; // 1 hour

export function TheologicalChat({ lessonId, courseId, lessonTitle, lessonContent }: TheologicalChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [usageCount, setUsageCount] = useState(0);
  const [lastReset, setLastReset] = useState<number>(Date.now());
  const [timeToReset, setTimeToReset] = useState<number>(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load usage data
  useEffect(() => {
    const usageKey = `ia_usage_${courseId}`;
    const savedUsage = localStorage.getItem(usageKey);
    
    if (savedUsage) {
      const { count, timestamp } = JSON.parse(savedUsage);
      const now = Date.now();
      
      if (now - timestamp > COOLDOWN_MS) {
        setUsageCount(0);
        setLastReset(now);
        localStorage.setItem(usageKey, JSON.stringify({ count: 0, timestamp: now }));
      } else {
        setUsageCount(count);
        setLastReset(timestamp);
      }
    } else {
      const now = Date.now();
      setLastReset(now);
      localStorage.setItem(usageKey, JSON.stringify({ count: 0, timestamp: now }));
    }
  }, [courseId]);

  // Update countdown
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = COOLDOWN_MS - (now - lastReset);
      if (diff <= 0 && usageCount >= MAX_USES) {
        setUsageCount(0);
        setLastReset(now);
        localStorage.setItem(`ia_usage_${courseId}`, JSON.stringify({ count: 0, timestamp: now }));
        setTimeToReset(0);
      } else {
        setTimeToReset(Math.max(0, diff));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastReset, usageCount, courseId]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || usageCount >= MAX_USES) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          context: {
            title: lessonTitle,
            content: lessonContent
          },
          history: messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          }))
        })
      });

      const data = await response.json();
      
      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, { role: 'model', text: data.text }]);
      
      // Update usage
      const newCount = usageCount + 1;
      setUsageCount(newCount);
      localStorage.setItem(`ia_usage_${courseId}`, JSON.stringify({ count: newCount, timestamp: lastReset }));
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, tuve un problema al conectarme con los archivos teológicos. Por favor, intenta de nuevo más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const isLocked = usageCount >= MAX_USES;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white border border-[#E0D7C6] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1A2533] p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[#D1B17F]" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Tutor Teológico IA</h4>
                  <p className="text-[10px] text-gray-400">Basado en la lección actual</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF9F6]">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-12 h-12 bg-[#F0E6D2] rounded-full flex items-center justify-center text-[#1A2533]">
                    <MessageSquare size={24} />
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    "Bienvenido, alumno. Puedes preguntarme sobre los conceptos teológicos de hoy. ¿En qué puedo profundizar para tu edificación?"
                  </p>
                  <div className="grid grid-cols-1 gap-2 w-full mt-4">
                    <button 
                      onClick={() => setInput("¿Cómo se aplica esto a mi vida diaria?")}
                      className="text-[10px] bg-white border border-[#F0E6D2] p-2 rounded hover:bg-[#F0E6D2] transition-colors"
                    >
                      ¿Cómo aplico esta lección?
                    </button>
                    <button 
                      onClick={() => setInput("¿Qué otros versículos respaldan este tema?")}
                      className="text-[10px] bg-white border border-[#F0E6D2] p-2 rounded hover:bg-[#F0E6D2] transition-colors"
                    >
                      Versículos de respaldo
                    </button>
                  </div>
                </div>
              )}
              
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#1A2533] text-white rounded-br-none' 
                      : 'bg-white border border-[#F0E6D2] text-[#2C2C2C] rounded-bl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#F0E6D2] p-3 rounded-xl rounded-bl-none shadow-sm flex gap-1">
                    <div className="w-1.5 h-1.5 bg-[#1A2533] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-[#1A2533] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-[#1A2533] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Usage Counter */}
            <div className="px-4 py-2 bg-white border-t border-[#F0E6D2] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(MAX_USES)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2.5 h-1 rounded-full ${i < usageCount ? 'bg-amber-400' : 'bg-gray-200'}`} 
                    />
                  ))}
                </div>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tight">
                  Consultas: {usageCount}/{MAX_USES}
                </span>
              </div>
              
              {isLocked && (
                <div className="flex items-center gap-1 text-red-600 animate-pulse">
                  <Clock size={10} />
                  <span className="text-[9px] font-bold uppercase">{formatTime(timeToReset)}</span>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[#F0E6D2]">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                  placeholder={isLocked ? "Límite alcanzado..." : "Escribe tu duda teológica..."}
                  disabled={isLocked || isLoading}
                  className="w-full bg-[#FAF9F6] border border-[#F0E6D2] rounded-lg pl-4 pr-12 py-3 text-sm focus:ring-1 focus:ring-[#1A2533] focus:border-[#1A2533] outline-none transition-all resize-none min-h-[60px]"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading || isLocked}
                  className={`absolute right-3 bottom-3 p-1.5 rounded-md transition-all ${
                    !input.trim() || isLoading || isLocked
                      ? 'text-gray-300'
                      : 'text-[#1A2533] hover:bg-[#F0E6D2]'
                  }`}
                >
                  <Send size={20} />
                </button>
              </div>
              
              {isLocked && (
                <div className="mt-2 flex items-center gap-1.5 text-red-500">
                  <AlertCircle size={12} />
                  <p className="text-[10px] italic">Límite de la hora alcanzado. Podrás preguntar de nuevo en {formatTime(timeToReset)}.</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1A2533] text-white p-4 rounded-full shadow-lg flex items-center gap-2"
      >
        {isOpen ? <ChevronUp size={24} /> : <Sparkles size={24} />}
        {!isOpen && <span className="text-xs font-bold uppercase tracking-widest pr-2">Tutor IA</span>}
      </motion.button>
    </div>
  );
}
