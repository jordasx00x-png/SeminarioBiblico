import { useState, useEffect } from 'react';
import { UserProgress } from '../types';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('seminario_progress');
      if (saved) return JSON.parse(saved);
    } catch(e) {
      console.warn("Could not load progress", e);
    }
    return { completedLessons: {} };
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

  return { progress, markCompleted };
}
