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
import { Menu, X, LayoutDashboard, BookOpen, Settings } from 'lucide-react';

export default function App() {
  const { user, isLoading, signInWithGoogle, signOut } = useAuth();
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [customProfile, setCustomProfile] = useState<{fullName?: string; email?: string}>({});
  const { progress, markCompleted, markBlockExamCompleted, resetFirstLesson } = useProgress();
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
    <div className="min-h-screen bg-[#FDFCFB] text-[#2C2C2C] font-serif flex flex-col md:flex-row relative">
      
      {/* Mobile top bar */}
      <div className="md:hidden bg-[#1A2533] text-white px-5 py-4 flex justify-between items-center shadow-lg border-b border-[#2C3E50] sticky top-0 z-50">
         <button 
            onClick={() => setShowProfile(true)}
            className="flex items-center gap-3 hover:opacity-85 transition-opacity text-left cursor-pointer"
            title="Configurar Cuenta"
         >
            <div className="w-8 h-8 rounded bg-[#7F1D1D] flex items-center justify-center text-xs font-bold text-white ring-1 ring-white/20">
               {(customProfile?.fullName || user?.displayName || 'U').charAt(0).toUpperCase()}
            </div>
            <h1 className="text-lg font-bold tracking-tight text-[#E0D7C6]">SEMINARIO<span className="text-white/40 mx-1">|</span><span className="text-xs font-normal opacity-80 uppercase tracking-widest">Virtual</span></h1>
         </button>
         <div className="flex items-center gap-1.5">
           <button 
             onClick={() => setShowProfile(true)}
             className="p-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors flex items-center gap-1"
             title="Configurar cuenta"
           >
             <Settings size={20} />
             <span className="text-xs font-sans">Cuenta</span>
           </button>
           <button 
             onClick={() => setSidebarOpen(prev => !prev)} 
             className="p-1.5 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
           >
             {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
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
         user={user}
         customProfile={customProfile}
         onSignOut={signOut}
         onOpenProfile={() => setShowProfile(true)}
         onClose={() => setSidebarOpen(false)}
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
                customProfile={customProfile}
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

      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E0D7C6] h-16 flex items-center justify-around z-40 px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
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
