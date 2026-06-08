import { Database } from './types';
import { exegesisCourse } from './data/courses/exegesis';
import { apologeticaCourse } from './data/courses/apologetica';
import { doctrinasCourse } from './data/courses/doctrinas';
import { pentateucoCourse } from './data/courses/pentateuco';
import { historicosCourse, poeticosCourse } from './data/courses/historicos_poeticos';
import { profetasCourse, evangeliosCourse } from './data/courses/profetas_nuevo_testamento';
import { fundamentosCourse } from './data/courses/fundamentos';
import { pabloCourse } from './data/courses/pablo';
import { licenciaturaCourses } from './data/courses/licenciatura';
import { licenciaturasExtra } from './data/courses/licenciaturas_extra';
import { getLessonTitleForDay } from './data/syllabusTitles';

import { maestriaCourses } from './data/courses/maestria';
import { doctoradoCourses } from './data/courses/doctorado';

export const mockDatabase: Database = {
  courses: [
    exegesisCourse,
    apologeticaCourse,
    doctrinasCourse,
    pentateucoCourse,
    historicosCourse,
    poeticosCourse,
    profetasCourse,
    evangeliosCourse,
    pabloCourse,
    {
      ...fundamentosCourse,
      id: 'bases-fundamentales'
    },
    ...licenciaturaCourses,
    ...licenciaturasExtra,
    ...maestriaCourses,
    ...doctoradoCourses
  ]
};

// Pad all courses with 90 or their respective expected lessons to simulate real progression
mockDatabase.courses.forEach(course => {
  const expectedLessons = course.durationMonths ? course.durationMonths * 30 : 90;
  if (course.lessons.length < expectedLessons) {
    const existingDays = new Set(course.lessons.map(l => l.day));
    for (let i = 1; i <= expectedLessons; i++) {
        if (!existingDays.has(i)) {
             course.lessons.push({
                 id: `${course.id}-day-${i}`,
                 day: i,
                 title: getLessonTitleForDay(course.id, i),
                 blocks: [{
                     type: 'text',
                     content: `Contenido de estudio para el Día ${i}. Prosiga con su lectura programada y complete los ejercicios de asimilación para este día.`
                 }],
                 finalExam: []
             });
        }
    }
    course.lessons.sort((a, b) => a.day - b.day);
  }
});
