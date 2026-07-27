/**
 * Structured records for the Caligo first-release site.
 *
 *   Source  — a citable paper, preprint, database query, standard, or
 *             institutional page. Feeds Claims and Pilots.
 *   Claim   — a bounded, dated, and status-tagged public assertion.
 *             Never render a numeric or scientific claim from raw prose.
 *   Pilot   — one of the four proposed pilot directions. Public rendering
 *             shows Published context / Proposed Caligo question / Sources.
 *   Media   — a locally hosted image or video derivative with its exact
 *             attribution, licence, taxon confidence, and change record.
 *
 * The `publish` flag on every record is the gate for public rendering.
 * `scripts/verify-records.mjs` fails the build if any record with
 * `publish: true` is missing a required field or references an unknown
 * id or a missing local media file.
 *
 * Records are release-safe fallbacks pending stakeholder approval. Nicol
 * Rueda's approvals will flip the appropriate `publish` flags to true and
 * add the `approvalOwner` and `approvalDate` fields.
 */

export type PublicStatus =
  | 'published-evidence'
  | 'database-snapshot'
  | 'proposed-caligo-work';

export type Provenance =
  | 'published-evidence'
  | 'dated-database-result'
  | 'stakeholder-working-material'
  | 'editorial-synthesis'
  | 'implementation-observation';

export interface Bilingual {
  readonly en: string;
  readonly es: string;
}

export interface Source {
  readonly id: string;
  readonly kind: 'paper' | 'preprint' | 'database' | 'standard' | 'institutional';
  readonly citation: string;
  readonly url: string;
  readonly publicationDate?: string;
  readonly checkedDate: string;
  readonly doi?: string;
  readonly archive?: string;
}

export interface Pilot {
  readonly id: string;
  readonly slug: string;
  readonly heading: Bilingual;
  readonly hook: Bilingual;
  readonly taxon: string;
  readonly publishedContext: Bilingual;
  readonly proposedQuestion: Bilingual;
  readonly evidenceNeeded: Bilingual;
  readonly genomesCan: Bilingual;
  readonly limits: Bilingual;
  readonly closing: Bilingual;
  readonly sourceNote: Bilingual;
  readonly sourceIds: readonly string[];
  readonly mediaIds: readonly string[];
  readonly status: PublicStatus;
  readonly approvalOwner?: string;
  readonly approvalDate?: string;
  readonly publish: boolean;
}

export interface Media {
  readonly id: string;
  readonly path: string;
  readonly kind: 'photograph' | 'video' | 'diagram' | 'poster';
  readonly creator: string;
  readonly licence: string;
  readonly licenceUrl: string;
  readonly sourceItemPage: string;
  readonly taxon?: string;
  readonly taxonConfidence?: 'genus' | 'species' | 'unconfirmed';
  readonly location?: string;
  readonly dateTaken?: string;
  readonly changes: readonly string[];
  readonly alt: Bilingual;
  readonly caption: Bilingual;
  readonly credit: Bilingual;
  readonly approvalOwner?: string;
  readonly approvalDate?: string;
  readonly reviewDate?: string;
  readonly publish: boolean;
}

/* ═══════════════════════════════════════════════════════════════════════
   SOURCES
   ═══════════════════════════════════════════════════════════════════════ */

export const SOURCES: readonly Source[] = [
  {
    id: 'rueda-2024',
    kind: 'paper',
    // Title and date corrected against Crossref, 2026-07-27. The record
    // previously read "Chromosome evolution in Heliconius" dated
    // 2024-01-01, neither of which matches the DOI. The paper is CC0.
    citation:
      'Rueda-M et al. 2024. Genomic evidence reveals three W-autosome fusions in Heliconius butterflies. PLOS Genetics 20(7):e1011318.',
    url: 'https://doi.org/10.1371/journal.pgen.1011318',
    publicationDate: '2024-07-18',
    checkedDate: '2026-07-15',
    doi: '10.1371/journal.pgen.1011318',
  },
  {
    id: 'mackay-smith-2026',
    kind: 'paper',
    citation:
      'Mackay-Smith et al. de novo assembly of 5 highly contiguous Heliconius butterfly genomes with long-read sequencing alone. Genome Biology and Evolution, published 11 July 2026.',
    url: 'https://doi.org/10.1093/gbe/evag171',
    publicationDate: '2026-07-11',
    checkedDate: '2026-07-15',
    doi: '10.1093/gbe/evag171',
  },
  {
    id: 'iucn-parides-2018',
    kind: 'institutional',
    citation:
      'IUCN Red List global assessment of Parides ascanius (Vulnerable, 2018).',
    url: 'https://doi.org/10.2305/IUCN.UK.2018-2.RLTS.T16239A122600413.en',
    publicationDate: '2018-01-01',
    checkedDate: '2026-07-15',
    doi: '10.2305/IUCN.UK.2018-2.RLTS.T16239A122600413.en',
  },
  {
    id: 'icmbio-parides-2021',
    kind: 'institutional',
    citation:
      'Official Brazilian national assessment (ICMBio, 2021): Parides ascanius listed as Endangered.',
    url: 'https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/fauna-brasileira/estado-de-conservacao/invertebrados-terrestres/parides-ascanius',
    publicationDate: '2021-01-01',
    checkedDate: '2026-07-17',
  },
  {
    id: 'gallice-2020',
    kind: 'preprint',
    citation:
      'Gallice et al. 2020. A seasonal mass movement of Panacea prola in south-eastern Peru. bioRxiv preprint.',
    url: 'https://doi.org/10.1101/2020.09.01.277665',
    publicationDate: '2020-09-01',
    checkedDate: '2026-07-15',
    doi: '10.1101/2020.09.01.277665',
  },
  {
    id: 'ukri-soybean',
    kind: 'institutional',
    citation:
      'UK Research and Innovation, project UKRI2955, Population genomic monitoring of soybean pests. Independent scientific context for the proposed Caligo pilot project.',
    url: 'https://gtr.ukri.org/projects?ref=UKRI2955',
    checkedDate: '2026-07-16',
  },
  {
    id: 'seraphim-2016',
    kind: 'paper',
    citation:
      'Seraphim et al. Genetic diversity of Parides ascanius (Lepidoptera: Papilionidae: Troidini): implications for the conservation of Brazil’s most iconic endangered invertebrate species. Conservation Genetics 17:533–546 (2016).',
    url: 'https://doi.org/10.1007/s10592-015-0802-5',
    publicationDate: '2016-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1007/s10592-015-0802-5',
  },
  {
    id: 'horikoshi-2021',
    kind: 'paper',
    citation:
      'Horikoshi et al. Resistance status of lepidopteran soybean pests following large-scale use of MON 87701 × MON 89788 soybean in Brazil. Scientific Reports 11:21323 (2021).',
    url: 'https://doi.org/10.1038/s41598-021-00770-0',
    publicationDate: '2021-11-01',
    checkedDate: '2026-07-16',
    doi: '10.1038/s41598-021-00770-0',
  },
  {
    id: 'braga-2024',
    kind: 'paper',
    citation:
      'Braga et al. Characterizing the differential susceptibility and resistance to insecticides in populations of Chrysodeixis includens and Rachiplusia nu (Lepidoptera: Noctuidae) in Brazil. Pest Management Science 80:4853–4862 (2024).',
    url: 'https://doi.org/10.1002/ps.8197',
    publicationDate: '2024-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1002/ps.8197',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   CLAIMS
   ═══════════════════════════════════════════════════════════════════════ */

export const PILOTS: readonly Pilot[] = [
  {
    id: 'pilot-heliconius',
    slug: 'heliconius',
    heading: {
      en: 'When chromosomes split, fuse and reshape a lineage',
      es: 'Cuando los cromosomas se dividen, se fusionan y reordenan un linaje',
    },
    hook: {
      en: 'Most Heliconius carry 21 chromosomes in each haploid set. In one branch of the genus, that familiar number has been dramatically rearranged.',
      es: 'La mayoría de Heliconius tiene 21 cromosomas en cada conjunto haploide. En una rama del género, ese número conocido cambió de manera extraordinaria.',
    },
    taxon: 'Heliconius',
    publishedContext: {
      en: 'Most Heliconius species have 21 haploid chromosomes. Five species in the sapho subclade range from 21 to 60, after repeated fissions in which one ancestral chromosome became two. Three separate fusions between the female-specific W chromosome and autosomes have also been identified. That makes the group a natural experiment in how genome structure affects recombination and sex-chromosome evolution — though the published genomes do not say why the rearrangements spread.',
      es: 'La mayoría de las especies de Heliconius tienen 21 cromosomas haploides. Cinco especies del subclado sapho van de 21 a 60, tras fisiones repetidas en las que un cromosoma ancestral se convirtió en dos. También se han identificado tres fusiones independientes entre el cromosoma W, exclusivo de las hembras, y autosomas. El grupo es así un experimento natural sobre cómo la estructura del genoma afecta la recombinación y la evolución de los cromosomas sexuales, aunque los genomas publicados no dicen por qué se extendieron los reordenamientos.',
    },
    proposedQuestion: {
      en: 'The proposed Caligo pilot project would compare selected chromosome-scale genomes to test where fissions and fusions occurred, how they changed genomic organisation and which evolutionary hypotheses deserve deeper study.',
      es: 'El proyecto piloto propuesto de Caligo compararía genomas seleccionados a escala cromosómica para ubicar fisiones y fusiones, estudiar cómo reorganizaron el genoma y reconocer qué hipótesis evolutivas merecen una investigación más profunda.',
    },
    evidenceNeeded: {
      en: 'Chromosome-scale assemblies from the focal and closely related species; verified specimens; chromosome counts where available; robust phylogenetic comparisons; and trait, recombination or breeding evidence.',
      es: 'Ensamblajes a escala cromosómica de las especies focales y sus parientes cercanos; ejemplares verificados; conteos cromosómicos cuando existan; comparaciones filogenéticas sólidas; y evidencia sobre rasgos, recombinación o cruces.',
    },
    genomesCan: {
      en: 'Locate structural changes, compare gene order and measure how recombination or diversity varies across rearranged regions.',
      es: 'Localizar cambios estructurales, comparar el orden de los genes y medir cómo varían la recombinación o la diversidad en las regiones reordenadas.',
    },
    limits: {
      en: 'The comparisons cannot show that a rearrangement caused adaptation or speciation without experiments, population data and organismal evidence.',
      es: 'Las comparaciones no demuestran que un reordenamiento causó adaptación o especiación sin experimentos, datos poblacionales y evidencia del organismo.',
    },
    closing: {
      en: 'Why did these rearrangements spread, and what did they change for the species that carry them?',
      es: '¿Por qué se extendieron estos reordenamientos y qué cambiaron para las especies que los llevan?',
    },
    sourceNote: {
      en: 'Published context: Rueda-M et al. 2024; Mackay-Smith et al. 2026. The 2026 paper is a published accepted manuscript and may receive typesetting changes while retaining its DOI.',
      es: 'Contexto publicado: Rueda-M et al. 2024; Mackay-Smith et al. 2026. El artículo de 2026 es un manuscrito aceptado ya publicado y puede recibir cambios de edición sin modificar su DOI.',
    },
    sourceIds: ['rueda-2024', 'mackay-smith-2026'],
    mediaIds: [],
    status: 'proposed-caligo-work',
    publish: true,
  },
  {
    id: 'pilot-parides',
    slug: 'parides-ascanius',
    heading: {
      en: 'Can a threatened coastal butterfly stay connected?',
      es: '¿Puede una mariposa costera amenazada seguir conectada?',
    },
    hook: {
      en: 'Parides ascanius lives in a narrow coastal world where wetlands, restinga vegetation and urban pressure meet.',
      es: 'Parides ascanius vive en un mundo costero estrecho donde se encuentran humedales, vegetación de restinga y presión urbana.',
    },
    taxon: 'Parides ascanius',
    publishedContext: {
      en: 'The IUCN classified Parides ascanius as Vulnerable globally in 2018; Brazil’s national assessment classified it as Endangered in 2021. It lives in lowland coastal restinga and wetland habitats. A 2016 genetic study found low population structure and inferred substantial migration between the populations it sampled — a historical baseline rather than evidence that those connections survive today. Habitat loss and drainage can change movement long before populations look different. Precise localities stay out of public communication.',
      es: 'La UICN clasificó a Parides ascanius como Vulnerable a nivel global en 2018; la evaluación nacional de Brasil lo clasificó como En Peligro en 2021. Habita restingas costeras de tierras bajas y humedales. Un estudio genético de 2016 encontró poca estructura poblacional e infirió una migración considerable entre las poblaciones muestreadas: una línea de base histórica, no una prueba de que esas conexiones sigan existiendo. La pérdida de hábitat y el drenaje pueden alterar el movimiento mucho antes de que las poblaciones se vean distintas. Las localidades precisas se mantienen fuera de la comunicación pública.',
    },
    proposedQuestion: {
      en: 'The proposed Caligo pilot project would build a documented reference genome and compare responsibly sampled populations to test whether connectivity and genetic diversity have changed since the earlier baseline.',
      es: 'El proyecto piloto propuesto de Caligo construiría un genoma de referencia vinculado a un ejemplar documentado y compararía poblaciones muestreadas de manera responsable para saber si la conectividad y la diversidad genética cambiaron desde la línea de base anterior.',
    },
    evidenceNeeded: {
      en: 'A documented reference specimen; appropriately permitted samples from a planned, non-public set of populations; habitat and time metadata; and analyses designed to compare current structure with earlier results.',
      es: 'Un ejemplar de referencia documentado; muestras con los permisos adecuados de un conjunto planificado y no público de poblaciones; metadatos de hábitat y tiempo; y análisis preparados para comparar la estructura actual con los resultados previos.',
    },
    genomesCan: {
      en: 'Estimate relatedness, population structure, historical and recent gene flow, inbreeding and the distribution of genetic diversity.',
      es: 'Estimar parentesco, estructura poblacional, flujo génico histórico y reciente, endogamia y distribución de la diversidad genética.',
    },
    limits: {
      en: 'Genomic data cannot measure habitat quality, identify every movement route or set conservation priorities without ecological observations and decisions by the relevant authorities and communities.',
      es: 'Los datos genómicos no miden la calidad del hábitat, no identifican todas las rutas de movimiento ni fijan prioridades de conservación sin observaciones ecológicas y decisiones de las autoridades y comunidades pertinentes.',
    },
    closing: {
      en: 'Do the populations sampled in 2016 still exchange individuals across today’s coast?',
      es: '¿Las poblaciones muestreadas en 2016 todavía intercambian individuos en la costa actual?',
    },
    sourceNote: {
      en: 'Published context: Seraphim et al. 2016; IUCN global assessment 2018; ICMBio national assessment 2021. Sensitive localities remain omitted.',
      es: 'Contexto publicado: Seraphim et al. 2016; evaluación global de la UICN 2018; evaluación nacional de ICMBio 2021. Se omiten las localidades sensibles.',
    },
    sourceIds: ['seraphim-2016', 'iucn-parides-2018', 'icmbio-parides-2021'],
    mediaIds: [],
    status: 'proposed-caligo-work',
    publish: true,
  },
  {
    id: 'pilot-soybean',
    slug: 'soybean-lepidoptera',
    heading: {
      en: 'Following movement and resistance across soybean landscapes',
      es: 'Seguir el movimiento y la resistencia en paisajes sojeros',
    },
    hook: {
      en: 'A moth is not a "pest" everywhere. In agriculture, that word describes a management problem created under particular ecological and economic conditions.',
      es: 'Una polilla no es una «plaga» en todas partes. En agricultura, esa palabra describe un problema de manejo que aparece bajo condiciones ecológicas y económicas concretas.',
    },
    taxon: '',
    publishedContext: {
      en: 'Several Lepidoptera species share soybean landscapes, which turns three practical problems into one: identifying the organism correctly, understanding how populations move, and detecting whether management is selecting for resistance. Work in Brazil shows closely related species being confused in monitoring, and susceptibility to insecticidal proteins shifting in ways only repeated species-specific testing can catch. Genomics can separate the lineages and track inherited variants; the management decisions still rest with agronomy and growers.',
      es: 'Varias especies de lepidópteros comparten los paisajes de soya, lo que junta tres problemas prácticos en uno: identificar bien al organismo, entender cómo se mueven las poblaciones y detectar si el manejo está seleccionando resistencia. El trabajo en Brasil muestra especies cercanas que se confunden en el monitoreo, y cambios de susceptibilidad a proteínas insecticidas que solo se detectan con pruebas repetidas y específicas por especie. La genómica puede separar los linajes y rastrear variantes heredadas; las decisiones de manejo siguen dependiendo de la agronomía y de quienes cultivan.',
    },
    proposedQuestion: {
      en: 'The proposed Caligo pilot project would ask how confirmed soybean-associated species move across changing agricultural mosaics, how resistance-related variants are distributed and which genomic markers are reliable enough for monitoring.',
      es: 'El proyecto piloto propuesto de Caligo preguntaría cómo se desplazan especies confirmadas asociadas con la soja a través de mosaicos agrícolas cambiantes, cómo se distribuyen variantes relacionadas con resistencia y qué marcadores genómicos son suficientemente confiables para el monitoreo.',
    },
    evidenceNeeded: {
      en: 'Confirmed species identifications; documented reference specimens; repeated and geographically designed population sampling; resistance phenotypes or bioassays; crop and management context; and validated marker panels.',
      es: 'Identificaciones de especie confirmadas; ejemplares de referencia documentados; muestreo poblacional repetido y diseñado geográficamente; fenotipos o bioensayos de resistencia; contexto de cultivo y manejo; y paneles de marcadores validados.',
    },
    genomesCan: {
      en: 'Improve identification, reveal population structure and movement, locate candidate resistance-associated variation and support the design of monitoring markers.',
      es: 'Mejorar la identificación, revelar estructura y movimiento poblacional, localizar variación candidata asociada con resistencia y apoyar el diseño de marcadores de monitoreo.',
    },
    limits: {
      en: 'Genomes cannot determine crop damage, prove that a variant causes resistance or choose a management response without field, experimental, agronomic and socioeconomic evidence.',
      es: 'Los genomas no determinan el daño al cultivo, no prueban que una variante cause resistencia ni eligen una respuesta de manejo sin evidencia de campo, experimental, agronómica y socioeconómica.',
    },
    closing: {
      en: 'Which markers are reliable enough that a monitoring result can change a management decision?',
      es: '¿Qué marcadores son lo bastante confiables para que un resultado de monitoreo cambie una decisión de manejo?',
    },
    sourceNote: {
      en: 'Scientific context: Horikoshi et al. 2021; Braga et al. 2024. UKRI2955 is an independent project; its taxa, sites, samples, partners, years and outputs remain specific to that work.',
      es: 'Contexto científico: Horikoshi et al. 2021; Braga et al. 2024. UKRI2955 es un proyecto independiente; sus taxones, sitios, muestras, socios, años y resultados pertenecen a ese trabajo.',
    },
    sourceIds: ['horikoshi-2021', 'braga-2024', 'ukri-soybean'],
    mediaIds: [],
    status: 'proposed-caligo-work',
    publish: true,
  },
  {
    id: 'pilot-panacea',
    slug: 'panacea-prola',
    heading: {
      en: 'Where does a seasonal wave of Panacea prola begin and end?',
      es: '¿Dónde empieza y termina una oleada estacional de Panacea prola?',
    },
    hook: {
      en: 'At certain moments, Panacea prola can turn a forest route into a moving ribbon of dark wings and sudden red flashes.',
      es: 'En ciertos momentos, Panacea prola puede convertir una ruta del bosque en una cinta móvil de alas oscuras y destellos rojos.',
    },
    taxon: 'Panacea prola',
    publishedContext: {
      en: 'A 2020 preprint reported a seasonal mass movement of Panacea prola in south-eastern Peru, and presented it as the first evidence of an Amazonian insect migration. It leaves the map unfinished: where the butterflies came from, whether one population or several contributed, and whether the pattern repeats between years. A reference genome plus samples across seasons and sites could compare ancestry and connectivity. The report has not been peer reviewed.',
      es: 'Un preprint de 2020 reportó un movimiento masivo estacional de Panacea prola en el sureste de Perú y lo presentó como la primera evidencia de una migración de insectos amazónica. El mapa queda incompleto: de dónde venían las mariposas, si contribuyó una población o varias, y si el patrón se repite entre años. Un genoma de referencia junto con muestras de distintas estaciones y sitios permitiría comparar ancestría y conectividad. El reporte no ha pasado por revisión por pares.',
    },
    proposedQuestion: {
      en: 'The proposed Caligo pilot project would combine a documented reference genome with repeated population sampling to test the origins, connections and seasonal consistency of the observed movement.',
      es: 'El proyecto piloto propuesto de Caligo combinaría un genoma de referencia vinculado a un ejemplar documentado con muestreo poblacional repetido para estudiar el origen, las conexiones y la constancia estacional del movimiento observado.',
    },
    evidenceNeeded: {
      en: 'A verified reference specimen; repeated, responsibly permitted sampling across seasons and broad regions; environmental and host-plant context; and independent movement evidence such as observations, tracking or stable isotopes.',
      es: 'Un ejemplar de referencia verificado; muestreo repetido, responsable y autorizado a lo largo de temporadas y regiones amplias; contexto ambiental y de plantas hospederas; y evidencia independiente como observaciones, seguimiento o isótopos estables.',
    },
    genomesCan: {
      en: 'Compare ancestry among sampled groups, estimate connectivity and test whether moving aggregations draw from one or several populations.',
      es: 'Comparar ascendencia entre grupos muestreados, estimar conectividad y probar si las agregaciones en movimiento reúnen una o varias poblaciones.',
    },
    limits: {
      en: 'Genomes cannot reconstruct individual flight paths, identify the environmental trigger or define the full geographic range of the phenomenon by themselves.',
      es: 'Los genomas no reconstruyen trayectorias individuales de vuelo, no identifican el disparador ambiental ni definen por sí solos el alcance geográfico completo del fenómeno.',
    },
    closing: {
      en: 'Did the butterflies in that wave come from one population or from several?',
      es: '¿Las mariposas de esa oleada vinieron de una sola población o de varias?',
    },
    sourceNote: {
      en: 'Public evidence: Gallice et al. 2020, a preprint checked on 16 July 2026. No unpublished isotope result or wider route is stated.',
      es: 'Evidencia pública: Gallice et al. 2020, preprint revisado el 16 de julio de 2026. No se mencionan resultados isotópicos no publicados ni rutas más amplias.',
    },
    sourceIds: ['gallice-2020'],
    mediaIds: [],
    status: 'proposed-caligo-work',
    publish: true,
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   MEDIA
   ═══════════════════════════════════════════════════════════════════════ */

export const MEDIA: readonly Media[] = [
  {
    id: 'hero-caligo-tambopata',
    path: 'media/hero/caligo-tambopata-1600w.jpg',
    kind: 'photograph',
    creator: 'Wikimedia Commons user “Polygonia c-album”',
    licence: 'CC BY-SA 4.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceItemPage:
      'https://commons.wikimedia.org/wiki/File:Owl_Butterfly_(Caligo)_at_night_in_Tambopata_National_Reserve,_Peru.jpg',
    taxon: 'Caligo sp.',
    taxonConfidence: 'genus',
    location: 'near Tambopata Research Centre, Madre de Dios, Peru',
    dateTaken: '2023-07-28',
    changes: [
      'colour space normalised to sRGB',
      'stripped EXIF metadata',
      'resized proportionally to multiple widths',
      'mobile portrait crop 2000×2142+400+0 to keep the head and compound eye fully visible',
      'JPEG re-encoded (quality 82; progressive; 4:2:0)',
    ],
    alt: {
      en: 'Close-up of a Caligo owl butterfly photographed at night near Tambopata Research Centre, Peru. The large round compound eye sits at the centre of the frame; wing scale patterns fill the left side.',
      es: 'Primer plano de una mariposa búho del género Caligo, fotografiada de noche cerca del Centro de Investigación de Tambopata, Perú. El gran ojo compuesto redondo ocupa el centro; los patrones de escamas del ala llenan la parte izquierda.',
    },
    caption: {
      en: 'Caligo sp., near Tambopata Research Centre, Peru. The bright round feature is the butterfly’s compound eye.',
      es: 'Caligo sp., cerca del Centro de Investigación de Tambopata, Perú. El elemento redondo brillante es el ojo compuesto de la mariposa.',
    },
    credit: {
      en: 'Photograph: Wikimedia Commons user “Polygonia c-album” / CC BY-SA 4.0. Cropped and resized.',
      es: 'Fotografía: usuario de Wikimedia Commons «Polygonia c-album» / CC BY-SA 4.0. Recortada y redimensionada.',
    },
    publish: true,
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   ACCESSORS (indexed lookups)
   ═══════════════════════════════════════════════════════════════════════ */

const byId = <T extends { readonly id: string }>(list: readonly T[]) =>
  new Map(list.map((r) => [r.id, r]));

const SOURCE_MAP = byId(SOURCES);
const MEDIA_MAP = byId(MEDIA);

export const getSource = (id: string): Source | undefined => SOURCE_MAP.get(id);
export const getMedia = (id: string): Media | undefined => MEDIA_MAP.get(id);

export const PUBLIC_STATUS_LABELS: Readonly<Record<PublicStatus, Bilingual>> = {
  'published-evidence': { en: 'Published evidence', es: 'Evidencia publicada' },
  'database-snapshot': { en: 'Database snapshot', es: 'Consulta de base de datos' },
  'proposed-caligo-work': { en: 'Proposed pilot project', es: 'Proyecto piloto propuesto' },
};

/* ═══════════════════════════════════════════════════════════════════════
   MEDIA CANDIDATE MODULES  (MediaCandidateViewer.astro data source)
   ═══════════════════════════════════════════════════════════════════════ */

export type CandidateKind = 'documentary' | 'ai-concept' | 'code-native';

export type CandidateFit = 'cover' | 'contain';

export interface MediaCandidate {
  readonly kind: CandidateKind;
  readonly path: string;
  readonly width: number;
  readonly height: number;
  readonly alt: Bilingual;
  readonly caption: Bilingual;
  readonly credit: Bilingual;
  readonly licence?: string;
  readonly licenceUrl?: string;
  readonly sourceItemPage?: string;
  readonly creator?: string;
  readonly changes?: readonly string[];
  readonly dateTaken?: string;
  readonly location?: string;
  readonly conceptCaveat?: Bilingual;
  readonly taxon?: string;
  readonly taxonConfidence?: 'genus' | 'species' | 'unconfirmed';
  readonly fit?: CandidateFit;
  readonly objectPosition?: string;
  readonly background?: string;
  readonly aspectRatio?: string;
}

export interface MediaModule {
  readonly id: string;
  readonly candidates: readonly MediaCandidate[];
  readonly initialIndex?: number;
  readonly publish: boolean;
  readonly fit?: CandidateFit;
  readonly aspectRatio?: string;
  readonly background?: string;
}

const CC_BY_SA_4 = { name: 'CC BY-SA 4.0', url: 'https://creativecommons.org/licenses/by-sa/4.0/' };
const CC_BY_4 = { name: 'CC BY 4.0', url: 'https://creativecommons.org/licenses/by/4.0/' };
const CC_BY_3 = { name: 'CC BY 3.0', url: 'https://creativecommons.org/licenses/by/3.0/' };

const PD_US = { name: 'Public domain (US Government work)', url: 'https://www.usa.gov/government-works' };

const AI_CAVEAT: Bilingual = {
  en: 'AI concept illustration.',
  es: 'Ilustración conceptual generada con IA.',
};

export const MODULES: readonly MediaModule[] = [
  {
    id: 'pilot-heliconius',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/a3-heliconius-erato.jpg',
        width: 1024,
        height: 768,
        creator: 'Philipp Weigell (Wikimedia: Morray)',
        licence: CC_BY_3.name,
        licenceUrl: CC_BY_3.url,
        sourceItemPage: 'https://commons.wikimedia.org/wiki/File:Heliconius.erato.JPG',
        taxon: 'Heliconius erato',
        taxonConfidence: 'species',
        changes: ['downloaded from Wikimedia Commons; no re-encode or crop applied locally'],
        alt: {
          en: 'A Heliconius erato butterfly with black wings crossed by red and yellow bands, resting with wings partly open.',
          es: 'Una mariposa Heliconius erato con alas negras cruzadas por bandas rojas y amarillas, posada con las alas parcialmente abiertas.',
        },
        caption: {
          en: 'Heliconius erato, a longwing butterfly from the Neotropics.',
          es: 'Heliconius erato, una mariposa longwing del Neotrópico.',
        },
        credit: {
          en: 'Photograph: Philipp Weigell / Wikimedia Commons.',
          es: 'Fotografía: Philipp Weigell / Wikimedia Commons.',
        },
      },
    ],
  },
  {
    id: 'pilot-parides',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/parides-ascanius-field-lucas-lopes.jpg',
        width: 2048,
        height: 1140,
        creator: 'Lucas Lopes',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://www.inaturalist.org/observations/259283729',
        taxon: 'Parides ascanius',
        taxonConfidence: 'species',
        dateTaken: '2025-01-19',
        location: 'Brazil (precise locality omitted)',
        changes: [
          'selected from GBIF occurrence 5063288543: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; metadata stripped and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'A living Parides ascanius with black wings and vivid pink-red markings, resting side-on on a broad green leaf.',
          es: 'Un Parides ascanius vivo, de alas negras con marcas rosadas y rojas intensas, posado de lado sobre una hoja verde ancha.',
        },
        caption: {
          en: 'A living Parides ascanius resting on vegetation during a field observation in Brazil. Its precise locality is omitted because this threatened species requires sensitive-location handling.',
          es: 'Un Parides ascanius vivo posado sobre vegetación durante una observación de campo en Brasil. Se omite la localidad precisa porque esta especie amenazada requiere un manejo sensible de la ubicación.',
        },
        credit: {
          en: 'Photograph: Lucas Lopes / iNaturalist, CC BY 4.0. Field-observation record indexed by GBIF.',
          es: 'Fotografía: Lucas Lopes / iNaturalist, CC BY 4.0. Registro de observación de campo indexado por GBIF.',
        },
      },
    ],
  },
  {
    id: 'pilot-soybean',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/soybean-field-novo-barreiro.webp',
        width: 1600,
        height: 1073,
        creator: 'Lucas Friederich',
        licence: CC_BY_SA_4.name,
        licenceUrl: CC_BY_SA_4.url,
        sourceItemPage: 'https://commons.wikimedia.org/wiki/File:Planta%C3%A7%C3%A3o_de_Soja_em_Novo_Barreiro.jpg',
        dateTaken: '2018-12-18',
        location: 'Novo Barreiro, Rio Grande do Sul, Brazil',
        changes: ['downloaded from Wikimedia Commons; resized to 1600 × 1073, converted to WebP and metadata stripped'],
        alt: {
          en: 'Rows of green soybean plants fill a field bordered by trees in Novo Barreiro, southern Brazil.',
          es: 'Hileras de plantas verdes de soja llenan un campo rodeado de árboles en Novo Barreiro, al sur de Brasil.',
        },
        caption: {
          en: 'A soybean field in Novo Barreiro, Rio Grande do Sul, Brazil. The proposed pilot project follows lepidopteran populations across Brazilian soybean landscapes.',
          es: 'Un campo de soja en Novo Barreiro, Rio Grande do Sul, Brasil. El proyecto piloto propuesto sigue poblaciones de lepidópteros en paisajes sojeros de Brasil.',
        },
        credit: {
          en: 'Photograph: Lucas Friederich / Wikimedia Commons.',
          es: 'Fotografía: Lucas Friederich / Wikimedia Commons.',
        },
      },
    ],
  },
  {
    id: 'pilot-panacea',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/panacea-prola-field-laura-gaudette.jpg',
        width: 2048,
        height: 2048,
        creator: 'Laura Gaudette',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://www.inaturalist.org/observations/289632513',
        taxon: 'Panacea prola',
        taxonConfidence: 'species',
        dateTaken: '2025-06-13',
        location: 'Brazil',
        changes: [
          'selected from GBIF occurrence 5199225308: HUMAN_OBSERVATION, occurrenceStatus PRESENT',
          'downloaded from iNaturalist Open Data; metadata stripped and JPEG re-encoded at quality 88; no crop applied',
        ],
        alt: {
          en: 'A living Panacea prola resting on a dew-covered green leaf, showing black-and-white forewings and vivid red-orange hindwings.',
          es: 'Un Panacea prola vivo posado sobre una hoja verde cubierta de rocío, con alas anteriores negras y blancas y alas posteriores de un rojo anaranjado intenso.',
        },
        caption: {
          en: 'A living Panacea prola resting on vegetation during a field observation in Brazil.',
          es: 'Un Panacea prola vivo posado sobre vegetación durante una observación de campo en Brasil.',
        },
        credit: {
          en: 'Photograph: Laura Gaudette / iNaturalist, CC BY 4.0. Field-observation record indexed by GBIF.',
          es: 'Fotografía: Laura Gaudette / iNaturalist, CC BY 4.0. Registro de observación de campo indexado por GBIF.',
        },
      },
    ],
  },
  {
    id: 'journey-4-sequence',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/journey/journey-04-nhgri-pipette.webp',
        width: 1600,
        height: 1043,
        creator: 'Maggie Bartlett / National Human Genome Research Institute',
        licence: PD_US.name,
        licenceUrl: PD_US.url,
        sourceItemPage: 'https://commons.wikimedia.org/wiki/File:NHGRI_researcher_uses_a_pipette_to_remove_DNA_from_a_micro_test_tube.jpg',
        changes: ['downloaded from Wikimedia Commons; no re-encode or crop applied locally'],
        alt: {
          en: 'A gloved researcher uses a pipette to remove DNA from a micro test tube in a genomics laboratory.',
          es: 'Una investigadora con guantes usa una pipeta para tomar ADN de un microtubo en un laboratorio de genómica.',
        },
        caption: {
          en: 'Extracting DNA in the laboratory. What you do next with it — a short barcode, reads from many individuals, or a full reference genome — decides which questions the result can answer.',
          es: 'Extracción de ADN en el laboratorio. Lo que se haga después con él —un código de barras corto, lecturas de muchos individuos o un genoma de referencia completo— decide qué preguntas puede responder el resultado.',
        },
        credit: {
          en: 'Photograph: Maggie Bartlett / National Human Genome Research Institute (NHGRI). Public domain (US Government work).',
          es: 'Fotografía: Maggie Bartlett / National Human Genome Research Institute (NHGRI). Dominio público (obra del gobierno de EE.UU.).',
        },
      },
    ],
  },
  {
    id: 'journey-2-provenance',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/documentary/a7-specimen-labels.jpg',
        width: 1024,
        height: 768,
        creator: 'Kristy Hoath / Museums Victoria Collections',
        licence: CC_BY_4.name,
        licenceUrl: CC_BY_4.url,
        sourceItemPage: 'https://commons.wikimedia.org/wiki/File:Trapezites_sciron_eremicola_labels.jpg',
        taxon: 'Trapezites sciron eremicola (Australian skipper)',
        taxonConfidence: 'species',
        changes: ['downloaded from Wikimedia Commons; no re-encode or crop applied locally'],
        alt: {
          en: 'A close-up of specimen labels stacked in canonical order beneath a pinned butterfly, showing collector, locality, date, and determinavit lines.',
          es: 'Primer plano de etiquetas de espécimen apiladas en orden canónico bajo una mariposa alfilerada, mostrando líneas de colector, localidad, fecha y determinavit.',
        },
        caption: {
          en: 'Voucher labels preserve collector, locality, date and identification details in a standard order. This is the documentary record a reusable genomic reference needs.',
          es: 'Las etiquetas de voucher conservan los datos de colector, localidad, fecha e identificación en un orden estándar. Este es el registro documental que necesita una referencia genómica reutilizable.',
        },
        credit: {
          en: 'Photograph: Kristy Hoath / Museums Victoria Collections / Wikimedia Commons.',
          es: 'Fotografía: Kristy Hoath / Museums Victoria Collections / Wikimedia Commons.',
        },
      },
    ],
  },
  {
    id: 'namesake-compound-eye',
    publish: true,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/hero/caligo-tambopata-1200w.jpg',
        width: 1200,
        height: 677,
        creator: 'Wikimedia Commons user “Polygonia c-album”',
        licence: CC_BY_SA_4.name,
        licenceUrl: CC_BY_SA_4.url,
        sourceItemPage:
          'https://commons.wikimedia.org/wiki/File:Owl_Butterfly_(Caligo)_at_night_in_Tambopata_National_Reserve,_Peru.jpg',
        taxon: 'Caligo sp.',
        taxonConfidence: 'genus',
        location: 'near Tambopata Research Centre, Madre de Dios, Peru',
        dateTaken: '2023-07-28',
        changes: [
          'colour space normalised to sRGB',
          'stripped EXIF metadata',
          'resized proportionally to multiple widths',
          'JPEG re-encoded (quality 82; progressive; 4:2:0)',
        ],
        alt: {
          en: 'Close-up of a Caligo owl butterfly photographed at night. The large round compound eye sits at the centre of the frame; wing scale patterns fill the left side.',
          es: 'Primer plano de una mariposa búho del género Caligo, fotografiada de noche. El gran ojo compuesto redondo ocupa el centro; los patrones de escamas del ala llenan la parte izquierda.',
        },
        caption: {
          en: 'Caligo sp., near Tambopata Research Centre, Peru. The bright round feature is the butterfly’s compound eye.',
          es: 'Caligo sp., cerca del Centro de Investigación de Tambopata, Perú. El elemento redondo brillante es el ojo compuesto de la mariposa.',
        },
        credit: {
          en: 'Photograph: Wikimedia Commons user “Polygonia c-album”. Cropped and resized.',
          es: 'Fotografía: usuario de Wikimedia Commons «Polygonia c-album». Recortada y redimensionada.',
        },
      },
    ],
  },
];

const MODULE_MAP = new Map(MODULES.map((m) => [m.id, m]));

export const getMediaModule = (id: string): MediaModule | undefined => MODULE_MAP.get(id);
