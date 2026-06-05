import { useState, useEffect, useRef } from 'react';
import { mockDatabase } from './data';
import { useProgress } from './hooks/useProgress';
import { useAuth } from './hooks/useAuth';
import { Sidebar } from './components/Sidebar';
import { LessonViewer } from './components/LessonViewer';
import { BlockExamModal } from './components/BlockExamModal';
import { Dashboard } from './components/Dashboard';
import { CourseOverview } from './components/CourseOverview';
import { LandingPage } from './components/LandingPage';
import { ProfileModal } from './components/ProfileModal';
import { WelcomePage } from './components/WelcomePage';
import { DailyVerseNotification } from './components/DailyVerseNotification';
import { Menu, X, LayoutDashboard, BookOpen } from 'lucide-react';

export default function App() {
  const { user, isLoading, signInWithGoogle, signOut } = useAuth();
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(() => {
    try {
      return localStorage.getItem('desktopSidebarOpen') !== 'false';
    } catch {
      return true;
    }
  });
  const [showProfile, setShowProfile] = useState(false);
  const [customProfile, setCustomProfile] = useState<{fullName?: string; email?: string}>({});
  const { progress, markCompleted, markBlockExamCompleted, resetFirstLesson } = useProgress();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Dark mode has been removed, forcing light mode
  useEffect(() => {
    try {
      localStorage.removeItem('darkMode');
      document.documentElement.classList.remove('dark');
    } catch (e) {}
  }, []);


  useEffect(() => {
    try {
      localStorage.setItem('desktopSidebarOpen', String(desktopSidebarOpen));
    } catch (e) {}
  }, [desktopSidebarOpen]);

  // Scroll to top when course or lesson changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [activeCourseId, activeLessonId]);

  useEffect(() => {
    if (user) {
      try {
        const saved = localStorage.getItem(`profile_${user.uid}`);
        if (saved) {
          setCustomProfile(JSON.parse(saved));
        }
      } catch(e) {}
    }
  }, [user]);

  if (isLoading) {
    return <WelcomePage />;
  }

  if (!user) {
    return <LandingPage onSignIn={signInWithGoogle} />;
  }

  const activeCourse = mockDatabase.courses.find(c => c.id === activeCourseId);
  const activeLesson = activeCourse?.lessons.find(l => l.id === activeLessonId);

  // Check if there is any pending block exam milestone
  const completedCount = Object.keys(progress.completedLessons).length;
  const pendingMilestone = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30].find(
    m => completedCount >= m && (!progress.completedBlockExams || !progress.completedBlockExams[m])
  );

  // Find which course to apply the retake rule to
  const lastActiveCourse = activeCourse || mockDatabase.courses.find(c => 
    c.lessons.some(l => progress.completedLessons[l.id])
  ) || mockDatabase.courses[0];

  return (
    <div className={`min-h-screen bg-[#FDFCFB] text-[#2C2C2C] dark:bg-[#121212] dark:text-stone-100 font-serif flex flex-col md:flex-row relative transition-colors duration-300`}>
      <DailyVerseNotification />

      
      {/* Mobile top bar */}
      <div className="md:hidden bg-white text-[#1A2533] px-4 md:px-5 py-3 md:py-4 flex justify-between items-center shadow-sm border-b border-[#E0D7C6] sticky top-0 z-50">
         <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#7F1D1D] flex items-center justify-center text-xs text-white ring-1 ring-black/5 shrink-0">
               {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
            </div>
            <h1 className="text-base font-bold tracking-tight text-[#1A2533] truncate">SEMINARIO<span className="text-[#1A2533]/30 mx-1">|</span><span className="text-[10px] font-normal opacity-80 uppercase tracking-widest">Virtual</span></h1>
         </div>
         <div className="flex items-center gap-1.5 shrink-0">
            <button 
              onClick={() => setSidebarOpen(prev => !prev)} 
              className="p-2 text-gray-500 hover:text-[#1A2533] transition-colors rounded-lg bg-gray-50 active:bg-gray-100"
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
         </div>
      </div>


      <Sidebar 
         courses={mockDatabase.courses}
         activeCourseId={activeCourseId}
         activeLessonId={activeLessonId}
         onSelectLesson={(courseId, lessonId) => {
           setActiveCourseId(courseId);
           setActiveLessonId(lessonId);
           setSidebarOpen(false); // Auto-close on mobile
         }}
         progress={progress}
         isOpen={sidebarOpen}
         isDesktopOpen={desktopSidebarOpen}
         onToggleDesktop={() => setDesktopSidebarOpen(prev => !prev)}
         user={user}
         customProfile={customProfile}
         onSignOut={signOut}
         onOpenProfile={() => setShowProfile(true)}
         onClose={() => setSidebarOpen(false)}
      />

      {/* Floating button when desktop sidebar is closed */}
      {!desktopSidebarOpen && (
        <button
          onClick={() => setDesktopSidebarOpen(true)}
          className="hidden md:flex fixed top-4 left-4 z-40 p-2.5 rounded-xl bg-white/90 dark:bg-zinc-800/90 backdrop-blur shadow-lg border border-gray-200 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all active:scale-95"
          aria-label="Abrir menú"
        >
          <Menu size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
      )}

      {/* Overlay to catch clicks off the sidebar in mobile view */}
      {sidebarOpen && (
         <div 
           className="fixed inset-0 z-30 bg-[#1A2533]/80 backdrop-blur-sm md:hidden animate-in fade-in duration-300"
           onClick={() => setSidebarOpen(false)}
         />
      )}

      {showProfile && (
        <ProfileModal 
          user={user} 
          onClose={() => setShowProfile(false)} 
          onSave={(profileData) => setCustomProfile(profileData)}


        />
      )}

      <main className="flex-1 flex flex-col min-h-0 w-full relative">
         <div 
           ref={scrollContainerRef}
           className="absolute inset-0 overflow-y-auto custom-scrollbar pb-24 md:pb-0"
         >
           {activeLesson && activeCourse ? (
             <LessonViewer 
               key={activeLesson.id}
               lesson={activeLesson} 
               course={activeCourse}
               progress={progress}
               onComplete={(score) => markCompleted(activeLesson.id, score)} 
               onBack={() => {
                 setActiveLessonId(null);
               }}
             />
           ) : activeCourse ? (
             <CourseOverview
               course={activeCourse}
               progress={progress}
               user={user!}
               customProfile={customProfile}
               onSelectLesson={(lessonId) => setActiveLessonId(lessonId)}
               onBack={() => setActiveCourseId(null)}
             />
           ) : (
             <Dashboard 
               user={user} 
               courses={mockDatabase.courses} 
               progress={progress} 
               onSelectCourse={(courseId) => {
                 setActiveCourseId(courseId);
                 setActiveLessonId(null);
               }} 
             />
           )}
         </div>
      </main>

      {pendingMilestone && (
        <BlockExamModal 
          milestone={pendingMilestone}
          courseTitle={lastActiveCourse.title}
          firstLessonTitle={lastActiveCourse.lessons[0]?.title || 'Día 1'}
          onPass={(score) => {
            markBlockExamCompleted(pendingMilestone, score);
          }}
          onFail={() => {
            if (lastActiveCourse?.lessons[0]) {
              resetFirstLesson(lastActiveCourse.lessons[0].id);
              setActiveCourseId(lastActiveCourse.id);
              setActiveLessonId(lastActiveCourse.lessons[0].id);
            }
          }}
        />
      )}

      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-[#E0D7C6] dark:border-zinc-800 h-16 flex items-center justify-around z-40 px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] transition-colors duration-300">
        <button 
          onClick={() => {
            setActiveCourseId(null);
            setActiveLessonId(null);
            setSidebarOpen(false);
          }}
          className={`flex flex-col items-center gap-1 transition-colors ${!activeCourseId ? 'text-[#7F1D1D]' : 'text-gray-400'}`}
        >
          <LayoutDashboard size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Inicio</span>
        </button>

        {activeCourseId && (
          <button 
            onClick={() => {
              setActiveLessonId(null);
              setSidebarOpen(false);
            }}
            className={`flex flex-col items-center gap-1 transition-colors ${activeCourseId && !activeLessonId ? 'text-[#7F1D1D]' : 'text-gray-400'}`}
          >
            <BookOpen size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Módulo</span>
          </button>
        )}

        <button 
          onClick={() => setSidebarOpen(prev => !prev)}
          className={`flex flex-col items-center gap-1 transition-colors ${sidebarOpen ? 'text-[#7F1D1D]' : 'text-gray-400'}`}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-[10px] font-bold uppercase tracking-tighter">{sidebarOpen ? 'Cerrar' : 'Menú'}</span>
        </button>
      </footer>
    </div>
  );
}
