import React, { useState } from 'react';
import { Course, UserProgress } from '../types';
import { BookOpen, Award, CheckCircle, PlayCircle, BarChart3, Calendar as CalendarIcon, LayoutDashboard } from 'lucide-react';
import { User } from 'firebase/auth';
import { StudyCalendar } from './StudyCalendar';

interface DashboardProps {
  user: User | null;
  courses: Course[];
  progress: UserProgress;
  onSelectCourse: (courseId: string) => void;
}

export function Dashboard({ user, courses, progress, onSelectCourse }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'courses' | 'calendar'>('courses');
  
  const bibleStudies = courses.filter(c => c.type === 'BIBLE_STUDY');
  const specialized = courses.filter(c => c.type === 'SPECIALIZED');

  const calculateGlobalProgress = () => {
    const total = courses.length * 90;
    const completed = Object.values(progress.completedLessons).length;
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  const globalProg = calculateGlobalProgress();

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto font-serif text-[#2C2C2C] pb-24">
      <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2533] mb-2 border-b border-[#E0D7C6] pb-4">
          Panel Académico
        </h1>
        <p className="text-gray-600 font-sans mt-4 text-sm md:text-base">
          Bienvenido nuevamente, <span className="font-bold text-[#1A2533]">{user?.displayName || 'Estudioso'}</span>. Consulta tu progreso y selecciona el módulo a cursar el día de hoy.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500">
         <div className="bg-white border border-[#E0D7C6] rounded-xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1A2533] text-white rounded-lg flex items-center justify-center shrink-0">
               <BarChart3 size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
               <div className="text-[9px] md:text-[10px] font-bold text-gray-400 font-sans uppercase tracking-widest leading-none mb-1">Avance Global</div>
               <div className="text-xl md:text-2xl font-bold text-[#1A2533]">{globalProg.percentage}%</div>
            </div>
         </div>
         <div className="bg-white border border-[#E0D7C6] rounded-xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
               <CheckCircle size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
               <div className="text-[9px] md:text-[10px] font-bold text-gray-400 font-sans uppercase tracking-widest leading-none mb-1">Acreditadas</div>
               <div className="text-xl md:text-2xl font-bold text-[#1A2533]">{globalProg.completed} <span className="text-sm text-gray-400 font-normal">/ {globalProg.total}</span></div>
            </div>
         </div>
      </div>

      <div className="flex items-center gap-4 mb-8 border-b border-[#E0D7C6]">
        <button
          onClick={() => setActiveTab('courses')}
          className={`pb-4 px-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all relative ${
            activeTab === 'courses' ? 'text-[#1A2533]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <LayoutDashboard size={16} />
          Catálogo Académico
          {activeTab === 'courses' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A2533] animate-in fade-in duration-300" />}
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`pb-4 px-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all relative ${
            activeTab === 'calendar' ? 'text-[#1A2533]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <CalendarIcon size={16} />
          Plan de Estudio (3 Meses)
          {activeTab === 'calendar' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A2533] animate-in fade-in duration-300" />}
        </button>
      </div>

      {activeTab === 'courses' ? (
        <div className="space-y-12">
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#7F1D1D]" size={24} />
              <h2 className="text-2xl font-bold text-[#1A2533]">Cursos Especializados</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {specialized.map(course => <CourseCard key={course.id} course={course} progress={progress} onSelectCourse={onSelectCourse} />)}
            </div>
          </section>

          <section className="animate-in fade-in slide-in-from-bottom-10 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-[#7F1D1D]" size={24} />
              <h2 className="text-2xl font-bold text-[#1A2533]">Estudio Bíblico</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {bibleStudies.map(course => <CourseCard key={course.id} course={course} progress={progress} onSelectCourse={onSelectCourse} />)}
            </div>
          </section>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
          <StudyCalendar progress={progress} totalLessons={90} />
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, progress, onSelectCourse }: { key?: React.Key, course: Course, progress: UserProgress, onSelectCourse: (courseId: string) => void }) {
  const total = 90;
  const completed = course.lessons.filter(l => progress.completedLessons[l.id]).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div 
      onClick={() => onSelectCourse(course.id)}
      className="bg-white border border-[#E0D7C6] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#1A2533] cursor-pointer transition-all flex flex-col h-full group"
    >
      <div className="p-6 md:p-8 flex-1">
         <div className="text-[10px] md:text-xs font-sans text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="text-[#7F1D1D] font-bold">Mínimo 3 Meses</span>
         </div>
         <h3 className="text-xl font-bold text-[#1A2533] mb-3 group-hover:text-[#7F1D1D] transition-colors">{course.title}</h3>
         <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans">{course.description}</p>
         
         <div className="space-y-2 mb-2 mt-auto">
           <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans">Progreso ({completed}/{total} Clases)</span>
              <span className="text-xs font-bold text-[#1A2533]">{percentage}%</span>
           </div>
           <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
             <div className="h-full bg-[#7F1D1D] rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
           </div>
         </div>
      </div>
      
      <div className="bg-gray-50 border-t border-[#E0D7C6] p-4 flex justify-between items-center px-6 md:px-8 group-hover:bg-white transition-colors">
         <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans">
            {total} Clases + {total} Exámenes
         </div>
         <div className="flex items-center gap-2 bg-transparent text-[#1A2533] group-hover:bg-[#1A2533] group-hover:text-white px-4 py-2.5 rounded text-[10px] md:text-xs leading-none font-bold tracking-widest uppercase transition-all font-sans">
            Ver Módulo <PlayCircle size={14} className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
         </div>
      </div>
    </div>
  );
}
