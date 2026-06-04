import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('seminario_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          completedLessons: parsed.completedLessons || {},
          completedBlockExams: parsed.completedBlockExams || {}
        };
      }
    } catch(e) {
      console.warn("Could not load progress", e);
    }
    return { completedLessons: {}, completedBlockExams: {} };
  });

  useEffect(() => {
    try {
      localStorage.setItem('seminario_progress', JSON.stringify(progress));
    } catch(e) {
      console.error("Could not save progress", e);
    }
  }, [progress]);

  const markCompleted = (lessonId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: {
        ...prev.completedLessons,
        [lessonId]: { score, completedAt: new Date().toISOString() }
      }
    }));
  };

  const markBlockExamCompleted = (milestone: number, score: number) => {
    setProgress((prev) => ({
      ...prev,
      completedBlockExams: {
        ...(prev.completedBlockExams || {}),
        [milestone]: { score, completedAt: new Date().toISOString() }
      }
    }));
  };

  const resetFirstLesson = (firstLessonId: string) => {
    setProgress((prev) => {
      const newCompleted = { ...prev.completedLessons };
      delete newCompleted[firstLessonId];
      return {
        ...prev,
        completedLessons: newCompleted
      };
    });
  };

  return { progress, markCompleted, markBlockExamCompleted, resetFirstLesson };
}
