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
    ...licenciaturaCourses
  ]
};
