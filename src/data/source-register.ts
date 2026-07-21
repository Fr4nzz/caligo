/**
 * Source register — maps bracketed citation tokens (`[S01]`…`[S24]`) used in
 * i18n copy to the record ids in `SOURCES` (src/data/records.ts).
 *
 * This is the single source of truth for token resolution. It supersedes the
 * historical `context/gpt_pro_followup_4_output/source-register.csv`, which was
 * a pipeline artifact: S08 pointed to `icmbio-parides-2018`, but the national
 * assessment actually cited by the site is the 2021 record
 * (`icmbio-parides-2021`). The CSV is kept in context/ for history only.
 *
 * Consumed by scripts/verify-provenance.mjs today; the future renderCitations()
 * source drawer (defect 10) should resolve tokens through this same map.
 */
export const SOURCE_REGISTER: Record<string, string> = {
  S01: 'wright-2026',
  S02: 'rueda-2024',
  S03: 'mackay-smith-2026',
  S04: 'rosser-2024',
  S05: 'edelman-2019',
  S06: 'seraphim-2016',
  S07: 'iucn-parides-2018',
  S08: 'icmbio-parides-2021',
  S09: 'gallice-2020',
  S10: 'horikoshi-2021',
  S11: 'braga-2024',
  S12: 'pomerantz-2021',
  S13: 'chakraborty-2023',
  S14: 'couto-2023',
  S15: 'foley-2026',
  S16: 'mayer-2021',
  S17: 'st-laurent-2018',
  S18: 'iserhard-2024',
  S19: 'sackey-2018',
  S20: 'fair-2016',
  S21: 'care-2020',
  S22: 'nagoya',
  S23: 'ncbi-datasets-2026',
  S24: 'ukri-soybean',
};
