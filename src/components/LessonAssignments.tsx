import React, { useState, useEffect } from 'react';
import { ClipboardList, CheckCircle2, Circle, Trophy } from 'lucide-react';

interface LessonAssignmentsProps {
  lessonId: string;
  courseId: string;
  assignments: { id: string; description: string }[];
}

export function LessonAssignments({ lessonId, courseId, assignments }: LessonAssignmentsProps) {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});
  const storageKey = `tasks_${courseId}_${lessonId}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setCompletedTasks(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading tasks', e);
      }
    }
  }, [lessonId, courseId, storageKey]);

  const toggleTask = (taskId: string) => {
    const newState = {
      ...completedTasks,
      [taskId]: !completedTasks[taskId]
    };
    setCompletedTasks(newState);
    localStorage.setItem(storageKey, JSON.stringify(newState));
  };

  if (!assignments || assignments.length === 0) return null;

  const allDone = assignments.every(t => completedTasks[t.id]);
  const progress = Math.round((assignments.filter(t => completedTasks[t.id]).length / assignments.length) * 100);

  return (
    <section className="bg-white border border-[#E0D7C6] rounded-xl overflow-hidden shadow-sm flex flex-col font-sans mb-6">
      <div className="bg-[#1A2533] border-b border-[#2C3E50] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ClipboardList size={18} className="text-[#E0D7C6]" />
          <h3 className="text-sm font-bold text-[#E0D7C6] uppercase tracking-wider">Plan de Acción y Tareas</h3>
        </div>
        {progress > 0 && (
          <div className="flex items-center gap-3">
             <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                />
             </div>
             <span className="text-[10px] font-bold text-emerald-400">{progress}%</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="space-y-3">
          {assignments.map((assignment) => {
            const isDone = completedTasks[assignment.id];
            return (
              <button
                key={assignment.id}
                onClick={() => toggleTask(assignment.id)}
                className={`w-full flex items-start gap-4 p-4 rounded-lg border transition-all text-left ${
                  isDone 
                    ? 'bg-emerald-50/50 border-emerald-100 opacity-75' 
                    : 'bg-[#FDFCFB] border-[#F0E6D2] hover:border-[#D1B17F] hover:shadow-sm'
                }`}
              >
                <div className={`mt-0.5 flex-shrink-0 transition-colors ${isDone ? 'text-emerald-500' : 'text-gray-300'}`}>
                  {isDone ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                </div>
                <p className={`text-sm leading-relaxed ${isDone ? 'text-gray-500 line-through' : 'text-[#1A2533]'}`}>
                  {assignment.description}
                </p>
              </button>
            );
          })}
        </div>

        {allDone && assignments.length > 0 && (
          <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-3 animate-in zoom-in duration-300">
            <Trophy className="text-emerald-500" size={24} />
            <div>
              <p className="text-sm font-bold text-emerald-900">¡Excelente esfuerzo!</p>
              <p className="text-xs text-emerald-700">Has completado todas las tareas prácticas de esta lección.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
