import React from 'react';
import { X, Edit3 } from 'lucide-react';
import { DigitalNotebook } from './DigitalNotebook';
import { motion } from 'motion/react';

interface NotebookModalProps {
  onClose: () => void;
}

export function NotebookModal({ onClose }: NotebookModalProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        className="bg-white border border-transparent rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col relative overflow-hidden"
      >
        <div className="flex justify-between items-center p-4 border-b border-[#E0D7C6] sticky top-0 bg-white z-10 shrink-0">
          <h2 className="text-xl font-bold text-[#1A2533] uppercase tracking-widest font-sans flex items-center gap-2">
            <Edit3 size={20} className="text-[#7F1D1D]" /> 
            Cuaderno Digital
          </h2>
          <button 
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-hidden">
          {/* Reuse the DigitalNotebook component, but remove some of the margin/borders from it if possible, or just render it inside */}
          <div className="h-full">
            <DigitalNotebook isModal={true} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
