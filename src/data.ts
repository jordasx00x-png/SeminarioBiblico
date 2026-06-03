import { Course } from './types';

export const mockDatabase: { courses: Course[] } = {
  courses: [
    {
      id: 'exegesis',
      title: 'Entendiendo la Biblia',
      type: 'SPECIALIZED',
      description: 'Aprende paso a paso a descubrir el mensaje original que Dios puso en las Escrituras.',
      lessons: [
        {
          id: 'exegesis-day1',
          day: 1,
          title: 'Cómo Estudiar el Texto Bíblico',
          blocks: [
            {
              type: 'note',
              id: 'exe-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Nehemías 8** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'exe-d1-b1',
              content: `El estudio serio de la Biblia se llama **exégesis**. No te asustes por el nombre; simplemente significa "sacar o guiar hacia afuera" el mensaje que el autor original quiso dar. Lo contrario es la **eiségesis**, que es cuando nosotros "metemos" nuestras propias ideas o deseos en el texto.\n\nPara estudiar bien, usamos un método que analiza la historia y el contexto. Aunque parezca algo muy académico, en realidad es una forma de ser respetuosos con lo que Dios dijo en su momento.`
            },
            {
              type: 'note',
              id: 'exe-d1-n1',
              content: `**Toma nota:**\n1. La exégesis busca lo que el texto *dice*.\n2. La eiségesis busca lo que yo *quiero* que diga.\n3. El método académico es una herramienta para la precisión, no un enemigo de la fe.`
            },
            {
              type: 'control',
              id: 'exe-d1-q1',
              question: {
                id: 'q1',
                question: '¿Cuál es la principal diferencia entre exégesis y eiségesis?',
                options: [
                  'La exégesis es para el Antiguo Testamento y la eiségesis para el Nuevo.',
                  'La exégesis extrae el significado del texto, la eiségesis introduce ideas externas al texto.',
                  'La eiségesis es un método académico moderno, la exégesis es misticismo antiguo.'
                ],
                correctAnswerIndex: 1
              }
            },
            {
              type: 'text',
              id: 'exe-d1-b2',
              content: `El método histórico-crítico se compone de varias disciplinas integradas. El primer paso fundacional es la **Crítica Textual**. Antes de interpretar un pasaje, debemos asegurarnos de que el texto que leemos sea el más cercano al manuscrito original (autógrafo). Los eruditos comparan miles de manuscritos antiguos para identificar variantes y reconstruir el texto original con alta precisión.\n\nUna vez establecido el texto, procedemos a realizar un **Análisis Histórico y Cultural**. Esto implica sumergirse en el mundo del autor: ¿Cuál era la situación política? ¿Qué costumbres matrimoniales existían? ¿Qué crisis económica afectaba a la comunidad? Sin este contexto, corremos el riesgo de malinterpretar leyes o cartas muy específicas.`
            },
            {
              type: 'note',
              id: 'exe-d1-n2',
              content: `**Ejercicio de Repaso:**\nInvestiga qué es un *autógrafo* en el contexto de la crítica textual. Anota en tu libreta por qué no poseemos ninguno en la actualidad y cómo esto afecta nuestra confianza en el texto bíblico (pista: la abundancia de manuscritos es clave).`
            },
            {
              type: 'control',
              id: 'exe-d1-q2',
              question: {
                id: 'q2',
                question: '¿Cuál es el objetivo principal de la Crítica Textual en la investigación bíblica?',
                options: [
                  'Criticar de forma agnóstica los errores teológicos de los autores bíblicos.',
                  'Traducir el texto a lenguajes modernos para distribuirlos mejor.',
                  'Reconstruir mediante evidencias el texto bíblico más cercano a los manuscritos originales.'
                ],
                correctAnswerIndex: 2
              }
            },
            {
              type: 'text',
              id: 'exe-d1-b3',
              content: `El paso final en esta inducción es el **Análisis Literario**. La Biblia no es un solo volumen homogéneo, sino una biblioteca con diversos géneros (poesía, apocalíptica, narrativa histórica, epístolas). Leer un Salmo (poesía) como si fuera un libro de leyes resultará en una teología precaria. Identificar el género literario, el flujo del argumento y el vocabulario utilizado es esencial.\n\nEn conclusión, el método académico no destruye el enfoque pastoral, sino que lo ancla en la historia y envejece con madurez exegética, evitando lecturas en el vacío.`
            },
            {
              type: 'note',
              id: 'exe-d1-n3',
              content: `**Repaso Semanal de Conceptos:**\n- **Géneros Literarios:** Identifica el género de tu pasaje favorito esta semana.\n- **Hermenéutica:** La ciencia y el arte de la interpretación.\n- **Puentes Culturales:** La necesidad de traducir no solo palabras, sino conceptos de un mundo antiguo a uno moderno.`
            }
          ],
          finalExam: [
            {
              id: 'f-exe-1',
              question: 'Si un predicador toma la imagen literaria del leviatán y la usa para hablar de aviones de combate modernos desconectándose de la intención original del texto, está practicando:',
              options: ['Exégesis Histórica', 'Eiségesis Anacrónica', 'Crítica Textual Menor', 'Concordismo Científico'],
              correctAnswerIndex: 1,
              explanation: 'La eiségesis inyecta ideas modernas en el texto antiguo. Anacrónica significa "fuera de su tiempo original", exactamente lo que sucede al asignar tecnología moderna a textos milenarios.'
            },
            {
              id: 'f-exe-2',
              question: 'Acudir a documentos seculares asirios para entender cómo funcionaban los tratados de vasallaje referidos en Deuteronomio es un esfuerzo de:',
              options: ['Análisis Histórico y Cultural', 'Crítica Textual Temprana', 'Inspiración Verbal', 'Traducción Dinámica'],
              correctAnswerIndex: 0,
              explanation: 'El estudio de tratados, costumbres o leyes del entorno del antiguo oriente pertenece al contexto histórico-cultural del texto.'
            },
            {
              id: 'f-exe-3',
              question: 'La Crítica Textual surge fundamentalmente debido a que:',
              options: ['Los textos resultan inentendibles espiritualmente para el nuevo converso.', 'Carecemos por completo de los autógrafos originales y dependemos de copias manuales generacionales.', 'Los idiomas bíblicos han dejado de estudiarse en el medio teológico actual.', 'Los concilios nunca definieron qué libros entraban en el canon.'],
              correctAnswerIndex: 1,
              explanation: 'Dado que no tenemos los manuscritos trazados por la pluma de los autores originales, la crítica textual compara las copias sobrevivientes para discernir el texto exacto.'
            },
            {
              id: 'f-exe-4',
              question: 'Distinguir entre una epístola doctrinal, una parábola pedagógica y un salmo cúltico es deber de la disciplina de:',
              options: ['Crítica de la redacción histórica', 'Análisis Literario', 'Contexto Geográfico', 'Eiségesis constructivista'],
              correctAnswerIndex: 1,
              explanation: 'Determinar el género literario, la métrica y las figuras de retórica son el corazón del análisis literario.'
            },
            {
              id: 'f-exe-5',
              question: '¿Por qué al método utilizado por los eruditos se le denomina método "histórico-crítico"?',
              options: ['Porque incita a dudar sistemáticamente de toda verdad dogmática.', 'Por ser un método de finales del siglo XIX.', 'Porque el término "crítico" en la academia remite a un escrutinio analítico y riguroso de la evidencia.', 'Porque critica la fe del lector al enfrentarlo con la historia mundial.'],
              correctAnswerIndex: 2,
              explanation: 'La palabra "crítica" viene de un discernimiento y evaluación meticulosa o analítica, no de actitud destructiva (ej. "pensamiento crítico").'
            }
          ],
          baseVerse: { reference: 'Nehemías 8:8', text: 'Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.' },
          commentaries: [
            {
              author: 'Matthew Henry',
              text: "La exégesis no es simplemente encontrar lo que queremos que la Biblia diga, sino permitir que la Palabra de Dios hable sus propias verdades a nuestros corazones mediante un estudio diligente y humilde."
            },
            {
              author: 'John MacArthur',
              text: "La verdadera exégesis no solo lee palabras; extrae el significado que Dios depositó allí originalmente. Es nuestra mayor responsabilidad como manejadores de la Palabra."
            }
          ],
          verses: [
            { reference: '2 Timoteo 2:15', text: 'Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.' },
            { reference: 'Hechos 17:11', text: 'Y éstos eran más nobles que los que estaban en Tesalónica, pues recibieron la palabra con toda solicitud, escudriñando cada día las Escrituras para ver si estas cosas eran así.' },
            { reference: 'Salmo 119:18', text: 'Abre mis ojos, y miraré las maravillas de tu ley.' }
          ],
          assignments: [
            { id: 't1', description: 'Realizar un cuadro comparativo entre el concepto de exégesis y eiségesis con ejemplos propios.' },
            { id: 't2', description: 'Investigar en un diccionario bíblico el significado de la palabra "Hermenéutica".' }
          ]
        },
        {
          id: 'exegesis-day2',
          day: 2,
          title: 'Estudiando las Palabras y su Contexto',
          blocks: [
            {
              type: 'note',
              id: 'exe-d2-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Salmo 119:97-112** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'exe-d2-b1',
              content: `El **Estudio de Palabras** consiste en entender qué significaba una palabra específica en el idioma original (hebreo o griego) en el momento en que se escribió. Un error común es pensar que una palabra significa lo mismo hoy que hace 2000 años. El contexto siempre es el que manda y nos da el sentido real.`
            },
            {
              type: 'note',
              id: 'exe-d2-n1',
              content: `**Recuerda:**\n- **El Contexto manda:** No busques solo el origen de la palabra, busca cómo se usa en la oración.\n- **No inventes:** Usa herramientas como diccionarios bíblicos en lugar de diccionarios de español moderno para estos casos.`
            },
            {
              type: 'control',
              id: 'exe-d2-q1',
              question: {
                id: 'q3',
                question: '¿Qué es la "falacia de la raíz" en la exégesis?',
                options: [
                  'Afirmar que un idioma antiguo no tiene raíces o estructuras lógicas.',
                  'Asumir que el significado de una palabra en la época bíblica es idéntico a su origen etimológico o componente raíz.',
                  'Ignorar por completo el idioma griego en el Nuevo Testamento.'
                ],
                correctAnswerIndex: 1
              }
            },
            {
              type: 'text',
              id: 'exe-d2-b2',
              content: `Más importante que la etimología de la palabra, es el **uso contextual**. El contexto determina el significado. Por ello, el análisis léxico debe ir de la mano con el **Análisis Sintáctico**, que estudia cómo las palabras se relacionan entre sí en una oración (verbos, sustantivos, preposiciones, conjunciones). Una simple preposición en griego (ej. *eis*, *en*, o *ek*) puede cambiar radicalmente el sentido de una frase teológica.`
            },
            {
              type: 'note',
              id: 'exe-d2-n2',
              content: `**Regla de Oro del Exégeta:**\n"El contexto es Rey". Antes de profundizar en el griego o hebreo, analiza el párrafo anterior y posterior. Ninguna palabra es una isla teológica.`
            }
          ],
          finalExam: [
            {
              id: 'f-exe-6',
              question: 'La regla de oro del análisis léxico dicta que el significado final de una palabra es determinado principalmente por:',
              options: ['Su raíz etimológica.', 'El contexto literario donde se encuentra.', 'El diccionario moderno de la lengua española.', 'Lo que el intérprete sienta en su corazón.'],
              correctAnswerIndex: 1,
              explanation: 'El contexto es rey en la exégesis. Una misma palabra puede tener significados muy distintos dependiendo de cómo la usa el autor en esa oración particular.'
            }
          ],
          baseVerse: { reference: 'Salmo 119:105', text: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.' },
          commentaries: [
            { author: 'Charles Spurgeon', text: 'Las palabras de Dios son como perlas; el contexto es el hilo que las une para formar un collar de verdad.' },
            { author: 'Matthew Henry', text: 'No debemos leer la Biblia como si fuera un diccionario, sino como una carta de amor donde cada palabra tiene un peso eterno.' }
          ],
          verses: [
            { reference: '2 Timoteo 3:16', text: 'Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia.' },
            { reference: 'Juan 5:39', text: 'Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí.' }
          ],
          assignments: [
            { id: 't3', description: 'Selecciona un versículo clave y escribe el contexto de los capítulos que lo rodean.' },
            { id: 't4', description: 'Investiga el significado contextual de la palabra "Logos" en Juan 1:1.' }
          ]
        },
        {
          id: 'exegesis-day3',
          day: 3,
          title: 'Descubriendo el Mensaje y su Aplicación',
          blocks: [
            {
              type: 'note',
              id: 'exe-d3-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el pasaje completo de **Hechos 8:26-40** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'exe-d3-b1',
              content: `El último paso es entender el **Mensaje de Dios**. Preguntamos: ¿Qué nos enseña este pasaje sobre Dios, nosotros o la salvación? Un principio importante es que la Biblia no se contradice a sí misma; las partes más claras nos ayudan a entender las que son más difíciles.`
            },
            {
              type: 'note',
              id: 'exe-d3-n1',
              content: `**Regla de Oro:**\nLa Biblia es su propio intérprete. Si un versículo te parece confuso, busca otros donde se hable del mismo tema de forma más sencilla.`
            },
            {
              type: 'control',
              id: 'exe-d3-q1',
              question: {
                id: 'q4',
                question: '¿Qué principio asegura que la interpretación de un texto oscuro a la luz de los pasajes más claros de la Biblia?',
                options: [
                  'La analogía de la fe',
                  'El método alegórico',
                  'La falacia de la raíz'
                ],
                correctAnswerIndex: 0
              }
            },
            {
              type: 'text',
              id: 'exe-d3-b2',
              content: `Finalmente, la exégesis culmina en la **aplicación**. Conocer el significado original es vital, pero la meta de la Palabra de Dios no es solo informarnos, sino transformarnos. La verdadera exégesis cruza el puente histórico hacia el presente para confrontar el corazón del creyente con el mismo principio teológico que impactó a los primeros oyentes.`
            },
            {
              type: 'note',
              id: 'exe-d3-n2',
              content: `**Para Repasar y Meditar:**\n1. ¿Cuál es el "Puente Hermenéutico" de tu texto de estudio actual?\n2. ¿Cómo cambia este texto mi visión de Dios esta semana?\n3. Anota una aplicación específica que no sea solo "moralista", sino basada en la gracia de Cristo.`
            }
          ],
          finalExam: [
            {
              id: 'f-exe-7',
              question: 'El objetivo último de someterse al arduo proceso de la exégesis histórico-crítica es:',
              options: ['Poder ganar debates teológicos en internet.', 'Asegurar una interpretación fiel para aplicar el verdadero mensaje de Dios a la vida presente.', 'Desmitificar los milagros bíblicos.', 'Conocer los modismos hebreos.'],
              correctAnswerIndex: 1,
              explanation: 'El punto final es siempre devocional y práctico: conocer la voluntad revelada de Dios para obedecerla.'
            }
          ],
          baseVerse: { reference: 'Salmo 119:18', text: 'Abre mis ojos, y miraré las maravillas de tu ley.' },
          commentaries: [
            { author: 'Juan Calvino', text: 'La Escritura es la escuela del Espíritu Santo, en la cual, así como nada falta que sea necesario y útil de conocer, nada se enseña que no deba ser aprendido.' },
            { author: 'Matthew Henry', text: 'Aquel que estudia la Palabra sin aplicarla es como aquel que mira su rostro en un espejo y se olvida de cómo es.' }
          ],
          verses: [
            { reference: 'Santiago 1:22', text: 'Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos.' },
            { reference: 'Colosenses 3:2', text: 'Poned la mira en las cosas de arriba, no en las de la tierra.' }
          ],
          assignments: [
            { id: 't5', description: 'Escribir un bosquejo de cómo aplicarías un mensaje basado en un pasaje difícil, usando la analogía de la fe.' },
            { id: 't6', description: 'Comparte con un amigo o familiar un principio bíblico que hayas descubierto mediante el estudio serio esta semana.' }
          ]
        }
      ]
    },
    {
      id: 'genesis',
      title: 'Génesis: Orígenes',
      type: 'BIBLE_STUDY',
      description: 'Estudio versículo a versículo, analizando léxico hebreo, fondo cultural teológico y desarrollo de pactos.',
      lessons: [
         {
          id: 'gen-day1',
          day: 1,
          title: 'Génesis 1:1-5 - Formando lo Informe',
          blocks: [
            {
              type: 'note',
              id: 'gen-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Génesis 1** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'gen-d1-b1',
              content: `**Versículo 1:** *"En el principio creó Dios los cielos y la tierra."*\n\nEl texto hebreo abre de golpe con *Bereshit* (En el principio). Esta declaración establece la soberanía monolítica de Dios (*Elohim*). A diferencia de los mitos del antiguo Cercano Oriente (como el Enuma Elish babilónico), donde los dioses deben luchar contra monstruos marinos y el mundo se confecciona del cadáver de dioses derrotados, la deidad bíblica forma el orden material por pura directriz ejecutiva, sin adversarios preexistentes.\n\nEl verbo para describir la acción suprema de Dios es **bará**. En las escrituras hebreas, el único sujeto del verbo bará es Dios. Nunca se emplea para referirse al arte secular o la manufactura humana (los cuales emplean *asah* o *yatsar*). Refleja una acción creadora incomparable e íntimamente dependiente de Él.`
            },
            {
              type: 'control',
              id: 'gen-d1-q1',
              question: {
                id: 'g-q1',
                question: 'En términos morfológicos hebreos en toda la Biblia, ¿quién es el único sujeto habilitado para efectuar el verbo "bará"?',
                options: ['El consejo divino y los arcángeles.', 'Las herramientas humanas y reyes antiguos.', 'Exclusivamente la deidad (Dios/Elohim).'],
                correctAnswerIndex: 2
              }
            },
            {
              type: 'text',
              id: 'gen-d1-b2',
              content: `**Versículo 2:** *"Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas."*\n\nLa curiosa frase hebrea *tohu va-bohu* engloba una total asimetría, algo "informe y deshabitado" (desecho y vacío). El abismo primigenio (*tehom*) invoca los océanos inmensurables de caos no controlado en la mente tribal de aquellos tiempos. Sin embargo, a este caos no se le otorga agencia divina rival.\n\nEl texto afirma que el "Espíritu (Viento, *Ruaj*) de Dios se movía sobre la faz de las aguas". El verbo hebreo empleado (*rachaph*) evoca el suave revolotear o incubar de un ave protectora sobre sus crías. Dios se involucra íntimamente cerca de este vacío hostil para transformarlo en morada.`
            },
            {
              type: 'control',
              id: 'gen-d1-q2',
              question: {
                id: 'g-q2',
                question: '¿Qué denota el paralelo poético del verbo "rachaph" (moviendo/revoloteando) usado para referirse al Espíritu sobre las aguas?',
                options: [
                  'Se refiere a un combate bélico divino para suprimir una rebelión de ángeles.',
                  'Semeja sutilmente la figura protectora y anticipatoria de un ave cuidando su nido.',
                  'Refleja cansancio en la divinidad, la cual descansa sobre los océanos.'
                ],
                correctAnswerIndex: 1
              }
            },
            {
              type: 'text',
              id: 'gen-d1-b3',
              content: `**Versículos 3-5:** *"Y dijo Dios: Sea la luz; y fue la luz..."*\n\nNos encontramos ante la monumental teología de la Palabra. Dios no usa rituales ni sortilegios; Él es articulación (Logos), su mero hablar transfiere voluntad a realidad. Esa luz primaria comienza a dotar de orden a las tinieblas eternas. Elohim determina que la luz es "buena" en función de su idoneidad frente al caos.\n\nLa cima legislativa culmina cuando separa la luz del remanente oscuro y las rebautiza: *"al Día"* y *"Noche"*. En la pedagogía cosmogónica semita, nombrar entidades a discreción implica dominio directo y reclamo de señorío soberano. El primer día asienta el plano regulativo mayor: el de los fundamentos del Tiempo.`
            }
          ],
          finalExam: [
             {
              id: 'f-gen-1',
              question: 'Frente a los mitos cosmogónicos de Asiria y Babilonia, la postura teológica de Génesis 1:1 distingue al Dios bíblico porque:',
              options: ['Dios crea la materialidad enfrentando angustia cósmica.', 'Dios diseña pacíficamente mediante monoteísmo magistral sin conflicto marcial.', 'Asume que los mundos son cíclicos y coeternos.', 'Delega el control total a bestias místicas menores.'],
              correctAnswerIndex: 1,
              explanation: 'Génesis está redactado intencionalmente para desmitificar las teologías guerreras (caoskampf). Se presenta a un Dios majestuoso y pacífico sin ejércitos enemigos combatiéndole desde la eternidad.'
            },
            {
              id: 'f-gen-2',
              question: 'La exclusividad atributiva del verbo "bará" para Dios comunica la doctrina de que:',
              options: ['La dimensión de lo creado por Dios trasciende diametralmente lo que un humano puede formular o fabricar.', 'Los patriarcas del antiguo testamento carecían pericia técnica.', 'Toda la materia biológica se considera sucia e inferior.', 'La obra creadora es transferible por línea sacerdotal pura.'],
              correctAnswerIndex: 0,
              explanation: 'Al separar los quehaceres humanos (asah, yatsar) de las proezas divinas (bará), el autor remarca la abismal división entre Creador y criatura material.'
            },
            {
              id: 'f-gen-3',
              question: 'Los términos "Tohu va-bohu", más que una referencia atómica o cuántica de masa, describen un estado teológico:',
              options: ['Concluido al ciento por ciento, pero abandonado posteriormente.', 'Donde el planeta ya poseía civilizaciones incipientes renegadas.', 'Una estructura inhóspita e infructífera, un caos que necesita de la forma impuesta por la providencia.', 'Sobrepoblado estructuralmente pero vacío espiritualmente.'],
              correctAnswerIndex: 2,
              explanation: 'Tohu (sin forma) y bohu (vacío) ilustran el reto y el lienzo sobre los que los siguientes seis días establecerán dominios y los llenarán correspondientemente.'
            },
            {
              id: 'f-gen-4',
              question: 'En el pensamiento teológico del oriente antiguo presenciado en los versículos 4 y 5, el acto unilateral divino de "separar" y "nombrar" las luminiscencias representa un gesto innegable de:',
              options: ['Clasificación netamente científica para enciclopedias botánicas judías.', 'Puro aburrimiento postrero divino en los edenes celestes.', 'Autoridad administrativa, soberanía regente, decreto y dominio irrevocable.', 'Rebeldía contra otros panteones de dioses de arena.'],
              correctAnswerIndex: 2,
              explanation: 'El que tiene el poder de "nombrar" posee legitimidad y propiedad completa sobre lo asignado. Dios demuestra, mediante el nombrar Día y Noche, que Él rige los relojes cósmicos de modo absoluto.'
            },
            {
              id: 'f-gen-5',
              question: 'A nivel del mecanismo instrumental adoptado por Dios, ¿qué se observa en el relato como desencadenante de la obra inicial formadora material (Verso 3)?',
              options: ['Rituales alquímicos divinos sobre las aguas.', 'Excesivo uso biológico de fuerzas de viento para condensación de las lluvias primigenias.', 'Poder suficiente manifestado exclusivamente en la Palabra hablada articulada ("Y dijo...").', 'Cataclismos solares a escalas astronómicas colosales que Dios usó pragmáticamente.'],
              correctAnswerIndex: 2,
              explanation: 'El texto enfatiza y se aferra a la asombrosa "teología de la Palabra", donde de los recintos de la mente divina la vocalización sola materializa la luz, indicando su inmenso poder.'
            }
          ],
          baseVerse: { reference: 'Génesis 1:1', text: 'En el principio creó Dios los cielos y la tierra.' },
          commentaries: [
            {
              author: 'Matthew Henry',
              text: "El uso de 'Bará' en Génesis 1:1 es la declaración más fuerte de monoteísmo en el mundo antiguo. Dios no comenzó su obra con el hombre, sino que preparó una mansión antes de introducir a su huésped."
            },
            {
              author: 'John MacArthur',
              text: "La creación desde la nada (ex nihilo) es el fundamento de toda la teología bíblica. Si Dios no es el Creador absoluto, no tiene el derecho absoluto de ser el Juez y Salvador."
            }
          ],
          verses: [
            { reference: 'Hebreos 11:3', text: 'Por la fe entendemos haber sido constituido el universo por la palabra de Dios, de modo que lo que se ve fue hecho de lo que no se veía.' },
            { reference: 'Colosenses 1:16', text: 'Porque en él fueron creadas todas las cosas, las que hay en los cielos y las que hay en la tierra...' }
          ],
          assignments: [
            { id: 'g1', description: 'Memorizar el versículo de Génesis 1:1 en la versión Reina Valera 1960.' },
            { id: 'g2', description: 'Escribir una reflexión sobre cómo la soberanía de Dios sobre la creación afecta tu confianza diaria en Él.' }
          ]
        },
        {
          id: 'gen-day2',
          day: 2,
          title: 'Génesis 1:6-19 - Formando las Esferas de Dominio',
          blocks: [
            {
              type: 'note',
              id: 'gen-d2-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Génesis 1** (Segunda parte) antes de comenzar.'
            },
            {
               type: 'text',
               id: 'gen-d2-b1',
               content: `**Día 2 (Versículos 6-8):** Dios crea una "expansión" (firmamento) para separar las aguas de arriba de las aguas de abajo. En la cosmología del antiguo Oriente, esto representaba la separación de un espacio habitable en medio de las aguas caóticas. Dios establece límites estructurales para preservar la vida emergente.`
            },
            {
              type: 'note',
              id: 'gen-d2-n1',
              content: `**Desmitificando el Cosmos:**\n- Sol y Luna no son dioses, son "luminares" (lámparas).\n- Siguen el horario de Dios.\n- Toda la creación adora al único Creador.`
            },
            {
               type: 'control',
               id: 'gen-d2-q1',
               question: {
                 id: 'g-q3',
                 question: '¿Qué acción fundamental realiza Dios en el segundo día de la creación?',
                 options: ['Crea los animales marinos.', 'Forma al ser humano del polvo.', 'Separa las aguas de arriba y de abajo estableciendo la "expansión" (cielos).'],
                 correctAnswerIndex: 2
               }
            },
            {
               type: 'text',
               id: 'gen-d2-b2',
               content: `**Días 3 y 4:** En el día tres, las aguas inferiores se congregan (mares) exponiendo la tierra seca, y surgen los primeros destellos botánicos (hierba, árboles). Al llegar al día cuatro, Dios crea los grandes "luminares" (sol y luna) no como deidades (como creían en Babilonia o Egipto), sino como meros 'relojes cósmicos' con funciones delegadas: alumbrar, separar el día de la noche y marcar las estaciones/festividades.`
            }
          ],
          finalExam: [
            {
              id: 'f-gen-6',
              question: 'Teológicamente, ¿por qué el relato del cuarto día (la creación del sol y la luna) es una gran polémica o "bofetada" a la religión egipcia y cananea?',
              options: ['Porque los trata como deidades superiores a Dios.', 'Porque degrada al sol y la luna de "dioses soberanos" a simples lámparas o herramientas funcionales creadas.', 'Debido a que promueve la astrología y el zodiaco.'],
              correctAnswerIndex: 1,
              explanation: 'En las culturas vecinas el Sol (Ra, Shamash) era un dios supremo. Génesis 1 lo describe casi despectivamente como un "luminar mayor" que obedece y fue fabricado por Elohim.'
            }
          ],
          baseVerse: { reference: 'Salmo 19:1', text: 'Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.' },
          commentaries: [
            { author: 'Matthew Henry', text: 'En cada esfera del universo vemos el orden y la sabiduría de un Diseñador infinito que prepara el escenario para Su plan redentor.' },
            { author: 'John MacArthur', text: 'La creación no es solo un hecho histórico, es un testimonio continuo del poder invisible de Dios manifestado en lo visible.' }
          ],
          verses: [
            { reference: 'Romanos 1:20', text: 'Porque las cosas invisibles de él... se hacen claramente visibles desde la creación del mundo...' },
            { reference: 'Salmo 104:1-2', text: 'Bendice, alma mía, a Jehová... El que se cubre de luz como de vestidura, que extiende los cielos como una cortina.' }
          ],
          assignments: [
            { id: 'g3', description: 'Investigar por qué el sol y la luna son llamados "luminares" en lugar de sus nombres propios en Génesis 1.' },
            { id: 'g4', description: 'Dibujar o esquematizar la cosmología bíblica de los días 2, 3 y 4.' }
          ]
        },
        {
          id: 'gen-day3',
          day: 3,
          title: 'Génesis 1:20-31 - El Pináculo de la Creación',
          blocks: [
            {
              type: 'note',
              id: 'gen-d3-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Génesis 2** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'gen-d3-b1',
               content: `**Días 5 y 6:** Los dominios formados en los días anteriores son ahora habitados. Las aguas se llenan de vida marina y los cielos de aves. Finalmente, en el sexto día, Dios forma a los animales terrestres y, como clímax absoluto de su obra, hace al ser humano, a diferencia de los animales, "a Su imagen y semejanza" (*Imago Dei*).`
            },
            {
              type: 'note',
              id: 'gen-d3-n1',
              content: `**Imago Dei (Imagen de Dios):**\n- No es físico, es funcional y relacional.\n- Somos vice-regentes de Dios.\n- Nuestra dignidad viene de Quién representamos.`
            },
            {
               type: 'control',
               id: 'gen-d3-q1',
               question: {
                 id: 'g-q4',
                 question: '¿Qué distingue a la humanidad (creada en el día 6) del resto de las criaturas formadas previamente?',
                 options: ['Fueron creados exclusivamente para el trabajo agrícola.', 'Fueron hechos portadores de la "imagen y semejanza" (Imago Dei) del Creador.', 'Tienen menor importancia teológica que el Sol y la Luna.'],
                 correctAnswerIndex: 1
               }
            },
            {
               type: 'text',
               id: 'gen-d3-b2',
               content: `Portar la "Imagen de Dios" en el contexto del antiguo oriente no se refería a una similitud divina física, sino a una función representativa. Así como los reyes erigían estatuas con su imagen en las provincias lejanas para declarar su señorío, los humanos son puestos en el templo cósmico de la creación como vice-regentes de Dios, encargados de gobernar, cultivar y proteger la tierra en Su nombre.`
            }
          ],
          finalExam: [
            {
              id: 'f-gen-7',
              question: 'Comprender la Imago Dei (Imagen de Dios) desde el contexto cultural antiguo implica que el ser humano:',
              options: ['Se ve físicamente igual que Dios.', 'Es una deidad menor que gobierna el caos.', 'Actúa como representante regio o vice-regente de Dios en la tierra, para gobernarla sabiamente.'],
              correctAnswerIndex: 2,
              explanation: 'En el antiguo oriente, la imagen del rey lo representaba donde él no estaba físicamente. La humanidad es el representante autorizado de Dios sobre la creación.'
            }
          ],
          baseVerse: { reference: 'Génesis 1:27', text: 'Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.' },
          commentaries: [
            { author: 'Juan Calvino', text: 'Nuestra mayor dignidad no reside en lo que somos por nosotros mismos, sino en el honor de reflejar el carácter de nuestro Hacedor.' },
            { author: 'Matthew Henry', text: 'Dios nos hizo a Su imagen para que pudiéramos tener comunión con Él; el pecado empañó esa imagen, pero Cristo la restaura.' }
          ],
          verses: [
            { reference: 'Colosenses 3:10', text: '...revestido del nuevo, el cual conforme a la imagen del que lo creó se va renovando hasta el conocimiento pleno.' },
            { reference: 'Efesios 4:24', text: '...y vestíos del nuevo hombre, creado según Dios en la justicia y santidad de la verdad.' }
          ],
          assignments: [
            { id: 'g5', description: 'Reflexionar sobre qué significa tratar a otros con dignidad basándose en la Imago Dei.' },
            { id: 'g6', description: 'Escribir una breve oración pidiendo a Dios que restaure Su imagen en ti cada día.' }
          ]
        }
      ]
    },
    {
      id: "homiletica",
      title: "Predicación Bíblica",
      type: "SPECIALIZED",
      description: "Aprende el arte de preparar y compartir mensajes bíblicos que transformen vidas.",
      lessons: [
        {
          id: "hom-day1",
          day: 1,
          title: "Cómo Preparar el Mensaje",
          blocks: [
            {
              type: 'note',
              id: 'hom-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **2 Timoteo 4** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'hom-d1-b1',
              content: `La predicación es el corazón del ministerio pastoral. A lo largo de la historia de la iglesia, se han desarrollado diversos enfoques para comunicar el mensaje bíblico. Entre los principales, destacan el **Sermón Temático** y el **Sermón Expositivo**.\n\nEl abordaje temático inicia con un tema o asunto de interés (ej. "La fe en tiempos de crisis", "El matrimonio feliz") y busca distintos pasajes bíblicos que apoyen el tema central. Aunque es útil para abordar problemas específicos, conlleva el riesgo de aislar versículos de su contexto para forzarlos a encajar en la idea del predicador, en lugar de dejar que el texto dicte el mensaje.`
            },
            {
              type: 'note',
              id: 'hom-d1-n1',
              content: `**Toma nota sobre Tipos de Sermón:**\n1. **Temático:** Parte de una idea y busca textos. Riesgo: Sacar de contexto.\n2. **Expositivo:** Parte del texto y busca la idea. Seguridad: El texto manda.`
            },
            {
              type: 'control',
              id: 'hom-d1-q1',
              question: {
                id: 'hq1',
                question: '¿Cuál es el principal riesgo asociado a la predicación temática?',
                options: [
                  'Que sea demasiado difícil de entender para los jóvenes.',
                  'Extraer pasajes de su contexto original para forzarlos a apoyar un tema.',
                  'Que los sermones duren demasiadas horas y la congregación se canse.'
                ],
                correctAnswerIndex: 1
              }
            },
            {
              type: 'text',
              id: 'hom-d1-b2',
              content: `Por otro lado, la **Predicación Expositiva** es aquella en la cual el tema central de un pasaje bíblico específico es descubierto mediante la exégesis y se convierte en el tema central del sermón. El predicador no inventa el "punto" a predicar; el punto es revelado por el texto. Como afirmó Haddon Robinson: *"La predicación expositiva es la comunicación de un concepto bíblico, derivado y transmitido a través de un estudio histórico, gramatical y literario de un pasaje"*.\n\nEste enfoque garantiza que la iglesia escuche "todo el consejo de Dios" y protege a la congregación de las opiniones e inclinaciones personales del predicador.`
            },
            {
              type: 'note',
              id: 'hom-d1-n2',
              content: `**Para tu Libreta - La Ruta del Expositor:**\n- **Lectura -> Exégesis -> Puente -> Aplicación.**\n- La autoridad no es tuya, es del Texto. Si no hay fidelidad al texto, no hay autoridad celestial.`
            },
            {
              type: 'control',
              id: 'hom-d1-q2',
              question: {
                id: 'hq2',
                question: 'Según la definición técnica de predicación expositiva, el "tema central del sermón" debe ser:',
                options: [
                  'Lo que la congregación pidió en las encuestas semanales.',
                  'El mismo tema central del texto bíblico descubierto mediante la exégesis.',
                  'Una historia personal inspiradora que conmovió al predicador.'
                ],
                correctAnswerIndex: 1
              }
            },
            {
              type: 'text',
              id: 'hom-d1-b3',
              content: `Para desarrollar un sermón expositivo, el predicador sigue una ruta rigurosa:\n1. **Lectura atenta:** Leer el pasaje de estudio múltiples veces en contexto.\n2. **Exégesis profunda:** Determinar el significado original (su Idea Exegética).\n3. **Puente Hermenéutico:** Traducir esa idea antigua al contexto de la audiencia moderna (Idea Homilética).\n4. **Esquematización y Aplicación:** Dividir la idea en puntos claros y establecer cómo aterrizan en la voluntad de la congregación moderna.\n\nAl predicar expositivamente, la autoridad no reside en el carisma del orador, sino en la fidelidad de sus palabras con el Texto Sagrado.`
            }
          ],
          finalExam: [
             {
              id: 'f-hom-1',
              question: 'Si un orador decide predicar sobre "Las 5 claves del éxito profesional" y busca un versículo en Proverbios, dos en Filipenses y uno en Génesis para ilustrar sus 5 claves, ¿qué tipo de sermón está preparando?',
              options: ['Sermón Expositivo', 'Sermón Temático', 'Sermón Argumentativo', 'Sermón Biográfico'],
              correctAnswerIndex: 1,
              explanation: 'Está partiendo de un tema (el éxito profesional) y luego buscando versículos que lo apoyen, lo cual es la definición clásica de predicación temática.'
            },
            {
              id: 'f-hom-2',
              question: 'La "Idea Exegética" se refiere a:',
              options: ['Lo que el texto le comunica a la iglesia de hoy en día.', 'La idea central que el autor bíblico quiso transmitir a su audiencia original.', 'La estructura de los puntos principales del sermón.', 'La creatividad y oratoria del predicador aplicada.'],
              correctAnswerIndex: 1,
              explanation: 'La idea exegética es lo que el texto significó para su audiencia original ("allá y entonces").'
            },
            {
              id: 'f-hom-3',
              question: '¿Por qué la predicación expositiva afirma tener más autoridad intrínseca que la predicación temática?',
              options: ['Porque los sermones expositivos suelen ser predicados por eruditos de alto nivel.', 'Porque el expositor no impone sus ideas subjetivas al texto, sino que deja que el texto dicte el mensaje y sus proporciones.', 'Porque es un método moderno que utiliza PowerPoint y elementos multimedia interactivos.', 'Porque evita hablar de temas controversiales.'],
              correctAnswerIndex: 1,
              explanation: 'La autoridad reside en la Escritura misma. Al extraer el punto central del texto, el mensaje lleva el peso de la intención divina, no las ideas del orador.'
            },
            {
              id: 'f-hom-4',
              question: 'El proceso indispensable para realizar una verdadera predicación expositiva inicia invariablemente con:',
              options: [ 'Buscar ilustraciones graciosas para conectar con la gente.',  'Definir un título atractivo para redes sociales.', 'Estudio gramatical, histórico y literario del pasaje (Exégesis).', 'Lectura de libros de autoayuda cristianos.'],
              correctAnswerIndex: 2,
              explanation: 'Sin exégesis rigurosa no puede haber predicación expositiva verdadera, pues el punto de la exposición es desempacar la verdad antigua descubierta en el estudio formal.'
            },
            {
              id: 'f-hom-5',
              question: 'La "Idea Homilética", a diferencia de la Exegética, es:',
              options: ['La idea central formulada de manera universal que aplica directamente a la audiencia moderna.', 'El borrador que el predicador hace el día sábado.', 'El significado del texto en griego koiné.', 'Una ilustración que se añade al final para hacer llorar.'],
              correctAnswerIndex: 0,
              explanation: 'La idea homilética (el "aquí y ahora") es el puente que traslada el principio universal exegético a la realidad moderna.'
            }
          ],
          baseVerse: { reference: '2 Timoteo 4:2', text: 'Que prediques la palabra; que instes a tiempo y fuera de tiempo; redarguye, reprende, exhorta con toda paciencia y doctrina.' },
          commentaries: [
            { author: 'Matthew Henry', text: 'El predicador no debe predicar sus propias fantasías o las opiniones de otros hombres, sino la pura Palabra de Dios. Todo lo demás es paja ante el trigo.' },
            { author: 'John MacArthur', text: "No hay atajos para una predicación poderosa. La clave no es la elocuencia, sino la fidelidad a lo que el Espíritu ya ha dicho en la Escritura." }
          ],
          verses: [
            { reference: 'Tito 2:1', text: 'Pero tú habla lo que está de acuerdo con la sana doctrina.' },
            { reference: '1 Corintios 2:4', text: 'Y ni mi palabra ni mi predicación fue con palabras persuasivas de humana sabiduría, sino con demostración del Espíritu y de poder.' },
            { reference: 'Nehemías 8:8', text: 'Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.' }
          ],
          assignments: [
            { id: 'h1', description: 'Escuchar un sermón reciente y clasificarlo como expositivo o temático basándote en los conceptos aprendidos.' },
            { id: 'h2', description: 'Redactar un párrafo sobre por qué la autoridad del predicador depende de su fidelidad al texto.' }
          ]
        },
        {
          id: 'hom-day2',
          day: 2,
          title: 'Organizando el Mensaje',
          blocks: [
            {
              type: 'note',
              id: 'hom-d2-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Nehemías 8** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'hom-d2-b1',
               content: `Después de estudiar bien el pasaje, debemos organizar el mensaje. Todo sermón necesita un orden: una introducción para captar la atención, unos puntos principales para explicar la Biblia, y una conclusión para animar a la acción. Los puntos no deben ser inventados por el predicador, sino que deben salir directamente de lo que dice el texto bíblico.`
            },
            {
               type: 'control',
               id: 'hom-d2-q1',
               question: {
                 id: 'hq3',
                 question: 'En un verdadero sermón expositivo, ¿de dónde deben provenir los puntos y divisiones principales?',
                 options: [
                   'Del esquema teológico preferido por la denominación.',
                   'De la estructura lógica y literaria que presenta el mismo texto bíblico estudiado.',
                   'De anécdotas y rimas del orador.'
                 ],
                 correctAnswerIndex: 1
               }
            },
            {
               type: 'text',
               id: 'hom-d2-b2',
               content: `Se le denomina "esqueleto" al esquema fundamental. Cada punto mayor debe apuntar, comprobar o explicar el tema central (La Idea Homilética). Los comentarios puramente académicos son insuficientes para predicar; el predicador traslada la historia antigua al corazón contemporáneo aplicando verdades transformadoras bajo el poder del Espíritu.`
            },
            {
              type: 'note',
              id: 'hom-d2-n2',
              content: `**Toma Nota sobre el "Esqueleto":**\n- Cada punto debe ser una proposición sólida.\n- Asegúrate de que los puntos "hagan progresar" el argumento.\n- Un sermón sin estructura es una charla; un sermón con demasiada estructura es una clase.`
            }
          ],
          finalExam: [
            {
              id: 'f-hom-6',
              question: '¿Cuál es la diferencia entre una clase de historia y un sermón cristiano?',
              options: ['El sermón usa palabras más difíciles.', 'El sermón busca que la Palabra de Dios cambie el corazón y la vida de quienes escuchan hoy.', 'No hay ninguna diferencia.'],
              correctAnswerIndex: 1,
              explanation: 'Una clase solo informa, pero un sermón busca animar y guiar a los creyentes a vivir para Dios.'
            }
          ],
          baseVerse: { reference: 'Nehemías 8:8', text: 'Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.' },
          commentaries: [
            { author: 'Charles Spurgeon', text: 'Un sermón sin estructura es como un cuerpo sin huesos; no puede sostenerse ni caminar hacia el corazón del hombre.' },
            { author: 'Matthew Henry', text: 'Aquel que divide bien la Palabra de Dios, encontrará que la Palabra divide bien las intenciones de su propio corazón.' }
          ],
          verses: [
            { reference: 'Esdras 7:10', text: 'Porque Esdras había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel estatutos y decretos.' },
            { reference: 'Hechos 20:27', text: '...porque no he rehuido anunciaros todo el consejo de Dios.' }
          ],
          assignments: [
            { id: 'h3', description: 'Elegir un pasaje corto y bosquejar tres puntos principales que salgan directamente del texto.' },
            { id: 'h4', description: 'Redactar una conclusión que incluya un llamado a la acción basado en la gracia.' }
          ]
        },
        {
          id: 'hom-day3',
          day: 3,
          title: 'Ejemplos y Aplicación a la Vida',
          blocks: [
            {
              type: 'note',
              id: 'hom-d3-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Hechos 2** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'hom-d3-b1',
               content: `Un buen mensaje necesita **ejemplos** (o ilustraciones) para que la gente entienda mejor. Estos ejemplos son como ventanas que dejan entrar luz al tema. No los usamos solo para entretener, sino para mostrar cómo se vive la Palabra de Dios en el día a día.`
            },
            {
              type: 'note',
              id: 'hom-d3-n1',
              content: `**Regla de Oro de las Ilustraciones:**\n- No ilustres lo obvio.\n- Usa ilustraciones para arrojar luz sobre verdades profundas.\n- El héroe de la historia nunca eres tú, sino Cristo.`
            },
            {
               type: 'control',
               id: 'hom-d3-q1',
               question: {
                 id: 'hq4',
                 question: '¿Cuál es el propósito homilético legítimo de una ilustración dentro del sermón expositivo?',
                 options: [
                   'Completar el tiempo cuando el sermón es muy corto.',
                   'Aclarar y evidenciar la verdad bíblica poniéndole rostro en la vida real.',
                   'Hacer reír a la congregación para romper el hielo teológico.'
                 ],
                 correctAnswerIndex: 1
               }
            },
            {
               type: 'text',
               id: 'hom-d3-b2',
               content: `La culminación de todo mensaje bíblico es la **Aplicación**. La predicación expositiva sin aplicación se convierte en una clase estéril de historia antigua. Spurgeon decía: "Donde termina la aplicación, comienza el sermón". La aplicación debe ser pastoral, específica y fundamentada en la gracia de Cristo, llamando no a un simple moralismo, sino a la obediencia motivada por el evangelio.`
            },
            {
              type: 'note',
              id: 'hom-d3-n2',
              content: `**Punto de Repaso Final:**\n- La predicación debe ser **Pastoral y Específica**.\n- Evita el cumplimiento moralista ("haz esto para que Dios te ame").\n- Apunta a la obediencia por gratitud ("Dios te amó, por eso vive así").`
            }
          ],
          finalExam: [
            {
              id: 'f-hom-7',
              question: 'Si un sermón expone fielmente el significado original del texto hebreo pero no ofrece ninguna instrucción o conexión con la vida contemporánea de la iglesia, ha fallado primeramente en su:',
              options: ['Exégesis histórica', 'Aplicación pastoral', 'Estructura gramatical', 'Contextualización cultural'],
              correctAnswerIndex: 1,
              explanation: 'La falla radica en carecer de puente hacia el creyente de hoy (aplicación). Un sermón debe exigir obediencia, fe, o arrepentimiento en el ahora.'
            }
          ],
          baseVerse: { reference: 'Santiago 1:22', text: 'Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos.' },
          commentaries: [
            { author: 'Juan Calvino', text: 'La doctrina de Dios no es un asunto de charla, sino de vida; no se aprende solo con el intelecto, sino que posee toda el alma.' },
            { author: 'John MacArthur', text: 'La predicación que no llega a la aplicación es como un médico que diagnostica la enfermedad pero no prescribe la medicina.' }
          ],
          verses: [
            { reference: 'Lucas 11:28', text: 'Y él dijo: Antes bienaventurados los que oyen la palabra de Dios, y la guardan.' },
            { reference: 'Ezequiel 33:32', text: 'Y he aquí que tú eres a ellos como cantor de amores... oirán tus palabras, pero no las pondrán por obra.' }
          ],
          assignments: [
            { id: 'h5', description: 'Preparar una ilustración de la vida diaria para explicar un concepto teológico como la justificación.' },
            { id: 'h6', description: 'Esbozar un plan de aplicación semanal basado en el pasaje de estudio que estás trabajando.' }
          ]
        }
      ]
    },
    {
      id: "teologia",
      title: "Conociendo a Dios",
      type: "SPECIALIZED",
      description: "Un recorrido por las verdades más profundas sobre quién es Dios y cómo se relaciona con nosotros.",
      lessons: [
        {
          id: "teo-day1",
          day: 1,
          title: "¿Cómo Podemos Conocer a Dios?",
          blocks: [
            {
              type: 'note',
              id: 'teo-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Isaías 40** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'teo-d1-b1',
              content: `La base de nuestro conocimiento es la **Revelación**: el acto por el cual Dios se da a conocer. Como Dios es infinito y nosotros somos pequeños, nunca podríamos conocerlo si Él no tomara la iniciativa de hablarnos.\n\nEsto se divide en dos partes. La primera es la **Revelación General**. Es lo que Dios nos muestra a todos a través de la *Naturaleza* (viendo el orden del universo) y nuestra propia *Conciencia* (ese sentido de lo que está bien y mal que todos tenemos en el corazón).`
            },
            {
              type: 'note',
              id: 'teo-d1-n1',
              content: `**Toma nota:**\n- **Revelación General:** La creación y la conciencia. (Nos dice que hay un Dios, pero no nos salva).\n- **Revelación Especial:** La Biblia y Jesús. (Nos muestra el camino para ser salvos).\n\n*Recuerda:* Mirar las estrellas nos maravilla, pero solo la Palabra de Dios nos transforma.`
            },
            {
              type: 'control',
              id: 'teo-d1-q1',
              question: {
                id: 'tq1',
                question: '¿Qué medios conforman principalmente la "Revelación General"?',
                options: [
                  'La Biblia y la tradición eclesiástica.',
                  'Los profetas mayores y menores del Antiguo Testamento.',
                  'La majestuosidad de la creación (naturaleza) y la conciencia moral innata en el hombre.'
                ],
                correctAnswerIndex: 2
              }
            },
            {
              type: 'text',
              id: 'teo-d1-b2',
              content: `Sin embargo, la Revelación General tiene una gran limitación: aunque es suficiente para dejar al ser humano sin excusa frente a Dios (haciéndole saber que hay un Creador), **no es suficiente para la salvación**. Nadie puede mirar un atardecer (revelación general) y concluir a partir de este que "Cristo murió por sus pecados".\n\nAquí es donde interviene la **Revelación Especial**. Son los actos redentores específicos de Dios en la historia, comunicados primeramente a través de los profetas, luego encarnados de manera suprema en la persona de Jesucristo, y finalmente registrados de manera infalible en las Sagradas Escrituras (La Biblia). La revelación especial es proposicional (contiene verdad articulada) y redentora.`
            },
            {
              type: 'control',
              id: 'teo-d1-q2',
              question: {
                id: 'tq2',
                question: '¿Cuál es la principal limitación de observar la naturaleza (Revelación General)?',
                options: [
                  'Es engañosa y contraria a la ciencia moderna.',
                  'Te muestra el poder de Dios, pero no los detalles específicos del evangelio ni cómo ser salvo (Revelación Especial).',
                  'Sólo aplica a las personas que viven en zonas rurales.'
                ],
                correctAnswerIndex: 1
              }
            },
            {
              type: 'text',
              id: 'teo-d1-b3',
              content: `Dentro de la revelación especial, surge la doctrina de la **Inspiración**. La Biblia no fue meramente dictada mecánicamente (donde el autor humano es un robot de transcripción), ni es simplemente "iluminación" humana. La teología ortodoxa sostiene la *Inspiración Plenaria y Verbal*: el Espíritu Santo supervisó activamente a los autores humanos de manera que, usando sus propias personalidades, vocabularios y contextos (método orgánico), escribieron exactamente lo que Dios quería que se escribiese, libre de todo error en los manuscritos originales (Inerrancia).`
            },
            {
              type: 'note',
              id: 'teo-d1-n2',
              content: `**Definiciones para tu Examen:**\n- **Plenaria:** Significa que *toda* la Biblia está inspirada, no solo las partes que nos gustan.\n- **Verbal:** Significa que incluso las *palabras* específicas fueron supervisadas, no solo las ideas generales.\n- **Inerrancia:** La Biblia es veraz en todo lo que afirma.`
            }
          ],
          finalExam: [
             {
              id: 'f-teo-1',
              question: 'Un ateo afirma que no cree en Dios sencillamente porque la religión es un invento. El teólogo responde, citando Romanos 1, que al menos los atributos invisibles de Dios son claramente reconocibles a través del universo creado. El teólogo está apelando a:',
              options: ['Revelación Especial Proposicional', 'Revelación General', 'Inspiración Verbal', 'Iluminación Carismática'],
              correctAnswerIndex: 1,
              explanation: 'Apelar a la existencia de un diseño en el universo para probar la existencia del Creador es el uso clásico del concepto de revelación general.'
            },
            {
              id: 'f-teo-2',
              question: '¿Qué afirmación define mejor la relación entre Revelación General y Revelación Especial respecto a la redención humana?',
              options: ['La revelación general basta para salvar; la Biblia es un mero suplemento histórico.', 'La revelación general condena al demostrar que hay un Dios al que ofendemos, pero solo la revelación especial trae el mensaje de Cristo que salva.', 'Ambas son exactamente lo mismo, difieren en su traducción al griego.', 'La revelación especial quedó obsoleta tras las revoluciones científicas.'],
              correctAnswerIndex: 1,
              explanation: 'La revelación general declara que hay un Dios (Rom. 1), pero solo la revelación especial (la Palabra de Dios) declara cómo establecer paz con Él a través de Cristo.'
            },
            {
              id: 'f-teo-3',
              question: 'La teoría de la dictación mecánica (Dios dictando palabra por palabra y el hombre como un mero secretario transcritorio pasivo) es considerada:',
              options: ['El modelo oficial y único que asegura la inerrancia en la Iglesia Protestante.', 'Una devaluación del milagro orgánico de la Inspiración, ya que la Biblia evidencia claramente las diferentes personalidades gramaticales de sus autores.', 'La mejor explicación del estilo literario del Apóstol Pablo.', 'La razón por la cual se fundó el método histórico-crítico.'],
              correctAnswerIndex: 1,
              explanation: 'La doctrina clásica (Inspiración Orgánica o Plenaria Verbal) insiste en que Dios usó los trasfondos y personalidades humanas (Mateo escribe diferente que Lucas), en contraposición al dictado mecánico.'
            },
            {
              id: 'f-teo-4',
              question: 'Cuando un teólogo declara que la Biblia posee "Inerrancia", quiere decir que:',
              options: [ 'Cada copia moderna o traducción de bolsillo es infalible tipográficamente.', 'El texto no contiene ningún error teológico, histórico, o científico al afirmar la verdad, referido a los autógrafos originales.', 'El texto es inerrante metafóricamente, pero posee errores de bulto históricamente.', 'Toda afirmación poética debe leerse como un tratado de física inerrante.'],
              correctAnswerIndex: 1,
              explanation: 'La inerrancia se aplica formalmente a los manuscritos originales (autógrafos), dictaminando que la Biblia es totalmente veraz y confiable en todo lo que afirma o enseña.'
            },
            {
              id: 'f-teo-5',
              question: '¿Cuál es el pináculo supremo e insuperable de la Revelación Especial de Dios a la humanidad, conforme a Hebreos 1:1-2?',
              options: ['Los manuscritos del Mar Muerto.', 'La naturaleza durante un eclipse solar.', 'La encarnación material y manifestación explícita en el Hijo, Jesucristo.', 'El concilio de Nicea.'],
              correctAnswerIndex: 2,
              explanation: 'Aunque la Biblia es el registro infalible, la "revelación de Dios" suprema es la persona viva de Jesús (el Logos encarnado).'
            }
          ],
          baseVerse: { reference: 'Romanos 11:33', text: '¡Oh profundidad de las riquezas de la sabiduría y de la ciencia de Dios! ¡Cuán insondables son sus juicios, e inescrutables sus caminos!' },
          commentaries: [
            { author: 'Matthew Henry', text: 'La teología es el estudio de Aquel que es inmenso e incomprensible. No estudiamos para dominar a Dios, sino para ser dominados por Su gloria.' },
            { author: 'John MacArthur', text: 'La teología sistemática no es poner a Dios en una caja, sino organizar lo que Él ha revelado de Sí mismo para que podamos conocerle y adorarle en verdad.' }
          ],
          verses: [
            { reference: 'Juan 17:3', text: 'Y esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado.' },
            { reference: '1 Corintios 2:11', text: 'Porque ¿quién de los hombres sabe las cosas del hombre, sino el espíritu del hombre que está en él? Así tampoco nadie conoció las cosas de Dios, sino el Espíritu de Dios.' },
            { reference: 'Deuteronomio 29:29', text: 'Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros y para nuestros hijos para siempre...' }
          ],
          assignments: [
            { id: 't5', description: 'Investigar la diferencia entre Revelación General y Revelación Especial y dar un ejemplo de cada una.' },
            { id: 't6', description: 'Escribir una oración de agradecimiento por el regalo de la Biblia como Palabra de Dios.' }
          ]
        },
        {
          id: 'teo-day2',
          day: 2,
          title: '¿Cómo es Dios? Sus Atributos',
          blocks: [
            {
              type: 'note',
              id: 'teo-d2-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Salmo 139** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'teo-d2-b1',
               content: `Cuando estudiamos quién es Dios, hablamos de sus "atributos" o características. Hay dos tipos. Los **Atributos Únicos** son los que solo Dios tiene, como ser Eterno (no tiene inicio ni fin), estar en todo lugar al mismo tiempo (Omnipresencia) y su **Aseidad** (Dios no necesita de nada ni nadie para existir; Él es independiente).`
            },
            {
              type: 'note',
              id: 'teo-d2-n1',
              content: `**Clasificación Sencilla:**\n- **Solo Dios los tiene:** Eternidad, sabe todo, está en todo lugar.\n- **Dios nos permite reflejarlos:** Amor, justicia, bondad y perdón.\n- **Aplicación:** Adoramos a Dios por su grandeza y tratamos de parecernos a Él en su amor.`
            },
            {
               type: 'control',
               id: 'teo-d2-q1',
               question: {
                 id: 'tq3',
                 question: '¿A qué categoría pertenece el maravilloso atributo de la "Aseidad" (existencia propia sin depender de nada externo)?',
                 options: [
                   'Atributos Comunicables',
                   'Atributos Morales',
                   'Atributos Incomunicables'
                 ],
                 correctAnswerIndex: 2
               }
            },
            {
               type: 'text',
               id: 'teo-d2-b2',
               content: `Por otro lado, los **Atributos Comunicables** son perfecciones de Dios que Él ha decidido compartir o reflejar en cierta medida en el ser humano (hecho a su imagen y semejanza). Ejemplos claros son el amor, la justicia, la misericordia, la bondad y la sabiduría. Aunque los poseemos de forma finita y caída, nuestro llamado moral como cristianos es a reflejar y madurar en el ejercicio de estos atributos comunicables para ser más semejantes a Cristo.`
            }
          ],
          finalExam: [
            {
              id: 'f-teo-6',
              question: 'Cuando mandamos en las Escrituras "Sed santos, porque Yo soy santo", ¿A qué tipo de atributo estamos siendo llamados a emular (en un grado derivado)?',
              options: ['Omnipresencia', 'Atributo Comunicable', 'Atributo Incomunicable Metafísico'],
              correctAnswerIndex: 1,
              explanation: 'La santidad (en su faceta de rectitud moral), el amor y la misericordia son perfecciones de Dios que Él comunica a nosotros, esperando que las reflejemos en obediencia.'
            }
          ],
          baseVerse: { reference: 'Salmo 145:3', text: 'Grande es Jehová, y digno de suprema alabanza; y su grandeza es inescrutable.' },
          commentaries: [
            { author: 'Juan Calvino', text: 'Los atributos de Dios no son meros conceptos para el aula, sino motivos para la adoración ferviente de Su pueblo.' },
            { author: 'John MacArthur', text: 'Conocer los atributos de Dios es el fundamento de toda la teología cristiana; es el combustible que alimenta el fuego de nuestra devoción.' }
          ],
          verses: [
            { reference: 'Malaquías 3:6', text: 'Porque yo Jehová no cambio; por esto, hijos de Jacob, no habéis sido consumidos.' },
            { reference: 'Jeremías 23:24', text: '¿Se ocultará alguno... en escondrijos que yo no lo vea? dice Jehová. ¿No lleno yo, dice Jehová, el cielo y la tierra?' }
          ],
          assignments: [
            { id: 't7', description: 'Hacer una lista de tres atributos comunicables y pensar en cómo podrías reflejarlos mejor esta semana.' },
            { id: 't8', description: 'Meditar en el atributo de la Omnipresencia de Dios y cómo eso te da seguridad en tus momentos de soledad.' }
          ]
        },
        {
          id: 'teo-day3',
          day: 3,
          title: 'El Plan Eterno de Dios',
          blocks: [
            {
              type: 'note',
              id: 'teo-d3-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Efesios 1** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'teo-d3-b1',
               content: `Dios no dejó el mundo a la suerte. La Biblia enseña que Él tiene un **plan eterno** (también llamado decretos). Esto significa que Dios gobierna todo lo que sucede para cumplir su propósito y para su propia gloria. Nada en el universo sucede por accidente o fuera del control de nuestro buen Dios.`
            },
            {
              type: 'note',
              id: 'teo-d3-n1',
              content: `**Recuerda:**\n- Dios es el arquitecto del tiempo.\n- Nada le toma por sorpresa.\n- Su control total nos da paz en medio de los problemas.`
            },
            {
               type: 'control',
               id: 'teo-d3-q1',
               question: {
                 id: 'tq4',
                 question: '¿Qué afirman los decretos de Dios respecto a Su relación con la historia?',
                 options: [
                   'Que Dios solo observa pasivamente cómo se desarrollan los acontecimientos.',
                   'Que Él reacciona a las decisiones del hombre tratando de ajustar Sus planes.',
                   'Que Dios gobierna y orquesta soberanamente todas las cosas según su propósito eterno.'
                 ],
                 correctAnswerIndex: 2
               }
            },
            {
               type: 'text',
               id: 'teo-d3-b2',
               content: `Si bien los decretos de Dios abarcan todo evento (incluso permitiendo el mal, siendo Él un Dios tres veces santo y no el autor del mismo), su soberanía se ejerce de manera que no violenta la voluntad creadural de actuar según sus motivos. Esta paradoja de la **Providencia y la Responsabilidad Humana** produce gran reverencia y adoración ante un Dios a la vez inescrutable y profundamente bueno.`
            }
          ],
          finalExam: [
            {
              id: 'f-teo-7',
              question: 'Bíblicamente, la afirmación de la absoluta soberanía de Dios en la providencia, ¿anula la responsabilidad moral y las decisiones reales del ser humano?',
              options: ['Sí, lo convierte en un robot sin voluntad ni culpa.', 'No, la Escritura sostiene el misterio que el hombre es moralmente responsable a pesar del control providencial de Dios.', 'La soberanía divina se anula al crear seres humanos.'],
              correctAnswerIndex: 1,
              explanation: 'Aunque Dios es soberano sobre cada detalle (Prov. 16:33), la narrativa bíblica responsabiliza plenamente a los seres humanos de sus actos.'
            }
          ],
          baseVerse: { reference: 'Efesios 1:11', text: 'En él asimismo tuvimos herencia, habiendo sido predestinados conforme al propósito del que hace todas las cosas según el consejo de su voluntad.' },
          commentaries: [
            { author: 'Matthew Henry', text: 'Los decretos de Dios son Sus consejos sabios y eternos, mediante los cuales Él ha preordenado lo que sea que suceda para Su propia gloria.' },
            { author: 'John MacArthur', text: 'La soberanía de Dios es el ancla que sostiene al creyente en medio de la tormenta; nada escapa a Su control soberano.' }
          ],
          verses: [
            { reference: 'Isaías 46:10', text: '...que anuncio lo por venir desde el principio... que digo: Mi consejo permanecerá, y haré todo lo que quiero.' },
            { reference: 'Salmo 115:3', text: 'Nuestro Dios está en los cielos; todo lo que quiso ha hecho.' }
          ],
          assignments: [
            { id: 't9', description: 'Identificar una situación difícil en tu vida y reflexionar sobre cómo la soberanía de Dios te da descanso en ella.' },
            { id: 't10', description: 'Leer Efesios 1:11 y anotar qué dice sobre el plan de Dios.' }
          ]
        }
      ]
    },
    {
      id: "apologetica",
      title: "Defensa de la Fe",
      type: "SPECIALIZED",
      description: "Herramientas sencillas y bíblicas para explicar por qué confiamos en el Evangelio.",
      lessons: [
        {
          id: "apol-day1",
          day: 1,
          title: "¿Qué es dar Razón de nuestra Fe?",
          blocks: [
            {
              type: 'note',
              id: 'apol-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **1 Pedro 3** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'apol-d1-b1',
               content: `La palabra **defensa** (o apologética) viene de una palabra griega que significa "respuesta fundamentada". No se trata de pedir perdón por creer, ni de pelear con otros, sino de dar razones claras y con amor sobre la esperanza que tenemos en Cristo.`
             },
             {
              type: 'note',
              id: 'apol-d1-n1',
              content: `**Definición Clave:**\n- **Apologética:** Defensa de la fe, no disculpas por la fe.\n- **Meta:** Quitar obstáculos intelectuales para que el evangelio sea escuchado.`
            },
            {
               type: 'control',
               id: 'apol-d1-q1',
               question: {
                 id: 'aq1',
                 question: '¿Qué significa el término "apologia" en su contexto griego original?',
                 options: [
                   'Pedir disculpas formales por las guerras de religión.',
                   'Una defensa verbal, razonada y fundamentada.',
                   'Ataque agresivo contra intelectuales modernos.'
                 ],
                 correctAnswerIndex: 1
               }
             },
             {
               type: 'text',
               id: 'apol-d1-b2',
               content: `Existen varios enfoques en la apologética. La **apologética clásica** se basa primero en establecer filosóficamente la existencia de un Dios teísta (mediante argumentos cosmológicos, teleológicos, etc.) para luego evidenciar históricamente que el cristianismo es la expresión auténtica de ese Dios, centrándose particularmente en la resurrección histórica de Cristo.`
             }
          ],
          finalExam: [
             {
              id: 'f-apol-1',
              question: 'La instrucción en 1 Pedro 3:15 sobre "presentar defensa con mansedumbre y reverencia" nos demuestra que:',
              options: ['El carácter ético del apologista es tan importante como sus argumentos racionales.', 'El creyente debe debatir a gritos con los incrédulos.', 'No se debe usar la razón, solo la fe.', 'La apologética es exclusiva para eruditos.'],
              correctAnswerIndex: 0,
              explanation: 'El apóstol enfatiza que la defensa de la fe (apologia) debe estar envuelta en gracia, mansedumbre y reverencia.'
            }
          ],
          baseVerse: { reference: '1 Pedro 3:15', text: 'Sino santificad a Dios el Señor en vuestros corazones, y estad siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros.' },
          commentaries: [
            { author: 'John MacArthur', text: 'La apologética no es ganar discusiones intelectuales, es derribar las fortalezas de falsedad que impiden a las personas ver la luz del Evangelio.' },
            { author: 'Matthew Henry', text: 'Debemos ser capaces de dar una razón de la esperanza que hay en nosotros. La religión cristiana es una esperanza razonable, de las que se puede dar una buena cuenta.' }
          ],
          verses: [
            { reference: 'Judas 1:3', text: 'Amados... me ha sido necesario escribiros exhortándoos que contendáis ardientemente por la fe que ha sido una vez dada a los santos.' },
            { reference: 'Filipenses 1:7', text: '...ya que tanto en mis prisiones como en la defensa y confirmación del evangelio, todos vosotros sois participantes conmigo de la gracia.' },
            { reference: '2 Corintios 10:5', text: 'Derribando argumentos y toda altivez que se levanta contra el conocimiento de Dios...' }
          ],
          assignments: [
            { id: 'a1', description: 'Hacer una lista de tres "obstáculos intelectuales" que has escuchado contra la fe cristiana.' },
            { id: 'a2', description: 'Orar por una oportunidad esta semana para explicar tu fe con mansedumbre.' }
          ]
        },
        {
          id: 'apol-day2',
          day: 2,
          title: 'Pruebas de que hay un Creador',
          blocks: [
            {
              type: 'note',
              id: 'apol-d2-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Romanos 1** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'apol-d2-b1',
               content: `Una de las formas más sencillas de explicar nuestra fe es observar el origen del universo. Todo lo que comienza a existir debe tener una causa. Como el universo tuvo un comienzo, debe haber Alguien poderoso, fuera del tiempo y del espacio, que lo haya creado. Ese Alguien es Dios.`
            },
            {
              type: 'note',
              id: 'apol-d2-n1',
              content: `**Argumentos Sencillos:**\n1. **Origen:** Si hay un reloj, hay un relojero. Si hay un universo, hay un Creador.\n2. **Diseño:** El universo es tan preciso que no pudo ser un accidente.\n\n*Recuerda:* La ciencia nos ayuda a ver la inteligencia de Dios.`
            },
            {
               type: 'control',
               id: 'apol-d2-q1',
               question: {
                 id: 'aq2',
                 question: '¿Qué conclusión fundamental arroja la premisa del Argumento Cosmológico Kalam tras evaluar el inicio del universo?',
                 options: [
                   'Que el universo siempre existió cíclicamente y se autogenera.',
                   'Que la materia originó el tiempo.',
                   'Que la causa del universo debe trascender al espacio, la materia y el tiempo.'
                 ],
                 correctAnswerIndex: 2
               }
            },
            {
               type: 'text',
               id: 'apol-d2-b2',
               content: `A esto se le suma el **Argumento Teleológico** (o del "ajuste fino"). La ciencia moderna reconoce que variables cósmicas esenciales (como la gravedad o la constante cosmológica) están milimétricamente ajustadas para permitir la existencia de vida. Que el universo esté afinado en base a matemáticas precisas presupone una mente superior (un Mente Orquestadora o Diseñador), descartando progresivamente la probabilidad y el puro azar originador.`
            }
          ],
          finalExam: [
            {
              id: 'f-apol-2',
              question: 'El argumento que apela a cómo el universo muestra un "ajuste fino" de sus constantes físicas como prueba de un Diseñador Inteligente es el Argumento:',
              options: ['Teleológico', 'Moral', 'Ontológico', 'Cosmológico'],
              correctAnswerIndex: 0,
              explanation: 'El argumento teleológico (de telos = diseño, meta o propósito) usa la evidencia del orden y ajuste magistral del cosmos para apuntar a un Diseñador maestro.'
            }
          ],
          baseVerse: { reference: 'Salmo 19:1', text: 'Los cielos cuentan la gloria de Dios, y el firmamento anuncia la obra de sus manos.' },
          commentaries: [
            { author: 'Charles Spurgeon', text: 'No hay nada más irracional que el ateísmo. Toda la naturaleza grita el nombre de su Creador a quien se tome el tiempo de escuchar.' },
            { author: 'Matthew Henry', text: 'Las obras de la creación son tan claras que nadie tiene excusa para ignorar la existencia del Autor de la vida.' }
          ],
          verses: [
            { reference: 'Romanos 1:20', text: 'Porque las cosas invisibles de él, su eterno poder y deidad, se hacen claramente visibles desde la creación del mundo...' },
            { reference: 'Génesis 1:1', text: 'En el principio creó Dios los cielos y la tierra.' }
          ],
          assignments: [
            { id: 'a3', description: 'Mirar un video sobre el "ajuste fino" del universo y anotar un dato que te asombre.' },
            { id: 'a4', description: 'Explicar a un amigo el argumento del "origen" (Kalam) de forma sencilla.' }
          ]
        },
        {
          id: 'apol-day3',
          day: 3,
          title: '¿Por qué hay Sufrimiento?',
          blocks: [
            {
              type: 'note',
              id: 'apol-d3-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Job 38** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'apol-d3-b1',
               content: `Una de las preguntas más difíciles es: Si Dios es bueno y poderoso, ¿por qué permite el mal y el dolor? Es un desafío grande, pero la Biblia nos muestra que el mal no es parte del plan original de Dios, sino el resultado de que el hombre se apartó de Él.`
            },
            {
              type: 'note',
              id: 'apol-d3-n1',
              content: `**Sobre el Mal:**\n- Dios dio libertad al hombre, y el hombre decidió desobedecer.\n- Dios usa incluso el dolor para sus planes de amor.\n- La respuesta final al dolor es la **Cruz**, donde Jesús sufrió por nosotros.`
            },
            {
               type: 'control',
               id: 'apol-d3-q1',
               question: {
                 id: 'aq3',
                 question: '¿Cuáles son los dos atributos divinos que el "problema del mal" intenta poner en conflicto y contradicción insalvable?',
                 options: [
                   'Omnipresencia y Eternidad.',
                   'Justicia y Santidad.',
                   'Omnipotencia y Omnibenevolencia.'
                 ],
                 correctAnswerIndex: 2
               }
            },
            {
               type: 'text',
               id: 'apol-d3-b2',
               content: `La defensa apologética (teodicea) comienza señalando que dar la capacidad al ser humano de elegir amor genuino, requería dotarlo de libre albedrío; y donde existe la posibilidad de elegir amar, existe también el potencial de rechazar el amor (pecado). En suma, Dios permite el mal temporalmente porque de ello se desprende un bien superior: redención, justicia mayor y la eliminación final del mal mediante la obra de Cristo, sin aniquilar el amor volitivo del ser humano.`
            }
          ],
          finalExam: [
            {
              id: 'f-apol-3',
              question: 'Un ateo afirma: "El sufrimiento en el mundo prueba que no hay un estándar moral y, por tanto, Dios no existe." Un apologista refutaría argumentando:',
              options: ['Que el sufrimiento es sólo una ilusión budista.', 'Que llamar a algo "injusto" o "mal" necesariamente exige la existencia de una Ley Moral suprema de justicia con la cual compararlo.', 'Que Dios odia ciertamente al mundo.'],
              correctAnswerIndex: 1,
              explanation: 'El argumento moral afirma que si el ateísmo es verdad, no hay base para quejarse sobre "el mal objetivo", ya que las leyes objetivas requieren un Legislador.'
            }
          ],
          baseVerse: { reference: 'Romanos 2:15', text: '...mostrando la obra de la ley escrita en sus corazones, dando testimonio su conciencia...' },
          commentaries: [
            { author: 'John MacArthur', text: 'La existencia del bien y del mal requiere un estándar absoluto, y ese estándar es la ley de Dios escrita en el alma humana.' },
            { author: 'Juan Calvino', text: 'Ni siquiera los más impíos pueden silenciar por completo la voz de la conciencia, que es el heraldo de la justicia divina en el hombre.' }
          ],
          verses: [
            { reference: 'Miqueas 6:8', text: 'Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia...' },
            { reference: 'Salmo 14:1', text: 'Dice el necio en su corazón: No hay Dios.' }
          ],
          assignments: [
            { id: 'a5', description: 'Escribir una breve reflexión sobre cómo la cruz de Cristo responde al problema del mal.' },
            { id: 'a6', description: 'Identificar una promesa bíblica que te dé esperanza en medio del sufrimiento.' }
          ]
        }
      ]
    },
    {
      id: "doctrinas",
      title: "Lo que Creemos",
      type: "SPECIALIZED",
      description: "Estudio de las verdades centrales: quién es Jesús, qué hizo el Espíritu Santo y cómo somos salvos.",
      lessons: [
        {
          id: "doc-day1",
          day: 1,
          title: "Dios en Tres Personas",
          blocks: [
            {
              type: 'note',
              id: 'doc-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Mateo 3** (El Bautismo de Jesús) antes de comenzar.'
            },
            {
               type: 'text',
               id: 'doc-d1-b1',
               content: `La **Trinidad** es una de las doctrinas más esenciales y distintivas del cristianismo ortodoxo. La afirmación trinitaria establece que existe un solo Dios y esencia divina, pero que esta esencia subsiste eternamente en tres distintas Personas co-iguales y co-eternas: Padre, Hijo y Espíritu Santo.`
             },
             {
              type: 'note',
              id: 'doc-d1-n1',
              content: `**Sobre la Trinidad:**\n- Un solo Dios (Esencia).\n- Tres Personas (Padre, Hijo, Espíritu).\n- Distintos en relación, iguales en gloria.`
            },
            {
               type: 'control',
               id: 'doc-d1-q1',
               question: {
                 id: 'dq1',
                 question: '¿Cuál es la afirmación central de la doctrina de la Trinidad?',
                 options: [
                   'Existen tres dioses independientes que conforman un tribunal divino.',
                   'Un solo Dios infinito que se manifiesta eternamente en tres Personas divinas.',
                   'Dios es una sola persona que cambia de "máscara" o "modo" según avanza la historia bíblica.'
                 ],
                 correctAnswerIndex: 1
               }
             },
             {
               type: 'text',
               id: 'doc-d1-b2',
               content: `Históricamente, han surgido errores (herejías) al intentar simplificar este misterio. El **Modalismo**, por ejemplo, enseñaba erróneamente que Dios era solo una persona manifestada en modos sucesivos (Padre en el AT, Hijo en el NT, Espíritu en la Iglesia). En contraparte, los credos ortodoxos (e.g. Nicea) defendieron consistentemente la evidencia bíblica de que las tres Personas interactúan simultáneamente, mantienen su distinción personal pero comparten absolutamente la misma Deidad.`
             }
          ],
          finalExam: [
             {
              id: 'f-doc-1',
              question: 'Si una enseñanza moderna afirma que Dios actuó como el Padre en la era antigua, luego se transformó actoralmente en Jesús, y hoy solo opera bajo el modo o papel del Espíritu, es una forma clásica de:',
              options: ['Ortodoxia Trinitaria', 'Modalismo', 'Politeísmo', 'Panteísmo'],
              correctAnswerIndex: 1,
              explanation: 'El Modalismo es la antigua herejía que elimina la co-existencia real y simultánea de las Personas, viéndolas solo como disfraces sucesivos de un ser unitario.'
            }
          ],
          baseVerse: { reference: 'Mateo 28:19', text: 'Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.' },
          commentaries: [
            { author: 'Matthew Henry', text: 'En la Trinity tenemos a un solo Dios, pero tres Personas que subsisten en una naturaleza divina indivisible. Es el misterio de la piedad.' },
            { author: 'John MacArthur', text: 'Negar la Trinidad es negar la verdadera naturaleza de Dios. El Padre planea, el Hijo redime y el Espíritu aplica, todos en unidad perfecta de esencia.' }
          ],
          verses: [
            { reference: '2 Corintios 13:14', text: 'La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros. Amén.' },
            { reference: 'Juan 1:1', text: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' },
            { reference: 'Mateo 3:16-17', text: 'Y Jesús, después que fue bautizado, subió luego del agua... y vio al Espíritu de Dios que descendía como paloma... y hubo una voz de los cielos que decía: Éste es mi Hijo amado...' }
          ],
          assignments: [
            { id: 'd1', description: 'Buscar tres versículos donde se mencionen a las tres personas de la Trinidad juntas.' },
            { id: 'd2', description: 'Explicar a alguien por qué el Modalismo es un error teológico.' }
          ]
        },
        {
          id: 'doc-day2',
          day: 2,
          title: 'Jesús: Verdadero Dios y Verdadero Hombre',
          blocks: [
            {
              type: 'note',
              id: 'doc-d2-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Filipenses 2** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'doc-d2-b1',
               content: `Cuando estudiamos a **Jesús**, vemos el milagro más grande: Dios se hizo hombre. La Biblia nos enseña que Jesús es 100% Dios y 100% hombre al mismo tiempo. No es "mitad y mitad", sino que en su única persona se unen perfectamente sus dos naturalezas. Esto era necesario para que pudiera ser nuestro mediador.`
            },
            {
              type: 'note',
              id: 'doc-d2-n1',
              content: `**Clave Bíblica:**\n- Como hombre, nos representa ante Dios.\n- Como Dios, puede pagar por nuestros pecados.\n- Jesús es el único camino al Padre.`
            },
            {
               type: 'control',
               id: 'doc-d2-q1',
               question: {
                 id: 'dq2',
                 question: '¿Qué describe doctrinalmente la "Unión Hipostática"?',
                 options: [
                   'La alianza entre la Iglesia Primitiva y el Imperio Romano.',
                   'El hecho de que Jesucristo es una sola Persona con dos naturalezas completas (divina y humana) sin mezcla.',
                   'El estado de éxtasis espiritual durante la oración.'
                 ],
                 correctAnswerIndex: 1
               }
            },
            {
               type: 'text',
               id: 'doc-d2-b2',
               content: `Para que Jesús pudiera salvarnos, tenía que ser Dios para poder pagar por todos nuestros pecados, pero también tenía que ser hombre para poder representarnos. Él es el "nuevo Adán" que obedeció perfectamente donde nosotros fallamos.`
            }
          ],
          finalExam: [
            {
              id: 'f-doc-2',
              question: 'La premisa bíblica manda que el sustituto expiatorio en la cruz (Cristo) deba poseer una naturaleza verdaderamente humana. Teológicamente, ¿Por qué es indispensable ser "Totalmente Hombre"?',
              options: ['Para poder comunicarse e impresionar con milagros antinaturales.', 'Para fungir como un representante legal de la raza humana y poder sufrir la muerte en condición de sustitución.', 'Para probarnos que la divinidad carece de importancia salvífica.'],
              correctAnswerIndex: 1,
              explanation: 'La justicia divina requería que otro descendiente de Adán imperfecto no pudiese pagar, sino ser el Cordero intachable (Naturaleza Divino/Humana).'
            }
          ],
          baseVerse: { reference: 'Juan 1:14', text: 'Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.' },
          commentaries: [
            { author: 'Juan Calvino', text: 'Cristo debió ser hombre para morir en nuestro lugar, y debió ser Dios para que Su muerte fuera victoriosa y eternamente eficaz.' },
            { author: 'Matthew Henry', text: 'En una sola persona tenemos al Dios de gloria y al Varón de dolores; qué consuelo es saber que nuestro Salvador nos entiende perfectamente.' }
          ],
          verses: [
            { reference: 'Hebreos 4:15', text: 'Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza...' },
            { reference: 'Filipenses 2:6-7', text: 'el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse, sino que se despojó a sí mismo...' }
          ],
          assignments: [
            { id: 'd3', description: 'Escribir una reflexión sobre por qué Jesús tenía que ser 100% Dios para salvarte.' },
            { id: 'd4', description: 'Memorizar Hebreos 4:15 sobre la humanidad de Jesús.' }
          ]
        },
        {
          id: 'doc-day3',
          day: 3,
          title: 'Cómo Somos Salvos',
          blocks: [
            {
              type: 'note',
              id: 'doc-d3-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Romanos 5** antes de comenzar.'
            },
            {
               type: 'text',
               id: 'doc-d3-b1',
               content: `La **salvación** es el regalo más grande de Dios. La Biblia enseña que somos salvos "solo por gracia" y "solo por fe". Esto significa que no podemos ganar el cielo portándonos bien o haciendo obras, sino confiando totalmente en lo que Jesús hizo por nosotros en la cruz.`
            },
            {
              type: 'note',
              id: 'doc-d3-n1',
              content: `**Ideas Centrales:**\n- **Gracia:** Regalo inmerecido de Dios.\n- **Sustitución:** Jesús murió en nuestro lugar.\n- **Regalo:** No se compra, se recibe con fe.`
            },
            {
               type: 'control',
               id: 'doc-d3-q1',
               question: {
                 id: 'dq3',
                 question: '¿Qué frase resume el centro de la Soteriología reformada sobre cómo el ser humano obtiene justificación ante Dios?',
                 options: [
                   'Mezclando fe imperfecta y buenas obras compensatorias.',
                   'A través de reencarnaciones sucesivas perfeccionadoras.',
                   'Exclusivamente por gracia, recibida únicamente mediante la fe en la obra terminada de Cristo.'
                 ],
                 correctAnswerIndex: 2
               }
            },
            {
               type: 'text',
               id: 'doc-d3-b2',
               content: `En la Cruz ocurrió un **intercambio maravilloso**. Jesús tomó nuestro lugar y recibió el castigo que nosotros merecíamos por nuestros pecados. Al mismo tiempo, Dios nos da a nosotros la justicia y la santidad de Jesús. Jesús pagó nuestra deuda para que nosotros seamos libres.`
            }
          ],
          finalExam: [
            {
              id: 'f-doc-3',
              question: 'La teoría de la "Expiación Sustitutiva Penal" asegura que en la Cruz:',
              options: ['Cristo simplemente nos dio el mejor ejemplo de paciencia al morir.', 'Jesucristo absorbió la deidad en su debilidad terrenal.', 'Cristo tomó el lugar del pecador y pagó la sentencia de castigo de nuestras infracciones morales a la Ley de Dios.'],
              correctAnswerIndex: 2,
              explanation: 'Fue un intercambio real de cuentas: Cristo obtuvo nuestra deuda judicial de culpa y nosotros obtuvimos el crédito de Su obediencia perfecta.'
            }
          ],
          baseVerse: { reference: 'Efesios 2:8-9', text: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.' },
          commentaries: [
            { author: 'Juan Calvino', text: 'La fe es la mano extendida que recibe el regalo de la justicia de Cristo; es un don de Dios, no un mérito propio.' },
            { author: 'Charles Spurgeon', text: 'Si la salvación dependiera en lo más mínimo de mí, estaría perdido; por eso descanso solamente en la roca de la salvación que es Cristo.' }
          ],
          verses: [
            { reference: 'Tito 3:5', text: 'nos salvó, no por obras de justicia que nosotros hubiéramos hecho, sino por su misericordia...' },
            { reference: 'Romanos 5:1', text: 'Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo.' }
          ],
          assignments: [
            { id: 'd5', description: 'Redactar tu testimonio personal centrado en la gracia y no en tus méritos.' },
            { id: 'd6', description: 'Estudiar Romanos 5:8 y agradecer a Dios por Su amor demostrado en la cruz.' }
          ]
        }
      ]
    },
    {
      id: 'pentateuco',
      title: 'El Pentateuco: Ley y Promesa',
      type: 'BIBLE_STUDY',
      description: 'Análisis de los cinco libros de Moisés, desde la liberación de Egipto hasta la entrega de la Ley en el Sinaí.',
      lessons: [
        {
          id: 'exo-day1',
          day: 1,
          title: 'Éxodo: El Dios que Redime',
          blocks: [
            {
              type: 'note',
              id: 'exo-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Éxodo 12** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'exo-d1-b1',
              content: `El libro de Éxodo marca la transición de una familia (Jacob) a una nación (Israel). El tema central es la liberación soberana de Dios. Dios se revela como **YHWH** (Yo Soy), el Dios que recuerda su pacto con los patriarcas.\n\nLa Pascua es el evento cumbre: la sangre del cordero sobre los dinteles de las puertas tipifica el sacrificio sustitutivo que más tarde se cumpliría plenamente en Cristo.`
            },
            {
              type: 'note',
              id: 'exo-d1-n1',
              content: `**Estructura Crítica del Éxodo:**\n1. Israel en Egipto (Caps. 1-12)\n2. El viaje al Sinaí (Caps. 13-18)\n3. La Ley y el Tabernáculo (Caps. 19-40)\n\n*Anota esto:* La redención (salida de Egipto) precede a la Ley (Sinaí). Dios salva a su pueblo por gracia antes de pedirles obediencia.`
            },
            {
              type: 'control',
              id: 'exo-d1-q1',
              question: {
                id: 'eq1',
                question: '¿Qué evento en Éxodo es considerado el tipo principal de la redención en Cristo?',
                options: [
                  'La zarza ardiendo.',
                  'La Pascua (la sangre del cordero).',
                  'La construcción del tabernáculo.'
                ],
                correctAnswerIndex: 1
              }
            },
            {
              type: 'text',
              id: 'exo-d1-b2',
              content: `Moisés es la figura central, pero el verdadero protagonista es Dios. A través de las diez plagas, Dios demuestra su superioridad sobre el panteón egipcio. Cada plaga apuntaba a una deidad específica (ej. el Nilo, el sol, el ganado), humillando la falsa seguridad de Egipto.\n\nEl cruce del Mar Rojo es el "bautismo" nacional de Israel, donde mueren a su pasado de esclavitud y nacen como un pueblo bajo la teocracia divina.`
            },
            {
              type: 'note',
              id: 'exo-d1-n2',
              content: `**Puntos para Reflexionar y Seguir Repasando:**\n- ¿Cómo se manifiesta la soberanía de Dios en tu vida hoy?\n- **Aprende de Memoria:** Éxodo 14:14 "Jehová peleará por vosotros, y vosotros estaréis tranquilos."\n- Investiga la relación entre la última plaga (muerte de los primogénitos) y la seguridad de la iglesia en la sangre de Jesús.`
            }
          ],
          finalExam: [
            {
              id: 'f-exo-1',
              question: 'El nombre divino revelado a Moisés (YHWH) enfatiza:',
              options: ['La debilidad humana.', 'La autoexistencia y fidelidad del Dios del pacto.', 'El politeísmo egipcio.'],
              correctAnswerIndex: 1,
              explanation: 'YHWH significa "Yo Soy el que Soy", denotando que Dios depende solo de sí mismo y es fiel a sus promesas eternamente.'
            }
          ],
          baseVerse: { reference: 'Éxodo 3:14', text: 'Y respondió Dios a Moisés: YO SOY EL QUE SOY.' },
          commentaries: [
            { author: 'Matthew Henry', text: "Dios no solo saca a Israel de Egipto, sino que trabaja para sacar a Egipto del corazón de Israel mediante la ley y el tabernáculo." },
            { author: 'John MacArthur', text: "El Éxodo es el evento redentor por excelencia del Antiguo Testamento. Muestra a un Dios que no tolera la opresión de Su pueblo y que cumple fielmente Sus promesas de pacto." }
          ],
          verses: [
            { reference: 'Éxodo 3:14', text: 'Y respondió Dios a Moisés: YO SOY EL QUE SOY.' },
            { reference: 'Salmo 105:43', text: 'Sacó a su pueblo con gozo; con júbilo a sus escogidos.' }
          ],
          assignments: [{ id: 'ae1', description: 'Hacer una lista de los 10 mandamientos y su relevancia moral actual.' }]
        }
      ]
    },
    {
      id: 'historicos',
      title: 'Libros Históricos: Reino y Exilio',
      type: 'BIBLE_STUDY',
      description: 'La historia de Israel desde la conquista de Canaán hasta el retorno del exilio babilónico.',
      lessons: [
        {
          id: 'his-day1',
          day: 1,
          title: 'Josué y la Conquista',
          blocks: [
            {
              type: 'note',
              id: 'his-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Josué 1** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'his-d1-b1',
              content: `Josué narra el cumplimiento de la promesa de la tierra a Abraham. No es simplemente una crónica militar, sino una demostración de la santidad de Dios y la necesidad de obediencia de su pueblo.\n\nEl paso del Jordán y la caída de Jericó subrayan que la victoria depende de la fe en la Palabra de Dios, no de la fuerza humana.`
            },
            {
              type: 'note',
              id: 'his-d1-n1',
              content: `**Anota estos principios de Liderazgo Espiritual:**\n1. El liderazgo es un relevo: Moisés muere, Josué continúa.\n2. La valentía nace de la meditación en la Palabra (Josué 1:8).\n3. La santidad precede a la conquista (ej. la circuncisión en Gilgal y la derrota en Hai).`
            },
            {
              type: 'control',
              id: 'his-d1-q1',
              question: {
                id: 'q1',
                question: '¿Qué evento precedió a la caída de Jericó como señal de renovación del pacto?',
                options: [
                  'La construcción de un palacio para Josué.',
                  'La circuncisión de la nueva generación en Gilgal.',
                  'Un tratado de paz con los cananeos.'
                ],
                correctAnswerIndex: 1
              }
            },
            {
              type: 'text',
              id: 'his-d1-b2',
              content: `Diferente a lo que muchos piensan, la conquista no fue total de inmediato. El libro describe una campaña relámpago que quebró el poder organizado de los reyes cananeos, pero dejó focos de resistencia que Israel debía erradicar individualmente.\n\nEsto tipifica nuestra vida cristiana: Cristo ha ganado la victoria decisiva, pero nosotros debemos seguir "conquistando" terreno en nuestra santificación diaria frente a los pecados remanentes.`
            },
            {
              type: 'note',
              id: 'his-d1-n2',
              content: `**Seguir Repasando:**\n- Lee Josué 24 y anota la decisión de Josué: "Yo y mi casa serviremos a Jehová".\n- Reflexiona: ¿Cuáles son las "ciudades fortificadas" (pecados o miedos) que Dios te está llamando a conquistar hoy bajo su promesa?`
            }
          ],
          finalExam: [
            {
              id: 'f-his-1',
              question: '¿Cuál fue la clave del éxito de Josué según el capítulo 1?',
              options: ['Su entrenamiento militar egipcio.', 'La meditación constante en la Ley de Dios.', 'La construcción de carros de hierro.'],
              correctAnswerIndex: 1,
              explanation: 'Josué 1:8 dice que la clave para prosperar en todo era meditar en el libro de la ley de día y de noche.'
            }
          ],
          baseVerse: { reference: 'Josué 1:8', text: 'Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él...' },
          commentaries: [
            { author: 'John MacArthur', text: "Josué es un tipo de Cristo, guiando al pueblo de Dios hacia el reposo que la Ley de Moisés no pudo dar." },
            { author: 'Matthew Henry', text: "La valentía de Josué no venía de su fuerza militar, sino de su absoluta confianza en la presencia y la promesa de Dios. Dios no nos llama a ser grandes, sino a ser fieles." }
          ],
          verses: [
            { reference: 'Josué 1:9', text: 'Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes...' },
            { reference: 'Hebreos 4:8', text: 'Porque si Josué les hubiera dado el reposo, no hablaría después de otro día.' }
          ],
          assignments: [{ id: 'ah1', description: 'Trazar un mapa de la conquista de las principales ciudades de Canaán.' }]
        }
      ]
    },
    {
      id: 'poeticos',
      title: 'Libros Poéticos y Sapienciales',
      type: 'BIBLE_STUDY',
      description: 'El corazón de la devoción judía y la sabiduría práctica: Job, Salmos, Proverbios, Eclesiastés y Cantares.',
      lessons: [
        {
          id: 'poe-day1',
          day: 1,
          title: 'Salmos: El Himnario de la Fe',
          blocks: [
            {
              type: 'note',
              id: 'poe-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Salmo 1** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'poe-d1-b1',
              content: `Los Salmos son oraciones y cantos que abarcan toda la gama de emociones humanas. Se dividen en himnos de alabanza, salmos de lamento, salmos de acción de gracias y salmos mesiánicos.\n\nEl Salmo 1 actúa como pórtico, definiendo dos caminos: el del justo que se deleita en la ley, y el del impío que perece.`
            }
          ],
          finalExam: [
            {
              id: 'f-poe-1',
              question: '¿Qué caracteriza principalmente a la poesía hebrea?',
              options: ['La rima asonante al final de los versos.', 'El paralelismo de ideas (sinónimo, antitético o sintético).', 'El uso estricto de pentámetro yámbico.'],
              correctAnswerIndex: 1,
              explanation: 'A diferencia de la rima de palabras, la rima hebrea es de "pensamientos" o ideas que se repiten o contrastan.'
            }
          ],
          baseVerse: { reference: 'Salmo 1:1-2', text: 'Bienaventurado el varón que no anduvo en consejo de malos... sino que en la ley de Jehová está su delicia.' },
          commentaries: [
            { author: 'Matthew Henry', text: "En los Salmos encontramos un espejo para el alma y una medicina para cada aflicción." },
            { author: 'John MacArthur', text: "La poesía de los Salmos es la expresión más pura del corazón humano respondiendo a la revelación divina. Son oraciones inspiradas que Dios nos ha dado para que se las devolvamos en adoración." }
          ],
          verses: [
            { reference: 'Salmo 119:105', text: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.' },
            { reference: 'Salmo 19:7', text: 'La ley de Jehová es perfecta, que convierte el alma; el testimonio de Jehová es fiel, que hace sabio al sencillo.' }
          ],
          assignments: [{ id: 'ap1', description: 'Escribir un salmo personal de acción de gracias basado en las bendiciones de la última semana.' }]
        }
      ]
    },
    {
      id: 'profetas',
      title: 'Los Profetas: Voz de Justicia y Esperanza',
      type: 'BIBLE_STUDY',
      description: 'El llamado al arrepentimiento de los Profetas Mayores y Menores y sus visiones del Reino del Mesías.',
      lessons: [
        {
          id: 'pro-day1',
          day: 1,
          title: 'Isaías: El Profeta Evangélico',
          blocks: [
            {
              type: 'note',
              id: 'pro-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Isaías 6** (La visión de la gloria de Dios) antes de comenzar.'
            },
            {
              type: 'text',
              id: 'pro-d1-b1',
              content: `Isaías es llamado a menudo el "quinto evangelio" debido a sus detalladas profecías sobre el Mesías. El libro se divide entre el juicio a las naciones y el consuelo a Israel.\n\nEl capítulo 53 es el punto central del Antiguo Testamento, describiendo al Siervo Sufriente que cargaría con los pecados de muchos.`
            }
          ],
          finalExam: [
            {
              id: 'f-pro-1',
              question: 'La visión de Isaías en el capítulo 6 subraya qué atributo de Dios?',
              options: ['Su paciencia infinita.', 'Su santidad absoluta ("Santo, Santo, Santo").', 'Su sentido del humor.'],
              correctAnswerIndex: 1,
              explanation: 'Isaías queda abrumado por la santidad de Dios, lo cual produce en él un profundo sentido de su propio pecado y necesidad de purificación.'
            }
          ],
          baseVerse: { reference: 'Isaías 6:3', text: 'Y el uno al otro daba voces, diciendo: Santo, santo, santo, Jehová de los ejércitos; toda la tierra está llena de su gloria.' },
          commentaries: [
            { author: 'John MacArthur', text: "Ningún otro profeta describe tan vívidamente la expiación de Cristo como lo hace Isaías cientos de años antes de que ocurriera." },
            { author: 'Matthew Henry', text: "Isaías es el heraldo de la salvación. En sus páginas vemos tanto el rayo del juicio divino contra el pecado como el arcoíris de la esperanza en el Mesías venidero." }
          ],
          verses: [
            { reference: 'Isaías 53:5', text: 'Mas él herido fue por nuestras rebeliones, molido por nuestros pecados...' },
            { reference: 'Mateo 1:23', text: 'He aquí, una virgen concebirá y dará a luz un hijo, y llamarás su nombre Emanuel.' }
          ],
          assignments: [{ id: 'apro1', description: 'Identificar al menos 5 profecías mesiánicas en el libro de Isaías y su cumplimiento en los Evangelios.' }]
        }
      ]
    },
    {
      id: 'evangelios',
      title: 'El Nuevo Testamento: La Vida de Cristo',
      type: 'BIBLE_STUDY',
      description: 'Estudio de los cuatro Evangelios y el nacimiento de la Iglesia en el libro de Hechos.',
      lessons: [
        {
          id: 'eva-day1',
          day: 1,
          title: 'Los Sinópticos y Juan',
          blocks: [
            {
              type: 'note',
              id: 'eva-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Juan 1** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'eva-d1-b1',
              content: `Los Evangelios no son biografías modernas, sino retratos teológicos de Jesús. Mateo lo presenta como el Rey de los Judíos; Marcos como el Siervo Sufriente; Lucas como el Hombre Perfecto y Salvador del mundo; y Juan como el Dios Eterno encarnado.`
            }
          ],
          finalExam: [
            {
              id: 'f-eva-1',
              question: '¿A qué audiencia principal se cree que fue dirigido el Evangelio de Mateo?',
              options: ['A los gentiles romanos.', 'A los judíos conversos, enfatizando el cumplimiento de las profecías.', 'A los griegos filósofos.'],
              correctAnswerIndex: 1,
              explanation: 'Mateo usa constantemente la phrase "para que se cumpliese lo que fue dicho", conectando a Jesús con las promesas del Antiguo Testamento.'
            }
          ],
          baseVerse: { reference: 'Juan 1:1', text: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' },
          commentaries: [
            { author: 'Matthew Henry', text: "En los Evangelios vemos a Dios bajando al encuentro del hombre para que el hombre pueda subir al encuentro de Dios." },
            { author: 'John MacArthur', text: "Los Evangelios no son solo historia; son el testimonio del Espíritu Santo sobre la persona y la obra de Jesucristo, el único Salvador del mundo." }
          ],
          verses: [
            { reference: 'Juan 1:1', text: 'En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.' },
            { reference: 'Juan 20:31', text: 'Pero éstas se han escrito para que creáis que Jesús es el Cristo, el Hijo de Dios, y para que creyendo, tengáis vida en su nombre.' }
          ],
          assignments: [{ id: 'aev1', description: 'Comparar el relato de la tentación de Jesús en Mateo y Lucas.' }]
        }
      ]
    },
    {
      id: 'bases-fundamentales',
      title: 'Bases Fundamentales',
      type: 'BIBLE_STUDY',
      description: 'Explora los pilares esenciales de la fe cristiana, desde el arrepentimiento hasta la vida en el Espíritu.',
      lessons: [
        {
          id: 'bases-d1',
          day: 1,
          title: 'El Arrepentimiento',
          blocks: [
            {
              type: 'note',
              id: 'b-d1-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Lucas 15** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d1-b1',
              content: 'El arrepentimiento (metanoia) es el primer paso en la vida cristiana. No es una emoción pasajera, sino un cambio radical de perspectiva y voluntad. Implica reconocer que íbamos por el camino equivocado y decidir volvernos hacia Dios.'
            },
            {
              type: 'note',
              id: 'b-d1-n1',
              content: 'El arrepentimiento es la puerta de entrada a la gracia. Sin reconocer nuestra necesidad de cambio, no podemos recibir el perdón.'
            },
            {
              type: 'control',
              id: 'b-d1-q1',
              question: {
                id: 'bq1',
                question: '¿Qué significa el término "metanoia"?',
                options: ['Sentir culpa constante', 'Cambio de mente y propósito', 'Llorar por los errores'],
                correctAnswerIndex: 1
              }
            }
          ],
          finalExam: [
            {
              id: 'f-b1',
              question: '¿Cuál es el fruto de un arrepentimiento genuino según el Nuevo Testamento?',
              options: ['Hacer sacrificios costosos', 'Cambio de conducta y vida santa', 'Saberse de memoria los mandamientos'],
              correctAnswerIndex: 1,
              explanation: 'El arrepentimiento verdadero siempre se manifiesta en una vida que busca honrar a Dios mediante la obediencia.'
            }
          ],
          baseVerse: { reference: 'Mateo 4:17', text: 'Desde entonces comenzó Jesús a predicar, y a decir: Arrepentíos, porque el reino de los cielos se ha acercado.' }
        },
        {
          id: 'bases-d2',
          day: 2,
          title: 'La Fe',
          blocks: [
            {
              type: 'note',
              id: 'b-d2-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Hebreos 11** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d2-b1',
              content: 'La fe no es un sentimiento o un deseo ciego. Es la confianza plena en la Palabra de Dios y en la persona de Jesucristo. Según Hebreos 11, la fe es la certeza de lo que se espera y la convicción de lo que no se ve.'
            },
            {
              type: 'control',
              id: 'b-d2-q1',
              question: {
                id: 'bq2',
                question: '¿Cómo define la Biblia la fe en el libro de Hebreos?',
                options: ['Un deseo de que las cosas salgan bien', 'La certeza de lo que se espera y convicción de lo que no se ve', 'Una creencia sin pruebas'],
                correctAnswerIndex: 1
              }
            }
          ],
          finalExam: [
            {
              id: 'f-b2',
              question: 'Sin fe es imposible:',
              options: ['Tener mucho dinero', 'Agradar a Dios', 'Ser una buena persona moralmente'],
              correctAnswerIndex: 1,
              explanation: 'La Biblia es clara en que la fe es el vínculo vital para relacionarnos con Dios.'
            }
          ],
          baseVerse: { reference: 'Hebreos 11:1', text: 'Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve.' }
        },
        {
          id: 'bases-d3',
          day: 3,
          title: 'El Perdón',
          blocks: [
            {
              type: 'note',
              id: 'b-d3-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Mateo 18** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d3-b1',
              content: 'El perdón es la base de nuestra paz. Dios nos ha perdonado mediante el sacrificio de Jesús, y nosotros, como sus seguidores, estamos llamados a perdonar a los demás. El perdón no es opcional, es una característica del carácter de Cristo en nosotros.'
            }
          ],
          finalExam: [
            {
              id: 'f-b3',
              question: '¿Cuántas veces dijo Jesús que debemos perdonar?',
              options: ['Siete veces', 'Solo si nos lo piden', 'Hasta setenta veces siete (siempre)'],
              correctAnswerIndex: 2,
              explanation: 'Jesús enfatizó la necesidad de un corazón perdonador constante.'
            }
          ],
          baseVerse: { reference: 'Efesios 4:32', text: 'Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo.' }
        },
        {
          id: 'bases-d4',
          day: 4,
          title: 'La Obediencia',
          blocks: [
            {
              type: 'note',
              id: 'b-d4-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Deuteronomio 28** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d4-b1',
              content: 'La obediencia es la prueba de nuestro amor por Dios. No obedecemos para ser salvos, sino porque YA hemos sido salvados por gracia. La obediencia nace de la gratitud.'
            }
          ],
          finalExam: [
            {
              id: 'f-b4',
              question: '¿Qué dijo Jesús sobre los que le aman?',
              options: ['Que deben cantar mucho', 'Que guardarán sus mandamientos', 'Que deben ir al templo todos los días'],
              correctAnswerIndex: 1,
              explanation: 'La obediencia activa es la marca distintiva del discípulo.'
            }
          ],
          baseVerse: { reference: 'Juan 14:15', text: 'Si me amáis, guardad mis mandamientos.' }
        },
        {
          id: 'bases-d5',
          day: 5,
          title: 'La Familia',
          blocks: [
            {
              type: 'note',
              id: 'b-d5-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Efesios 5** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d5-b1',
              content: 'La familia es la primera institución creada por Dios. Es el lugar donde se refleja el amor de Cristo por la Iglesia y donde se transmiten los valores eternos a las nuevas generaciones.'
            }
          ],
          finalExam: [
            {
              id: 'f-b5',
              question: '¿Cuál es el primer mandamiento con promesa para los hijos?',
              options: ['No robar', 'Honrar a padre y madre', 'No matar'],
              correctAnswerIndex: 1,
              explanation: 'Honrar a los padres es fundamental en el diseño divino para la bendición familiar.'
            }
          ],
          baseVerse: { reference: 'Salmo 127:3', text: 'He aquí, herencia de Jehová son los hijos; cosa de estima el fruto del vientre.' }
        },
        {
          id: 'bases-d6',
          day: 6,
          title: 'El Espíritu Santo',
          blocks: [
            {
              type: 'note',
              id: 'b-d6-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Hechos 2** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d6-b1',
              content: 'El Espíritu Santo es la tercera persona de la Trinidad. Él nos guía a toda verdad, nos consuela y nos da poder para ser testigos de Jesús en el mundo.'
            }
          ],
          finalExam: [
            {
              id: 'f-b6',
              question: '¿Qué función primordial realiza el Espíritu Santo según Jesús?',
              options: ['Darnos riquezas', 'Guiarnos a toda verdad y recordarnos sus palabras', 'Hacer que no tengamos problemas'],
              correctAnswerIndex: 1,
              explanation: 'El Consolador habita en el creyente para revelarle la voluntad de Dios.'
            }
          ],
          baseVerse: { reference: 'Juan 14:26', text: 'Mas el Consolador, el Espíritu Santo... él os enseñará todas las cosas...' }
        },
        {
          id: 'bases-d7',
          day: 7,
          title: 'La Biblia',
          blocks: [
            {
              type: 'note',
              id: 'b-d7-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **2 Timoteo 3** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d7-b1',
              content: 'La Biblia es la Palabra inspirada de Dios. Es nuestra regla de fe y conducta. A través de ella, Dios se revela a la humanidad y nos muestra el camino de la salvación.'
            }
          ],
          finalExam: [
            {
              id: 'f-b7',
              question: '¿Qué significa que la Biblia es inspirada?',
              options: ['Que los autores eran muy creativos', 'Que Dios guio a los autores mediante el Espíritu Santo para escribir su verdad', 'Que es un libro de cuentos antiguos'],
              correctAnswerIndex: 1,
              explanation: 'La inspiración divina garantiza la autoridad y veracidad de las Escrituras.'
            }
          ],
          baseVerse: { reference: '2 Timoteo 3:16', text: 'Toda la Escritura es inspirada por Dios...' }
        },
        {
          id: 'bases-d8',
          day: 8,
          title: 'La Oración y el Ayuno',
          blocks: [
            {
              type: 'note',
              id: 'b-d8-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Mateo 6** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d8-b1',
              content: 'La oración es nuestra comunicación directa con Dios. El ayuno, por su parte, es abstenerse voluntariamente de alimento para enfocarnos plenamente en lo espiritual y buscar el rostro de Dios con humildad.'
            }
          ],
          finalExam: [
            {
              id: 'f-b8',
              question: '¿Cuál es el propósito principal del ayuno cristiano?',
              options: ['Bajar de peso', 'Demostrar que somos muy santos', 'Humillarse ante Dios y sensibilizar el espíritu a su presencia'],
              correctAnswerIndex: 2,
              explanation: 'El ayuno no es un ritual externo, sino una búsqueda profunda del Señor.'
            }
          ],
          baseVerse: { reference: 'Mateo 6:6', text: 'Mas tú, cuando ores, entra en tu aposento...' }
        },
        {
          id: 'bases-d9',
          day: 9,
          title: 'El Bautismo',
          blocks: [
            {
              type: 'note',
              id: 'b-d9-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Romanos 6** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d9-b1',
              content: 'El bautismo es un paso público de obediencia e identificación con la muerte y resurrección de Cristo. Es un símbolo externo de una transformación interna real.'
            }
          ],
          finalExam: [
            {
              id: 'f-b9',
              question: 'El bautismo en aguas simboliza:',
              options: ['Un rito de limpieza física', 'La identificación con la muerte al pecado y la resurrección a vida nueva en Cristo', 'Ser parte de un club social'],
              correctAnswerIndex: 1,
              explanation: 'Es un testimonio público de la fe salvadora.'
            }
          ],
          baseVerse: { reference: 'Romanos 6:4', text: 'Porque somos sepultados juntamente con él a muerte por el bautismo...' }
        },
        {
          id: 'bases-d10',
          day: 10,
          title: 'La Santa Cena',
          blocks: [
            {
              type: 'note',
              id: 'b-d10-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **1 Corintios 11** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d10-b1',
              content: 'La Santa Cena es la conmemoración del sacrificio de Jesús. El pan representa su cuerpo entregado y el vino (fruto de la vid) representa su sangre vertida por el perdón de nuestros pecados.'
            }
          ],
          finalExam: [
            {
              id: 'f-b10',
              question: '¿Con qué propósito nos mandó Jesús celebrar la Santa Cena?',
              options: ['Para comer algo en la iglesia', 'En memoria de Él y de su sacrificio', 'Como un requisito legal'],
              correctAnswerIndex: 1,
              explanation: 'Es un memorial de la obra redentora de Cristo hasta que Él regrese.'
            }
          ],
          baseVerse: { reference: '1 Corintios 11:24', text: '...haced esto en memoria de mí.' }
        },
        {
          id: 'bases-d11',
          day: 11,
          title: 'Qué es ser Cristiano',
          blocks: [
            {
              type: 'note',
              id: 'b-d11-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Mateo 5** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d11-b1',
              content: 'Ser cristiano no es solo pertenecer a un grupo religioso. Es ser un discípulo de Cristo, alguien que ha decidido seguirle, imitarle y rendir su vida a Su señorío.'
            }
          ],
          finalExam: [
            {
              id: 'f-b11',
              question: '¿Dónde se usó por primera vez el término "cristiano" para los discípulos?',
              options: ['En Jerusalén', 'En Antioquía', 'En Roma'],
              correctAnswerIndex: 1,
              explanation: 'Los creyentes fueron llamados cristianos por primera vez en Antioquía debido a su evidente parecido con Cristo.'
            }
          ],
          baseVerse: { reference: 'Hechos 11:26', text: '...y a los discípulos se les llamó cristianos por primera vez en Antioquía.' }
        },
        {
          id: 'bases-d12',
          day: 12,
          title: 'Qué es el Cristianismo',
          blocks: [
            {
              type: 'note',
              id: 'b-d12-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Efesios 2** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d12-b1',
              content: 'El cristianismo es la relación de Dios con la humanidad a través de Jesucristo. Basado en verdades históricas y la revelación bíblica, es el mensaje de la redención por gracia mediante la fe.'
            }
          ],
          finalExam: [
            {
              id: 'f-b12',
              question: 'A diferencia de los sistemas de méritos, el cristianismo enseña que la salvación es:',
              options: ['Por buen comportamiento', 'Un don gratuito de Dios por medio de la fe', 'Por conocimiento oculto'],
              correctAnswerIndex: 1,
              explanation: 'La gracia es el corazón del mensaje cristiano.'
            }
          ],
          baseVerse: { reference: 'Efesios 2:8', text: 'Porque por gracia sois salvos por medio de la fe...' }
        },
        {
          id: 'bases-d13',
          day: 13,
          title: 'Qué es la Religión',
          blocks: [
            {
              type: 'note',
              id: 'b-d13-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Santiago 1** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d13-b1',
              content: 'La palabra "religión" a veces se confunde con ritualismo. Sin embargo, en un sentido puro, es la expresión externa de nuestra reverencia a Dios. Santiago nos dice que la "religión pura" consiste en cuidar a los necesitados y mantenerse sin mancha del mundo.'
            }
          ],
          finalExam: [
            {
              id: 'f-b13',
              question: '¿Cómo define Santiago la religión pura?',
              options: ['Guardar todos los ritos antiguos', 'Visitar a huérfanos y viudas y guardarse sin mancha del mundo', 'Separarse físicamente de la sociedad'],
              correctAnswerIndex: 1,
              explanation: 'La verdadera devoción se muestra en la compasión y la pureza ética.'
            }
          ],
          baseVerse: { reference: 'Santiago 1:27', text: 'La religión pura y sin mácula delante de Dios el Padre es esta...' }
        },
        {
          id: 'bases-d14',
          day: 14,
          title: 'Satanás',
          blocks: [
            {
              type: 'note',
              id: 'b-d14-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Efesios 6** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d14-b1',
              content: 'La Biblia enseña que Satanás es un ser espiritual caído, el adversario de Dios y de los creyentes. Su objetivo es engañar, tentar y destruir, pero los cristianos tenemos victoria en Cristo.'
            }
          ],
          finalExam: [
            {
              id: 'f-b14',
              question: '¿Cuál es la principal estrategia de Satanás según la Biblia?',
              options: ['Darnos pesadillas', 'El engaño y la mentira', 'Obligarnos físicamente a pecar'],
              correctAnswerIndex: 1,
              explanation: 'Él es llamado el "padre de mentira".'
            }
          ],
          baseVerse: { reference: '1 Pedro 5:8', text: 'Sed sobrios, y velad; porque vuestro adversario el diablo... anda alrededor buscando a quien devorar.' }
        },
        {
          id: 'bases-d15',
          day: 15,
          title: 'La Naturaleza Vieja',
          blocks: [
            {
              type: 'note',
              id: 'b-d15-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Romanos 7** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d15-b1',
              content: 'La naturaleza vieja es nuestra inclinación pecaminosa heredada. Aunque somos nuevas criaturas en Cristo, todavía luchamos contra los deseos de la carne. Debemos "hacer morir" lo terrenal en nosotros.'
            }
          ],
          finalExam: [
            {
              id: 'f-b15',
              question: '¿Qué debemos hacer con la "naturaleza vieja" según el apóstol Pablo?',
              options: ['Mejorarla poco a poco', 'Hacerla morir y despojarnos de ella', 'Aceptarla como parte de nosotros'],
              correctAnswerIndex: 1,
              explanation: 'La vida cristiana es un proceso de despojarse de lo viejo y vestirse de lo nuevo.'
            }
          ],
          baseVerse: { reference: 'Efesios 4:22', text: 'En cuanto a la pasada manera de vivir, despojaos del viejo hombre...' }
        },
        {
          id: 'bases-d16',
          day: 16,
          title: 'El Mundo',
          blocks: [
            {
              type: 'note',
              id: 'b-d16-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **1 Juan 2** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d16-b1',
              content: 'Cuando la Biblia habla negativamente del "mundo", se refiere al sistema de valores y deseos que se opone a Dios. Estamos en el mundo, pero no debemos ser del mundo ni amar sus caminos.'
            }
          ],
          finalExam: [
            {
              id: 'f-b16',
              question: '¿Qué sucede si alguien ama al mundo (en el sentido de sus valores pecaminosos)?',
              options: ['Es un buen vecino', 'El amor del Padre no está en él', 'Será más famoso'],
              correctAnswerIndex: 1,
              explanation: 'El sistema del mundo es hostil al reino de Dios.'
            }
          ],
          baseVerse: { reference: '1 Juan 2:15', text: 'No améis al mundo, ni las cosas que están en el mundo.' }
        },
        {
          id: 'bases-d17',
          day: 17,
          title: 'La Sanidad del Alma',
          blocks: [
            {
              type: 'note',
              id: 'b-d17-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Salmo 51** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d17-b1',
              content: 'Dios no solo perdona nuestros pecados, sino que también desea sanar nuestras heridas emocionales y traumas del pasado. La sanidad interior es un proceso de permitir que la verdad de Dios reemplace las mentiras que hemos creído sobre nosotros mismos.'
            }
          ],
          finalExam: [
            {
              id: 'f-b17',
              question: '¿Cuál es la clave para la sanidad del alma?',
              options: ['Olvidar todo lo que pasó', 'Permitir que la verdad de Cristo restaure nuestra identidad y sanar heridas mediante el perdón', 'Hacer terapia secular únicamente'],
              correctAnswerIndex: 1,
              explanation: 'La verdad de Dios nos hace verdaderamente libres.'
            }
          ],
          baseVerse: { reference: 'Salmo 147:3', text: 'Él sana a los quebrantados de corazón, y venda sus heridas.' }
        },
        {
          id: 'bases-d18',
          day: 18,
          title: 'El Fruto del Espíritu',
          blocks: [
            {
              type: 'note',
              id: 'b-d18-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Gálatas 5** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d18-b1',
              content: 'El carácter del cristiano se evidencia por el "fruto del Espíritu". Son nueve cualidades que el Espíritu Santo desarrolla en nosotros: amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza.'
            }
          ],
          finalExam: [
            {
              id: 'f-b18',
              question: '¿Cuántos frutos del Espíritu menciona Gálatas 5?',
              options: ['Muchos, no hay número', 'Nueve cualidades bajo un mismo fruto', 'Doce'],
              correctAnswerIndex: 1,
              explanation: 'Se habla de "fruto" (singular) compuesto por diversas virtudes cristianas.'
            }
          ],
          baseVerse: { reference: 'Gálatas 5:22-23', text: 'Mas el fruto del Espíritu es amor, gozo, paz...' }
        },
        {
          id: 'bases-d19',
          day: 19,
          title: 'El Testimonio Público',
          blocks: [
            {
              type: 'note',
              id: 'b-d19-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **Filipenses 2** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d19-b1',
              content: 'Nuestra fe no debe ser privada. Estamos llamados a ser "sal de la tierra" y "luz del mundo". Nuestro comportamiento, honestidad y amor deben apuntar a otros hacia la gloria de Dios.'
            }
          ],
          finalExam: [
            {
              id: 'f-b19',
              question: '¿Para qué debemos dejar que nuestra luz brille ante los hombres?',
              options: ['Para que vean lo buenos que somos', 'Para que vean nuestras buenas obras y glorifiquen al Padre', 'Para ser populares'],
              correctAnswerIndex: 1,
              explanation: 'El propósito del testimonio es la gloria de Dios.'
            }
          ],
          baseVerse: { reference: 'Mateo 5:16', text: 'Así alumbre vuestra luz delante de los hombres...' }
        },
        {
          id: 'bases-d20',
          day: 20,
          title: 'La Segunda Venida',
          blocks: [
            {
              type: 'note',
              id: 'b-d20-reading',
              content: '**Lectura Bíblica Obligatoria:**\nLeer el capítulo completo de **1 Tesalonicenses 4** antes de comenzar.'
            },
            {
              type: 'text',
              id: 'b-d20-b1',
              content: 'La esperanza bendita del cristiano es el regreso glorioso de Jesucristo. Él volverá para juzgar al mundo, reinar con justicia y llevar a su Iglesia a vivir eternamente con Él.'
            }
          ],
          finalExam: [
            {
              id: 'f-b20',
              question: '¿Qué actitud debe tener el cristiano ante la venida de Cristo?',
              options: ['Miedo y angustia', 'Vigilancia, santidad y esperanza', 'Indiferencia'],
              correctAnswerIndex: 1,
              explanation: 'Debemos estar preparados para su encuentro en cualquier momento.'
            }
          ],
          baseVerse: { reference: 'Tito 2:13', text: 'Aguardando la esperanza bendita y la manifestación gloriosa de nuestro gran Dios y Salvador Jesucristo.' }
        }
      ]
    }

  ]
};
