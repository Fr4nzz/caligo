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
      en: 'Hackathon at the Neotropical Lepidoptera / Biology of Butterflies congress (draft).',
      es: 'Hackathon en el congreso Lepidópteros Neotropicales / Biología de las Mariposas (borrador).',
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

/* ---------- Member benefits (doc 01 §H7) ---------- */
/** Seven documented benefits / contributions of core-membership (DOC L48–55; PRES L67–71). */
export const MEMBER_BENEFITS: Bilingual[] = [
  {
    en: 'Contribute samples, sequencing capacity or funding to the network.',
    es: 'Aportar muestras, capacidad de secuenciación o financiación a la red.',
  },
  {
    en: 'Participate in working groups or committees.',
    es: 'Participar en grupos de trabajo o comités.',
  },
  {
    en: 'Co-authorship on network publications.',
    es: 'Co-autoría en publicaciones de la red.',
  },
  {
    en: 'Attend meetings regularly.',
    es: 'Asistir regularmente a las reuniones.',
  },
  {
    en: 'Hold formal responsibilities within the network.',
    es: 'Tener responsabilidades formales dentro de la red.',
  },
  {
    en: 'Vote on network decisions.',
    es: 'Votar sobre las decisiones de la red.',
  },
  {
    en: 'Eligible for authorship credit on publications.',
    es: 'Elegibilidad para el reconocimiento de autoría en publicaciones.',
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
 * Key governance facts as factual points.
 * Items marked "draft" / "borrador" reflect the source document's own
 * designation (DOC title: "Draft Vision and Governance").
 */
export const GOVERNANCE_POINTS: Bilingual[] = [
  {
    en: 'An organizing committee coordinates the initiative, with at least one representative per Latin American country and from outside the region.',
    es: 'Un comité organizador coordina la iniciativa, con al menos un representante por cada país latinoamericano y también fuera de la región.',
  },
  {
    en: 'The committee elects 3–5 leaders (draft; number subject to change).',
    es: 'El comité elige entre 3 y 5 líderes (borrador; número sujeto a cambios).',
  },
  {
    en: 'Leaders rotate approximately every three years (draft; subject to change).',
    es: 'Los líderes rotan aproximadamente cada tres años (borrador; sujeto a cambios).',
  },
  {
    en: 'Monthly meetings, recorded and distributed to all members (draft).',
    es: 'Reuniones mensuales, grabadas y distribuidas a todos los miembros (borrador).',
  },
  {
    en: 'No aggressive, abusive or irresponsible behaviour is tolerated; the member in question may be removed from the network. A code of conduct is in preparation (draft).',
    es: 'No se tolera ningún comportamiento agresivo, abusivo o irresponsable; el miembro en cuestión puede ser removido de la red. El código de conducta está en preparación (borrador).',
  },
  {
    en: 'Before beginning a project, who will be first and last author must be agreed; remaining author order follows contributions. Publication and authorship policy in preparation (draft).',
    es: 'Antes de iniciar un proyecto debe acordarse quiénes serán el primer y último autor; el orden restante sigue las contribuciones. La política de publicación y autoría está en preparación (borrador).',
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
