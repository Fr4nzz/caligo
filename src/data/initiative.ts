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

/* ---------- Initiative leaders (doc 01 §J2, §J3) ---------- */
export type Person = {
  name: string;
  role: Bilingual;
  affiliation: string;
  country: Bilingual;
};

/**
 * The three initiative leads documented in PRES L3–4, BRIEF §1, and BRIEF §6.
 * Affiliations: Vicencio Oostra — Queen Mary University of London;
 *               Nicol Rueda — Wellcome Sanger Institute (BRIEF §6).
 *               Joana Meier — Wellcome Sanger Institute (PRES L3–4).
 */
export const LEADERS: Person[] = [
  {
    name: 'Nicol Rueda',
    role: { en: 'Initiative lead', es: 'Líder de la iniciativa' },
    affiliation: 'Wellcome Sanger Institute',
    country: { en: 'United Kingdom', es: 'Reino Unido' },
  },
  {
    name: 'Joana Meier',
    role: { en: 'Initiative lead', es: 'Líder de la iniciativa' },
    affiliation: 'Wellcome Sanger Institute',
    country: { en: 'United Kingdom', es: 'Reino Unido' },
  },
  {
    name: 'Vicencio Oostra',
    role: { en: 'Initiative lead', es: 'Líder de la iniciativa' },
    affiliation: 'Queen Mary University of London',
    country: { en: 'United Kingdom', es: 'Reino Unido' },
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

/* ---------- Membership tiers (doc 01 §H7, §H8) ---------- */
export type MembershipTier = {
  name: Bilingual;
  summary: Bilingual;
  details: Bilingual;
};

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: {
      en: 'Core members',
      es: 'Miembros activos',
    },
    summary: {
      en: 'Active contributors who provide samples, sequencing capacity or funding, and carry formal network responsibilities.',
      es: 'Contribuyentes activos que aportan muestras, capacidad de secuenciación o financiación, y tienen responsabilidades formales en la red.',
    },
    details: {
      en: 'Participate in working groups or committees; co-author network publications; attend meetings regularly; vote on network decisions; eligible for authorship credit.',
      es: 'Participan en grupos de trabajo o comités; co-autoran publicaciones de la red; asisten regularmente a reuniones; votan sobre decisiones de la red; elegibles para autoría.',
    },
  },
  {
    name: {
      en: 'Affiliated members',
      es: 'Miembros afiliados',
    },
    summary: {
      en: 'Members with a looser connection who are interested in results and use network data in their own research.',
      es: 'Miembros con una conexión más laxa, interesados en los resultados y que usan los datos de la red en su propia investigación.',
    },
    details: {
      en: 'Attend some meetings; no formal obligations to the network.',
      es: 'Asisten a algunas reuniones; sin obligaciones formales con la red.',
    },
  },
];

/* ---------- Member benefits (doc 01 §H7; brief §3) ---------- */
/**
 * What the network offers the people who join, as listed in the vision and
 * governance draft. These are benefits — what a member gains. What a core
 * member commits to (samples, meetings, votes, formal roles) is stated once,
 * in MEMBERSHIP_TIERS above, and must not be duplicated here.
 */
export const MEMBER_BENEFITS: Bilingual[] = [
  {
    en: 'New collaborations across cities, countries and continents.',
    es: 'Nuevas colaboraciones entre ciudades, países y continentes.',
  },
  {
    en: 'Training and hands-on learning in genomic analysis.',
    es: 'Formación y aprendizaje práctico en análisis genómico.',
  },
  {
    en: 'Greater visibility for researchers based in the Neotropics.',
    es: 'Mayor visibilidad para quienes investigan en el Neotrópico.',
  },
  {
    en: 'A route to circulate results from existing Lepidoptera biodiversity projects.',
    es: 'Una vía para difundir resultados de proyectos de biodiversidad de lepidópteros ya en marcha.',
  },
  {
    en: 'Stronger joint applications for international funding.',
    es: 'Postulaciones conjuntas más sólidas a financiación internacional.',
  },
  {
    en: 'Academic visits and exchanges between institutions.',
    es: 'Visitas académicas e intercambios entre instituciones.',
  },
  {
    en: 'Participation in the network’s publications.',
    es: 'Participación en las publicaciones de la red.',
  },
];

/* ---------- Language policy (doc 01 §H10) ---------- */
/** DOC L69; PRES L81 — English and Spanish official; Portuguese informal in meetings. */
export const LANGUAGE_POLICY: Bilingual = {
  en: 'Official communications are in English and Spanish. Portuguese is also used in meetings, with informal translation among participants who understand both.',
  es: 'Las comunicaciones oficiales se hacen en inglés y español. El portugués también se usa en las reuniones, con traducción informal entre quienes entienden ambos.',
};

/* ---------- Governance points (doc 01 §H1–H3, §H5, §I1, §I7, §I8) ---------- */
/**
 * Key governance facts as factual points. The whole model is a draft (DOC
 * title: "Draft Vision and Governance"); that status is stated once in the
 * section intro rather than repeated after each point.
 */
export const GOVERNANCE_POINTS: Bilingual[] = [
  {
    en: 'An organizing committee coordinates the initiative, with at least one representative per Latin American country and from outside the region.',
    es: 'Un comité organizador coordina la iniciativa, con al menos un representante por cada país latinoamericano y también fuera de la región.',
  },
  {
    en: 'The committee elects 3–5 leaders.',
    es: 'El comité elige entre 3 y 5 líderes.',
  },
  {
    en: 'Leaders rotate approximately every three years.',
    es: 'Los líderes rotan aproximadamente cada tres años.',
  },
  {
    en: 'Monthly meetings, recorded and distributed to all members.',
    es: 'Reuniones mensuales, grabadas y distribuidas a todos los miembros.',
  },
  {
    en: 'No aggressive, abusive or irresponsible behaviour is tolerated; the member in question may be removed from the network. A code of conduct is in preparation.',
    es: 'No se tolera ningún comportamiento agresivo, abusivo o irresponsable; el miembro en cuestión puede ser removido de la red. El código de conducta está en preparación.',
  },
  {
    en: 'Before beginning a project, who will be first and last author must be agreed; remaining author order follows contributions. Publication and authorship policy in preparation.',
    es: 'Antes de iniciar un proyecto debe acordarse quiénes serán el primer y último autor; el orden restante sigue las contribuciones. La política de publicación y autoría está en preparación.',
  },
];

/* ---------- Derived aggregates — principle 4: never hardcoded ---------- */
/**
 * Derive facility and country counts from the FACILITIES data array at call time.
 * Never hardcode these numbers — derive from data so build-time tripwires stay green.
 */
export function facilityStats(): { facilities: number; countries: number } {
  const countries = new Set(_FACILITIES.map((f) => f.country.en));
  return { facilities: _FACILITIES.length, countries: countries.size };
}
