/**
 * src/data/initiative.ts — Canonical data module for Caligo initiative material.
 *
 * All factual content transcribed from:
 *   context/plan-mejora/01_INVENTARIO_MATERIAL_NICOL.md (sections A–N)
 * No names, affiliations, dates or counts are invented; if doc 01 does not
 * document it, it is omitted.
 *
 * consumers should import from './initiative'; './content' remains the raw store.
 */
import type { Locale } from '../i18n/config';
import { FACILITIES as _FACILITIES } from './content';

export type Bilingual = Record<Locale, string>;

/* ---------- Re-exports — content.ts remains the raw store ---------- */
export {
  OBJECTIVES,
  PRINCIPLES,
  TIERS,
  PROJECTS,
  FACILITIES,
  LINKS,
  LAST_REVIEWED,
  pick,
  italicizeSpecies,
} from './content';
export type { Project, Facility } from './content';

/* ---------- Initiative leaders ---------- */
export type Person = {
  name: string;
  role: Bilingual;
  bio: Bilingual;
  affiliation: string;
  regionalTies: Bilingual;
  source: {
    label: Bilingual;
    href: string;
  };
};

/**
 * Leadership names and regional connections follow the initiative leadership
 * slide supplied in July 2026. Affiliations and research summaries were checked
 * against official institutional profiles and research-group pages in July 2026.
 */
export const LEADERS: Person[] = [
  {
    name: 'Caroline Bacquet',
    role: { en: 'Initiative leader', es: 'Líder de la iniciativa' },
    bio: {
      en: 'Her work at Ikiam’s Scientific Insectary connects Amazonian Lepidoptera with genetics, molecular evolution, behaviour and butterfly responses to environmental change.',
      es: 'Su trabajo en el Insectario Científico de Ikiam vincula los lepidópteros amazónicos con la genética, la evolución molecular, el comportamiento y las respuestas de las mariposas al cambio ambiental.',
    },
    affiliation: 'Universidad Regional Amazónica Ikiam',
    regionalTies: { en: 'Ecuador', es: 'Ecuador' },
    source: {
      label: { en: 'Profile at Ikiam', es: 'Perfil en Ikiam' },
      href: 'https://pure.ikiam.edu.ec/en/persons/caroline-bacquet-p%C3%A9rez/',
    },
  },
  {
    name: 'Gyanpriya Maharaj',
    role: { en: 'Initiative leader', es: 'Líder de la iniciativa' },
    bio: {
      en: 'Her research examines the diversity, genetics, physiology, ecology and behaviour of Neotropical butterflies, alongside broader work in entomology and insect monitoring.',
      es: 'Su investigación estudia la diversidad, genética, fisiología, ecología y conducta de las mariposas neotropicales, junto con temas más amplios de entomología y monitoreo de insectos.',
    },
    affiliation: 'University of Guyana',
    regionalTies: { en: 'Guyana', es: 'Guyana' },
    source: {
      label: { en: 'University of Guyana profile', es: 'Perfil en la Universidad de Guyana' },
      href: 'https://expertguide.uog.edu.gy/dr-gyanpriya-maharaj',
    },
  },
  {
    name: 'Carmen Barragan',
    role: { en: 'Initiative leader', es: 'Líder de la iniciativa' },
    bio: {
      en: 'Her research combines molecular ecology and conservation genetics to study Neotropical species, population history and biodiversity conservation.',
      es: 'Su investigación combina la ecología molecular y la genética de la conservación para estudiar especies neotropicales, historia poblacional y conservación de la biodiversidad.',
    },
    affiliation: 'Universidade Federal de Goiás',
    regionalTies: { en: 'Brazil / Colombia', es: 'Brasil / Colombia' },
    source: {
      label: { en: 'PUC Goiás research feature', es: 'Nota de investigación de PUC Goiás' },
      href: 'https://www.pucgoias.edu.br/noticias/coleta-de-dados-genomicos-em-especies-do-cerrado-impulsiona-pesquisa-coordenada-pela-puc/',
    },
  },
  {
    name: 'Carlos Arias',
    role: { en: 'Initiative leader', es: 'Líder de la iniciativa' },
    bio: {
      en: 'He combines computational approaches with Heliconius research to investigate the evolutionary processes that drive or constrain the origin of species in nature.',
      es: 'Combina métodos computacionales con investigación en Heliconius para estudiar los procesos evolutivos que impulsan o limitan el origen de las especies en la naturaleza.',
    },
    affiliation: 'Smithsonian Tropical Research Institute',
    regionalTies: { en: 'Panama', es: 'Panamá' },
    source: {
      label: { en: 'Smithsonian team profile', es: 'Perfil del equipo Smithsonian' },
      href: 'https://striresearch.si.edu/gamboa-heliconius/research/team/',
    },
  },
  {
    name: 'Nicol Rueda',
    role: { en: 'Initiative leader', es: 'Líder de la iniciativa' },
    bio: {
      en: 'She studies chromosome structure and sex chromosome-autosome fusions in Heliconius, using reference genomes to investigate Lepidoptera evolution.',
      es: 'Estudia la estructura cromosómica y las fusiones entre cromosomas sexuales y autosomas en Heliconius mediante genomas de referencia para investigar la evolución de los lepidópteros.',
    },
    affiliation: 'Wellcome Sanger Institute',
    regionalTies: { en: 'Colombia / United Kingdom', es: 'Colombia / Reino Unido' },
    source: {
      label: { en: 'Profile at Sanger', es: 'Perfil en Sanger' },
      href: 'https://www.sanger.ac.uk/person/rueda-nicol/',
    },
  },
  {
    name: 'Joana Meier',
    role: { en: 'Initiative leader', es: 'Líder de la iniciativa' },
    bio: {
      en: 'Her research in speciation and evolutionary genomics examines how interbreeding and chromosomal rearrangements contribute to rapid adaptation and the formation of new species.',
      es: 'Su investigación en especiación y genómica evolutiva estudia cómo la hibridación y los reordenamientos cromosómicos contribuyen a la adaptación rápida y la formación de nuevas especies.',
    },
    affiliation: 'Wellcome Sanger Institute',
    regionalTies: { en: 'Peru / United Kingdom', es: 'Perú / Reino Unido' },
    source: {
      label: { en: 'Profile at Sanger', es: 'Perfil en Sanger' },
      href: 'https://www.sanger.ac.uk/person/meier-joana/',
    },
  },
  {
    name: 'Vicencio Oostra',
    role: { en: 'Initiative leader', es: 'Líder de la iniciativa' },
    bio: {
      en: 'He combines development, genomics, evolutionary biology and ecology to study how tropical butterflies adapt to environmental change.',
      es: 'Combina desarrollo, genómica, biología evolutiva y ecología para estudiar cómo las mariposas tropicales se adaptan al cambio ambiental.',
    },
    affiliation: 'Queen Mary University of London',
    regionalTies: { en: 'Colombia / United Kingdom', es: 'Colombia / Reino Unido' },
    source: {
      label: { en: 'Profile at Queen Mary', es: 'Perfil en Queen Mary' },
      href: 'https://www.seresearch.qmul.ac.uk/cefg/people/voostra/',
    },
  },
];

/* ---------- Network size (doc 01 §J1) ---------- */
export type NetworkMetric = { value: number; asOf: string };

/** 94 people in the network at the time the presentation was prepared (July 2026). */
export const PARTICIPANTS: NetworkMetric = { value: 94, asOf: '2026-07' };

/* ---------- Events with dates (doc 01 §L1, §L2) ---------- */
export type InitiativeEvent = {
  id: string;
  name: Bilingual;
  dates: Bilingual;
  location: Bilingual;
  summary: Bilingual;
};

export const EVENTS: InitiativeEvent[] = [
  {
    id: 'bogota-2026',
    name: {
      en: 'Bogotá sequencing workshop',
      es: 'Taller de secuenciación de Bogotá',
    },
    dates: {
      en: '20–23 July 2026',
      es: '20–23 de julio de 2026',
    },
    location: {
      en: 'Bogotá, Colombia',
      es: 'Bogotá, Colombia',
    },
    summary: {
      en: 'First initiative activity in Latin America; sequencing of the first four Heliconius species.',
      es: 'Primera actividad de la iniciativa en América Latina; secuenciación de las primeras cuatro especies de Heliconius.',
    },
  },
  {
    id: 'campinas-2027',
    name: {
      en: 'Campinas hackathon',
      es: 'Hackathon de Campinas',
    },
    dates: {
      en: 'April 2027',
      es: 'Abril de 2027',
    },
    location: {
      en: 'Campinas, Brazil',
      es: 'Campinas, Brasil',
    },
    summary: {
      en: 'Hackathon at the Neotropical Lepidoptera / Biology of Butterflies congress; dates to be confirmed.',
      es: 'Hackathon en el congreso Lepidópteros Neotropicales / Biología de las Mariposas; fechas por confirmar.',
    },
  },
];

/* ---------- Language policy (doc 01 §H10) ---------- */
/** DOC L69; PRES L81 — English and Spanish official; Portuguese informal in meetings. */
export const LANGUAGE_POLICY: Bilingual = {
  en: 'Official communications are in English and Spanish. Portuguese is also used in meetings, with informal translation among participants who understand both.',
  es: 'Las comunicaciones oficiales se hacen en inglés y español. El portugués también se usa en las reuniones, con traducción informal entre quienes entienden ambos.',
};


/* ---------- Derived aggregates — principle 4: never hardcoded ---------- */
/**
 * Derive facility and country counts from the FACILITIES data array at call time.
 * Never hardcode these numbers — derive from data so build-time tripwires stay green.
 */
export function facilityStats(): { facilities: number; countries: number } {
  const countries = new Set(_FACILITIES.map((f) => f.country.en));
  return { facilities: _FACILITIES.length, countries: countries.size };
}
