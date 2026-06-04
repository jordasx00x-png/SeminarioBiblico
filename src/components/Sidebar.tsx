import { Course, UserProgress } from '../types';
import { BookOpen, Award, CheckCircle, LogOut, LayoutDashboard, Settings, X } from 'lucide-react';
import { User } from 'firebase/auth';

interface SidebarProps {
  courses: Course[];
  activeCourseId: string | null;
  activeLessonId: string | null;
  onSelectLesson: (courseId: string | null, lessonId: string | null) => void;
  progress: UserProgress;
  isOpen: boolean;
  user?: User | null;
  customProfile?: {fullName?: string; email?: string; phoneNumber?: string};
  onSignOut?: () => void;
  onOpenProfile?: () => void;
  onClose?: () => void;
}

export function Sidebar({ courses, activeCourseId, activeLessonId, onSelectLesson, progress, isOpen, user, customProfile, onSignOut, onOpenProfile, onClose }: SidebarProps) {
  const bibleStudies = courses.filter(c => c.type === 'BIBLE_STUDY');
  const specialized = courses.filter(c => c.type === 'SPECIALIZED');

  const basicCourses = courses.filter(c => c.type !== 'LICENCIATURA');
  const totalBasicLessons = basicCourses.reduce((sum, c) => sum + c.lessons.length, 0);
  const completedBasicLessons = basicCourses.reduce((sum, c) => {
    return sum + c.lessons.filter(l => progress.completedLessons[l.id]).length;
  }, 0);
  const allBasicCompleted = completedBasicLessons >= totalBasicLessons && totalBasicLessons > 0;
  const isLicenciaturaUnlocked = allBasicCompleted || localStorage.getItem('bypass_licenciatura_unlock') === 'true';

  const isDashboardActive = activeCourseId === null && activeLessonId === null;

  return (
    <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#1A2533] dark:bg-zinc-950 text-white border-r border-[#E0D7C6] dark:border-zinc-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-all duration-300 ease-in-out flex flex-col shadow-2xl md:shadow-none`}>
      
      {/* Mobile-only menu header with Close button */}
      <div className="p-5 border-b border-[#2C3E50] dark:border-zinc-800 flex items-center justify-between md:hidden bg-[#151D28] dark:bg-zinc-900">
        <h1 className="text-base font-bold tracking-tight text-[#E0D7C6]">
          SEMINARIO<br/><span className="text-[10px] font-normal opacity-60 uppercase tracking-widest font-sans">Teológico Digital</span>
        </h1>
        {onClose && (
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white transition-colors bg-[#1A2533]/50 dark:bg-zinc-800 rounded-lg border border-[#2C3E50] dark:border-zinc-700"
            aria-label="Cerrar menú"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <div className="p-6 border-b border-[#2C3E50] dark:border-zinc-800 hidden md:block">
        <h1 className="text-xl font-bold tracking-tight text-[#E0D7C6]">
          SEMINARIO<br/><span className="text-sm font-normal opacity-80 uppercase tracking-[0.2em] font-sans">Teológico Digital</span>
        </h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        <div className="mb-4">
          <button 
             onClick={() => onSelectLesson(null, null)}
             className={`w-full text-left px-3 py-2.5 rounded text-sm transition-colors flex items-center gap-3 ${
               isDashboardActive ? 'bg-[#7F1D1D] text-white shadow-lg' : 'text-gray-300 hover:bg-[#2C3E50] dark:hover:bg-zinc-800 hover:text-white'
             }`}
           >
             <LayoutDashboard className={`w-4 h-4 ${isDashboardActive ? 'text-white' : 'text-[#E0D7C6]'}`} />
             <span className="font-medium">Inicio (Panel Académico)</span>
           </button>
        </div>
        
        {activeCourseId !== null && (() => {
           const activeCourse = courses.find(c => c.id === activeCourseId);
           if (!activeCourse) return null;
           
           return (
             <div className="pt-2 animate-in fade-in duration-300">
               <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-[#8E9EAD] dark:text-zinc-500 font-sans">
                 Módulo Actual
               </div>
               <div className="mb-4">
                 <div className="px-3 py-1.5 text-xs text-white font-bold mb-2 break-words leading-tight">{activeCourse.title}</div>
                 <ul className="space-y-1">
                   {activeCourse.lessons.map(lesson => {
                     const isCompleted = !!progress.completedLessons[lesson.id];
                     const isActive = activeLessonId === lesson.id;
                     return (
                       <li key={lesson.id}>
                         <button 
                           onClick={() => onSelectLesson(activeCourse.id, lesson.id)}
                           className={`w-full text-left px-3 py-2.5 rounded text-sm transition-colors flex items-center justify-between ${
                             isActive ? 'bg-[#7F1D1D] text-white shadow-lg' : 'text-gray-400 hover:bg-[#2C3E50] dark:hover:bg-zinc-800 hover:text-white'
                           }`}
                         >
                           <span className="truncate flex items-center gap-3">
                             <BookOpen className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-gray-500 dark:text-zinc-500'}`} />
                             <span className="truncate">{activeCourse.type === 'SPECIALIZED' ? 'Unidad' : 'Día'} {lesson.day}</span>
                           </span>
                           {isCompleted && <CheckCircle size={14} className={`shrink-0 ml-2 ${isActive ? 'text-white/80' : 'text-emerald-400/80'}`} />}
                         </button>
                       </li>
                     );
                   })}
                 </ul>
               </div>
             </div>
           );
        })()}
      </nav>
      
      <div className="p-4 bg-[#111A24] dark:bg-zinc-900 border-t border-[#2C3E50] dark:border-zinc-800">
         <div className="flex items-center justify-between mb-3">
           <div className="flex items-center gap-3">
              {user?.photoURL ? (
                 <img src={user.photoURL} alt="Avatar" className="w-8 h-8 rounded" referrerPolicy="no-referrer" />
              ) : (
                 <div className="w-8 h-8 rounded bg-[#7F1D1D] flex items-center justify-center text-xs text-white">
                   {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                 </div>
              )}
              <div className="flex flex-col">
                 <div className="text-xs font-bold text-white max-w-[120px] truncate">{customProfile?.fullName || user?.displayName || 'Usuario'}</div>
                 <div className="text-[10px] text-gray-400">{isLicenciaturaUnlocked ? 'Rango: Licenciado 🎓' : 'Nivel: Bachillerato'}</div>
              </div>
           </div>
           <div className="flex items-center gap-2">
             {onOpenProfile && (
               <button onClick={onOpenProfile} className="text-gray-400 hover:text-white transition-colors" title="Configurar cuenta">
                 <Settings size={16} />
               </button>
             )}
             {onSignOut && (
               <button onClick={onSignOut} className="text-gray-400 hover:text-white transition-colors" title="Cerrar sesión">
                 <LogOut size={16} />
               </button>
             )}
           </div>
         </div>
      </div>
    </div>
  );
}
