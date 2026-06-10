import { useState, useEffect } from 'react';
import { Lesson, Course, UserProgress } from '../types';
import { FinalExam } from './FinalExam';
import { LessonNotes } from './LessonNotes';
import { AcademicPanel } from './AcademicPanel';
import { ReinforcementVerses } from './ReinforcementVerses';
import { LessonAssignments } from './LessonAssignments';
import { ReflectionActivities } from './ReflectionActivities';
import { FormattedContent } from './FormattedContent';
import { ArrowLeft, BookOpen, CheckCircle2 } from 'lucide-react';

interface LessonViewerProps {
  key?: string | number;
  lesson: Lesson;
  course: Course;
  progress: UserProgress;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export function LessonViewer({ lesson, course, progress, onComplete, onBack }: LessonViewerProps) {
  const isPreviouslyCompleted = !!progress.completedLessons[lesson.id];
  
  return (
    <div className="flex flex-col min-h-full">
      <header className="h-16 bg-white dark:bg-[#1a1a1a] border-b border-[#E0D7C6] dark:border-zinc-800 px-4 md:px-8 flex items-center justify-between shadow-sm sticky top-0 z-20 shrink-0 transition-colors">
        <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-[#1A2533] dark:hover:text-stone-100 transition-colors font-sans text-xs font-semibold uppercase tracking-widest mr-1 md:mr-2 shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Volver</span>
          </button>
          <div className="h-4 w-px bg-[#E0D7C6] dark:bg-zinc-800 hidden sm:block shrink-0"></div>
          <span className="text-xs font-semibold text-[#1A2533] dark:text-stone-100 truncate">Día {lesson.day}: {lesson.title}</span>
        </div>
        <div className="flex items-center gap-3 md:gap-6 shrink-0">
          <button 
             className="px-3 md:px-4 py-2 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors bg-[#7F1D1D] text-white hover:bg-red-800 font-sans"
             onClick={() => {
                const targetId = lesson.finalExam && lesson.finalExam.length > 0 ? 'final-exam-section' : 'completion-section';
                const examElement = document.getElementById(targetId);
                if (examElement) {
                   examElement.scrollIntoView({ behavior: 'smooth' });
                }
             }}
          >
             <span>{lesson.finalExam && lesson.finalExam.length > 0 ? 'Examen Final' : 'Completar Clase'}</span>
          </button>
        </div>
      </header>

      <div className="flex-1 p-4 md:p-8 flex gap-8 bg-[#FDFCFB] dark:bg-[#121212] justify-center transition-colors">
        <div className="flex-1 flex flex-col gap-6 max-w-[800px] w-full">
          <article className="bg-white dark:bg-[#1a1a1a] border border-[#E0D7C6] dark:border-zinc-800 rounded-xl p-6 md:p-10 shadow-sm flex flex-col gap-8 relative font-serif text-[#2C2C2C] dark:text-stone-100 transition-colors">
            <h2 className="text-3xl text-[#1A2533] dark:text-stone-100 mb-2 border-b border-[#F0E6D2] dark:border-zinc-800 pb-4 font-bold">{lesson.title}</h2>
            
            {lesson.baseVerse && (
              <div className="bg-[#FAF9F6] dark:bg-zinc-900 border-l-4 border-[#1A2533] dark:border-stone-400 p-6 mb-8 mt-2 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="flex items-center gap-2 text-[#7F1D1D] dark:text-red-400 mb-3">
                  <BookOpen size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Versículo Base</span>
                </div>
                <p className="text-xl font-serif italic text-[#1A2533] dark:text-stone-100 mb-3 leading-relaxed">
                  "{lesson.baseVerse.text}"
                </p>
                <p className="text-sm font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-tighter text-right">— {lesson.baseVerse.reference}</p>
              </div>
            )}

            <div className="space-y-8">
              {lesson.blocks
                .filter(block => block.type !== 'control')
                .map((block) => {
                  if (block.type === 'text') {
                    return (
                      <div key={block.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <FormattedContent 
                          className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg"
                          content={block.content}
                        />
                      </div>
                    );
                  }

                  if (block.type === 'note') {
                    return (
                      <div key={block.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-[#FAF9F6] dark:bg-zinc-900/60 border-2 border-dashed border-[#D1B17F] rounded-xl p-6 md:p-8 relative overflow-hidden my-4 group">
                          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BookOpen size={64} className="text-[#1A2533] dark:text-stone-300" />
                          </div>
                          <h4 className="text-sm font-bold text-[#7F1D1D] dark:text-red-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <CheckCircle2 size={16} />
                            Puntos Clave para tu Libreta
                          </h4>
                          <FormattedContent 
                            className="text-[#1A2533] dark:text-stone-100 leading-relaxed font-sans text-base prose prose-sm max-w-none"
                            content={block.content}
                          />
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          </article>

          {lesson.commentaries && lesson.commentaries.length > 0 && (
            <AcademicPanel commentaries={lesson.commentaries} />
          )}

          {lesson.verses && lesson.verses.length > 0 && (
            <ReinforcementVerses verses={lesson.verses} />
          )}

          {lesson.assignments && lesson.assignments.length > 0 && (
            <LessonAssignments lessonId={lesson.id} courseId={course.id} assignments={lesson.assignments} />
          )}

          <ReflectionActivities lessonId={lesson.id} courseId={course.id} />

          <LessonNotes lessonId={lesson.id} courseId={course.id} />

          {lesson.finalExam && lesson.finalExam.length > 0 ? (
             <div id="final-exam-section" className="mt-8 mb-20 animate-in fade-in duration-1000 slide-in-from-bottom-8">
               <FinalExam 
                 questions={lesson.finalExam} 
                 isPreviouslyCompleted={isPreviouslyCompleted}
                 previousScore={progress.completedLessons[lesson.id]?.score}
                 onComplete={onComplete} 
               />
             </div>
          ) : (
             <div id="completion-section" className="mt-8 mb-20 animate-in fade-in duration-1000 slide-in-from-bottom-8">
               <div className="bg-white dark:bg-[#1a1a1a] border border-[#E0D7C6] dark:border-zinc-800 rounded-xl p-8 text-center shadow-sm">
                 <CheckCircle2 className="mx-auto text-emerald-500 mb-3" size={40} />
                 <h3 className="font-bold text-lg text-[#1A2533] dark:text-stone-100 mb-2 font-serif">¡Ha finalizado la lectura de esta clase!</h3>
                 <p className="text-sm text-gray-500 dark:text-zinc-400 mb-6 max-w-md mx-auto font-sans">No hay evaluaciones teóricas adicionales para esta clase. Presione el botón de abajo para acreditar de forma perpetua su participación.</p>
                 {isPreviouslyCompleted ? (
                    <div className="inline-block bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest border border-emerald-200 dark:border-emerald-900/40 font-sans">
                      ¡Clase Completada con Éxito! ✅
                    </div>
                 ) : (
                    <button 
                      onClick={() => onComplete(100)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded text-sm font-bold tracking-widest uppercase transition-all duration-200 shadow font-sans cursor-pointer fill-stone-100"
                    >
                      Completar Clase y Avanzar
                    </button>
                 )}
               </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
