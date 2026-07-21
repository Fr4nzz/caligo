/**
 * consumers should import from './initiative'; this module remains the raw store.
 * Footer.astro and JoinCTA.astro import LINKS directly — do not rename exports here.
 */
import type { Locale } from '../i18n/config';

export type Bilingual = Record<Locale, string>;

/** Pick a localized string from a bilingual field. */
export function pick(field: Bilingual, locale: Locale): string {
  return field[locale];
}

/* ---------- Strategic objectives (Network page) ---------- */
export const OBJECTIVES: Bilingual[] = [
  {
    en: 'Generate three complementary tiers of genomic data: DNA barcodes for identification and population work; short-read data at species and population levels; and reference-quality assemblies, beginning with representation across Neotropical Lepidoptera families and subfamilies.',
    es: 'Generar tres niveles complementarios de datos genómicos: códigos de barras de ADN para identificación y trabajo poblacional; datos de lecturas cortas a nivel de especie y de población; y ensamblajes de calidad de referencia, comenzando por la representación de las familias y subfamilias de lepidópteros neotropicales.',
  },
  {
    en: 'Balance phylogenetic breadth with research priorities defined in Latin America, including rare, endemic, and taxonomically difficult lineages.',
    es: 'Equilibrar la amplitud filogenética con las prioridades de investigación definidas en América Latina, incluyendo linajes raros, endémicos y taxonómicamente difíciles.',
  },
  {
    en: 'Anchor every project in taxonomy: each genome tied to a vouchered, identified specimen and to accountable specialist expertise.',
    es: 'Anclar cada proyecto en la taxonomía: cada genoma ligado a un espécimen identificado y con voucher, y a experiencia especializada responsable.',
  },
  {
    en: 'Build regional sequencing partnerships, sample-banking infrastructure, and bioinformatics capacity so that sequencing and analysis happen in Latin America or with researchers from the region.',
    es: 'Construir alianzas regionales de secuenciación, infraestructura de bancos de muestras y capacidad bioinformática, para que la secuenciación y el análisis ocurran en América Latina o con investigadores de la región.',
  },
  {
    en: 'Train early-career researchers through workshops, exchanges, joint supervision, and shared publications.',
    es: 'Formar a investigadores en etapas tempranas mediante talleres, intercambios, cosupervisión y publicaciones compartidas.',
  },
  {
    en: 'Make data and methods open by default while governing authorship, embargoes, credit, and benefit-sharing transparently and fairly.',
    es: 'Hacer los datos y métodos abiertos por defecto, gobernando la autoría, los embargos, el crédito y el reparto de beneficios de forma transparente y justa.',
  },
  {
    en: 'Coordinate national, regional, and international funding as a single initiative.',
    es: 'Coordinar la financiación nacional, regional e internacional como una sola iniciativa.',
  },
];

/* ---------- Guiding principles (Network page) ---------- */
export const PRINCIPLES: { title: Bilingual; body: Bilingual }[] = [
  {
    title: { en: 'Latin American leadership', es: 'Liderazgo latinoamericano' },
    body: {
      en: 'Regional researchers are co-designers and co-leaders, not only sample providers.',
      es: 'Quienes investigan en la región son co-diseñadores y co-líderes, no solo proveedores de muestras.',
    },
  },
  {
    title: { en: 'Taxonomy first', es: 'La taxonomía primero' },
    body: {
      en: 'Sequencing follows identification, and genomics gives back to systematics.',
      es: 'La secuenciación sigue a la identificación, y la genómica retribuye a la sistemática.',
    },
  },
  {
    title: { en: 'Inclusive and democratic', es: 'Inclusiva y democrática' },
    body: {
      en: 'Decisions span countries, languages, institution types, and career stages.',
      es: 'Las decisiones abarcan países, idiomas, tipos de institución y etapas de carrera.',
    },
  },
  {
    title: { en: 'Open by default, fair by design', es: 'Abierta por defecto, justa por diseño' },
    body: {
      en: 'Data are shared openly and contributions credited transparently.',
      es: 'Los datos se comparten de forma abierta y las contribuciones se acreditan con transparencia.',
    },
  },
  {
    title: { en: 'Patient and pragmatic', es: 'Con paciencia y sentido práctico' },
    body: {
      en: 'Begin with available capacity — protocols, tissue banking, training, a white paper — and scale with funding and partnerships.',
      es: 'Comenzar con la capacidad disponible —protocolos, bancos de tejidos, formación, un documento marco— y crecer con financiación y alianzas.',
    },
  },
  {
    title: {
      en: 'Respect permits, national laws and fair benefit sharing',
      es: 'Respetar los permisos, las leyes nacionales y la distribución justa de beneficios',
    },
    body: {
      en: 'Address Access and Benefit-Sharing, Digital Sequence Information, Indigenous Peoples’ rights, and requirements beyond the legal minimum.',
      es: 'Atender el Acceso y Reparto de Beneficios, la Información Digital de Secuencias, los derechos de los pueblos indígenas y requisitos que van más allá del mínimo legal.',
    },
  },
  {
    title: { en: 'Sampling in social context', es: 'Muestreo en contexto social' },
    body: {
      en: 'Include and benefit local and Indigenous communities, and recognise informal naturalists and traditional ecological knowledge.',
      es: 'Incluir y beneficiar a las comunidades locales e indígenas, y reconocer a los naturalistas informales y el conocimiento ecológico tradicional.',
    },
  },
  {
    title: { en: 'Cultural implications', es: 'Implicaciones culturales' },
    body: {
      en: 'Make room for artists and non-biologists to interpret and contextualise biodiversity genomics.',
      es: 'Dar espacio a artistas y a personas fuera de la biología para interpretar y contextualizar la genómica de la biodiversidad.',
    },
  },
];

/* ---------- Three data tiers (Science page) ---------- */
export const TIERS: {
  n: string;
  title: Bilingual;
  body: Bilingual;
  platforms: Bilingual;
}[] = [
  {
    n: '01',
    title: { en: 'DNA barcoding and amplicons', es: 'Códigos de barras de ADN y amplicones' },
    body: {
      en: 'Small DNA fragments such as COI and other markers. Relatively low cost, and useful for taxonomy, phylogenetics, identification, and metabarcoding.',
      es: 'Fragmentos pequeños de ADN como el COI y otros marcadores. De costo relativamente bajo, útiles para taxonomía, filogenética, identificación y metabarcoding.',
    },
    platforms: {
      en: 'Commonly produced with Sanger or Oxford Nanopore sequencing.',
      es: 'Se producen habitualmente con secuenciación Sanger u Oxford Nanopore.',
    },
  },
  {
    n: '02',
    title: { en: 'Short-read sequencing', es: 'Secuenciación de lecturas cortas' },
    body: {
      en: 'Whole-genome resequencing, RAD-tag, GBS, RNA-seq, and related approaches. Supports population genomics, classification, and phylogenomics, ideally mapped to a reference genome.',
      es: 'Resecuenciación de genomas completos, RAD-tag, GBS, RNA-seq y enfoques afines. Sustenta la genómica de poblaciones, la clasificación y la filogenómica, idealmente mapeada a un genoma de referencia.',
    },
    platforms: {
      en: 'Usually Illumina or comparable platforms.',
      es: 'Habitualmente en plataformas Illumina o comparables.',
    },
  },
  {
    n: '03',
    title: { en: 'Reference assemblies', es: 'Ensamblajes de referencia' },
    body: {
      en: 'Long reads, often combined with Hi-C, to build chromosome-level genomes and study structural variation, gene-family expansion, and transposable elements.',
      es: 'Lecturas largas, a menudo combinadas con Hi-C, para construir genomas a nivel cromosómico y estudiar la variación estructural, la expansión de familias génicas y los elementos transponibles.',
    },
    platforms: {
      en: 'Platforms include Oxford Nanopore and PacBio.',
      es: 'Las plataformas incluyen Oxford Nanopore y PacBio.',
    },
  },
];

/* ---------- Pilot projects (Projects page) ---------- */
export type Project = {
  id: string;
  species: string; // italicised scientific name(s), rendered with <em>
  title: Bilingual;
  leads: string; // proper names kept as-is
  leadsNote?: Bilingual;
  goal: Bilingual;
  resources?: Bilingual;
  openToCollaborators: boolean;
  heliconiusQuestions?: Bilingual[];
  soyObjectives?: Bilingual[];
};

export const PROJECTS: Project[] = [
  {
    id: 'heliconius',
    species: 'Heliconius',
    title: {
      en: 'Chromosomal rearrangements in Heliconius: drivers and consequences',
      es: 'Reordenamientos cromosómicos en Heliconius: causas y consecuencias',
    },
    leads: 'Nicol Rueda, Joana Meier',
    leadsNote: {
      en: 'The presentation additionally names Caroline Bacquet; this difference between sources needs confirmation.',
      es: 'La presentación menciona además a Caroline Bacquet; esta diferencia entre fuentes necesita confirmación.',
    },
    goal: {
      en: 'Generate chromosome-level genomes across Heliconius. Most species retain 21 chromosomes while some reach as many as 60, giving a system to study why rearrangements occur and how they affect adaptation, speciation, gene loss, and sex-chromosome evolution.',
      es: 'Generar genomas a nivel cromosómico en Heliconius. La mayoría de las especies conserva 21 cromosomas, mientras algunas llegan a 60, lo que ofrece un sistema para estudiar por qué ocurren los reordenamientos y cómo afectan a la adaptación, la especiación, la pérdida de genes y la evolución de los cromosomas sexuales.',
    },
    resources: {
      en: 'Contributors already identified with genomic data, samples, and expertise in analysis, ecology, and behaviour.',
      es: 'Ya se han identificado colaboradores con datos genómicos, muestras y experiencia en análisis, ecología y comportamiento.',
    },
    openToCollaborators: true,
    heliconiusQuestions: [
      {
        en: 'What are the predictors and drivers of chromosomal rearrangements in Heliconius?',
        es: '¿Cuáles son los predictores y factores que impulsan los reordenamientos cromosómicos en Heliconius?',
      },
      {
        en: 'Why do some lineages undergo frequent rearrangements while others do not?',
        es: '¿Por qué algunos linajes sufren reordenamientos frecuentes y otros no?',
      },
      {
        en: 'What are the functional consequences of rearrangements for gene order, recombination and inheritance?',
        es: '¿Cuáles son las consecuencias funcionales de los reordenamientos para el orden génico, la recombinación y la herencia?',
      },
      {
        en: 'What is the origin and evolutionary history of the W sex chromosome in this group?',
        es: '¿Cuál es el origen y la historia evolutiva del cromosoma sexual W en este grupo?',
      },
      {
        en: 'What are the dynamics and consequences of W–autosome fusions?',
        es: '¿Cuáles son la dinámica y las consecuencias de las fusiones entre el W y los autosomas?',
      },
      {
        en: 'Is the W chromosome degenerating, and at what rate?',
        es: '¿Está degenerando el cromosoma W y a qué ritmo?',
      },
      {
        en: 'Which genes remain on the W chromosome, and what roles do they serve?',
        es: '¿Qué genes permanecen en el W y qué funciones cumplen?',
      },
      {
        en: 'What role do chromosomal rearrangements play in adaptation and speciation?',
        es: '¿Qué papel desempeñan los reordenamientos cromosómicos en la adaptación y la especiación?',
      },
    ],
  },
  {
    id: 'parides',
    species: 'Parides ascanius',
    title: {
      en: 'Genome and population diversity of the endangered Parides ascanius',
      es: 'Genoma y diversidad poblacional de la especie amenazada Parides ascanius',
    },
    leads: 'Karina Brandão, André Freitas, Gilberto Almeida',
    goal: {
      en: 'Assemble a reference genome in Brazil using Nanopore sequencing, and assess genetic diversity in surviving populations of this coastal Brazilian endemic to support its conservation. The species depends on Aristolochia trilobata and is threatened by urbanisation and habitat loss.',
      es: 'Ensamblar un genoma de referencia en Brasil con secuenciación Nanopore y evaluar la diversidad genética de las poblaciones sobrevivientes de este endemismo costero brasileño para apoyar su conservación. La especie depende de Aristolochia trilobata y está amenazada por la urbanización y la pérdida de hábitat.',
    },
    resources: {
      en: 'Frozen material and DNA are available, and new field collection is planned.',
      es: 'Se dispone de material congelado y ADN, y se planea nueva recolección de campo.',
    },
    openToCollaborators: false,
  },
  {
    id: 'soybean-pests',
    species: '',
    title: {
      en: 'Population genomic monitoring of soybean pests',
      es: 'Monitoreo genómico poblacional de plagas de la soya',
    },
    leads: 'Chris Jiggins, Diogo Cavalcante Cabral de Mello, Alberto Soares Corrêa, Henry North',
    goal: {
      en: 'Study a guild of Brazilian lepidopteran soybean pests relevant to food security, using a collection from roughly 800 sites sampled over five years. Planned work includes reference genomes for five species, population histories for eight, landscape connectivity, associations with climate and crop type, and an amplicon panel for pest and insecticide-resistance monitoring.',
      es: 'Estudiar un gremio de plagas lepidópteras de la soya en Brasil, relevantes para la seguridad alimentaria, con una colección de unos 800 sitios muestreados durante cinco años. El trabajo previsto incluye genomas de referencia para cinco especies, historias poblacionales para ocho, conectividad del paisaje, asociaciones con el clima y el tipo de cultivo, y un panel de amplicones para el monitoreo de plagas y de resistencia a insecticidas.',
    },
    resources: {
      en: 'Funding exists for several new reference genomes, and the work could expand to other pests.',
      es: 'Existe financiación para varios genomas de referencia nuevos, y el trabajo podría ampliarse a otras plagas.',
    },
    openToCollaborators: false,
    soyObjectives: [
      {
        en: 'Generate reference genomes for five soybean-associated Lepidoptera species, three of which are already partially sequenced.',
        es: 'Generar genomas de referencia para cinco especies de lepidópteros asociados a la soya, tres de las cuales ya están parcialmente secuenciadas.',
      },
      {
        en: 'Study population genomics of eight species, including isolation-by-distance patterns and landscape connectivity.',
        es: 'Estudiar la genómica poblacional de ocho especies, incluyendo patrones de aislamiento por distancia y conectividad del paisaje.',
      },
      {
        en: 'Conduct GWAS analyses associating genomic variation with climate variables and transgenic crop type.',
        es: 'Realizar análisis GWAS asociando variación genómica con variables climáticas y tipo de cultivo transgénico.',
      },
      {
        en: 'Develop an amplicon panel for monitoring pest identity and tracking insecticide resistance.',
        es: 'Desarrollar un panel de amplicones para el monitoreo de la identidad de plagas y el seguimiento de la resistencia a insecticidas.',
      },
    ],
  },
  {
    id: 'panacea',
    species: 'Panacea prola',
    title: {
      en: 'Reference genome for Panacea prola',
      es: 'Genoma de referencia para Panacea prola',
    },
    leads: 'Vicencio Oostra, Jennifer Stewart, Blanca Huertas, Geoff Gallice',
    goal: {
      en: 'Generate a Latin American reference genome with Oxford Nanopore, potentially using a portable PromethION P2 at Finca Las Piedras in southern Peru. The species may be migratory in southern Peru and possibly Colombia. Analysis and publication should ideally be led by a Latin American researcher.',
      es: 'Generar un genoma de referencia latinoamericano con Oxford Nanopore, potencialmente con un PromethION P2 portátil en la Finca Las Piedras, en el sur de Perú. La especie podría ser migratoria en el sur de Perú y posiblemente en Colombia. El análisis y la publicación deberían, idealmente, ser liderados por un investigador latinoamericano.',
    },
    resources: {
      en: 'Existing population genomic data and high-coverage Illumina data from museum holotypes of two subspecies and Panacea procilla.',
      es: 'Datos genómicos poblacionales existentes y datos Illumina de alta cobertura de holotipos de museo de dos subespecies y de Panacea procilla.',
    },
    openToCollaborators: false,
  },
];

/* ---------- Regional sequencing capacity (Capacity page) ---------- */
export type Facility = {
  institution: string;
  country: Bilingual;
  platforms: string; // platform names kept literal in both languages
};

export const FACILITIES: Facility[] = [
  {
    institution: 'Universidad del Rosario',
    country: { en: 'Colombia', es: 'Colombia' },
    platforms: 'NextSeq 2000, Nanopore MinION',
  },
  {
    institution: 'Universidad Nacional de Colombia',
    country: { en: 'Colombia', es: 'Colombia' },
    platforms: 'Nanopore PromethION',
  },
  {
    institution: 'Smithsonian Tropical Research Institute',
    country: { en: 'Panama', es: 'Panamá' },
    platforms: 'NextSeq 2000, MinION, PromethION (Hi-C expertise planned)',
  },
  {
    institution: 'Universidade Federal de Goiás',
    country: { en: 'Brazil', es: 'Brasil' },
    platforms: 'NextSeq 2000, MiSeq, MinION, PromethION',
  },
  {
    institution: 'Universidad Regional Amazónica Ikiam',
    country: { en: 'Ecuador', es: 'Ecuador' },
    platforms: 'PromethION, Hi-C',
  },
  {
    institution: 'Universidad Austral de Chile',
    country: { en: 'Chile', es: 'Chile' },
    platforms: 'NextSeq 2000, MinION',
  },
  {
    institution: 'Universidade Federal do Pará',
    country: { en: 'Brazil', es: 'Brasil' },
    platforms: 'NextSeq 2000, MinION',
  },
];

/* ---------- External links (single source of truth) ---------- */
export const LINKS = {
  joinForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSdJbLIgK-fOI9XjJ9AodMjKtP41JQcnzjrh-o6lRMYOFaQJtg/viewform',
  contactEmail: 'genomica.neotropical@gmail.com',
  projectPsyche: 'https://www.projectpsyche.org/',
};

/** ISO date the public copy was last reviewed against the source brief. */
export const LAST_REVIEWED = '2026-07-15';

/**
 * Scientific names that should render italic wherever they appear in prose.
 * Ordered longest-first so binomials wrap before bare genera.
 */
const SCIENTIFIC_NAMES = [
  'Parides ascanius',
  'Aristolochia trilobata',
  'Panacea procilla',
  'Panacea prola',
  'Heliconius',
];

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Escape text, then wrap known scientific names in <em>. Safe for set:html. */
export function italicizeSpecies(text: string): string {
  let out = escapeHtml(text);
  for (const name of SCIENTIFIC_NAMES) {
    out = out.replace(new RegExp(`\\b${name}\\b`, 'g'), `<em>${name}</em>`);
  }
  return out;
}
