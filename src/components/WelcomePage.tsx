import React from 'react';

export function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] dark:bg-[#121212] transition-colors duration-500 flex flex-col items-center justify-center p-6 text-center">
      <div className="animate-in fade-in zoom-in duration-1000 flex flex-col items-center gap-6">
        <div className="w-24 h-24 bg-[#7F1D1D] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#7F1D1D]/20">
          <span className="text-4xl text-white font-bold">📖</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A2533] dark:text-stone-100 font-sans tracking-tight">
          Bienvenido al Seminario
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md font-serif">
          Preparando tu espacio de estudio para profundizar en la Palabra.
        </p>
        <div className="w-12 h-1 bg-[#E0D7C6] dark:bg-zinc-700 mt-4 rounded-full" />
      </div>
    </div>
  );
}
