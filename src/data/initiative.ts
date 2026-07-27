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
