import { useState, useEffect } from 'react';
import { Lesson, Course, UserProgress } from '../types';
import { formatMD } from '../lib/utils';
import { FinalExam } from './FinalExam';
import { LessonNotes } from './LessonNotes';
import { AcademicPanel } from './AcademicPanel';
import { ReinforcementVerses } from './ReinforcementVerses';
import { LessonAssignments } from './LessonAssignments';
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
  
  const [unlockedBlocksCount, setUnlockedBlocksCount] = useState(
    isPreviouslyCompleted ? lesson.blocks.length : 1
  );
  
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExam, setShowExam] = useState(isPreviouslyCompleted);

  useEffect(() => {
    const completed = !!progress.completedLessons[lesson.id];
    setUnlockedBlocksCount(completed ? lesson.blocks.length : 1);
    setSelectedAnswers({});
    setShowExam(completed);
  }, [lesson.id, progress.completedLessons]);

  const handleControlAnswer = (blockId: string, questionId: string, answerIndex: number, correctIndex: number) => {
    if (selectedAnswers[questionId] !== undefined) return; 
    
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    
    if (answerIndex === correctIndex) {
      setTimeout(() => {
         const newCount = unlockedBlocksCount + 1;
         setUnlockedBlocksCount(newCount);
         
         if (newCount === lesson.blocks.length) {
            setTimeout(() => setShowExam(true), 1000);
         }
      }, 700);
    }
  };

  const unlockedBlocks = lesson.blocks.slice(0, unlockedBlocksCount);

  return (
    <div className="flex flex-col min-h-full">
      <header className="h-16 bg-white border-b border-[#E0D7C6] px-4 md:px-8 flex items-center justify-between shadow-sm sticky top-0 z-20 shrink-0">
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-[#1A2533] transition-colors font-sans text-xs md:text-sm font-semibold uppercase tracking-widest mr-2"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Volver</span>
          </button>
          <div className="h-4 w-px bg-[#E0D7C6] hidden sm:block"></div>
          <span className="text-[10px] md:text-xs font-sans text-gray-500 uppercase tracking-widest hidden lg:inline">{course.title}</span>
          <span className="text-gray-400 hidden lg:inline">/</span>
          <span className="text-xs md:text-sm font-semibold text-[#1A2533] truncate">Día {lesson.day}: {lesson.title}</span>
        </div>
        <div className="flex items-center gap-6">
          {isPreviouslyCompleted && (
            <div className="text-right hidden sm:block">
              <div className="text-[10px] uppercase text-gray-400 font-sans">Progreso Diario</div>
              <div className="text-sm font-bold text-[#7F1D1D]">100% Completado</div>
            </div>
          )}
          <button 
             className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
               showExam ? 'bg-[#7F1D1D] text-white hover:bg-red-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
             }`}
             onClick={() => {
                if (showExam) {
                   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
             }}
          >
             Examen Final
          </button>
        </div>
      </header>

      <div className="flex-1 p-4 md:p-8 flex gap-8 bg-[#FDFCFB] justify-center">
        <div className="flex-1 flex flex-col gap-6 max-w-[800px] w-full">
          <article className="bg-white border border-[#E0D7C6] rounded-xl p-6 md:p-10 shadow-sm flex flex-col gap-8 relative font-serif text-[#2C2C2C]">
            <h2 className="text-3xl text-[#1A2533] mb-2 border-b border-[#F0E6D2] pb-4 font-bold">{lesson.title}</h2>
            
            {lesson.baseVerse && (
              <div className="bg-[#FAF9F6] border-l-4 border-[#1A2533] p-6 mb-8 mt-2 animate-in fade-in slide-in-from-left-4 duration-700">
                <div className="flex items-center gap-2 text-[#7F1D1D] mb-3">
                  <BookOpen size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Versículo Base</span>
                </div>
                <p className="text-xl font-serif italic text-[#1A2533] mb-3 leading-relaxed">
                  "{lesson.baseVerse.text}"
                </p>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-tighter text-right">— {lesson.baseVerse.reference}</p>
              </div>
            )}

            <div className="space-y-8">
              {unlockedBlocks.map((block, index) => {
                if (block.type === 'text') {
                  const isLastUnlockedText = block.id === lesson.blocks[unlockedBlocksCount - 1]?.id && block.type === 'text';
                  const hasMoreBlocks = unlockedBlocksCount < lesson.blocks.length;

                  return (
                    <div key={block.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div 
                        className={`text-gray-700 leading-relaxed text-lg ${isLastUnlockedText && !showExam ? 'border-l-4 border-[#7F1D1D] pl-6 py-2 italic bg-gray-50/50' : ''}`}
                        dangerouslySetInnerHTML={{ __html: formatMD(block.content) }}
                      />
                      {isLastUnlockedText && !showExam && (
                         <div className="mt-8 flex justify-center gap-4 flex-wrap pb-4 font-sans">
                            {unlockedBlocksCount > 1 && (
                              <button 
                                onClick={() => {
                                   setUnlockedBlocksCount(Math.max(1, unlockedBlocksCount - 1));
                                }}
                                className="bg-white border text-xs md:text-sm border-[#E0D7C6] text-[#1A2533] hover:bg-gray-50 px-6 py-3 rounded font-bold tracking-widest uppercase transition-colors shadow-sm"
                              >
                                Retroceder
                              </button>
                            )}
                            <button 
                              onClick={() => {
                                 if (hasMoreBlocks) {
                                   const newCount = unlockedBlocksCount + 1;
                                   setUnlockedBlocksCount(newCount);
                                   if (newCount === lesson.blocks.length) {
                                      setTimeout(() => setShowExam(true), 500);
                                   }
                                 } else {
                                   setShowExam(true);
                                 }
                              }}
                              className="bg-[#1A2533] hover:bg-[#2C3E50] text-[#E0D7C6] px-8 py-3 rounded text-sm font-bold tracking-widest uppercase transition-colors shadow"
                            >
                              {hasMoreBlocks ? 'Continuar Lectura' : 'Proceder al Examen'}
                            </button>
                         </div>
                      )}
                    </div>
                  );
                }

                if (block.type === 'note') {
                  const isLastUnlockedNote = block.id === lesson.blocks[unlockedBlocksCount - 1]?.id && block.type === 'note';
                  const hasMoreBlocks = unlockedBlocksCount < lesson.blocks.length;

                  return (
                    <div key={block.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="bg-[#FAF9F6] border-2 border-dashed border-[#D1B17F] rounded-xl p-6 md:p-8 relative overflow-hidden my-4 group">
                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                          <BookOpen size={64} className="text-[#1A2533]" />
                        </div>
                        <h4 className="text-sm font-bold text-[#7F1D1D] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                          <CheckCircle2 size={16} />
                          Puntos Clave para tu Libreta
                        </h4>
                        <div 
                          className="text-[#1A2533] leading-relaxed font-sans text-base prose prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: formatMD(block.content) }}
                        />
                      </div>
                      
                      {isLastUnlockedNote && !showExam && (
                        <div className="mt-8 flex justify-center gap-4 flex-wrap pb-4 font-sans">
                           <button 
                             onClick={() => {
                                if (hasMoreBlocks) {
                                  const newCount = unlockedBlocksCount + 1;
                                  setUnlockedBlocksCount(newCount);
                                  if (newCount === lesson.blocks.length) {
                                     setTimeout(() => setShowExam(true), 500);
                                  }
                                } else {
                                  setShowExam(true);
                                }
                             }}
                             className="bg-[#1A2533] hover:bg-[#2C3E50] text-[#E0D7C6] px-8 py-3 rounded text-sm font-bold tracking-widest uppercase transition-colors shadow"
                           >
                             Continuar
                           </button>
                        </div>
                      )}
                    </div>
                  );
                }

                if (block.type === 'control') {
                   const q = block.question;
                   const selectedIdx = selectedAnswers[q.id];
                   const isAnswered = selectedIdx !== undefined;
                   const isCorrect = selectedIdx === q.correctAnswerIndex;

                   return (
                     <div key={block.id} className="bg-gray-50 p-6 md:p-8 rounded-lg border border-dashed border-[#BDB2A0] my-8 animate-in fade-in zoom-in-95 duration-500 font-sans shadow-sm">
                       <p className="text-sm font-bold text-[#7F1D1D] uppercase tracking-wide mb-4">Control de Lectura</p>
                       <p className="font-serif text-lg text-[#1A2533] mb-5">{q.question}</p>
                       
                       <div className="space-y-3">
                         {q.options.map((opt, i) => {
                           let btnClass = "w-full text-left flex items-center gap-3 p-3 border rounded bg-white transition-all text-sm";
                           
                           if (!isAnswered) {
                              btnClass += " border-[#E0D7C6] hover:border-[#7F1D1D] cursor-pointer text-gray-700 hover:shadow-sm";
                           } else {
                              if (i === q.correctAnswerIndex) {
                                 btnClass += " border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm ring-1 ring-emerald-500";
                              } else if (i === selectedIdx) {
                                 btnClass += " border-red-300 bg-red-50 text-red-900";
                              } else {
                                 btnClass += " border-[#E0D7C6] text-gray-400 opacity-60";
                              }
                           }

                           return (
                             <button
                               key={i}
                               disabled={isAnswered && isCorrect}
                               onClick={() => handleControlAnswer(block.id, q.id, i, q.correctAnswerIndex)}
                               className={btnClass}
                             >
                               <div className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center ${
                                 isAnswered && i === selectedIdx ? 'border-[#7F1D1D] bg-[#7F1D1D]' : 
                                 isAnswered && i === q.correctAnswerIndex ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'
                               }`}>
                                 {isAnswered && (i === selectedIdx || i === q.correctAnswerIndex) && (
                                   <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                 )}
                               </div>
                               <span className="leading-snug">{opt}</span>
                             </button>
                           );
                         })}
                       </div>
                       
                       {isAnswered && !isCorrect && (
                         <div className="mt-5 text-sm text-red-600 font-bold bg-white px-4 py-2 inline-block border border-red-200 rounded">
                           Respuesta incorrecta. Seleccione nuevamente.
                         </div>
                       )}

                       {index === unlockedBlocksCount - 1 && unlockedBlocksCount > 1 && !showExam && (
                         <div className="mt-8 flex justify-center border-t border-[#BDB2A0]/30 pt-6">
                           <button 
                             onClick={() => {
                                setUnlockedBlocksCount(Math.max(1, unlockedBlocksCount - 1));
                             }}
                             className="bg-white border text-xs md:text-sm border-[#E0D7C6] text-[#1A2533] hover:bg-gray-50 px-6 py-3 rounded font-bold tracking-widest uppercase transition-colors shadow-sm w-full md:w-auto"
                           >Regresar a la página anterior</button>
                         </div>
                       )}
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

          <LessonNotes lessonId={lesson.id} courseId={course.id} />

          {showExam && (
             <div className="mt-8 mb-20 animate-in fade-in duration-1000 slide-in-from-bottom-8">
               <FinalExam 
                 questions={lesson.finalExam} 
                 isPreviouslyCompleted={isPreviouslyCompleted}
                 previousScore={progress.completedLessons[lesson.id]?.score}
                 onComplete={onComplete} 
                 onCancel={() => setShowExam(false)}
               />
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
