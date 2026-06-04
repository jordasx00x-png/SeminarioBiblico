import React, { useState } from 'react';
import { Course, UserProgress } from '../types';
import { BookOpen, Award, CheckCircle, PlayCircle, BarChart3, Calendar as CalendarIcon, LayoutDashboard, ChevronDown, ChevronUp, GraduationCap, TrendingUp, FileText, Lock, Unlock, ShieldCheck } from 'lucide-react';
import { User } from 'firebase/auth';
import { StudyCalendar } from './StudyCalendar';

interface DashboardProps {
  user: User | null;
  courses: Course[];
  progress: UserProgress;
  onSelectCourse: (courseId: string) => void;
  customProfile?: {fullName?: string; email?: string; phoneNumber?: string};
}

export function Dashboard({ user, courses, progress, onSelectCourse, customProfile }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'courses' | 'calendar' | 'grades'>('courses');
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});
  
  const [bypassUnlocked, setBypassUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('bypass_licenciatura_unlock') === 'true';
  });

  const handleToggleBypass = () => {
    const newValue = !bypassUnlocked;
    setBypassUnlocked(newValue);
    localStorage.setItem('bypass_licenciatura_unlock', String(newValue));
  };

  const bibleStudies = courses.filter(c => c.type === 'BIBLE_STUDY');
  const specialized = courses.filter(c => c.type === 'SPECIALIZED');
  const licenciaturaCourses = courses.filter(c => c.type === 'LICENCIATURA');

  const basicCourses = courses.filter(c => c.type !== 'LICENCIATURA');
  const totalBasicLessons = basicCourses.reduce((sum, c) => sum + c.lessons.length, 0);
  const completedBasicLessons = basicCourses.reduce((sum, c) => {
    return sum + c.lessons.filter(l => progress.completedLessons[l.id]).length;
  }, 0);

  // Scale total and completed basic lessons to match 90 days per course in UI/KPIs
  const totalBasicLessonsScaled = basicCourses.length * 90;
  const completedBasicLessonsScaled = basicCourses.reduce((sum, c) => {
    const completedReal = c.lessons.filter(l => progress.completedLessons[l.id]).length;
    const pct = c.lessons.length > 0 ? (completedReal / c.lessons.length) : 0;
    return sum + Math.round(pct * 90);
  }, 0);

  const allBasicCompleted = completedBasicLessons >= totalBasicLessons && totalBasicLessons > 0;
  const isLicenciaturaUnlocked = allBasicCompleted || bypassUnlocked;

  const calculateGlobalProgress = () => {
    const activeCourses = isLicenciaturaUnlocked ? courses : basicCourses;
    const total = activeCourses.length * 90;
    const completed = activeCourses.reduce((sum, c) => {
      const completedReal = c.lessons.filter(l => progress.completedLessons[l.id]).length;
      const pct = c.lessons.length > 0 ? (completedReal / c.lessons.length) : 0;
      return sum + Math.round(pct * 90);
    }, 0);
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  const globalProg = calculateGlobalProgress();

  // Grades calculations
  const courseGradesList = courses.map(course => {
    let completedCount = 0;
    let sumScore = 0;
    
    const lessonsData = course.lessons.map(lesson => {
      const completion = progress.completedLessons[lesson.id];
      const score = completion ? completion.score : null;
      if (score !== null) {
        completedCount++;
        sumScore += score;
      }
      return {
        id: lesson.id,
        day: lesson.day,
        title: lesson.title,
        score
      };
    });

    const average = completedCount > 0 ? Math.round(sumScore / completedCount) : null;

    return {
      id: course.id,
      title: course.title,
      type: course.type,
      lessonsCount: course.lessons.length,
      completedCount,
      average,
      lessons: lessonsData
    };
  });

  // Global average is calculated over courses that have at least one completed lesson
  const startedCourses = courseGradesList.filter(cg => cg.average !== null);
  const globalGradeAverage = startedCourses.length > 0 
    ? Math.round(startedCourses.reduce((sum, curr) => sum + (curr.average || 0), 0) / startedCourses.length) 
    : null;

  const allGradedLessons = Object.values(progress.completedLessons).map(l => l.score);
  const globalLessonAverage = allGradedLessons.length > 0
    ? Math.round(allGradedLessons.reduce((sum, score) => sum + score, 0) / allGradedLessons.length)
    : null;

  const toggleCourseExpand = (courseId: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const toggleAllCourses = () => {
    const allExpanded = Object.keys(expandedCourses).length === courses.length && Object.values(expandedCourses).every(v => v);
    const next: Record<string, boolean> = {};
    if (!allExpanded) {
      courses.forEach(c => {
        next[c.id] = true;
      });
    }
    setExpandedCourses(next);
  };

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto font-serif text-[#2C2C2C] pb-24">
      <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A2533] mb-2 border-b border-[#E0D7C6] pb-4">
          Panel Académico
        </h1>
        <p className="text-gray-600 font-sans mt-4 text-sm md:text-base">
          Bienvenido nuevamente, <span className="font-bold text-[#1A2533]">{customProfile?.fullName || user?.displayName || 'Estudioso'}</span>. Consulta tu progreso y selecciona el módulo a cursar el día de hoy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-500">
         <div className="bg-white border border-[#E0D7C6] rounded-xl p-5 md:p-6 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 bg-[#1A2533] text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#1A2533]/20">
               <BarChart3 size={24} />
            </div>
            <div>
               <div className="text-[10px] font-bold text-gray-400 font-sans uppercase tracking-widest leading-none mb-1.5">Avance Global</div>
               <div className="text-2xl font-black text-[#1A2533]">{globalProg.percentage}%</div>
            </div>
         </div>
         <div className="bg-white border border-[#E0D7C6] rounded-xl p-5 md:p-6 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
               <CheckCircle size={24} />
            </div>
            <div>
               <div className="text-[10px] font-bold text-gray-400 font-sans uppercase tracking-widest leading-none mb-1.5">Acreditadas</div>
               <div className="text-2xl font-black text-[#1A2533]">{globalProg.completed} <span className="text-sm text-gray-400 font-normal">/ {globalProg.total}</span></div>
            </div>
         </div>
      </div>

      <div className="flex items-center gap-4 mb-8 border-b border-[#E0D7C6] flex-wrap md:flex-nowrap">
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
        <button
          onClick={() => setActiveTab('grades')}
          className={`pb-4 px-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all relative ${
            activeTab === 'grades' ? 'text-[#1A2533]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Award size={16} />
          Boleta de Calificaciones
          {activeTab === 'grades' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A2533] animate-in fade-in duration-300" />}
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

          {/* LICENCIATURA EN TEOLOGÍA SUPERIOR */}
          <section className="border-t border-[#E0D7C6]/60 pt-10 animate-in fade-in slide-in-from-bottom-12 duration-500 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-[#D97706]" size={28} />
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#1A2533]">Licenciatura en Teología Superior</h2>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">Grado avanzado formal para profundizar en idiomas bíblicos y teología dogmática.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 self-start md:self-auto">
                <div className={`px-2.5 py-1 rounded-full text-xs font-bold font-sans flex items-center gap-1.5 border transition-all ${
                  isLicenciaturaUnlocked 
                    ? 'bg-amber-50 text-[#92400E] border-amber-200 shadow-xs' 
                    : 'bg-gray-100 text-gray-500 border-gray-200'
                }`}>
                  {isLicenciaturaUnlocked ? (
                    <>
                      <Unlock size={12} className="text-[#D97706] animate-pulse" />
                      GRADO DESBLOQUEADO
                    </>
                  ) : (
                    <>
                      <Lock size={12} className="text-gray-400" />
                      LICENCIATURA BLOQUEADA
                    </>
                  )}
                </div>
                
                <button
                  onClick={handleToggleBypass}
                  className={`text-[10px] font-bold font-sans px-2.5 py-1 rounded-md border transition-colors ${
                    bypassUnlocked 
                      ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100 shadow-xs' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 shadow-xs cursor-pointer'
                  }`}
                  title="Permite convalidar/forzar el desbloqueo instantáneo con fines evaluativos"
                >
                  {bypassUnlocked ? "Restaurar Bloqueo Real" : "⚡ Forzar Desbloqueo (Pruebas)"}
                </button>
              </div>
            </div>

            {!isLicenciaturaUnlocked ? (
              <div className="bg-[#FAF9F6] border border-[#E0D7C6] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-sm font-bold text-[#7F1D1D] flex items-center gap-1.5">
                    <Lock size={16} /> Prerrequisito: Cumplir Formación Básica
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed max-w-2xl">
                    Las asignaturas avanzadas de Licenciatura exigen haber acreditado la totalidad de los cursos de la formación básica del Seminario ({completedBasicLessonsScaled}/{totalBasicLessonsScaled} lecciones completadas). Su boleta del grado de Bachillerato debe estar totalmente firmada para tramitar la admisión al posgrado.
                  </p>
                </div>
                
                <div className="shrink-0 text-center md:text-right space-y-1.5">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Acreditación Básica</div>
                  <div className="text-2xl font-serif font-black text-[#1A2533]">
                    {completedBasicLessonsScaled} <span className="text-sm text-gray-400 font-normal">/ {totalBasicLessonsScaled} Clases</span>
                  </div>
                  <div className="w-36 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-auto md:ml-auto">
                    <div className="h-full bg-[#7F1D1D]" style={{ width: `${totalBasicLessonsScaled > 0 ? (completedBasicLessonsScaled / totalBasicLessonsScaled) * 100 : 0}%` }} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-emerald-50/40 border border-emerald-200 rounded-xl p-5 md:p-6 flex items-center gap-4 animate-in zoom-in-95 duration-500 font-sans">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 select-none">
                  <ShieldCheck size={22} strokeWidth={1.7} />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Sede Académica de Grado</div>
                  <h4 className="text-sm font-bold text-[#1a2533]">¡Requisitos Acreditados Exitosamente!</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Usted ha sido admitido formalmente a la Licenciatura en Teología Superior. Puede cursar las materias, resolver los desafíos y evaluar su rendimiento a continuación.
                  </p>
                </div>
              </div>
            )}

            <div className="grid lg:grid-cols-2 gap-6">
              {licenciaturaCourses.map(course => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  progress={progress} 
                  onSelectCourse={isLicenciaturaUnlocked ? onSelectCourse : () => {}} 
                  isLocked={!isLicenciaturaUnlocked}
                />
              ))}
            </div>
          </section>
        </div>
      ) : activeTab === 'calendar' ? (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
          <StudyCalendar progress={progress} totalLessons={90} />
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in duration-500">
          {/* Header of the Boleta */}
          <div className="bg-[#1A2533] text-white p-6 md:p-8 rounded-xl border border-[#2C3E50] shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#7F1D1D] text-[#FDE68A] uppercase tracking-widest border border-[#7F1D1D]/50">
                <GraduationCap size={12} /> Registro Académico Calificado
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">Boleta de Calificaciones Oficial</h2>
              <p className="text-xs text-gray-300 font-sans max-w-xl">
                Historial certificado del creyente estudioso <strong className="text-white text-sm font-semibold">{customProfile?.fullName || user?.displayName || 'Estudioso'}</strong>. Detalla su desempeño, aciertos en exámenes comprensivos y convalidaciones del tribunal docente.
              </p>
            </div>
            
            <div className="bg-[#2C3E50]/40 border border-[#3E5C76]/30 p-4 rounded-lg flex flex-col md:items-end justify-center shrink-0 min-w-[200px] text-left md:text-right">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans mb-1">Promedio General</span>
              <span className="text-4xl font-serif font-black text-white leading-none">
                {globalGradeAverage !== null ? `${globalGradeAverage}%` : 'S/C'}
              </span>
              <span className="text-[10px] font-sans text-gray-400 mt-2 block italic leading-snug">
                {globalGradeAverage === null ? 'Ninguna clase calificada' :
                 globalGradeAverage >= 90 ? 'Mención Honorífica' :
                 globalGradeAverage >= 80 ? 'Aprobado con Excelencia' :
                 globalGradeAverage >= 70 ? 'Aprobado con Honores' : 'Aprobado'}
              </span>
            </div>
          </div>

          {/* Academic KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-[#E0D7C6] p-5 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#7F1D1D] border border-red-100 flex items-center justify-center shrink-0">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans mb-0.5">Lecciones Cursadas</div>
                <div className="text-lg font-black text-[#1A2533]">{allGradedLessons.length} acreditadas</div>
              </div>
            </div>
            
            <div className="bg-white border border-[#E0D7C6] p-5 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                <Award size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans mb-0.5">Cursos Graduados</div>
                <div className="text-lg font-black text-[#1A2533]">
                  {courseGradesList.filter(cg => cg.average !== null && cg.completedCount === cg.lessonsCount).length} de {courses.length}
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E0D7C6] p-5 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans mb-0.5">Promedio Parcial</div>
                <div className="text-lg font-black text-[#1A2533]">
                  {globalLessonAverage !== null ? `${globalLessonAverage}%` : '—'}
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E0D7C6] p-5 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans mb-0.5">Hitos de Bloque</div>
                <div className="text-lg font-black text-[#1A2533]">
                  {progress.completedBlockExams ? Object.keys(progress.completedBlockExams).length : 0} aprobados
                </div>
              </div>
            </div>
          </div>

          {/* List Controls */}
          <div className="flex justify-between items-center border-b border-[#E0D7C6] pb-4 pt-4">
            <h3 className="text-xl font-bold text-[#1A2533] font-serif">Boleta Detallada por Asignaturas</h3>
            <button
              onClick={toggleAllCourses}
              className="text-xs font-semibold text-[#7F1D1D] hover:text-red-900 uppercase tracking-wider font-sans transition-colors flex items-center gap-1"
            >
              {Object.keys(expandedCourses).length === courses.length && Object.values(expandedCourses).every(v => v)
                ? 'Contraer Todos'
                : 'Expandir Todos'
              }
            </button>
          </div>

          {/* Detail List of Courses */}
          <div className="space-y-4">
            {courseGradesList.map((cg) => {
              const isExpanded = !!expandedCourses[cg.id];
              const total = cg.lessonsCount;
              const completed = cg.completedCount;
              const hasGrades = cg.average !== null;
              
              return (
                <div key={cg.id} className="bg-white border border-[#E0D7C6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Row Header */}
                  <div 
                    onClick={() => toggleCourseExpand(cg.id)}
                    className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F6] transition-colors"
                  >
                    <div className="space-y-1.5 flex-1 select-none">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                          cg.type === 'BIBLE_STUDY' ? 'bg-[#F2EFE9] text-[#7F1D1D] border border-[#E0D7C6]/60' : 'bg-blue-50 text-blue-950 border border-blue-100'
                        }`}>
                          {cg.type === 'BIBLE_STUDY' ? 'Estudio Bíblico' : 'Especializado'}
                        </span>
                        
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded ${
                          completed === total ? 'bg-emerald-50 text-emerald-700 shadow-xs' :
                          completed > 0 ? 'bg-amber-50 text-amber-700 shadow-xs' :
                          'bg-gray-100 text-gray-500'
                        }`}>
                          {completed === total ? 'Completado' :
                           completed > 0 ? 'En Progreso' : 'Sin Iniciar'}
                        </span>
                      </div>
                      
                      <h4 className="font-bold text-[#1A2533] text-lg font-serif tracking-tight">{cg.title}</h4>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500 font-sans">
                        <span>Lecciones: <strong>{completed} de {total}</strong></span>
                        <div className="w-24 bg-gray-100 h-1.5 rounded-full overflow-hidden inline-block align-middle ml-1">
                          <div className="h-full bg-[#7F1D1D]" style={{ width: `${Math.round((completed/total)*100)}%` }} />
                        </div>
                      </div>
                    </div>

                    {/* Course Grade display */}
                    <div className="flex items-center gap-5 shrink-0 select-none">
                      <div className="text-right">
                        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-sans mb-0.5">Promedio del Curso</div>
                        <div className={`text-2xl font-black ${hasGrades ? 'text-[#1A2533]' : 'text-gray-300 font-normal italic text-sm'}`}>
                          {hasGrades ? `${cg.average}%` : 'Pendiente'}
                        </div>
                      </div>
                      
                      <div className="w-8 h-8 rounded-full border border-[#E0D7C6]/60 flex items-center justify-center text-gray-400 bg-gray-50">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Lessons Detail */}
                  {isExpanded && (
                    <div className="border-t border-[#E0D7C6]/60 bg-[#FAF9F6] p-5 md:p-6 animate-in slide-in-from-top duration-300 font-sans">
                      <div className="text-[10px] font-bold text-[#7F1D1D] uppercase tracking-widest mb-4 pb-1.5 border-b border-[#E0D7C6]/30">
                        Evaluación Continua por Temario
                      </div>
                      
                      {cg.lessons.length === 0 ? (
                        <p className="text-xs text-gray-400 italic">No hay clases registradas en este curso.</p>
                      ) : (
                        <div className="space-y-2.5">
                          {cg.lessons.map((lesson) => {
                            const isLCompleted = lesson.score !== null;
                            return (
                              <div 
                                key={lesson.id} 
                                className="flex items-center justify-between gap-4 py-2 px-3 bg-white border border-[#E0D7C6]/30 rounded-lg hover:shadow-xs transition-shadow"
                              >
                                <div className="flex items-center gap-2.5 overflow-hidden">
                                  <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border text-[9px] font-bold tracking-tighter ${
                                    isLCompleted ? 'bg-[#7F1D1D] text-white border-[#7F1D1D]' : 'bg-gray-50 text-gray-400 border-gray-200'
                                  }`}>
                                    D{lesson.day}
                                  </div>
                                  <span className="text-xs font-semibold text-gray-800 truncate">{lesson.title}</span>
                                </div>
                                
                                <div className="flex items-center gap-3 shrink-0">
                                  <span className={`text-[10px] font-sans font-medium px-2 py-0.5 rounded ${
                                    isLCompleted ? 'text-gray-500 bg-neutral-100' : 'text-gray-400 italic'
                                  }`}>
                                    {isLCompleted ? 'Acreditado' : 'Pendiente'}
                                  </span>
                                  <div className={`text-xs font-mono font-bold w-12 text-right ${isLCompleted ? 'text-[#1A2533]' : 'text-gray-300'}`}>
                                    {isLCompleted ? `${lesson.score}%` : '——'}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Block Exams section if any completed */}
          {progress.completedBlockExams && Object.keys(progress.completedBlockExams).length > 0 && (
            <div className="bg-white border border-[#E0D7C6] rounded-xl p-6 md:p-8 shadow-sm">
              <h4 className="text-sm font-bold text-[#7F1D1D] uppercase tracking-widest mb-4 flex items-center gap-2 font-serif border-b border-[#FAF9F6] pb-2">
                <Award size={16} /> Exámenes de Hitos Colectivos (Convalidados)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-sans">
                {Object.entries(progress.completedBlockExams).map(([milestone, data]: [string, any]) => (
                  <div key={milestone} className="border border-[#E0D7C6] rounded-lg p-4 bg-[#FAF9F6] flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Hito de {milestone} Clases</div>
                      <div className="text-xs text-gray-400 font-medium">Aprobado el {new Date(data.completedAt).toLocaleDateString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-bold font-mono text-[#1A2533]">{data.score}%</div>
                      <div className="text-[9px] font-semibold uppercase text-emerald-600 tracking-wide">Acreditado</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transcript Formal Footer */}
          <div className="border border-dashed border-[#E0D7C6] bg-[#FAF9F6]/50 p-6 rounded-xl text-center font-serif text-xs text-gray-500 tracking-wide space-y-2 max-w-2xl mx-auto leading-relaxed">
            <p>
              "Por tanto, como colaboradores suyos, también os exhortamos a que no recibáis en vano la gracia de Dios."
              <span className="block font-bold text-[#7F1D1D] mt-1 font-sans text-[10px] tracking-widest uppercase">— 2 Corintios 6:1</span>
            </p>
            <div className="w-16 h-px bg-[#E0D7C6] mx-auto my-3" />
            <p className="font-sans text-[9px] text-gray-400 uppercase tracking-widest select-none">
              Registrado de Forma Electrónica e Inmutable • Seminario Teológico Digital Sola Fide
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function CourseCard({ course, progress, onSelectCourse, isLocked = false }: { key?: React.Key, course: Course, progress: UserProgress, onSelectCourse: (courseId: string) => void, isLocked?: boolean }) {
  const total = 90;
  const completedReal = course.lessons.filter(l => progress.completedLessons[l.id]).length;
  const percentage = course.lessons.length > 0 ? Math.round((completedReal / course.lessons.length) * 100) : 0;
  const completedScaled = course.lessons.length > 0 ? Math.round((completedReal / course.lessons.length) * total) : 0;
  
  return (
    <button 
      onClick={() => !isLocked && onSelectCourse(course.id)}
      disabled={isLocked}
      className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all flex flex-col h-full group text-left w-full ${
        isLocked 
          ? 'opacity-75 bg-[#F9F9FB] border-[#E2E8F0] cursor-not-allowed select-none' 
          : 'border-[#E0D7C6] hover:shadow-md hover:border-[#1A2533] cursor-pointer'
      }`}
    >
      <div className="p-6 md:p-8 flex-1 w-full relative">
         <div className="text-[10px] md:text-xs font-sans text-gray-500 uppercase tracking-widest mb-2 flex items-center justify-between gap-2">
            <span className={course.type === 'LICENCIATURA' ? 'text-[#D97706] font-bold' : 'text-[#7F1D1D] font-bold'}>
              {course.type === 'LICENCIATURA' ? 'Módulo de Licenciatura' : 'Mínimo 3 Meses'}
            </span>
            {isLocked && (
              <span className="flex items-center gap-1 text-[#92400E] font-bold bg-amber-50 px-2.5 py-0.5 rounded text-[9px] border border-amber-200">
                <Lock size={10} /> BLOQUEADO
              </span>
            )}
         </div>
         <h3 className={`text-xl font-bold mb-3 transition-colors ${
           isLocked ? 'text-gray-400' : 'text-[#1A2533] group-hover:text-[#7f1d1d]'
         }`}>{course.title}</h3>
         <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
           {course.description}
         </p>
         
         <div className="space-y-2 mb-2 mt-auto">
           <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-sans">Progreso ({completedScaled}/{total} Clases)</span>
              <span className="text-xs font-bold text-[#1A2533]">{percentage}%</span>
           </div>
           <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
             <div className={`h-full rounded-full transition-all duration-500 ${
               course.type === 'LICENCIATURA' ? 'bg-[#D97706]' : 'bg-[#7F1D1D]'
             }`} style={{ width: `${percentage}%` }}></div>
           </div>
         </div>
      </div>
      
      <div className={`border-t p-4 flex justify-between items-center px-6 md:px-8 transition-colors w-full ${
        isLocked 
          ? 'bg-gray-100/50 border-gray-200' 
          : 'bg-gray-50 border-[#E0D7C6] group-hover:bg-white'
      }`}>
         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">
            {total} Clases {isLocked ? 'por habilitar' : '+ Evaluaciones'}
         </div>
         {isLocked ? (
           <div className="text-[#92400E] text-[10px] md:text-xs leading-none font-bold tracking-widest uppercase flex items-center gap-1 font-sans">
             Cumplir Requisitos <Lock size={12} />
           </div>
         ) : (
           <div className="flex items-center gap-2 bg-transparent text-[#1A2533] group-hover:bg-[#1A2533] group-hover:text-white px-4 py-2.5 rounded text-[10px] md:text-xs leading-none font-bold tracking-widest uppercase transition-all font-sans">
              Ver Módulo <PlayCircle size={14} className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
           </div>
         )}
      </div>
    </button>
  );
}
