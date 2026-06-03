import React from 'react';
import { Quote, BookMarked, Info } from 'lucide-react';

interface AcademicPanelProps {
  commentaries: { author: string; text: string }[];
}

export function AcademicPanel({ commentaries }: AcademicPanelProps) {
  if (!commentaries || commentaries.length === 0) return null;

  return (
    <section className="bg-white border border-[#E0D7C6] rounded-xl overflow-hidden shadow-sm flex flex-col font-sans mb-6">
      <div className="bg-[#1A2533] border-b border-[#2C3E50] px-5 py-3 flex items-center gap-2">
        <Info size={16} className="text-[#E0D7C6]" />
        <h3 className="text-xs font-bold text-[#E0D7C6] uppercase tracking-[0.15em]">Panel Académico: Comentarios Bíblicos</h3>
      </div>

      <div className="p-6 bg-[#FDFCFB]">
        <div className="space-y-8">
          {commentaries.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <Quote size={20} className="text-[#7F1D1D] opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex-1">
                <p className="text-[#2C2C2C] font-serif italic text-base leading-relaxed border-l-2 border-[#F0E6D2] pl-4 mb-2">
                  "{item.text}"
                </p>
                <div className="pl-4 flex items-center gap-2">
                  <div className="h-[1px] w-4 bg-[#7F1D1D] opacity-30"></div>
                  <span className="text-[10px] font-bold text-[#7F1D1D] uppercase tracking-widest">
                    {item.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-[#F0E6D2] flex items-center gap-3 text-gray-400">
          <BookMarked size={14} />
          <p className="text-[10px] font-sans uppercase tracking-widest font-bold">
            Recursos de Investigación Teológica - Seminario Bíblico
          </p>
        </div>
      </div>
    </section>
  );
}
