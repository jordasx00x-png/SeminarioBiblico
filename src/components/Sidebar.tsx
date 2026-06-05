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
  isDesktopOpen?: boolean;
  onToggleDesktop?: () => void;
  user?: User | null;
  customProfile?: {fullName?: string; email?: string; phoneNumber?: string};
  onSignOut?: () => void;
  onOpenProfile?: () => void;
  onClose?: () => void;
}

export function Sidebar({ courses, activeCourseId, activeLessonId, onSelectLesson, progress, isOpen, isDesktopOpen = true, onToggleDesktop, user, customProfile, onSignOut, onOpenProfile, onClose }: SidebarProps) {
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
    <div className={`fixed inset-y-0 left-0 z-40 bg-[#1A2533] dark:bg-zinc-950 text-white border-r border-[#E0D7C6] dark:border-zinc-800 transform flex flex-col shadow-2xl md:shadow-none transition-all duration-300 ease-in-out pl-0
      ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'} 
      md:relative md:translate-x-0 
      ${isDesktopOpen ? 'md:w-64' : 'md:w-0 md:border-r-0 md:opacity-0 md:overflow-hidden'}
    `}>
      
      {/* Mobile-only menu header with Close button */}
      <div className="p-5 border-b border-[#2C3E50] dark:border-zinc-800 flex items-center justify-between md:hidden bg-[#151D28] dark:bg-zinc-900">
        <div className="flex items-center gap-3">
           <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
              <span className="font-serif font-bold text-[#E0D7C6] text-sm tracking-widest leading-none">STD</span>
           </div>
           <h1 className="text-[15px] font-bold tracking-tight text-[#E0D7C6] flex flex-col justify-center leading-tight">
             SEMINARIO
             <span className="text-[8px] font-sans font-bold opacity-70 uppercase tracking-[0.2em] text-[#E0D7C6]">Teológico Digital</span>
           </h1>
        </div>
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

      <div className="p-5 border-b border-[#2C3E50] dark:border-zinc-800 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 shrink-0 shadow-lg">
              <span className="font-serif font-bold text-[#E0D7C6] text-sm tracking-widest leading-none">STD</span>
           </div>
           <h1 className="text-[16px] font-bold tracking-tight text-[#E0D7C6] flex flex-col justify-center leading-tight">
             SEMINARIO
             <span className="text-[9px] font-sans font-bold opacity-70 uppercase tracking-[0.2em] text-[#E0D7C6]">Teológico Digital</span>
           </h1>
        </div>
        {onToggleDesktop && (
          <button 
            onClick={onToggleDesktop} 
            className="p-1.5 text-gray-400 hover:text-white transition-colors bg-[#1A2533]/50 dark:bg-zinc-800 rounded-lg border border-[#2C3E50] dark:border-zinc-700 md:flex hidden"
            aria-label="Contraer menú"
          >
            <X size={18} />
          </button>
        )}
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
           
           {onOpenProfile && (
             <button 
               onClick={onOpenProfile}
               className="mt-2 w-full text-left px-3 py-2.5 rounded text-sm transition-colors flex items-center gap-3 text-gray-300 hover:bg-[#2C3E50] dark:hover:bg-zinc-800 hover:text-white"
             >
               <Settings className="w-4 h-4 text-[#E0D7C6]" />
               <span className="font-medium">Ajustes del Perfil</span>
             </button>
           )}
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
