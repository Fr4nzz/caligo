/**
 * Latin American Spanish copy. Structure mirrors en.ts exactly.
 */
import type { Dict } from './en';

export const es: Dict = {
  "site": {
    "name": "Caligo",
    "descriptor": "Genomas de mariposas y polillas neotropicales",
    "proposition": "Un esfuerzo liderado desde América Latina que desarrolla genomas de referencia vinculados a ejemplares biológicos documentados, para que cada secuencia pueda rastrearse hasta un organismo y volver a examinarse."
  },
  "common": {
    "skipToContent": "Ir al contenido",
    "menu": "Menú",
    "close": "Cerrar",
    "openMenu": "Abrir menú",
    "closeMenu": "Cerrar menú",
    "theme": "Tema",
    "toggleTheme": "Cambiar entre tema claro y oscuro",
    "language": "Idioma",
    "chooseLanguage": "Elegir idioma",
    "externalNote": "Abre un sitio externo",
    "backTo": "Volver a",
    "onThisPage": "En esta página",
    "lastReviewed": "Evidencia revisada",
    "leads": "Responsables científicos",
    "status": "Estado",
    "privacy": "Privacidad",
    "exploreQuestion": "Explora esta pregunta",
    "exploreThisPilot": "Explora este piloto"
  },
  "status": {
    "publishedEvidence": "Evidencia publicada",
    "databaseSnapshot": "Consulta fechada de base de datos",
    "proposedCaligoWork": "Piloto propuesto",
    "proposedPilot": "Piloto propuesto",
    "preprint": "Preprint",
    "externalContext": "Contexto externo relacionado"
  },
  "mediaViewer": {
    "previousImage": "Visual anterior",
    "nextImage": "Visual siguiente",
    "imageOfLabel": "Visual {n} de {total}",
    "documentaryType": "Imagen documental",
    "aiConceptType": "Ilustración conceptual",
    "codeNativeType": "Gráfico explicativo",
    "aiConceptCaveat": "",
    "aiGeneratedCredit": "Generada con IA para Caligo",
    "caveats": {
      "fieldSite": "Escena ilustrativa de campo",
      "specimen": "Organismo ilustrativo",
      "map": "Vista generalizada del paisaje",
      "laboratory": "Flujo ilustrativo de laboratorio",
      "data": "Esquema explicativo de datos",
      "repository": "Interfaz ilustrativa de repositorio"
    }
  },
  "nav": {
    "home": "Inicio",
    "science": "Ciencia",
    "proposedPilots": "Pilotos",
    "about": "Acerca de",
    "participate": "Participa",
    "caligoStory": "Descubre",
    "network": "Red",
    "projects": "Pilotos",
    "capacity": "Aprendizaje e intercambio",
    "join": "Unirse"
  },
  "cta": {
    "exploreScience": "Explora las preguntas",
    "seeProposedPilots": "Conoce los pilotos propuestos",
    "contact": "Contacta a Caligo",
    "join": "Inicia una conversación",
    "seeScience": "Mira cómo funciona la ciencia",
    "howToTakePart": "Formas de participar",
    "readVision": "Conoce Caligo"
  },
  "join": {
    "title": "Únete a la red",
    "body": "El formulario de inscripción pregunta por tu país, institución, grupos taxonómicos de interés y tu experiencia con genomas o secuenciación. Toma unos minutos y está abierto.",
    "cta": "Abrir el formulario de inscripción",
    "newTabNote": "Abre Google Forms en una pestaña nueva.",
    "privacyNote": "El formulario está alojado en Google Forms. La información que envías llega al equipo organizador de Caligo y se usa solo para registrar tu interés y ayudar a dar forma a la red.",
    "formNameNote": "El formulario todavía se titula «Genómica de los Lepidópteros Neotropicales», el nombre anterior de la iniciativa.",
    "ctaSecondary": "Únete a la red"
  },
  "home": {
    "rail": {
      "overview": "Panorama",
      "fromOrganismToGenome": "Del organismo al genoma",
      "whatReferenceSupports": "Qué permite una referencia",
      "questions": "Preguntas",
      "proposedPilots": "Pilotos propuestos",
      "discoverCaligo": "Descubre Caligo"
    },
    "metaTitle": "Caligo | Genomas de mariposas y polillas neotropicales",
    "metaDescription": "Un esfuerzo liderado desde América Latina que desarrolla genomas de referencia vinculados a ejemplares documentados de mariposas y polillas neotropicales.",
    "hero": {
      "kicker": "Genómica de mariposas y polillas neotropicales",
      "title": "Latinoamérica tiene una de las faunas de Lepidoptera más ricas de la Tierra, y una de las menos secuenciadas",
      "body": "Caligo es una red colaborativa que genera recursos genómicos para las mariposas y polillas neotropicales, conecta el conocimiento regional, construye capacidad local y garantiza el reparto equitativo de beneficios."
    },
    "snapshot": {
      "heading": "Diversidad extraordinaria. Cobertura genómica desigual.",
      "body": "El Neotrópico alberga una variedad excepcional de mariposas y polillas, desde heliconinos conocidos hasta pequeños linajes de polillas poco estudiados. Sin embargo, la investigación genómica sigue concentrada en un conjunto limitado de organismos y los grupos tropicales continúan subrepresentados. El aporte de Caligo es concreto: desarrollar genomas de referencia vinculados a ejemplares cuya identidad y origen puedan comprobarse, y usarlos junto con evidencia ecológica, taxonómica y poblacional para plantear preguntas regionales. [S01]",
      "sourceNote": "El encuadre regional sigue a Wright et al. 2026 [S01]. Caligo no publica un porcentaje de cobertura genómica neotropical porque todavía no existe un análisis congelado y reproducible que combine denominador, pertenencia geográfica y ensamblajes. La documentación de NCBI se revisó el 16 de julio de 2026 [S23].",
      "sourceIds": [
        "wright-2026",
        "ncbi-datasets-2026"
      ]
    },
    "journey": {
      "heading": "Del organismo al genoma",
      "intro": "Un recurso genómico confiable es una cadena de decisiones biológicas y documentales, no solo un archivo de secuencias.",
      "assemblyDiagram": {
        "conceptual": "Animación educativa — conceptual, no son datos",
        "title": "Ensamblar y luego evaluar",
        "description": "Flujo simplificado de ensamblaje genómico. Las lecturas superpuestas se alinean y forman menos contigs, de mayor longitud. Los enlaces de ordenamiento organizan los contigs en varias unidades a escala cromosómica mientras una brecha sin resolver permanece visible. Una evaluación final revisa continuidad, completitud y límites o brechas conocidas sin presentar puntajes numéricos. Las marcas son ilustrativas y no representan datos de secuencia, un ensamblaje ni un resultado de Caligo.",
        "play": "Reproducir la explicación",
        "replay": "Repetir",
        "ready": "Listo para animar",
        "playing": "Explicación en curso",
        "finished": "Explicación completa",
        "reduced": "Explicación completa visible sin movimiento",
        "reads": "lecturas superpuestas",
        "contigs": "contigs más largos",
        "ordering": "enlaces de ordenamiento",
        "chromosomes": "unidades a escala cromosómica",
        "gap": "brecha sin resolver",
        "assessment": "evaluación",
        "continuity": "continuidad",
        "completeness": "completitud",
        "limits": "límites + brechas",
        "summary": "varias unidades · queda una brecha conceptual",
        "disclaimer": "Flujo ilustrativo — no son datos, puntajes ni resultados de Caligo"
      },
      "steps": [
        {
          "title": "Preguntar e identificar",
          "body": "Comenzar con una pregunta biológica y la mejor identificación disponible."
        },
        {
          "title": "Registrar la procedencia",
          "body": "Documentar quién, dónde, cuándo, los permisos y el contexto de colecta."
        },
        {
          "title": "Preservar un ejemplar de referencia",
          "body": "Conservar un ejemplar o registro de material rastreable que pueda revisarse de nuevo."
        },
        {
          "title": "Extraer y secuenciar",
          "body": "Convertir una muestra documentada en lecturas de ADN sin romper la cadena de evidencia."
        },
        {
          "title": "Ensamblar y evaluar",
          "body": "Construir el recurso genómico y reportar su completitud, continuidad y límites."
        },
        {
          "title": "Depositar y reconocer",
          "body": "Conectar secuencia, metadatos, ejemplar, métodos y reconocimiento de contribuciones en repositorios duraderos."
        }
      ]
    },
    "uses": {
      "heading": "Un genoma de referencia, cuatro investigaciones distintas",
      "intro": "Un genoma de referencia es una secuencia de ADN ensamblada que funciona como mapa común. Se vuelve informativo cuando se suman los ejemplares, muestras, observaciones y comparaciones apropiados para cada pregunta.",
      "rows": [
        {
          "use": "Identificar muestras y ordenar lecturas de secuencia",
          "hook": "Un mapa genómico común ayuda a ubicar fragmentos nuevos de ADN y compararlos de manera consistente.",
          "referenceContribution": "Ofrece coordenadas para mapear lecturas y regiones que pueden ayudar a diferenciar linajes conocidos.",
          "whatElseIsNeeded": "Ejemplares verificados, taxonomía confiable, datos de comparación y métodos que detecten contaminación.",
          "cannotShowAlone": "No prueba por sí solo la identidad de una muestra desconocida ni resuelve límites de especie."
        },
        {
          "use": "Comparar cromosomas y orden de genes",
          "hook": "Los genomas emparentados pueden mostrar dónde los cromosomas se dividieron, fusionaron, invirtieron o conservaron su estructura.",
          "referenceContribution": "Permite alinear regiones cromosómicas y estudiar bloques de genes conservados, conocidos como sintenia.",
          "whatElseIsNeeded": "Ensamblajes a escala cromosómica de especies relacionadas, relaciones confiables y métodos de comparación explícitos.",
          "cannotShowAlone": "No explica por qué evolucionó un reordenamiento ni qué efecto tuvo sobre el organismo."
        },
        {
          "use": "Estudiar variación dentro y entre poblaciones",
          "hook": "Muchos individuos comparados con la misma referencia pueden revelar parentesco, diversidad y conectividad.",
          "referenceContribution": "Proporciona un sistema común de coordenadas para comparar variantes heredadas entre muestras.",
          "whatElseIsNeeded": "Muestreo planificado entre individuos, lugares o momentos; metadatos ecológicos; y modelos demográficos.",
          "cannotShowAlone": "Un individuo de referencia no representa toda la variación ni revela la historia de movimiento de una población."
        },
        {
          "use": "Comparar poblaciones actuales con la historia de los museos",
          "hook": "Los ejemplares históricos permiten contrastar los genomas de hoy con un registro de hace décadas o más de un siglo.",
          "referenceContribution": "Ayuda a ordenar ADN histórico fragmentado y compararlo con muestras actuales.",
          "whatElseIsNeeded": "Ejemplares curados, buena procedencia, métodos que contemplen el daño del ADN e interpretación cautelosa de un muestreo histórico desigual.",
          "cannotShowAlone": "Un genoma de referencia no recupera registros de colección perdidos ni convierte un archivo sesgado en una población completa del pasado."
        }
      ]
    },
    "questions": {
      "heading": "Seis preguntas que abren mundos enteros",
      "intro": "Seis puertas hacia las preguntas que la genómica regional puede investigar. Cada una lleva a la historia completa en la página de Ciencia.",
      "labels": {
        "example": "Un ejemplo neotropical",
        "evidence": "Evidencia que haría falta",
        "genomesCan": "Qué pueden aportar los genomas",
        "limits": "Evidencia necesaria más allá de la genómica",
        "sources": "Fuentes"
      },
      "items": [
        {
          "question": "¿Cómo pueden dividirse y fusionarse los cromosomas mientras un linaje sigue evolucionando?",
          "body": "Un linaje de mariposas puede reorganizar los paquetes que contienen su ADN sin desmoronarse por el camino.",
          "answer": "Los cromosomas son grandes paquetes de ADN. Hay una fisión cromosómica cuando un cromosoma ancestral pasa a formar dos; una fusión reúne en uno solo ADN que antes estaba en dos cromosomas. Estos cambios pueden modificar qué genes se heredan juntos, cómo se recombina el ADN durante la reproducción y cómo evolucionan los cromosomas sexuales. En Heliconius, la mayoría de las especies tiene 21 cromosomas en el conjunto haploide, pero cinco especies del subclado sapho presentan entre 21 y 60 después de numerosas fisiones. La evidencia genómica también respalda tres fusiones independientes entre el cromosoma W, propio de las hembras, y autosomas. Las cifras muestran que hubo cambios estructurales profundos; no revelan por sí solas si persistieron por selección, azar u otro proceso. Para responder eso hay que comparar especies, rasgos e historias evolutivas. [S02][S03]",
          "example": "La mayoría de Heliconius conserva 21 cromosomas haploides, mientras un linaje llega hasta 60; además, se identificaron tres eventos de fusión entre el W y autosomas. [S02]",
          "evidence": "Ensamblajes a escala cromosómica de varias especies emparentadas; conteos cromosómicos o microscopía cuando existan; relaciones filogenéticas confiables; y evidencia sobre rasgos, recombinación o cruces que permita probar consecuencias.",
          "genomesCan": "Mostrar qué regiones cromosómicas corresponden entre especies, localizar fisiones y fusiones y revelar cómo cambió la recombinación o la variación ligada alrededor de ellas.",
          "limits": "La comparación de genomas no demuestra por qué se extendió un reordenamiento, si causó especiación ni cómo afecta la conducta o la supervivencia sin evidencia biológica adicional.",
          "closing": "La pregunta profunda va más allá del número de cromosomas: qué cambió cuando el genoma volvió a empaquetarse.",
          "sourceNote": "Fuentes primarias: Rueda-M et al. 2024 [S02]; Mackay-Smith et al. 2026 [S03].",
          "sourceIds": [
            "rueda-2024",
            "mackay-smith-2026"
          ]
        },
        {
          "question": "¿Cuándo cruza el ADN la frontera entre linajes?",
          "body": "La historia evolutiva no siempre parece un árbol ordenado: linajes vecinos pueden intercambiar variación heredada.",
          "answer": "El flujo génico es el paso de variantes heredadas entre poblaciones mediante la reproducción. Cuando una hibridación va seguida de cruces sucesivos, parte del ADN de un linaje puede incorporarse de forma duradera a otro; eso se llama introgresión. Heliconius ofrece un ejemplo neotropical extraordinario. La evidencia genómica, conductual y de cruces respalda a H. elevatus como una especie híbrida que ha persistido como linaje distinto durante más de 720.000 generaciones. El flujo génico actual con H. pardalinus hace que cerca del 99 % de sus genomas sea muy parecido, mientras un pequeño conjunto de regiones heredadas de H. melpomene se asocia con patrón de color, forma del ala, preferencia de planta hospedera, feromonas sexuales y elección de pareja. El genoma mostró dónde difieren las historias; el caso se volvió convincente al unir esos patrones con mapeo de rasgos, experimentos y conducta. [S04][S05]",
          "example": "En H. elevatus, una pequeña fracción del genoma conserva ascendencia de H. melpomene asociada con rasgos, aunque el flujo génico con H. pardalinus homogeneiza la mayor parte del genoma. [S04]",
          "evidence": "Muchos individuos de las poblaciones pertinentes; un buen genoma de referencia; datos genómicos bien resueltos; modelos demográficos explícitos; y evidencia independiente de rasgos, geografía, conducta o cruces.",
          "genomesCan": "Detectar regiones con historias evolutivas distintas, estimar patrones de ascendencia y probar si variantes heredadas pasaron entre linajes.",
          "limits": "La similitud genómica por sí sola no demuestra que una variante transferida fue adaptativa, no identifica el mecanismo ecológico ni prueba que la hibridación originó una especie.",
          "closing": "Un fragmento inesperado de ADN compartido abre una investigación; no la cierra.",
          "sourceNote": "Fuentes primarias: Rosser et al. 2024 [S04]; Edelman et al. 2019 [S05].",
          "sourceIds": [
            "rosser-2024",
            "edelman-2019"
          ]
        },
        {
          "question": "¿Qué poblaciones siguen conectadas y cuáles comienzan a quedar aisladas?",
          "body": "Dos poblaciones pueden verse iguales incluso cuando las rutas entre ellas ya están desapareciendo.",
          "answer": "La conectividad poblacional significa que los individuos, y con ellos las variantes heredadas, todavía se desplazan entre poblaciones con suficiente frecuencia para dejar una señal detectable. La diversidad genética es la variedad de variantes heredadas dentro de una población o especie. Ambas dependen del muestreo: qué individuos, lugares y momentos se incluyen. Parides ascanius, una mariposa amenazada de hábitats costeros de Brasil, ofrece una línea de base útil. Un estudio de 2016 encontró poca estructura genética e infirió migración considerable entre las poblaciones muestreadas. Eso no garantiza que la conectividad siga igual hoy, sobre todo donde continúan la pérdida, el drenaje y la fragmentación del hábitat. Un nuevo estudio genómico tendría que comparar un muestreo contemporáneo bien diseñado con la evidencia anterior y proteger las localidades sensibles. [S06][S07][S08]",
          "example": "El trabajo genético anterior encontró poca estructura y alta migración inferida entre las poblaciones de P. ascanius estudiadas; es una referencia para volver a medir, no una prueba de conectividad actual. [S06]",
          "evidence": "Muchos individuos de un conjunto planificado de poblaciones y momentos; un genoma de referencia; información de hábitat y paisaje; modelos demográficos; y, cuando sea posible, observaciones directas o marcaje y recaptura.",
          "genomesCan": "Estimar parentesco, estructura poblacional, flujo génico histórico y reciente, endogamia y cambios en la diversidad genómica.",
          "limits": "Los genomas no muestran por sí solos la ruta exacta que recorrió un individuo, no miden la calidad del hábitat ni fijan prioridades de conservación sin contexto ecológico y social.",
          "closing": "La conectividad no es una línea inmóvil en el mapa: es una relación cambiante que debe medirse de nuevo.",
          "sourceNote": "Estudio primario y evaluaciones: Seraphim et al. 2016 [S06]; UICN 2018 [S07]; ICMBio 2021 [S08].",
          "sourceIds": [
            "seraphim-2016",
            "iucn-parides-2018",
            "icmbio-parides-2021"
          ]
        }
      ]
    },
    "pilotsTeaser": {
      "heading": "Cuatro pilotos propuestos, cuatro maneras de poner a prueba el enfoque",
      "intro": "Cuatro enigmas biológicos orientan cuatro líneas de trabajo propuestas. La página de Pilotos conecta cada pregunta con la evidencia publicada, los métodos y los siguientes pasos propuestos."
    },
    "namesakeTeaser": {
      "heading": "Mira más de cerca: la forma se convierte en evidencia",
      "body": "Una mariposa de cristal produce transparencia con escamas escasas y modificadas y nanoestructuras antirreflectantes. Algunas Heliconius distinguen diferencias ultravioletas invisibles para nosotros. Ejemplares de museo todavía pueden rendir cientos de loci genéticos después de más de un siglo. No son curiosidades aisladas: cada sorpresa visible abre una pregunta sobre desarrollo, evolución o cambio a través del tiempo. [S12][S13][S16]",
      "linkLabel": "Descubre las historias de los organismos",
      "sourceNote": "Fuentes: Pomerantz et al. 2021 [S12]; Chakraborty et al. 2023 [S13]; Mayer et al. 2021 [S16].",
      "sourceIds": [
        "pomerantz-2021",
        "chakraborty-2023",
        "mayer-2021"
      ]
    },
    "name": {
      "eyebrow": "Sobre el nombre",
      "title": "Un nombre para lo que falta por ver",
      "body": "Caligo significa niebla en latín y también nombra un género neotropical de mariposas búho. En el ala, un ocelo se resuelve en escamas y luego en información heredada. El nombre contiene la tesis del proyecto: una fauna tan rica no debería seguir tan a oscuras.",
      "sourceNote": "Caligo es el nombre elegido en la encuesta de la iniciativa. La etimología y las imágenes biológicas son una lectura actual del nombre, no una afirmación sobre cómo votaron quienes participaron."
    },
    "intro": {
      "eyebrow": "Por qué importa",
      "title": "Una fauna rica en preguntas genómicas todavía abiertas",
      "body": [
        "Las mariposas y polillas hacen visibles algunos de los experimentos más audaces de la evolución: transparencia, mimetismo, defensa química, migración, cambios de planta hospedera y cromosomas que se reorganizan.",
        "Caligo vincula esas vidas observables con ejemplares documentados y evidencia genómica, para comparar preguntas regionales sin separar la secuencia del organismo que la produjo."
      ]
    },
    "pillars": {
      "eyebrow": "Cómo se orienta el trabajo",
      "title": "Principios rectores para una genómica regional"
    },
    "tiersTeaser": {
      "eyebrow": "Datos distintos, preguntas distintas",
      "title": "Un código de barras, un genoma de referencia y un conjunto poblacional no son intercambiables",
      "body": "Cada uno ofrece una escala diferente de evidencia. Las páginas de ciencia de Caligo explican qué puede mostrar cada recurso, qué datos adicionales necesita y dónde debe detenerse la interpretación."
    },
    "closing": {
      "title": "Trae una pregunta, un organismo o una perspectiva",
      "body": "Caligo recibe conversaciones con investigadores, estudiantes, colecciones, instituciones, educadores, naturalistas y personas que quieran apoyar una genómica rigurosa y arraigada en la región para las mariposas y polillas neotropicales."
    },
    "stats": {
      "participants": "participantes",
      "facilities": "instalaciones de secuenciación",
      "countries": "países",
      "pilots": "pilotos propuestos",
      "asOf": "a julio de 2026"
    }
  },
  "science": {
    "metaTitle": "Ciencia | Caligo",
    "metaDescription": "Cómo los genomas de referencia se convierten en evidencia útil y por qué siguen importando la taxonomía, el muestreo, la ecología, la procedencia y los permisos.",
    "title": "Ciencia",
    "intro": "La genómica alcanza su mayor fuerza cuando permanece conectada con organismos, colecciones, paisajes y preguntas claras. Un genoma de referencia ofrece un mapa común para comparar; la conclusión biológica surge de los ejemplares, muestras, observaciones y pruebas que se colocan a su alrededor.",
    "questionsHeading": "Seis preguntas que los genomas pueden ayudar a investigar",
    "questionLabels": {
      "hook": "Por qué despierta curiosidad",
      "answer": "La historia",
      "example": "Ejemplo neotropical",
      "evidence": "Evidencia necesaria",
      "genomesCan": "Qué pueden aportar los genomas",
      "limits": "Evidencia necesaria más allá de la genómica",
      "value": "Por qué importa una respuesta",
      "caligoConnection": "Conexión con Caligo",
      "sourceNote": "Fuentes y alcance"
    },
    "tiersTitle": "Tres escalas de evidencia genética",
    "tiersOpenQuestion": "Un código de barras corto puede apoyar una identificación, un genoma de referencia puede ordenar comparaciones de genoma completo y un conjunto poblacional puede revelar variación entre muchos individuos. Ninguno reemplaza a los demás y todos dependen de un registro biológico documentado.",
    "breadthTitle": "Dar espacio a las polillas, los linajes pequeños y los nombres difíciles",
    "breadthBody": "La genómica de lepidópteros avanzó con rapidez, pero el esfuerzo sigue siendo desigual: las mariposas conocidas y las polillas grandes están mejor representadas que muchos linajes pequeños y tropicales. Un programa útil para la región debe combinar amplitud taxonómica con preguntas definidas por quienes conocen los organismos, las colecciones y los paisajes. [S01]",
    "pilotsTitle": "Por qué empezar con pilotos",
    "pilotsIntro": "Un piloto permite comprobar que toda la cadena de evidencia funciona antes de hablar de una escala mayor. Un buen piloto debe:",
    "pilotsReasons": [
      "conectar una pregunta biológica clara con ejemplares documentados y una estrategia genómica adecuada;",
      "detectar permisos, metadatos o trabajo taxonómico faltantes antes de que se conviertan en problemas costosos;",
      "comparar supuestos realistas de calidad, tiempo y costo entre distintos flujos de trabajo;",
      "probar cómo se mantienen unidos los datos, métodos, registros de repositorio y el reconocimiento de contribuciones;",
      "comprobar si otro equipo puede comprender y reutilizar los registros sin depender de conocimiento no documentado;",
      "mostrar dónde hace falta fortalecer la formación, la interpretación compartida y la infraestructura local;",
      "producir evidencia suficiente para decidir qué conviene repetir, revisar, ampliar o detener."
    ],
    "seeProjects": "Explora las cuatro preguntas de los pilotos propuestos.",
    "questions": [
      {
        "heading": "¿Cómo pueden dividirse y fusionarse los cromosomas mientras un linaje sigue evolucionando?",
        "hook": "Un linaje de mariposas puede reorganizar los paquetes que contienen su ADN sin desmoronarse por el camino.",
        "answer": "Los cromosomas son grandes paquetes de ADN. Hay una fisión cromosómica cuando un cromosoma ancestral pasa a formar dos; una fusión reúne en uno solo ADN que antes estaba en dos cromosomas. Estos cambios pueden modificar qué genes se heredan juntos, cómo se recombina el ADN durante la reproducción y cómo evolucionan los cromosomas sexuales. En Heliconius, la mayoría de las especies tiene 21 cromosomas en el conjunto haploide, pero cinco especies del subclado sapho presentan entre 21 y 60 después de numerosas fisiones. La evidencia genómica también respalda tres fusiones independientes entre el cromosoma W, propio de las hembras, y autosomas. Las cifras muestran que hubo cambios estructurales profundos; no revelan por sí solas si persistieron por selección, azar u otro proceso. Para responder eso hay que comparar especies, rasgos e historias evolutivas. [S02][S03]",
        "example": "La mayoría de Heliconius conserva 21 cromosomas haploides, mientras un linaje llega hasta 60; además, se identificaron tres eventos de fusión entre el W y autosomas. [S02]",
        "evidence": "Ensamblajes a escala cromosómica de varias especies emparentadas; conteos cromosómicos o microscopía cuando existan; relaciones filogenéticas confiables; y evidencia sobre rasgos, recombinación o cruces que permita probar consecuencias.",
        "genomesCan": "Mostrar qué regiones cromosómicas corresponden entre especies, localizar fisiones y fusiones y revelar cómo cambió la recombinación o la variación ligada alrededor de ellas.",
        "limits": "La comparación de genomas no demuestra por qué se extendió un reordenamiento, si causó especiación ni cómo afecta la conducta o la supervivencia sin evidencia biológica adicional.",
        "closing": "La pregunta profunda va más allá del número de cromosomas: qué cambió cuando el genoma volvió a empaquetarse.",
        "caligoConnection": "Contexto directo para el piloto propuesto sobre Heliconius.",
        "sourceNote": "Fuentes primarias: Rueda-M et al. 2024 [S02]; Mackay-Smith et al. 2026 [S03].",
        "sourceIds": [
          "rueda-2024",
          "mackay-smith-2026"
        ],
        "value": "Puede revelar cómo la arquitectura del genoma cambia las condiciones en que la variación se hereda y se compara."
      },
      {
        "heading": "¿Cuándo cruza el ADN la frontera entre linajes?",
        "hook": "La historia evolutiva no siempre parece un árbol ordenado: linajes vecinos pueden intercambiar variación heredada.",
        "answer": "El flujo génico es el paso de variantes heredadas entre poblaciones mediante la reproducción. Cuando una hibridación va seguida de cruces sucesivos, parte del ADN de un linaje puede incorporarse de forma duradera a otro; eso se llama introgresión. Heliconius ofrece un ejemplo neotropical extraordinario. La evidencia genómica, conductual y de cruces respalda a H. elevatus como una especie híbrida que ha persistido como linaje distinto durante más de 720.000 generaciones. El flujo génico actual con H. pardalinus hace que cerca del 99 % de sus genomas sea muy parecido, mientras un pequeño conjunto de regiones heredadas de H. melpomene se asocia con patrón de color, forma del ala, preferencia de planta hospedera, feromonas sexuales y elección de pareja. El genoma mostró dónde difieren las historias; el caso se volvió convincente al unir esos patrones con mapeo de rasgos, experimentos y conducta. [S04][S05]",
        "example": "En H. elevatus, una pequeña fracción del genoma conserva ascendencia de H. melpomene asociada con rasgos, aunque el flujo génico con H. pardalinus homogeneiza la mayor parte del genoma. [S04]",
        "evidence": "Muchos individuos de las poblaciones pertinentes; un buen genoma de referencia; datos genómicos bien resueltos; modelos demográficos explícitos; y evidencia independiente de rasgos, geografía, conducta o cruces.",
        "genomesCan": "Detectar regiones con historias evolutivas distintas, estimar patrones de ascendencia y probar si variantes heredadas pasaron entre linajes.",
        "limits": "La similitud genómica por sí sola no demuestra que una variante transferida fue adaptativa, no identifica el mecanismo ecológico ni prueba que la hibridación originó una especie.",
        "closing": "Un fragmento inesperado de ADN compartido abre una investigación; no la cierra.",
        "caligoConnection": "Pertinente para comparaciones en Heliconius y para cualquier piloto sobre movimiento, hibridación o adaptación.",
        "sourceNote": "Fuentes primarias: Rosser et al. 2024 [S04]; Edelman et al. 2019 [S05].",
        "sourceIds": [
          "rosser-2024",
          "edelman-2019"
        ],
        "value": "Puede aclarar cómo los linajes conservan su identidad mientras intercambian variación heredada con sus vecinos."
      },
      {
        "heading": "¿Cuándo un solo nombre científico oculta más de un linaje?",
        "hook": "Un nombre es una hipótesis comprobable sobre la identidad, no una etiqueta que el ADN confirma de manera automática.",
        "answer": "La taxonomía pregunta qué organismos pertenecen al mismo grupo, en qué se diferencian y qué nombre corresponde. Los genomas pueden revelar separaciones profundas, parientes inadvertidos o mezclas inesperadas, pero un grupo genómico no se convierte automáticamente en especie. También hacen falta ejemplares, morfología, historia natural, geografía, nombres previos y las reglas de nomenclatura. Esto importa especialmente en el Neotrópico, donde muchos grupos de polillas han recibido menos atención que las mariposas conocidas. Un estudio filogenómico de Mimallonidae, una familia de polillas predominantemente neotropical, comparó cientos de loci genéticos en la mayoría de los géneros reconocidos e incluyó datos recuperados de ejemplares secos de museo. El análisis reorganizó relaciones de nivel superior y mostró cómo las colecciones ayudan a resolver una diversidad difícil de estudiar solo con material reciente. [S17]",
        "example": "El estudio usó 515 loci y material de 32 de los 36 géneros reconocidos de Mimallonidae, incluidos ejemplares históricos secos, para reevaluar las relaciones de esta familia principalmente neotropical. [S17]",
        "evidence": "Ejemplares documentados; morfología e historia natural; revisión de tipos y nomenclatura; muestreo geográfico y taxonómico amplio; códigos de barras o datos genómicos; e hipótesis explícitas de delimitación.",
        "genomesCan": "Revelar relaciones, estructura oculta, hibridación y regiones diagnósticas que merecen una revisión taxonómica más profunda.",
        "limits": "Los genomas no asignan el nombre correcto, no reemplazan el examen de material tipo ni deciden límites de especie sin criterio biológico y nomenclatural.",
        "closing": "A veces el resultado más valioso no es una etiqueta rápida, sino una mejor pregunta sobre la identidad.",
        "caligoConnection": "Se aplica a todo el programa y es especialmente importante para linajes ricos en polillas o taxonómicamente difíciles.",
        "sourceNote": "Fuente primaria: St Laurent et al. 2018 [S17].",
        "sourceIds": [
          "st-laurent-2018"
        ],
        "value": "Puede mejorar la identificación y la clasificación sin reducir las decisiones de especie a grupos genéticos."
      },
      {
        "heading": "¿Qué poblaciones siguen conectadas y cuáles comienzan a quedar aisladas?",
        "hook": "Dos poblaciones pueden verse iguales incluso cuando las rutas entre ellas ya están desapareciendo.",
        "answer": "La conectividad poblacional significa que los individuos, y con ellos las variantes heredadas, todavía se desplazan entre poblaciones con suficiente frecuencia para dejar una señal detectable. La diversidad genética es la variedad de variantes heredadas dentro de una población o especie. Ambas dependen del muestreo: qué individuos, lugares y momentos se incluyen. Parides ascanius, una mariposa amenazada de hábitats costeros de Brasil, ofrece una línea de base útil. Un estudio de 2016 encontró poca estructura genética e infirió migración considerable entre las poblaciones muestreadas. Eso no garantiza que la conectividad siga igual hoy, sobre todo donde continúan la pérdida, el drenaje y la fragmentación del hábitat. Un nuevo estudio genómico tendría que comparar un muestreo contemporáneo bien diseñado con la evidencia anterior y proteger las localidades sensibles. [S06][S07][S08]",
        "example": "El trabajo genético anterior encontró poca estructura y alta migración inferida entre las poblaciones de P. ascanius estudiadas; es una referencia para volver a medir, no una prueba de conectividad actual. [S06]",
        "evidence": "Muchos individuos de un conjunto planificado de poblaciones y momentos; un genoma de referencia; información de hábitat y paisaje; modelos demográficos; y, cuando sea posible, observaciones directas o marcaje y recaptura.",
        "genomesCan": "Estimar parentesco, estructura poblacional, flujo génico histórico y reciente, endogamia y cambios en la diversidad genómica.",
        "limits": "Los genomas no muestran por sí solos la ruta exacta que recorrió un individuo, no miden la calidad del hábitat ni fijan prioridades de conservación sin contexto ecológico y social.",
        "closing": "La conectividad no es una línea inmóvil en el mapa: es una relación cambiante que debe medirse de nuevo.",
        "caligoConnection": "Contexto directo para el piloto propuesto sobre Parides ascanius.",
        "sourceNote": "Estudio primario y evaluaciones: Seraphim et al. 2016 [S06]; UICN 2018 [S07]; ICMBio 2021 [S08].",
        "sourceIds": [
          "seraphim-2016",
          "iucn-parides-2018",
          "icmbio-parides-2021"
        ],
        "value": "Puede aportar evidencia para monitorear cambios, siempre que los patrones genómicos se interpreten con contexto de hábitat y demografía."
      },
      {
        "heading": "¿Dónde empiezan, terminan y conectan los movimientos estacionales?",
        "hook": "Un río repentino de mariposas sobre un sendero del bosque es una observación; su origen es una pregunta de investigación.",
        "answer": "El movimiento estacional puede conectar poblaciones, seguir la lluvia o el alimento, o llevar distintas etapas de vida a paisajes diferentes. Un preprint de 2020 describió un gran desplazamiento estacional de Panacea prola en el sureste del Perú y lo presentó como la primera evidencia de una migración de insectos en la Amazonía. Ver el movimiento masivo no revela dónde comenzó, si los mismos individuos regresan ni hasta dónde se extiende. Los genomas de referencia y el muestreo repetido de poblaciones pueden comparar ascendencia entre lugares y temporadas. Los isótopos estables, el clima, las plantas hospederas, las observaciones directas y el seguimiento aportan otras piezas. Como el informe público sigue siendo un preprint, se presenta como una observación publicada fascinante. [S09]",
        "example": "El evento documentado fue un movimiento estacional masivo de P. prola en el sureste del Perú; sus orígenes y conexiones más amplias siguen abiertos. [S09]",
        "evidence": "Muestreo repetido, responsable y autorizado a lo largo de temporadas y regiones amplias; un genoma de referencia; registros ambientales y de plantas hospederas; y evidencia independiente como observaciones, marcaje o isótopos estables.",
        "genomesCan": "Comparar la ascendencia de grupos muestreados, estimar conectividad y probar si las agregaciones estacionales provienen de una o varias poblaciones.",
        "limits": "Los genomas no reconstruyen la trayectoria de vuelo de un individuo, no determinan el disparador ambiental ni definen el alcance completo del movimiento sin otras evidencias.",
        "closing": "El espectáculo está a la vista; la red de poblaciones que lo sostiene todavía debe trazarse.",
        "caligoConnection": "Contexto directo para el piloto propuesto sobre Panacea prola.",
        "sourceNote": "Evidencia pública: preprint de Gallice et al. 2020 [S09].",
        "sourceIds": [
          "gallice-2020"
        ],
        "value": "Puede conectar un fenómeno estacional visible con el sistema de poblaciones que lo produce."
      },
      {
        "heading": "¿Qué hace que un genoma de biodiversidad siga siendo útil dentro de muchos años?",
        "hook": "Una secuencia conserva su valor científico cuando se puede rastrear el organismo, los permisos, los métodos y el reconocimiento que la sostienen.",
        "answer": "Un genoma es más que un archivo de letras de ADN. Para reutilizarlo necesita un organismo documentado, un ejemplar o registro de material que pueda revisarse, información segura de origen, permisos, métodos de laboratorio y cómputo, medidas de calidad, identificadores de repositorio y reconocimiento claro de las contribuciones. Las colecciones históricas muestran por qué importa esa cadena: métodos de captura dirigida han recuperado cientos de loci genéticos de lepidópteros secos y montados, incluidos ejemplares de más de un siglo, y permiten que preguntas actuales miren hacia atrás en el tiempo. Los principios FAIR enfatizan datos localizables y reutilizables; CARE incorpora beneficio colectivo, autoridad, responsabilidad y ética; los marcos de acceso y distribución de beneficios orientan la obtención y el uso del material biológico. Ninguno sustituye acuerdos o leyes específicos de cada proyecto. [S16][S20][S21][S22]",
        "example": "Estudios de museómica han recuperado abundante información genética de mariposas y polillas secas recolectadas a lo largo de más de un siglo, cuando se conservaron la identidad y los registros de curaduría. [S16]",
        "evidence": "Registros rastreables de ejemplares y material; permisos y acuerdos; versiones de métodos; métricas de calidad; identificadores estables; roles de contribución; y decisiones sobre datos sensibles.",
        "genomesCan": "Convertirse en un recurso comparativo duradero cuando la secuencia, los metadatos y la evidencia biológica permanecen conectados.",
        "limits": "La apertura técnica no establece por sí sola autoridad legítima, crédito justo, distribución adecuada de beneficios ni publicación segura de información sensible.",
        "closing": "El valor futuro de un genoma se diseña mucho antes de que alguien lo descargue.",
        "caligoConnection": "Se aplica a todos los pilotos propuestos y a la explicación pública de una genómica responsable.",
        "sourceNote": "Fuentes: Mayer et al. 2021 [S16]; FAIR [S20]; CARE [S21]; Protocolo de Nagoya [S22].",
        "sourceIds": [
          "mayer-2021",
          "fair-2016",
          "care-2020",
          "nagoya"
        ],
        "value": "Determina si un genoma seguirá siendo rastreable, interpretable y reutilizable con responsabilidad después de su primer análisis."
      }
    ],
    "recordVsGenome": {
      "heading": "Distintos registros genéticos responden distintas preguntas",
      "intro": "Los términos siguientes describen evidencias diferentes. Nombrarlos bien evita presentar un código de barras como genoma completo, un ensamblaje fragmentado como si estuviera organizado en cromosomas o un solo individuo como representante de toda una población.",
      "labels": {
        "recordColHeading": "Tipo de evidencia",
        "canShow": "Qué puede mostrar",
        "cannotEstablish": "Qué no puede establecer por sí solo"
      },
      "rows": [
        {
          "record": "Registro de ocurrencia",
          "canShow": "Que un organismo fue reportado en un lugar y momento; su confiabilidad depende de la identificación y la documentación.",
          "cannotEstablish": "Límites de especie, conectividad poblacional o diversidad genética."
        },
        {
          "record": "Código de barras de ADN",
          "canShow": "Una región corta y estandarizada de ADN que puede apoyar la identificación y la comparación con registros de referencia.",
          "cannotEstablish": "Un genoma completo, estructura cromosómica, historia poblacional o función adaptativa."
        },
        {
          "record": "Lecturas crudas de secuencia",
          "canShow": "La salida directa de un secuenciador antes de ensamblar y evaluar por completo los fragmentos.",
          "cannotEstablish": "Un genoma terminado, un conjunto confiable de genes o una interpretación biológica."
        },
        {
          "record": "Ensamblaje fragmentado del genoma",
          "canShow": "Una reconstrucción de gran parte del genoma, por lo general en múltiples fragmentos con vacíos conocidos y desconocidos.",
          "cannotEstablish": "El orden completo de los cromosomas, precisión perfecta o anotación de alta confianza en todas las regiones."
        },
        {
          "record": "Genoma de referencia a escala cromosómica",
          "canShow": "Un ensamblaje en el que la mayor parte de la secuencia está organizada en unidades del tamaño de cromosomas y funciona como mapa sólido para comparar.",
          "cannotEstablish": "Toda la variación de la especie, conectividad actual, adaptación local o causa ecológica."
        },
        {
          "record": "Conjunto de genómica poblacional",
          "canShow": "Variación heredada en muchos individuos muestreados para probar estructura, diversidad, ascendencia y flujo génico.",
          "cannotEstablish": "Una imagen sin sesgos cuando el muestreo es pobre, la ruta recorrida por un individuo o un mecanismo causal sin experimentos y ecología."
        }
      ]
    },
    "provenance": {
      "heading": "Mantener unidos el organismo, la evidencia y los permisos",
      "intro": "Un registro genómico sólido permite que, en el futuro, otra persona siga todo el recorrido del organismo a la secuencia: qué se muestreó, quién lo identificó, cómo se obtuvo y procesó el material, qué puede compartirse y cómo se reconocerán las contribuciones. Los campos siguientes muestran la información necesaria para mantener ese recorrido rastreable.",
      "templateLabel": "Guía de registro",
      "templateNote": "Este conjunto ilustrativo de campos muestra la información necesaria para un registro genómico rastreable: detalles del ejemplar, permisos, métodos de procesamiento y ubicación del repositorio.",
      "fields": [
        "Nombre científico, identificador y evidencia de identificación",
        "Ejemplar preservado o registro rastreable de material",
        "País, fecha y un nivel seguro de detalle de localidad",
        "Permisos de colecta, acceso, transferencia y uso",
        "Persona colectora, identificadora, curadora y custodio del material",
        "Historia del tejido, la extracción y el almacenamiento",
        "Tecnología de secuenciación y versiones de métodos de laboratorio",
        "Evaluaciones de ensamblaje, contaminación y calidad",
        "Evidencia y confianza de la anotación",
        "Repositorios e identificadores estables",
        "Roles de contribución, cita y reconocimiento",
        "Restricciones y decisiones sobre sensibilidad cultural o protección de localidades"
      ]
    },
    "ethics": {
      "heading": "La genómica responsable comienza antes del muestreo",
      "intro": "Las buenas intenciones no sustituyen los permisos, la rendición de cuentas ni los acuerdos claros. Todo proyecto debe poder responder las siguientes preguntas en términos comprensibles para participantes, instituciones y futuros usuarios de los datos.",
      "questions": [
        "¿Quién tiene autoridad para dar acceso a los organismos, el sitio y los conocimientos asociados?",
        "¿Quién identificó, recolectó, curó y proporcionó el ejemplar o material?",
        "¿Qué permisos, acuerdos y restricciones se aplican a la colecta, transferencia, secuenciación y reutilización?",
        "¿Quién dio forma a la pregunta y quién liderará la interpretación y la publicación?",
        "¿Qué información de localidad, cultural o personal debe protegerse?",
        "¿Cómo se manejarán los roles, la cita, el uso de datos y los beneficios?"
      ],
      "externalContext": "Los marcos FAIR, CARE y de acceso y distribución de beneficios ayudan a formular mejores preguntas sobre reutilización, autoridad y responsabilidad. Su aplicación depende del proyecto, la jurisdicción, las instituciones y las comunidades involucradas. [S20][S21][S22]",
      "disclaimer": "Para requisitos jurídicos, éticos o institucionales de un proyecto, deben consultarse las autoridades y los acuerdos pertinentes. El sitio explica principios; no publica una política universal de Caligo ni ofrece asesoría legal."
    },
    "tiers": {
      "heading": "Tres escalas de evidencia genética",
      "intro": "Los códigos de barras de ADN, los conjuntos de lecturas cortas y los ensamblajes de referencia sirven a preguntas distintas y dependen de evidencia diferente."
    }
  },
  "pilots": {
    "metaTitle": "Pilotos propuestos | Caligo",
    "metaDescription": "Cuatro investigaciones propuestas que conectan evolución cromosómica, conectividad de poblaciones amenazadas, agricultura sostenible y movimiento estacional con evidencia genómica documentada.",
    "title": "Pilotos propuestos",
    "opening": "Estas cuatro líneas combinan evidencia publicada con preguntas diseñadas para Caligo. Cada una define los organismos, observaciones, muestras y comparaciones necesarios para convertir un enigma biológico en trabajo comprobable.",
    "whatAPilotCanTest": {
      "heading": "Un piloto pone a prueba toda la cadena de evidencia",
      "body": "La pregunta, los permisos, el registro del ejemplar, los datos de ADN, el análisis, los repositorios y el reconocimiento de contribuciones deben permanecer conectados. Un piloto es valioso cuando revela qué funciona, qué falta y qué debería cambiar antes de considerar una escala mayor."
    },
    "fieldLabels": {
      "hook": "La pregunta en una frase",
      "publishedContext": "Lo que ya muestra la evidencia publicada",
      "proposedQuestion": "Lo que pondría a prueba el piloto propuesto de Caligo",
      "evidenceNeeded": "Evidencia que necesitaría el piloto",
      "genomesCan": "Qué pueden aportar los genomas",
      "limits": "Evidencia necesaria más allá de la genómica",
      "closing": "La pregunta para seguir pensando",
      "sourcesChecked": "Fuentes y alcance"
    }
  },
  "caligo": {
    "metaTitle": "Descubre Caligo | Ojo, ocelo y evidencia",
    "metaDescription": "Una historia de ciencia para todos sobre el género Caligo, los ojos compuestos, los ocelos alares, las escamas y la manera de poner a prueba explicaciones rivales.",
    "meetTheNamesake": {
      "heading": "Caligo: un nombre para el trabajo que viene",
      "body": "Caligo significa niebla en latín. También nombra un género neotropical de mariposas búho, arraigado en la región que esta red estudia. En sus alas, una marca parece un ojo, pero no puede ver. De cerca se resuelve en escamas; más cerca aún, en la información heredada que las formó. Una fauna tan rica no debería seguir tan a oscuras.",
      "sourceNote": "Caligo es el nombre elegido en la encuesta de la iniciativa. La etimología y las imágenes biológicas son una lectura actual del nombre, no una afirmación sobre cómo votaron quienes participaron."
    },
    "compoundEye": {
      "eyebrow": "Mira la estructura correcta",
      "heading": "Ojo compuesto, no ocelo alar",
      "body": "El elemento redondo y brillante de la fotografía es el ojo compuesto de la mariposa, un órgano visual formado por muchas unidades pequeñas llamadas omatidios. Las grandes marcas anilladas de las alas son ocelos: patrones construidos con escamas. En una foto pueden parecer ojos, pero son estructuras distintas y cumplen funciones diferentes. Mantener esa diferencia clara es el primer paso antes de preguntar qué hace cada una."
    },
    "hypotheses": {
      "heading": "¿Qué podría hacer un ocelo alar?",
      "intro": "Un ocelo puede parecernos obvio y aun así admitir varias explicaciones biológicas. Cada hipótesis predice algo distinto y su importancia puede cambiar con el depredador, la luz, la conducta y la especie.",
      "labels": {
        "prediction": "Qué esperaríamos observar",
        "limitation": "Qué no resuelve esta hipótesis"
      },
      "rows": [
        {
          "hypothesis": "Parecerse al ojo de un animal más grande",
          "prediction": "Algunos depredadores deberían vacilar o evitar el ataque cuando el patrón está visible.",
          "limitation": "La evitación debe compararse con efectos más simples de tamaño, contraste y novedad; que a una persona le parezca “un ojo” no basta."
        },
        {
          "hypothesis": "Desviar el ataque hacia el ala",
          "prediction": "Los golpes deberían concentrarse cerca del ocelo y quizá dejar a salvo la cabeza o el cuerpo.",
          "limitation": "Más golpes en el ala no significan automáticamente menos ataques ni mayor supervivencia; el resultado depende del depredador y del daño."
        },
        {
          "hypothesis": "Llamar la atención por su contraste",
          "prediction": "El alto contraste, la posición o el movimiento deberían atraer la atención aunque el depredador no interprete la marca como un ojo.",
          "limitation": "Ser llamativo no indica por sí solo si el efecto beneficia a la mariposa, la perjudica o cambia según el contexto."
        },
        {
          "hypothesis": "Participar en señales entre mariposas",
          "prediction": "Las respuestas deberían variar con el sexo, el cortejo, la territorialidad o el ambiente de luz en que las mariposas se observan.",
          "limitation": "La evidencia debe separar la comunicación entre mariposas de los efectos relacionados con depredadores."
        }
      ],
      "resultNarrow": "En un experimento de campo de 2024 con Caligo martia, los patrones de daño fueron compatibles con ataques desviados hacia las alas, pero los ocelos no redujeron el riesgo total de ataque. El resultado respalda la deflexión en este sistema; no establece una función universal para todas las especies de Caligo. [S18]",
      "sourceNote": "Fuente primaria: Iserhard et al. 2024 [S18]."
    },
    "scales": {
      "heading": "Un patrón alar se construye con miles de escamas",
      "body": "Las escamas de las mariposas son estructuras diminutas que se superponen sobre el ala. Los pigmentos absorben ciertas longitudes de onda; la arquitectura microscópica puede dispersar, reflejar o suprimir la luz. Un estudio de una región oscura del ocelo de Caligo memnon describió nanoestructuras asociadas con su apariencia negra. En otro sistema neotropical, la mariposa de cristal Greta oto logra transparencia con una densidad de escamas mucho menor, escamas estrechas semejantes a cerdas y nanopilares irregulares de cera que reducen el reflejo. Efectos visuales parecidos pueden surgir de arreglos físicos muy distintos: otra razón para conectar los rasgos visibles con microscopía, desarrollo y genómica comparada. [S19][S12]"
    },
    "genomicsCould": {
      "heading": "Del organismo visible a la información heredada",
      "body": "Un genoma añade otra capa de evidencia bajo el organismo visible. Permite comparar genes y regiones reguladoras relacionados con el desarrollo de las escamas, la pigmentación, la visión o la conducta entre especies emparentadas, e investigar cuándo cambiaron esas regiones, pasaron entre linajes o evolucionaron bajo presiones distintas. Los experimentos, la microscopía, la historia natural y la biología sensorial siguen siendo esenciales para comprender la percepción y la conducta."
    },
    "relatedStories": [
      {
        "title": "Un ala que casi desaparece",
        "body": "Greta oto combina escamas escasas y modificadas con nanopilares de cera antirreflectantes. La pregunta es cómo el desarrollo construye esa superficie óptica y cuántas veces evolucionaron soluciones parecidas. [S12]",
        "placement": "Historia de Descubre"
      },
      {
        "title": "Colores más allá de la visión humana",
        "body": "Las hembras de Heliconius charithonia distinguen diferencias de color ultravioleta mediante una opsina UV vinculada al cromosoma sexual W. El hallazgo conecta conducta sensorial, cromosomas sexuales y evolución. [S13]",
        "placement": "Historia de Descubre"
      },
      {
        "title": "Un ejemplar de hace un siglo todavía puede hablar",
        "body": "Con métodos diseñados para ADN fragmentado, lepidópteros secos de museo de más de un siglo pueden rendir cientos de loci genéticos, siempre que su identidad e historia sigan siendo rastreables. [S16]",
        "placement": "Historia de Descubre y vínculo desde procedencia en Ciencia"
      }
    ]
  },
  "projects": {
    "rail": {
      "overview": "Panorama",
      "heliconius": "Heliconius",
      "parides": "Parides ascanius",
      "soybean": "Lepidópteros de la soja",
      "panacea": "Panacea prola"
    },
    "metaTitle": "Proyectos piloto propuestos | Caligo",
    "metaDescription": "Cuatro proyectos piloto propuestos que conectan evidencia publicada con preguntas comprobables de genómica neotropical.",
    "title": "Proyectos piloto propuestos",
    "intro": "Cada piloto propuesto parte de evidencia publicada y de una pregunta que exige ir más lejos. Sigue al organismo, las observaciones y muestras que harían falta, el aporte de la genómica y la evidencia que ofrecen la ecología, la taxonomía o la experimentación.",
    "openToCollaborators": "Inicia una conversación sobre un piloto",
    "goalLabel": "Pregunta de investigación",
    "resourcesLabel": "Puntos de partida publicados y documentados",
    "motives": {
      "heading": "Por qué empezar con pilotos",
      "intro": "La iniciativa identificó razones para comenzar con proyectos piloto enfocados.",
      "items": [
        "Demostrar a los financiadores que la red puede generar genomas en América Latina y analizarlos de forma colaborativa.",
        "Desarrollar flujos de trabajo desde el muestreo hasta el depósito de datos.",
        "Formar a la red regional y estandarizar protocolos.",
        "Respetar los permisos, las leyes nacionales y los requisitos de distribución justa de beneficios.",
        "Establecer estándares de datos y calidad desde temprano.",
        "Construir estimaciones de costo realistas para la región.",
        "Entregar primeros resultados científicos para generar impulso."
      ]
    },
    "pilotProposal": {
      "heading": "El piloto propuesto de Caligo",
      "leadsLabel": "Quienes lideran el piloto",
      "goalLabel": "Qué haría el piloto",
      "resourcesLabel": "Recursos disponibles",
      "openLabel": "Abierto a colaboradores",
      "closedLabel": "No abierto a colaboradores por ahora"
    }
  },
  "about": {
    "metaTitle": "Acerca de | Caligo",
    "metaDescription": "El propósito de Caligo, su postura científica y su lugar en el panorama más amplio de la genómica de biodiversidad.",
    "title": "Acerca de Caligo",
    "body": "Caligo es un esfuerzo liderado desde América Latina y enfocado en genomas de referencia de mariposas y polillas neotropicales. Reúne organismos, ejemplares documentados, taxonomía y genómica comparada para investigar preguntas regionales con evidencia rastreable y reutilizable.",
    "name": {
      "heading": "Por qué Caligo",
      "body": [
        "Caligo significa niebla en latín. También nombra un género neotropical de mariposas búho, arraigado en la región que esta red estudia. El nombre no pertenece a un solo país. El trabajo que viene, tampoco.",
        "En sus alas, una marca parece un ojo, pero no puede ver. De cerca se resuelve en escamas; más cerca aún, en la información heredada que las formó.",
        "Una de las faunas de lepidópteros más ricas del planeta no debería seguir entre las menos secuenciadas."
      ]
    },
    "beingDecided": {
      "heading": "Lo que Caligo busca reunir",
      "questions": [
        "Preguntas construidas por quienes conocen la región, sus organismos y sus colecciones",
        "Genomas de referencia vinculados a ejemplares documentados o registros de material",
        "Taxonomía, historia natural, ecología y muestreo poblacional junto con la genómica",
        "Permisos, procedencia, repositorios y reconocimiento de contribuciones como parte del registro científico"
      ]
    },
    "externalContext": {
      "heading": "Parte de un paisaje científico más amplio",
      "body": "Caligo aprende de iniciativas globales de genómica, repositorios públicos, colecciones, redes taxonómicas y marcos de gobernanza de datos, manteniendo sus afirmaciones públicas dentro del alcance de esta iniciativa.",
      "disclaimer": "Los proyectos externos aportan contexto científico o metodológico. Las alianzas y los compromisos formales se identifican de manera explícita cuando existen."
    },
    "objectives": {
      "heading": "Objetivos estratégicos",
      "intro": "Caligo persigue metas científicas y organizativas complementarias."
    },
    "leadership": {
      "heading": "Liderazgo",
      "intro": "La iniciativa está coordinada por investigadores de instituciones en América Latina y en el extranjero."
    },
    "governance": {
      "heading": "Gobernanza",
      "intro": "Cómo se toman las decisiones y se organiza la red. Los documentos de gobernanza están en preparación; los puntos marcados como borrador pueden cambiar."
    },
    "vision": {
      "heading": "Visión",
      "body": "Un grupo internacional que lidera la exploración genómica de los lepidópteros latinoamericanos generando, curando y usando datos que documentan una de las faunas más ricas del planeta y a la vez menos secuenciadas, mientras construye las personas, alianzas e infraestructura necesarias para sostener el trabajo a largo plazo."
    },
    "mission": {
      "heading": "Misión",
      "body": "Una red colaborativa de investigadores, taxónomos, estudiantes e instituciones en todo el Neotrópico que trabajan juntos para producir recursos genómicos de alta calidad para mariposas y polillas. El trabajo está fundamentado en conocimiento taxonómico, guiado por prioridades de investigación regionales y conectado con la comunidad global de genómica de lepidópteros en igualdad de condiciones."
    }
  },
  "participate": {
    "metaTitle": "Participa | Caligo",
    "metaDescription": "Formas para que investigadores, estudiantes, colecciones, educadores, naturalistas, instituciones y personas interesadas inicien una conversación con Caligo.",
    "title": "Participa",
    "intro": "La buena genómica de biodiversidad comienza con personas que conocen organismos, colecciones, paisajes, métodos y preguntas. Ya sea que trabajes en un laboratorio, un museo, un aula, el campo o una institución, el primer paso útil es una conversación clara sobre lo que sabes y lo que te gustaría investigar.",
    "contact": {
      "heading": "Inicia una conversación",
      "body": "Escribe una breve presentación, explica tu vínculo con las mariposas o polillas neotropicales y cuenta qué pregunta o tipo de aporte te gustaría conversar.",
      "email": "genomica.neotropical@gmail.com",
      "ariaLabel": "Enviar un correo a Caligo a genomica.neotropical@gmail.com"
    },
    "audiences": {
      "heading": "Conversaciones que Caligo recibe con interés",
      "items": [
        "Investigadores y colecciones con experiencia taxonómica, ecológica, de ejemplares o genómica",
        "Estudiantes y personas al inicio de su carrera que quieran aprender, aportar o conectar una pregunta de investigación",
        "Educadores y comunicadores que desarrollen recursos rigurosos y atractivos sobre ciencia neotropical",
        "Naturalistas con observaciones documentadas y conocimiento profundo de organismos o lugares",
        "Instituciones y personas interesadas en apoyar una genómica regional de biodiversidad responsable"
      ]
    },
    "discord": {
      "heading": "Conoce a la comunidad de Caligo",
      "body": "Discord ofrece un espacio informal para preguntas, presentaciones, recursos compartidos y conversación entre países y disciplinas. El correo electrónico sigue siendo la vía para consultas formales o sensibles.",
      "active": {
        "button": "Únete al Discord",
        "ariaLabel": "Unirse a la comunidad de Caligo en Discord; abre un sitio externo",
        "externalNote": "Abre Discord en una pestaña nueva."
      },
      "pending": {
        "button": "Nuevo enlace de invitación próximamente",
        "ariaLabel": "El nuevo enlace de invitación al Discord de Caligo se añadirá próximamente",
        "note": "La opción de comunidad permanece visible mientras se prepara una nueva invitación. Puedes contactar a Caligo por correo desde ahora."
      }
    },
    "beforeSubmitting": {
      "heading": "Comienza de forma segura",
      "body": "No envíes localidades precisas de especies amenazadas o sensibles, registros inéditos de ejemplares, material biológico, archivos de permisos ni datos personales en un primer mensaje. Describe el tema en términos generales para acordar el siguiente paso apropiado y seguro."
    },
    "privacyNote": "Cualquier formulario futuro debe mostrar su aviso de privacidad y uso de datos antes de que una persona envíe información.",
    "membership": {
      "heading": "Membresía",
      "intro": "Dos niveles de membresía definen diferentes roles y responsabilidades en la red."
    },
    "benefits": {
      "heading": "Lo que hacen y reciben los miembros",
      "intro": "Los miembros activos contribuyen a la red y son elegibles para autoría y derechos de voto."
    },
    "languagePolicy": {
      "heading": "Idiomas de trabajo",
      "body": "Las comunicaciones oficiales se hacen en inglés y español. El portugués también se usa en las reuniones, con traducción informal entre quienes entienden ambos."
    }
  },
  "sourceDrawer": {
    "open": "Fuentes y métodos",
    "close": "Cerrar fuentes y métodos",
    "citationLabel": "Evidencia",
    "checkedDate": "Revisado",
    "databaseAccessed": "Base consultada",
    "scopeLabel": "Qué respalda esta fuente",
    "limitsLabel": "Límites y exclusiones",
    "methodNote": "Nota de método",
    "externalContext": "Contexto externo relacionado",
    "preprint": "Preprint; no había pasado por revisión por pares en la fecha de consulta.",
    "sensitiveLocalities": "No se muestran localidades precisas de especies sensibles.",
    "mutableData": "Base de datos o registro institucional cambiante; se indica la fecha de consulta.",
    "noRegionalPercentage": "La cobertura genómica regional se informará con un denominador taxonómico congelado, reglas geográficas explícitas y una consulta fechada y sin duplicados de los ensamblajes."
  },
  "compat": {
    "heading": "Este contenido ahora está en otra sección",
    "body": "La explicación actual forma parte de la página Acerca de. Sigue el enlace para continuar."
  },
  "network": {
    "metaTitle": "Red | Caligo",
    "metaDescription": "La red de investigación de Caligo: instalaciones de secuenciación asociadas, líderes de la iniciativa y actividades próximas en América Latina.",
    "title": "Red de investigación",
    "intro": "Una colaboración liderada desde América Latina, con investigadores, instituciones e instalaciones que trabajan en genomas de referencia para mariposas y polillas neotropicales.",
    "facilities": {
      "heading": "Instalaciones asociadas",
      "intro": "Instalaciones de secuenciación e investigación que participan en la iniciativa."
    },
    "events": {
      "heading": "Eventos",
      "intro": "Actividades de la iniciativa y encuentros planificados."
    },
    "positioning": {
      "heading": "Conexiones y contexto",
      "body": "Caligo participa en EBP Latinoamérica, la iniciativa regional del Earth BioGenome Project, y en Genotropics, una red que trabaja en la diversidad genómica de organismos tropicales. Estas conexiones sitúan a Caligo en un panorama regional más amplio. Las alianzas formales o los programas compartidos se identifican de manera explícita."
    }
  },
  "notFound": {
    "title": "Esta página todavía no ha sido ensamblada",
    "body": "Puede que la dirección haya cambiado o que la página nunca haya existido. Por aquí se vuelve.",
    "homeLink": "Volver al inicio"
  },
  "footer": {
    "tagline": "Ejemplares documentados. Genomas reutilizables. Preguntas neotropicales.",
    "rights": "Caligo",
    "contact": "Contacto",
    "navHeading": "Explora",
    "languageHeading": "Idioma",
    "sources": "Fuentes y métodos",
    "aiDisclosure": "Las ilustraciones conceptuales se identifican y acreditan cuando se utilizan."
  }
};
