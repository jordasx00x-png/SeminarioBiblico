import { useState, useEffect, useRef } from 'react';
import { mockDatabase } from './data';
import { useProgress } from './hooks/useProgress';
import { useAuth } from './hooks/useAuth';
import { Sidebar } from './components/Sidebar';
import { LessonViewer } from './components/LessonViewer';
import { Dashboard } from './components/Dashboard';
import { CourseOverview } from './components/CourseOverview';
import { LandingPage } from './components/LandingPage';
import { ProfileModal } from './components/ProfileModal';
import { Menu, X, LayoutDashboard, BookOpen } from 'lucide-react';

export default function App() {
  const { user, isLoading, signInWithGoogle, signOut } = useAuth();
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [customProfile, setCustomProfile] = useState<{fullName?: string; email?: string}>({});
  const { progress, markCompleted } = useProgress();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center font-serif">
        <div className="animate-pulse text-[#1A2533]">Verificando credenciales...</div>
      </div>
    );
  }

  if (!user) {
    return <LandingPage onSignIn={signInWithGoogle} />;
  }

  const activeCourse = mockDatabase.courses.find(c => c.id === activeCourseId);
  const activeLesson = activeCourse?.lessons.find(l => l.id === activeLessonId);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2C2C2C] font-serif flex flex-col md:flex-row relative">
      
      {/* Mobile top bar */}
      <div className="md:hidden bg-[#1A2533] text-white px-5 py-4 flex justify-between items-center shadow-lg border-b border-[#2C3E50] sticky top-0 z-50">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#7F1D1D] flex items-center justify-center text-xs text-white ring-1 ring-white/20">
               {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
            </div>
            <h1 className="text-lg font-bold tracking-tight text-[#E0D7C6]">SEMINARIO<span className="text-white/40 mx-1">|</span><span className="text-xs font-normal opacity-80 uppercase tracking-widest">Virtual</span></h1>
         </div>
         <button 
           onClick={() => setShowProfile(true)} 
           className="p-1.5 text-gray-300 hover:text-white transition-colors"
         >
           <div className="relative">
             <Menu size={24} className="opacity-0 w-0 h-0" /> {/* Spacer */}
             <div className="absolute inset-0 flex items-center justify-center">
                <Menu size={24} onClick={(e) => { e.stopPropagation(); setSidebarOpen(true); }} />
             </div>
           </div>
         </button>
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
         user={user}
         customProfile={customProfile}
         onSignOut={signOut}
         onOpenProfile={() => setShowProfile(true)}
      />

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

      <main className="flex-1 flex flex-col overflow-hidden w-full h-[calc(100vh-68px)] md:h-screen relative">
         <div 
           ref={scrollContainerRef}
           className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar pb-20 md:pb-0"
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

      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E0D7C6] h-16 flex items-center justify-around z-40 px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => {
            setActiveCourseId(null);
            setActiveLessonId(null);
          }}
          className={`flex flex-col items-center gap-1 transition-colors ${!activeCourseId ? 'text-[#7F1D1D]' : 'text-gray-400'}`}
        >
          <LayoutDashboard size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Inicio</span>
        </button>

        {activeCourseId && (
          <button 
            onClick={() => setActiveLessonId(null)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeCourseId && !activeLessonId ? 'text-[#7F1D1D]' : 'text-gray-400'}`}
          >
            <BookOpen size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Módulo</span>
          </button>
        )}

        <button 
          onClick={() => setSidebarOpen(true)}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#1A2533] transition-colors"
        >
          <Menu size={20} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Menú</span>
        </button>
      </footer>
    </div>
  );
}
