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
import { Menu, X } from 'lucide-react';

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
      <div className="md:hidden bg-[#1A2533] text-white p-5 flex justify-between items-center shadow-md border-b border-[#2C3E50] relative z-50">
         <h1 className="text-xl font-bold tracking-tight text-[#E0D7C6]">SEMINARIO<br/><span className="text-sm font-normal opacity-80 uppercase tracking-[0.2em]">Virtual</span></h1>
         <button 
           onClick={() => setSidebarOpen(!sidebarOpen)} 
           className="p-2 -mr-2 text-gray-300 hover:text-white transition-colors"
         >
           {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
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

      <main className="flex-1 flex flex-col overflow-hidden w-full h-[calc(100vh-84px)] md:h-screen relative">
         <div 
           ref={scrollContainerRef}
           className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar"
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
    </div>
  );
}
