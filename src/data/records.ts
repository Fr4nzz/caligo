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

export interface Claim {
  readonly id: string;
  readonly headline: Bilingual;
  readonly detail?: Bilingual;
  readonly caveat?: Bilingual;
  readonly unit?: string;
  readonly denominator?: string;
  readonly status: PublicStatus;
  readonly provenance: Provenance;
  readonly sourceIds: readonly string[];
  readonly approvalOwner?: string;
  readonly approvalDate?: string;
  readonly publish: boolean;
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
    id: 'wright-2026',
    kind: 'paper',
    citation:
      'Wright et al. Genome sequencing of Lepidoptera: progress, priorities and orphan lineages. Nature Reviews Biodiversity, published 16 February 2026.',
    url: 'https://doi.org/10.1038/s44358-025-00128-8',
    publicationDate: '2026-02-16',
    checkedDate: '2026-07-15',
    doi: '10.1038/s44358-025-00128-8',
  },
  {
    id: 'wright-2026-snapshot',
    kind: 'database',
    citation:
      'GenBank Lepidoptera assembly snapshot reported in Wright et al. 2026, data accessed 6 November 2025.',
    url: 'https://doi.org/10.1038/s44358-025-00128-8',
    publicationDate: '2025-11-06',
    checkedDate: '2026-07-15',
  },
  {
    id: 'iserhard-2024',
    kind: 'paper',
    citation:
      'Iserhard et al. 2024. Field test of eyespot function in Caligo martia. Peer Community Journal.',
    url: 'https://doi.org/10.24072/pcjournal.442',
    publicationDate: '2024-01-01',
    checkedDate: '2026-07-15',
    doi: '10.24072/pcjournal.442',
  },
  {
    id: 'rueda-2024',
    kind: 'paper',
    citation:
      'Rueda-M et al. 2024. Chromosome evolution in Heliconius. PLOS Genetics.',
    url: 'https://doi.org/10.1371/journal.pgen.1011318',
    publicationDate: '2024-01-01',
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
    id: 'sackey-2018',
    kind: 'paper',
    citation:
      'Sackey et al. 2018. Nanostructure of black scales in one black eyespot region of Caligo memnon. IET Nanobiotechnology.',
    url: 'https://doi.org/10.1049/iet-nbt.2017.0320',
    publicationDate: '2018-01-01',
    checkedDate: '2026-07-15',
    doi: '10.1049/iet-nbt.2017.0320',
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
    id: 'edelman-2019',
    kind: 'paper',
    citation:
      'Edelman et al. 2019. Genomic architecture and introgression shape a butterfly radiation. Science.',
    url: 'https://doi.org/10.1126/science.aaw2090',
    publicationDate: '2019-01-01',
    checkedDate: '2026-07-15',
    doi: '10.1126/science.aaw2090',
  },
  {
    id: 'blaxter-2022',
    kind: 'paper',
    citation:
      'Blaxter et al. 2022. Why sequence all eukaryotes? PNAS.',
    url: 'https://doi.org/10.1073/pnas.2115642118',
    publicationDate: '2022-01-01',
    checkedDate: '2026-07-15',
    doi: '10.1073/pnas.2115642118',
  },
  {
    id: 'fair-2016',
    kind: 'standard',
    citation:
      'Wilkinson et al. 2016. The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data.',
    url: 'https://doi.org/10.1038/sdata.2016.18',
    publicationDate: '2016-03-15',
    checkedDate: '2026-07-15',
    doi: '10.1038/sdata.2016.18',
  },
  {
    id: 'care-2020',
    kind: 'standard',
    citation:
      'Carroll et al. 2020. The CARE Principles for Indigenous Data Governance. Data Science Journal.',
    url: 'https://doi.org/10.5334/dsj-2020-043',
    publicationDate: '2020-01-01',
    checkedDate: '2026-07-15',
    doi: '10.5334/dsj-2020-043',
  },
  {
    id: 'nagoya',
    kind: 'standard',
    citation:
      'Convention on Biological Diversity: Nagoya Protocol on Access and Benefit-sharing.',
    url: 'https://www.cbd.int/abs/about/default.shtml',
    checkedDate: '2026-07-15',
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
    id: 'rosser-2024',
    kind: 'paper',
    citation:
      'Rosser et al. Hybrid speciation driven by multilocus introgression of ecological traits. Nature 628:811–817 (2024).',
    url: 'https://doi.org/10.1038/s41586-024-07263-w',
    publicationDate: '2024-04-01',
    checkedDate: '2026-07-16',
    doi: '10.1038/s41586-024-07263-w',
  },
  {
    id: 'vanderheijden-2025',
    kind: 'paper',
    citation:
      'van der Heijden et al. 2025. Genomics of Neotropical biodiversity indicators: Two butterfly radiations with rampant chromosomal rearrangements and hybridization. PNAS 122:e2410939122.',
    url: 'https://doi.org/10.1073/pnas.2410939122',
    publicationDate: '2025-07-28',
    checkedDate: '2026-07-21',
    doi: '10.1073/pnas.2410939122',
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
  {
    id: 'pomerantz-2021',
    kind: 'paper',
    citation:
      'Pomerantz et al. Developmental, cellular and biochemical basis of transparency in clearwing butterflies. Journal of Experimental Biology 224:jeb237917 (2021).',
    url: 'https://doi.org/10.1242/jeb.237917',
    publicationDate: '2021-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1242/jeb.237917',
  },
  {
    id: 'chakraborty-2023',
    kind: 'paper',
    citation:
      'Chakraborty et al. Sex-linked gene traffic underlies the acquisition of sexually dimorphic UV color vision in Heliconius butterflies. Proceedings of the National Academy of Sciences 120:e2301411120 (2023).',
    url: 'https://doi.org/10.1073/pnas.2301411120',
    publicationDate: '2023-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1073/pnas.2301411120',
  },
  {
    id: 'couto-2023',
    kind: 'paper',
    citation:
      'Couto et al. Rapid expansion and visual specialisation of learning and memory centres in the brains of Heliconiini butterflies. Nature Communications 14:4024 (2023).',
    url: 'https://doi.org/10.1038/s41467-023-39618-8',
    publicationDate: '2023-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1038/s41467-023-39618-8',
  },
  {
    id: 'foley-2026',
    kind: 'paper',
    citation:
      'Foley et al. Evolution of increased longevity and slowed ageing in a genus of tropical butterfly. Nature Communications 17:5077 (2026).',
    url: 'https://doi.org/10.1038/s41467-026-73635-7',
    publicationDate: '2026-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1038/s41467-026-73635-7',
  },
  {
    id: 'mayer-2021',
    kind: 'paper',
    citation:
      'Mayer et al. Adding leaves to the Lepidoptera tree: capturing hundreds of nuclear genes from old museum specimens. Systematic Entomology 46:649–671 (2021).',
    url: 'https://doi.org/10.1111/syen.12481',
    publicationDate: '2021-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1111/syen.12481',
  },
  {
    id: 'st-laurent-2018',
    kind: 'paper',
    citation:
      'St Laurent et al. Museum specimens provide phylogenomic data to resolve relationships of sack-bearer moths (Lepidoptera, Mimallonoidea, Mimallonidae). Systematic Entomology 43:729–761 (2018).',
    url: 'https://doi.org/10.1111/syen.12301',
    publicationDate: '2018-01-01',
    checkedDate: '2026-07-16',
    doi: '10.1111/syen.12301',
  },
  {
    id: 'ncbi-datasets-2026',
    kind: 'database',
    citation:
      'NCBI Datasets genome documentation and genome metadata packages. Accessed 16 July 2026.',
    url: 'https://www.ncbi.nlm.nih.gov/datasets/docs/v2/how-tos/genomes/',
    publicationDate: '2026-07-16',
    checkedDate: '2026-07-16',
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   CLAIMS
   ═══════════════════════════════════════════════════════════════════════ */

export const CLAIMS: readonly Claim[] = [
  {
    id: 'lepidoptera-described',
    headline: {
      en: 'At least 161,572 described species of butterflies and moths.',
      es: 'Al menos 161.572 especies descritas de mariposas y polillas.',
    },
    detail: {
      en: 'Counted in a 2026 synthesis of Lepidoptera genomics. "Described" is not a live checklist total or an estimate of undiscovered diversity.',
      es: 'Contabilizadas en una síntesis de 2026 sobre genómica de lepidópteros. «Descritas» no es un total vivo del catálogo ni una estimación de la diversidad no descubierta.',
    },
    unit: 'described species',
    status: 'published-evidence',
    provenance: 'published-evidence',
    sourceIds: ['wright-2026'],
    publish: true,
  },
  {
    id: 'assembly-snapshot',
    headline: {
      en: '1,672 species with a public assembly and 1,055 at chromosome level.',
      es: '1.672 especies con ensamblaje público y 1.055 a nivel cromosómico.',
    },
    detail: {
      en: 'Approximately 1.03% and 0.65% of the described total, from a GenBank snapshot made on 6 November 2025 and reported in Wright et al.',
      es: 'Aproximadamente el 1,03 % y el 0,65 % del total descrito, en una consulta de GenBank realizada el 6 de noviembre de 2025 y reportada por Wright et al.',
    },
    caveat: {
      en: 'These are global orientation figures. Regional Neotropical coverage figures depend on a defined taxonomic backbone, realm-membership rule, and dated NCBI assembly query.',
      es: 'Son cifras globales de orientación. Las cifras regionales de cobertura neotropical dependen de una base taxonómica definida, una regla explícita de pertenencia al reino y una consulta fechada de ensamblajes en NCBI.',
    },
    unit: 'species',
    denominator: '161572',
    status: 'database-snapshot',
    provenance: 'dated-database-result',
    sourceIds: ['wright-2026', 'wright-2026-snapshot'],
    publish: true,
  },
  {
    id: 'lepidoptera-bias',
    headline: {
      en: 'Small-bodied moths and tropical lineages remain underrepresented.',
      es: 'Las polillas de cuerpo pequeño y los linajes tropicales siguen subrepresentados.',
    },
    detail: {
      en: 'Global context for taxonomic and genomic research. Caligo measures progress against its own dated records.',
      es: 'Contexto global de la investigación taxonómica y genómica. Caligo mide su avance con sus propios registros fechados.',
    },
    status: 'published-evidence',
    provenance: 'published-evidence',
    sourceIds: ['wright-2026'],
    publish: true,
  },
  {
    id: 'martia-eyespot-2024',
    headline: {
      en: 'A 2024 field experiment on Caligo martia found evidence consistent with attacks being redirected toward the wings, but not an overall reduction in attack risk.',
      es: 'Un experimento de campo de 2024 con Caligo martia encontró evidencia compatible con el desvío de ataques hacia las alas, pero no una reducción general del riesgo de ataque.',
    },
    caveat: {
      en: 'One result does not settle the function of every Caligo eyespot.',
      es: 'Un resultado no resuelve la función de todos los ocelos de Caligo.',
    },
    status: 'published-evidence',
    provenance: 'published-evidence',
    sourceIds: ['iserhard-2024'],
    publish: true,
  },
  {
    id: 'heliconius-chromosomes',
    headline: {
      en: 'Most Heliconius species have a haploid chromosome count of 21; a lineage in the sara/sapho group reaches counts as high as 60 through extensive fissions.',
      es: 'La mayoría de las especies de Heliconius tiene un número haploide de 21 cromosomas; un linaje del grupo sara/sapho alcanza hasta 60 mediante numerosas fisiones.',
    },
    caveat: {
      en: 'This range applies to Heliconius. It should not be generalised to Lepidoptera as a whole.',
      es: 'Este rango se aplica a Heliconius. No debe generalizarse a los lepidópteros en su conjunto.',
    },
    status: 'published-evidence',
    provenance: 'published-evidence',
    sourceIds: ['rueda-2024'],
    publish: true,
  },
  {
    id: 'heliconius-w-fusions',
    headline: {
      en: 'Genomic evidence supports three independent W–autosome fusions in Heliconius.',
      es: 'La evidencia genómica apoya tres fusiones independientes entre el cromosoma W y autosomas en Heliconius.',
    },
    status: 'published-evidence',
    provenance: 'published-evidence',
    sourceIds: ['rueda-2024'],
    publish: true,
  },
  {
    id: 'parides-ascanius-status',
    headline: {
      en: 'Parides ascanius is Vulnerable globally in the 2018 IUCN assessment and Endangered in Brazil’s 2021 national assessment.',
      es: 'Parides ascanius figura como Vulnerable a escala mundial en la evaluación de la UICN de 2018 y como En Peligro en la evaluación nacional de Brasil de 2021.',
    },
    caveat: {
      en: 'The two assessments use different jurisdictions, methods and dates and are not interchangeable.',
      es: 'Las dos evaluaciones usan jurisdicciones, métodos y fechas distintas y no son intercambiables.',
    },
    status: 'published-evidence',
    provenance: 'published-evidence',
    sourceIds: ['iucn-parides-2018', 'icmbio-parides-2021'],
    publish: true,
  },
  {
    id: 'panacea-prola-2020',
    headline: {
      en: 'A 2020 preprint reported a seasonal mass movement of Panacea prola in south-eastern Peru.',
      es: 'Un preprint de 2020 informó un movimiento estacional masivo de Panacea prola en el sureste del Perú.',
    },
    caveat: {
      en: 'Preprint. Wider geographic extent, origins and connectivity remain open questions.',
      es: 'Preprint. La extensión geográfica más amplia, los orígenes y la conectividad siguen siendo preguntas abiertas.',
    },
    status: 'published-evidence',
    provenance: 'published-evidence',
    sourceIds: ['gallice-2020'],
    publish: true,
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   PILOTS
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
      en: 'Published genomic work shows an exceptional burst of chromosome change in the Heliconius sapho subclade. Most Heliconius species have 21 haploid chromosomes, but five species in this lineage range from 21 to 60 after repeated chromosome fissions, events in which one ancestral chromosome becomes two. Researchers have also identified three separate fusions between the female-specific W chromosome and autosomes. These changes create a natural system for asking how genome structure affects recombination, sex-chromosome evolution and the way inherited variants travel together. Five highly contiguous Heliconius reference genomes published in July 2026 add valuable comparative material, but they do not by themselves answer why the rearrangements spread or what effects they had.',
      es: 'La evidencia genómica publicada muestra una explosión excepcional de cambios cromosómicos en el subclado sapho de Heliconius. La mayoría de las especies del género tiene 21 cromosomas haploides, pero cinco especies de este linaje presentan entre 21 y 60 después de fisiones repetidas, procesos en los que un cromosoma ancestral pasa a formar dos. También se identificaron tres fusiones independientes entre el cromosoma W, propio de las hembras, y autosomas. Este sistema permite preguntar cómo la estructura del genoma modifica la recombinación, la evolución de los cromosomas sexuales y la herencia conjunta de variantes. Cinco genomas de referencia de Heliconius muy contiguos, publicados en julio de 2026, amplían el material comparativo; por sí solos no explican por qué se extendieron los reordenamientos ni qué efectos tuvieron.',
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
      en: 'A chromosome count is the visible clue; the pilot project asks what changed inside the evolutionary story.',
      es: 'El número de cromosomas es la pista visible; el proyecto piloto pregunta qué cambió dentro de la historia evolutiva.',
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
      en: 'The 2018 IUCN assessment classified Parides ascanius as Vulnerable globally; Brazil’s 2021 national assessment classified it as Endangered. These dated assessments come from different jurisdictions and should not be treated as interchangeable. The species is associated with lowland coastal restinga and wetland habitats. A genetic study published in 2016 found low population structure and inferred substantial migration among the populations it sampled. This is an encouraging historical baseline, but not proof that the same connections persist today. Habitat loss, drainage and fragmentation can change movement long before populations look visibly different. A contemporary study must measure both the genetic diversity that remains and the movement of individuals and inherited variants among habitat patches. Precise localities should remain protected in public communication.',
      es: 'La evaluación de la UICN de 2018 clasificó a Parides ascanius como Vulnerable a escala mundial; la evaluación nacional de Brasil de 2021 la clasificó como En Peligro. Son evaluaciones fechadas, pertenecen a jurisdicciones distintas y no deben tratarse como equivalentes. La especie se asocia con restingas costeras de tierras bajas y humedales. Un estudio genético publicado en 2016 encontró poca estructura poblacional e infirió migración considerable entre las poblaciones muestreadas: una línea de base histórica alentadora, pero no una prueba de que esas conexiones sigan intactas. La pérdida, el drenaje y la fragmentación del hábitat pueden modificar el movimiento mucho antes de que las poblaciones se vean diferentes. Por eso, un estudio actual debe preguntar no solo cuánta diversidad genética queda, sino si los individuos y las variantes heredadas todavía circulan entre parches de hábitat. Las localidades precisas deben permanecer protegidas.',
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
      en: 'The question is not whether one butterfly can fly, but whether a whole network of populations can still exchange life across a changing coast.',
      es: 'La pregunta no es si una mariposa puede volar, sino si toda una red de poblaciones todavía puede intercambiar vida a lo largo de una costa cambiante.',
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
      en: 'Soybean landscapes bring several Lepidoptera species into one applied challenge: identify the organism correctly, understand how populations move and monitor whether management is selecting for resistance. Those questions matter for food security and for reducing unnecessary or ineffective interventions. Published work in Brazil shows why the details matter. Closely related species can be confused in monitoring, and changes in susceptibility to insecticidal proteins must be measured through repeated, species-specific evidence rather than assumed. Genomics can help distinguish lineages, track inherited variants and design targeted monitoring tools, but sustainable management also depends on field observations, agronomy, resistance bioassays, landscape history and the choices of growers and regulators. The organisms are part of the ecosystem; "pest" is a context-dependent management category, not a judgement on butterflies and moths as a group.',
      es: 'Los paisajes sojeros reúnen a varias especies de lepidópteros en un mismo desafío aplicado: identificar bien el organismo, comprender cómo se mueven las poblaciones y vigilar si el manejo está seleccionando resistencia. Estas preguntas importan para la seguridad alimentaria y para reducir intervenciones innecesarias o ineficaces. Estudios publicados en Brasil muestran por qué los detalles son decisivos. Especies cercanas pueden confundirse durante el monitoreo y los cambios de susceptibilidad a proteínas insecticidas deben medirse con evidencia repetida y específica de cada especie, no darse por hechos. La genómica puede ayudar a distinguir linajes, seguir variantes heredadas y diseñar herramientas dirigidas, pero el manejo sostenible también exige observaciones de campo, agronomía, bioensayos de resistencia, historia del paisaje y decisiones de productores y autoridades. Los organismos forman parte del ecosistema; «plaga» es una categoría de manejo dependiente del contexto, no un juicio sobre las mariposas y polillas como grupo.',
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
      en: 'The goal is not to turn moths into villains; it is to make monitoring precise enough for better decisions.',
      es: 'El objetivo no es convertir a las polillas en villanas, sino lograr un monitoreo lo bastante preciso para tomar mejores decisiones.',
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
      en: 'A 2020 preprint reported a seasonal mass movement of Panacea prola in south-eastern Peru and presented it as the first evidence for an Amazonian insect migration. The observation is compelling, but it leaves the central map unfinished. Where did the butterflies originate? Did one population or several contribute? Which landscapes were connected, and did the pattern repeat across years? A reference genome and samples collected across places and seasons could compare ancestry and connectivity. Environmental records, host plants, weather, direct observation and stable-isotope evidence would be needed to interpret the genomic patterns. The public report is a preprint, so the documented event is presented precisely, with wider geographic or unpublished claims remaining open.',
      es: 'Un preprint de 2020 describió un movimiento estacional masivo de Panacea prola en el sureste del Perú y lo presentó como la primera evidencia de una migración de insectos en la Amazonía. La observación es cautivadora, pero deja el mapa central incompleto. ¿De dónde vinieron las mariposas? ¿Participó una sola población o varias? ¿Qué paisajes quedaron conectados y el patrón se repitió entre años? Un genoma de referencia y muestras obtenidas en distintos lugares y temporadas permitirían comparar ascendencia y conectividad. Para interpretar las señales genómicas harían falta registros ambientales, plantas hospederas, clima, observación directa y evidencia de isótopos estables. El informe público es un preprint, así que el evento documentado se presenta con precisión, dejando abiertas las afirmaciones geográficas más amplias o resultados no publicados.',
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
      en: 'The visible wave is only one moment; the pilot project asks what population system creates it.',
      es: 'La oleada visible es apenas un momento; el proyecto piloto pregunta qué sistema de poblaciones la produce.',
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
    creator: 'Polygonia c-album',
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
      en: 'Photograph: Polygonia c-album / Wikimedia Commons, CC BY-SA 4.0. Cropped and resized.',
      es: 'Fotografía: Polygonia c-album / Wikimedia Commons, CC BY-SA 4.0. Recortada y redimensionada.',
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
const CLAIM_MAP = byId(CLAIMS);
const PILOT_MAP = byId(PILOTS);
const MEDIA_MAP = byId(MEDIA);

export const getSource = (id: string): Source | undefined => SOURCE_MAP.get(id);
export const getClaim = (id: string): Claim | undefined => CLAIM_MAP.get(id);
export const getPilot = (id: string): Pilot | undefined => PILOT_MAP.get(id);
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
    id: 'journey-1-organism',
    publish: true,
    candidates: [
      {
        kind: 'ai-concept',
        path: 'media/journey/journey-01-identify-ai.webp',
        width: 1600,
        height: 900,
        licence: 'Concept illustration by Caligo',
        licenceUrl: '',
        conceptCaveat: AI_CAVEAT,
        alt: {
          en: 'Editorial concept illustration: a living butterfly on a Neotropical leaf while a researcher observes it and compares visible traits with an open identification guide.',
          es: 'Ilustración conceptual editorial: una mariposa viva sobre una hoja neotropical mientras una investigadora la observa y compara caracteres visibles con una guía de identificación abierta.',
        },
        caption: {
          en: 'A clear question and a confident identification shape every step that follows.',
          es: 'Una pregunta clara y una identificación confiable orientan cada paso posterior.',
        },
        credit: {
          en: 'Generated concept illustration for Caligo, combining a researcher, butterfly and field setting.',
          es: 'Ilustración conceptual generada para Caligo que combina una investigadora, una mariposa y un entorno de campo.',
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
    id: 'journey-3-voucher',
    publish: true,
    // This module is diagram-led: the schematic directly explains the
    // specimen → retained material → sequence-record relationship. The
    // documentary drawer remains available as the adjacent candidate.
    initialIndex: 1,
    candidates: [
      {
        kind: 'documentary',
        path: 'media/journey/journey-03-museum-drawer.webp',
        width: 1600,
        height: 1200,
        creator: 'Marek Ślusarczyk',
        licence: CC_BY_3.name,
        licenceUrl: CC_BY_3.url,
        sourceItemPage: 'https://commons.wikimedia.org/wiki/File:03_Museum_insect_specimen_drawer_-_Muzeum_Gornoslaskie%2C_Bytom%2C_Poland.jpg',
        changes: ['downloaded from Wikimedia Commons; no re-encode applied locally'],
        alt: {
          en: 'A museum insect drawer holding preserved and curated butterfly and moth specimens arranged in tidy rows.',
          es: 'Un cajón de museo con ejemplares preservados y curados de mariposas y polillas dispuestos en filas ordenadas.',
        },
        caption: {
          en: 'A preserved voucher lets future researchers re-examine the organism that produced the DNA. These curated specimens belong to the Muzeum Górnośląskie collection in Bytom, Poland.',
          es: 'Un voucher preservado permite volver a examinar el organismo que produjo el ADN. Estos ejemplares curados pertenecen a la colección del Muzeum Górnośląskie, en Bytom, Polonia.',
        },
        credit: {
          en: 'Photograph: Marek Ślusarczyk / Muzeum Górnośląskie, Bytom / Wikimedia Commons.',
          es: 'Fotografía: Marek Ślusarczyk / Muzeum Górnośląskie, Bytom / Wikimedia Commons.',
        },
      },
      {
        kind: 'code-native',
        path: 'media/code-native/journey-3-voucher-diagram.svg',
        width: 1200,
        height: 480,
        fit: 'contain',
        background: 'var(--bg-inset)',
        creator: 'Caligo project',
        changes: ['original language-neutral SVG schematic; no specimen or sequence data represented'],
        alt: {
          en: 'Three-stage schematic linking a preserved butterfly specimen, a vial of retained material, and a neutral sequence-record card.',
          es: 'Esquema de tres etapas que enlaza un ejemplar de mariposa preservado, un vial de material retenido y una tarjeta neutra de registro de secuencia.',
        },
        caption: {
          en: 'A preserved specimen connects retained material to its sequence record, keeping the organism available for future study.',
          es: 'Un ejemplar preservado conecta el material retenido con su registro de secuencia y mantiene el organismo disponible para estudios futuros.',
        },
        credit: {
          en: 'Explanatory diagram created for Caligo.',
          es: 'Diagrama explicativo creado para Caligo.',
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
          en: 'DNA extraction and sequencing turn a documented sample into the raw data used for assembly and analysis.',
          es: 'La extracción y la secuenciación convierten una muestra documentada en los datos crudos usados para el ensamblaje y el análisis.',
        },
        credit: {
          en: 'Photograph: Maggie Bartlett / National Human Genome Research Institute (NHGRI). Public domain (US Government work).',
          es: 'Fotografía: Maggie Bartlett / National Human Genome Research Institute (NHGRI). Dominio público (obra del gobierno de EE.UU.).',
        },
      },
    ],
  },
  {
    id: 'journey-5-assemble',
    publish: true,
    candidates: [
      {
        kind: 'code-native',
        path: 'media/code-native/journey-5-assembly-diagram.svg',
        width: 1200,
        height: 480,
        fit: 'contain',
        background: 'var(--bg-inset)',
        creator: 'Caligo project',
        changes: ['original language-neutral SVG schematic; no assembly metrics or sequence data represented'],
        alt: {
          en: 'Four-stage genome-assembly schematic: overlapping short reads form longer contigs, contigs are ordered into gapped scaffolds, and scaffolds resolve into a chromosome-scale sequence.',
          es: 'Esquema de cuatro etapas del ensamblaje genómico: lecturas cortas superpuestas forman contigs más largos, los contigs se ordenan en scaffolds con brechas y los scaffolds se resuelven en una secuencia a escala cromosómica.',
        },
        caption: {
          en: 'Assembly connects overlapping reads into contigs, orders them into scaffolds and resolves them toward chromosome-scale sequence.',
          es: 'El ensamblaje conecta lecturas superpuestas en contigs, las ordena en scaffolds y las resuelve hacia una secuencia a escala cromosómica.',
        },
        credit: {
          en: 'Explanatory assembly diagram created for Caligo.',
          es: 'Diagrama explicativo de ensamblaje creado para Caligo.',
        },
      },
    ],
  },
  {
    id: 'journey-6-deposit',
    publish: true,
    candidates: [
      {
        kind: 'code-native',
        path: 'media/code-native/journey-6-evidence-network-diagram.svg',
        width: 1200,
        height: 480,
        fit: 'contain',
        background: 'var(--bg-inset)',
        creator: 'Caligo project',
        changes: ['original language-neutral SVG schematic; no accessions, localities, or study results represented'],
        alt: {
          en: 'Bidirectional evidence chain linking a documented specimen, its reference genome, population samples, environmental context, and the research question.',
          es: 'Cadena bidireccional de evidencia que enlaza un ejemplar documentado, su genoma de referencia, muestras poblacionales, el contexto ambiental y la pregunta de investigación.',
        },
        caption: {
          en: 'A reusable reference connects specimen provenance to population and environmental evidence, then returns every layer to the question being tested.',
          es: 'Una referencia reutilizable conecta la procedencia del ejemplar con la evidencia poblacional y ambiental, y devuelve cada capa a la pregunta que se pone a prueba.',
        },
        credit: {
          en: 'Code-native schematic created for the Caligo project. No identifiers, coordinates, or study results are shown.',
          es: 'Esquema vectorial creado mediante código para el proyecto Caligo. No muestra identificadores, coordenadas ni resultados de investigación.',
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
        creator: 'Polygonia c-album',
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
          en: 'Photograph: Polygonia c-album / Wikimedia Commons. Cropped and resized.',
          es: 'Fotografía: Polygonia c-album / Wikimedia Commons. Recortada y redimensionada.',
        },
      },
    ],
  },
];

const MODULE_MAP = new Map(MODULES.map((m) => [m.id, m]));

export const getMediaModule = (id: string): MediaModule | undefined => MODULE_MAP.get(id);
