import { Course } from '../../types';

export const teologiaSistematicaSuperior: Course = {
  id: 'lic-teologia-sistematica',
  title: 'Licenciatura: Teología Sistemática Superior (Soteriología y Escatología)',
  type: 'LICENCIATURA' as any, // Cast as we will expand types.ts
  description: 'Un escrutinio exhaustivo sobre los decretos eternos, la expiación definida, el orden de la salvación (Ordo Salutis) y los modelos de interpretación escatológica.',
  lessons: [
    {
      id: 'lic-tss-day1',
      day: 1,
      title: 'El Ordo Salutis: El Orden Sobrenacional de la Redención',
      blocks: [
        {
          type: 'note',
          id: 'lic-tss-d1-reading',
          content: '**Lectura de Investigación Superior (60 mins):**\nLea comprensivamente **Romanos 8:28-30**, **Efesios 1:3-14** y **Juan 6:37-44**. \n\n**Preguntas de Análisis Técnico:**\n1. ¿Cuál es el significado de "Presciencia" (Prognosis) en Romanos 8:29?\n2. Identifique por qué la regeneración antecede jurídicamente a la fe salvadora en el monergismo clásico.\n3. Diferencie entre la llamada general externa del Evangelio y el llamamiento eficaz o interno.'
        },
        {
          type: 'text',
          id: 'lic-tss-d1-b1',
          content: `El **Ordo Salutis** (Orden de la Salvación) es un término técnico que describe el encadenamiento teológico y lógico de las diversas etapas del proceso redentor aplicadas por el Espíritu Santo al creyente. No representa una secuencia cronológicamente desconectada, sino un lazo indestructible de soberanía divina.\n\nLa estructura reformada ortodoxa del Ordo Salutis postula el siguiente orden:\n1. **Presciencia y Elección Soberana:** El decreto eterno de Dios antes de la fundación del mundo.\n2. **Llamamiento Eficaz (Interno):** La obra del Espíritu Santo en el corazón que convence y resucita el alma dormida.\n3. **Regeneración o Nuevo Nacimiento:** Instante en que Dios quita el corazón de piedra e infunde vida espiritual.\n4. **Fe y Arrepentimiento (Conversión):** La respuesta activa del pecador vivificado que abraza a Cristo como sustituto.\n5. **Justificación:** El veredicto judicial donde Dios imputa la justicia de Cristo y perdona los cargos.\n6. **Adopción:** El ingreso legal a la herencia familiar de los hijos de Dios.\n7. **Santificación:** El proceso cooperativo de madurez espiritual progresiva.\n8. **Perseverancia de los Santos:** La preservación por fe del creyente hasta el fin.\n9. **Glorificación:** La restauración plena física y espiritual en el retorno de Cristo.`
        },
        {
          type: 'text',
          id: 'lic-tss-d1-b2',
          content: `El debate principal divide el monergismo del sinergismo arminiano. Mientras el sinergismo afirma que el llamado de Dios espera la respuesta libre y neutral de la voluntad humana para producir la regeneración, el monergismo enseña que la regeneración es enteramente soberana: un muerto espiritual (Efesios 2:1) necesita recibir vida *antes* de poder manifestar cualquier atisbo de fe salvadora.`
        },
        {
          type: 'note',
          id: 'lic-tss-d1-summary',
          content: `**Conclusión Académica:**\nLa justificación es un acto legal instantáneo y perfecto, mientras que la santificación es un proceso perfectible de por vida. Confundir ambos destruye el núcleo teológico del Evangelio.`
        }
      ],
      finalExam: [
        {
          id: 'f-tss-1',
          question: '¿Por qué en el monergismo la regeneración precede lógicamente a la fe salvadora?',
          options: [
            'Porque la fe es una obra humana natural que convence a Dios de salvarnos.',
            'Porque un pecador que está espiritualmente muerto necesita recibir vida espiritual nueva por gracia divina para poder ejercer fe genuina.',
            'Porque el bautismo de agua otorga la salvación mecánica sin necesidad de fe.',
            'No hay precedencia lógica, ocurren meses después de manera separada.'
          ],
          correctAnswerIndex: 1,
          explanation: 'La regeneración es la resurrección espiritual efectuada de forma soberana por el Espíritu Santo, capacitando la posterior fe del pecador redimido.'
        }
      ],
      baseVerse: {
        reference: 'Romanos 8:30',
        text: 'Y a los que predestinó, a éstos también llamó; y a los que llamó, a éstos también justificó; y a los que justificó, a éstos también glorificó.'
      },
      commentaries: [
        { author: 'Dr. R.C. Sproul', text: 'La fe no causa la regeneración. La regeneración es la causa soberana de la fe.' }
      ],
      assignments: [
        { id: 't-tss-1', description: 'Elabore un ensayo de 500 palabras comparando detalladamente los decretos de salvación monergistas frente a los sinergistas.' }
      ]
    },
    {
      id: 'lic-tss-day2',
      day: 2,
      title: 'Modelos Escatológicos y la Estructura de los Pactos',
      blocks: [
        {
          type: 'text',
          id: 'lic-tss-d2-b1',
          content: `El término **Escatología** no se circunscribe únicamente al estudio cronológico del fin del mundo, sino a la culminación del Reino de Jesucristo en la historia de la redención. Existen tres interpretaciones principales acerca del Reinado Milenial en Apocalipsis 20:\n\n- **Amilenialismo:** Sostiene que el "milenio" es una cifra simbólica que representa el reinado espiritual actual de Cristo desde Su ascensión hasta Su regreso físico personal, donde se librará el juicio final y la restauración de los cielos y tierra nuevos.\n- **Premilenialismo:** Postula que el retorno visible de Jesucristo precederá conceptual y geográficamente a un reinado literal de mil años sobre la tierra física dominando las naciones desde Jerusalén.\n- **Postmilenialismo:** Sigue la idea de que la propagación global del Evangelio y la influencia transformadora de la Iglesia cristianizarán progresivamente la tierra, preparando un milenio de paz y rectitud tras el cual Cristo retornará físicamente.`
        },
        {
          type: 'text',
          id: 'lic-tss-d2-b2',
          content: `Toda la Escatología está ligada con la **Teología de los Pactos** o el **Dispensacionalismo**. Ambas macro-estructuras interpretan las promesas de Dios al Israel histórico y la Iglesia de formas contrastantes: la Teología del Pacto observa una continuidad orgánica y redentora bajo un único "Pacto de Gracia", donde la Iglesia es la herencia de las promesas de Abraham; el Dispensacionalismo clásico postula una distinción estricta de orden escatológico, legal, y terrenal entre Israel y la Iglesia de Cristo.`
        }
      ],
      finalExam: [
        {
          id: 'f-tss-2',
          question: '¿Qué sostiene la perspectiva Amilenial clásica?',
          options: [
            'Que el milenio es un periodo literal de 1000 años ubicado en el pasado intermedio de la tierra.',
            'Que el milenio es una cifra simbólica que representa el reinado espiritual de Cristo en la era de la Iglesia contemporánea.',
            'Que no existe el cielo ni el infierno, y la muerte terrenal es la desaparición absoluta del alma.',
            'La creencia de que la tierra será gobernada por imperios feudales eternos de forma aleatoria.'
          ],
          correctAnswerIndex: 1,
          explanation: 'El amilenialismo entiende el milenio como el reinado de Cristo que inició con Su ascensión, donde resalta Su autoridad definitiva y soberana sobre Su pueblo espiritual.'
        }
      ],
      baseVerse: {
        reference: 'Hebreos 13:20',
        text: 'Y el Dios de paz que resucitó de los muertos a nuestro Señor Jesucristo, el gran pastor de las ovejas, por la sangre del pacto eterno...'
      }
    }
  ]
};

export const hermeneuticaIdiomasBiblicos: Course = {
  id: 'lic-idiomas-biblicos',
  title: 'Licenciatura: Hermenéutica Superior e Idiomas Bíblicos',
  type: 'LICENCIATURA' as any,
  description: 'Introducción a la morfología y sintaxis del Griego Koiné del Nuevo Testamento y nociones avanzadas del Hebreo de la Tanaj bíblica para el análisis exegético formal.',
  lessons: [
    {
      id: 'lic-hib-day1',
      day: 1,
      title: 'Estructuras Lingüísticas del Griego Koiné',
      blocks: [
        {
          type: 'text',
          id: 'lic-hib-d1-b1',
          content: `El Nuevo Testamento fue redactado en **Griego Koiné**, el lenguaje común y popular del imperio helenístico. Lejos de ser un dialecto litúrgico oculto, era un idioma caracterizado por su extraordinaria precisión analítica. El estudio de su estructura fonológica y sus categorías morfológicas es una salvaguarda indispensable para evitar excesivas generalizaciones semánticas modernas.\n\nEstructuras Gramaticales Críticas:\n- **El Sistema de Casos:** A diferencia del español que organiza las oraciones por posición gramatical, el griego modifica la terminación de cada palabra (declina) para indicar su función teológica. Contiene cinco casos: Nominativo (Sujeto), Genitivo (Origen/Posesión), Dativo (Objeto indirecto), Acusativo (Objeto directo) y Vocativo (Dirección directa).\n- **El Aspecto Verbal:** En el griego koiné, el tiempo verbal no se enfoca únicamente en *cuándo* ocurrió la acción (pasado, presente, futuro) sino en *cómo* se presenta la acción. El **Aoristo** describe la acción como un todo indivisible (constatación puntual o global historical), mientras que el tiempo **Presente** o **Imperfecto** indican acciones durativas, continuas o repetitivas.`
        },
        {
          type: 'note',
          id: 'lic-hib-d1-greek-examples',
          content: `**Caso de Estudio Exegético (Juan 1:1):**\nEn el texto griego, la frase 'kai theos en ho logos' carece del artículo definido 'ho' antes de 'theos'. Esto no se debe a un error aleatorio, representa la precisión sintáctica del griego clásico: al omitir el artículo, el autor indica que "el Verbo (Logos) poseía la misma naturaleza cualitativa y esencia divina que el Padre", pero sin llegar a confundirse personalmente con Él. Si se hubiese usado el artículo, se caería en el sabelianismo o monarquianismo patripasiano.`
        }
      ],
      finalExam: [
        {
          id: 'f-hib-1',
          question: '¿Qué caracteriza el tiempo verbal "Aoristo" en el griego del Nuevo Testamento?',
          options: [
            'Describe un futuro hipotético que sólo ocurrirá si se cumplen profecías específicas.',
            'Indica una acción continua, repetitiva y persistente que nunca se completa.',
            'Presenta la acción de manera global e indefinida, como un hecho completo y cerrado en sí mismo, sin enfocar su duración en el tiempo.',
            'Un término que describe la destrucción poética de los manuscritos literarios.'
          ],
          correctAnswerIndex: 2,
          explanation: 'El aoristo es el aspecto sustancial por excelencia de la lengua griega, utilizado frecuentemente para enunciar acontecimientos salvíficos definitivos o históricos singulares.'
        }
      ],
      baseVerse: {
        reference: 'Juan 1:1',
        text: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.'
      }
    },
    {
      id: 'lic-hib-day2',
      day: 2,
      title: 'Sintaxis del Hebreo Bíblico y Estructura Poética',
      blocks: [
        {
          type: 'text',
          id: 'lic-hib-d2-b1',
          content: `El **Hebreo Bíblico** pertenece a la familia de lenguas semíticas, caracterizándose por ser eminentemente concreto, dinámico y arraigado en la acción tangible. Mientras la mente grecorromana es abstracta y formal, el pensamiento hebreo se expresa mediante analogías de la naturaleza y metáforas vivenciales corporales.\n\nEl sistema verbal semítico no define el tiempo absoluto, sino el estado de la acción:\n- **Perfecto:** La acción se concibe como terminada, resuelta e irrevocable (por ello muy usado en profecías que se dan por seguras).\n- **Imperfecto:** La acción se percibe como incompleta, progresiva, recurrente o en desarrollo.\n\nUn rasgo literario central de su poesía y profecía es el **Paralelismo Hebreo**. Consiste en repetir y expandir el pensamiento de una línea (Estrofa A) en la siguiente (Estrofa B). Se organizan de forma **Sinonímica** (cuando la segunda aclara o refuerza a la primera con términos análogos), **Antitética** (donde contrasta la rectitud y la maldad, frecuente en Proverbios), o **Sintética** (donde la segunda línea completa o expande la información de la primera).`
        }
      ],
      finalExam: [
        {
          id: 'f-hib-2',
          question: '¿Qué es el Paralelismo Antitético en la literatura poética hebrea?',
          options: [
            'Repetir exactamente lo mismo en dos líneas usando las mismas palabras griegas.',
            'Contrastar el pensamiento de la primera línea con una declaración contraria o de juicio en la segunda para resaltar los opuestos morales.',
            'Inventar profecías enigmáticas sobre el fin del imperio babilónico secular.',
            'Un error idiomático surgido al traducir los pergaminos arameos al latín vulgar.'
          ],
          correctAnswerIndex: 1,
          explanation: 'El paralelismo antitético opone ideas éticas o existenciales paralelas, un recurso clásico de la literatura sapiencial (ej: "El hijo sabio alegra al padre, pero el hijo necio es tristeza de su madre").'
        }
      ],
      baseVerse: {
        reference: 'Salmo 119:105',
        text: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.'
      }
    }
  ]
};

export const historiaDelDogma: Course = {
  id: 'lic-historia-dogma',
  title: 'Licenciatura: Historia del Dogma Cristiano y la Reforma Protestante',
  type: 'LICENCIATURA' as any,
  description: 'Análisis minucioso del desarrollo confesional e histórico de la doctrina de la Iglesia, desde los primeros concilios ecuménicos hasta los concilios continentales de la Reforma del siglo XVI.',
  lessons: [
    {
      id: 'lic-hdd-day1',
      day: 1,
      title: 'Las Heresías Cristológicas y los Concilios Ecuménicos Primitivos',
      blocks: [
        {
          type: 'text',
          id: 'lic-hdd-d1-b1',
          content: `La defensa del núcleo de la fe requirió de la articulación doctrinal precisa frente a las desviaciones surgidas en los primeros siglos del dogma cristiano. Los cuatro primeros concilios ecuménicos delimitaron formalmente las fronteras de la fe trinitaria y cristológica:\n\n1. **Concilio de Nicea (325 d.C.):** Convocado para rechazar el arrianismo (enseñanza de Arrio que negaba la deidad co-eterna de Cristo afirmando que el Hijo era una criatura). Estableció el término clave *homoousios* (de la misma sustancia o esencia) entre el Padre y el Hijo.\n2. **Concilio de Constantinopla (381 d.C.):** Confirmó definitivamente Nicea, expandió el Credo Niceno respecto a la personalidad y deidad total del Espíritu Santo frente a los macedonianos.\n3. **Concilio de Éfeso (431 d.C.):** Condenó el nestorianismo (que separaba excesivamente a Cristo en dos personas distintas) y ratificó la unidad de Su Persona divina.\n4. **Concilio de Calcedonia (451 d.C.):** Formuló la definición clásica de la Unión Hipostática contra el monofisismo de Eutiques (que mezclaba y fundía ambas naturalezas): Jesucristo posee dos naturalezas completas (divina y humana) unidas idénticamente sin confusión, sin cambio, sin división y sin separación en una sola Persona.`
        }
      ],
      finalExam: [
        {
          id: 'f-hdd-1',
          question: '¿Qué condena y aclara teológicamente el Concilio de Calcedonia en el 451 d.C.?',
          options: [
            'Prohíbe la lectura literal del apocalipsis determinando que toda la Biblia es mitológica.',
            'Establece la doctrina de la transubstanciación en los ritos feudales papales.',
            'Confiesa una sola persona trina que asume tres formas impersonales cambiantes.',
            'Previene la mezcla y confusión de las naturalezas divina y humana en Cristo, formulando su unión hipostática sin confusión, cambio, división o separación.'
          ],
          correctAnswerIndex: 3,
          explanation: 'Calcedonia consolida doctrinalmente la teología patrística de la encarnación, declarando que Jesucristo es verdadero Dios y verdadero hombre.'
        }
      ],
      baseVerse: {
        reference: 'Judas 1:3',
        text: 'Amados, por la gran solicitud que tenía de escribiros acerca de nuestra común salvación, me ha sido necesario escribiros exhortándoos que contendáis ardientemente por la fe que ha sido una vez dada a los santos.'
      }
    },
    {
      id: 'lic-hdd-day2',
      day: 2,
      title: 'Las Cinco Solas y el Desarrollo Teológico Reformado',
      blocks: [
        {
          type: 'text',
          id: 'lic-hdd-d2-b1',
          content: `La **Reforma Protestante** del siglo XVI no representó la invención de una nueva religión, sino un retorno y recuperación providencial de la pureza apostólica y la supremacía de la gracia de Dios sobre la degeneración de la iglesia medieval. Esta gesta se asienta formalmente sobre las **Cinco Solas**:\n\n- **Sola Scriptura (Solo la Escritura):** La Palabra de Dios como la única autoridad suprema e infalible reguladora del dogma. No anula concilios históricos o maestros, sino que los subordina judicialmente al canon bíblico.\n- **Sola Fide (Solo por la Fe):** El medio instrumental único de justificación, excluyendo méritos, satisfacciones pecuniarias o indulgencias penitenciales.\n- **Sola Gratia (Solo por Gracia):** La causa eficiente absoluta de la salvación eterna de las almas.\n- **Solus Christus (Solo Cristo):** Cristo Jesús es el único mediador y sumo sacerdote sustituto perpetuo.\n- **Soli Deo Gloria (Solo a Dios sea la Gloria):** El fin supremo, inmutable e integral de la existencia de toda la creación.`
        }
      ],
      finalExam: [
        {
          id: 'f-hdd-2',
          question: '¿Qué papel normativo asume Sola Scriptura?',
          options: [
            'Prohíbe cualquier estudio histórico ajeno a los versículos textuales del Génesis.',
            'Coloca a las Escrituras bíblicas como la máxima e infalible regla de fe y de obediencia, bajo la cual debe subordinarse la tradición de la Iglesia y los credos humanos.',
            'Exige memorizar el texto bíblico en latín medieval para la salvación real de los hogares.',
            'Sostiene que la revelación continua de los apóstoles contemporáneos prevalece sobre profecías pasadas.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Sola Scriptura es el principio formal de la Reforma, insistiendo en que sólo el soplo divino divino plasmado en las Escrituras obliga la conciencia moral e intelectual.'
        }
      ],
      baseVerse: {
        reference: 'Efesios 2:8',
        text: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.'
      }
    }
  ]
};

export const licenciaturaCourses = [
  teologiaSistematicaSuperior,
  hermeneuticaIdiomasBiblicos,
  historiaDelDogma
];
