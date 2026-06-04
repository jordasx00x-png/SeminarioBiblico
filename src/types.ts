export type ControlQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

export type ExamQuestion = ControlQuestion & {
  explanation: string;
};

export type ContentBlock = 
  | { type: 'text'; id: string; content: string }
  | { type: 'control'; id: string; question: ControlQuestion }
  | { type: 'note'; id: string; content: string };

export type Lesson = {
  id: string;
  day: number;
  title: string;
  blocks: ContentBlock[];
  finalExam: ExamQuestion[];
  baseVerse?: { reference: string; text: string };
  commentaries?: { author: string; text: string }[];
  verses?: { reference: string; text: string }[];
  assignments?: { id: string; description: string }[];
};

export type Course = {
  id: string;
  title: string;
  type: 'BIBLE_STUDY' | 'SPECIALIZED' | 'LICENCIATURA';
  description: string;
  lessons: Lesson[];
};

export type UserProgress = {
  completedLessons: Record<string, { score: number; completedAt: string }>;
  completedBlockExams?: Record<number, { score: number; completedAt: string }>;
};

export type Database = {
  courses: Course[];
};
