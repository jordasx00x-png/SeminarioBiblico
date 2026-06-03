import React from 'react';
import { BookOpen, Bookmark } from 'lucide-react';

interface ReinforcementVersesProps {
  verses: { reference: string; text: string }[];
}

export function ReinforcementVerses({ verses }: ReinforcementVersesProps) {
  if (!verses || verses.length === 0) return null;

  return (
    <section className="bg-white border border-[#E0D7C6] rounded-xl overflow-hidden shadow-sm flex flex-col font-sans mb-6">
      <div className="bg-[#7F1D1D] border-b border-[#991B1B] px-5 py-3 flex items-center gap-2">
        <BookOpen size={16} className="text-[#FDFCFB]" />
        <h3 className="text-xs font-bold text-[#FDFCFB] uppercase tracking-[0.15em]">Lecturas y Versículos de Refuerzo</h3>
      </div>

      <div className="p-6 bg-[#FEFCE8]/30">
        <div className="space-y-6">
          {verses.map((verse, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Bookmark size={14} className="text-[#7F1D1D]" />
                <span className="text-sm font-bold text-[#1A2533] uppercase tracking-tight">{verse.reference}</span>
              </div>
              <p className="text-[#2C2C2C] font-serif text-lg leading-relaxed italic border-l-4 border-[#7F1D1D]/20 pl-4 py-1">
                "{verse.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
