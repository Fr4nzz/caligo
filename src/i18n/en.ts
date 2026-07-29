/**
 * English source copy. This is the source language; es.ts must mirror this shape.
 *
 * Every layered scientific-question and pilot field is populated. Bracketed
 * source tokens ([S##]) map to the SOURCES ids in src/data/records.ts and
 * must be rendered by components as compact links to the source drawer,
 * never printed raw. See src/lib/citations.ts for the parser.
 */
export const en = {
  "site": {
    "name": "Caligo",
    "descriptor": "Genomes of Neotropical butterflies and moths",
    "proposition": "A Latin American-led effort developing reference genomes connected to documented biological specimens, so every sequence can be traced back to an organism and examined again."
  },
  "common": {
    "skipToContent": "Skip to content",
    "menu": "Menu",
    "close": "Close",
    "openMenu": "Open menu",
    "closeMenu": "Close menu",
    "theme": "Theme",
    "toggleTheme": "Switch between light and dark themes",
    "language": "Language",
    "chooseLanguage": "Choose language",
    "externalNote": "Opens an external site",
    "backTo": "Back to",
    "onThisPage": "On this page",
    "lastReviewed": "Evidence checked",
    "leads": "Scientific leads",
    "status": "Status",
    "privacy": "Privacy",
    "exploreQuestion": "Explore this question",
    "exploreThisPilot": "Explore this pilot project"
  },
  "status": {
    "publishedEvidence": "Published evidence",
    "databaseSnapshot": "Dated database snapshot",
    "proposedCaligoWork": "Proposed pilot project",
    "proposedPilot": "Proposed pilot project",
    "preprint": "Preprint",
    "externalContext": "Related external context"
  },
  "mediaViewer": {
    "previousImage": "Previous visual",
    "nextImage": "Next visual",
    "imageOfLabel": "Visual {n} of {total}",
    "documentaryType": "Documentary image",
    "aiConceptType": "Concept illustration",
    "codeNativeType": "Explanatory graphic",
    "aiGeneratedCredit": "Generated with AI for Caligo",
    "caveats": {
      "fieldSite": "Illustrative field scene",
      "specimen": "Illustrative organism",
      "map": "Generalised landscape view",
      "laboratory": "Illustrative laboratory workflow",
      "data": "Explanatory data schematic",
      "repository": "Illustrative repository interface"
    }
  },
  "nav": {
    "home": "Home",
    "science": "Science",
    "proposedPilots": "Pilot projects",
    "about": "About",
    "participate": "Participate",
    "projects": "Pilot projects",
    "join": "Join"
  },
  "cta": {
    "exploreScience": "Explore the questions",
    "seeProposedPilots": "Meet the proposed pilot projects",
    "contact": "Contact Caligo",
    "join": "Start a conversation",
    "seeScience": "See how the science works",
    "howToTakePart": "Ways to take part",
    "readVision": "Read about Caligo"
  },
  "committee": {
    "heading": "Join a committee",
    "body": "Committees are where the day-to-day organising happens — sampling and permits, sequencing, analysis, training and communication. The sheet lists the ones that exist and who is already on them.",
    "cta": "Open the committee sheet"
  },
  "join": {
    "title": "Join the network",
    "body": "The registration form asks for your country, institution, taxonomic groups of interest, and your experience with genomes or sequencing. It takes a few minutes and is open now.",
    "cta": "Open the registration form",
    "privacyNote": "Hosted on Google Forms; opens in a new tab. Your answers go to the Caligo organising team.",
    "ctaSecondary": "Join the network"
  },
  "home": {
    "metaTitle": "Caligo | Genomes of Neotropical butterflies and moths",
    "metaDescription": "A Latin American-led effort developing reference genomes connected to documented specimens of Neotropical butterflies and moths.",
    "hero": {
      "kicker": "Neotropical butterfly and moth genomics",
      "title": "Latin America has one of the richest Lepidoptera faunas on Earth, and one of the least-sequenced",
      "body": "Caligo is a collaborative network building reference genomes for Neotropical butterflies and moths, led by researchers based in the region."
    },
    "questions": {
      "heading": "Three questions genetic evidence can help answer",
      "intro": "Each links to what has already been published, and what it would take to go further."
    },
    "pilotsTeaser": {
      "heading": "Four proposed pilot projects",
      "intro": "They focus on chromosome change, a threatened butterfly's population connectivity, crop pests and seasonal migration."
    },
    "intro": {
      "eyebrow": "Why butterflies and moths",
      "title": "A rich fauna with many unanswered genomic questions",
      "body": [
        "Butterflies make evolution visible: mimetic wing patterns can maintain reproductive barriers, inherited DNA from another lineage can assemble the traits of a hybrid species, and chromosome numbers can change dramatically within one radiation.",
        "Reference genomes are still missing across much of Neotropical Lepidoptera diversity. Caligo keeps each new assembly tied to a documented specimen, so its identity and origin can be checked as comparisons accumulate."
      ]
    },
    "pillars": {
      "eyebrow": "How the work is shaped",
      "title": "Guiding principles for regional genomics"
    },
    "closing": {
      "title": "Bring a question, an organism or a perspective",
      "body": "Whether you hold the specimens, the sequencing capacity, the taxonomic expertise or the question, there is a way into this network. Start with an email."
    },
    "stats": {
      "participants": "participants",
      "facilities": "sequencing facilities",
      "countries": "countries",
      "pilots": "proposed pilot projects",
      "asOf": "as of July 2026"
    }
  },
  "science": {
    "metaTitle": "Science | Caligo",
    "metaDescription": "What genetic evidence from Neotropical butterflies reveals about chromosome change, hybrid species and conservation baselines.",
    "title": "Three questions reference genomes can answer",
    "intro": "A reference genome anchors one specimen’s DNA sequence to chromosome-scale coordinates. By itself it shows structure; paired with specimens, collections and field observations, it can test chromosome change, hybrid ancestry and population connectivity in Neotropical butterflies.",
    "questionsHeading": "Three questions reference genomes can help answer",
    "chromosomeFigure": {
      "src": "media/figures-published/rueda-2024-fig1-chromosome-counts.jpg",
      "citation": "Rueda-M et al. 2024, PLOS Genetics, Fig 1",
      "sourceId": "rueda-2024",
      "licence": "CC0 1.0",
      "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "width": 1600,
      "height": 1187,
      "alt": "Phylogeny of the Heliconius sara/sapho clade. Grey boxes give haploid chromosome counts along the tree, ranging from 21 to 56–60. Three dashed arrows mark separate W–autosome fusion events, labelled W+4, W+9 and W+14. Range maps and wing photographs of each subspecies sit to the right.",
      "caption": "The published evidence behind this section. Read the grey boxes: haploid chromosome counts run from 21 in most of the clade to between 56 and 60 in the sapho and eleuchia lineages. The three dashed arrows mark the separate occasions on which an autosome fused to the W."
    },
    "hybridOriginFigure": {
      "src": "media/figures-published/rosser-2024-fig1e-hybrid-origin.png",
      "citation": "Rosser et al. 2024, Nature, Fig 1e",
      "sourceId": "rosser-2024",
      "licence": "CC BY 4.0",
      "licenceUrl": "https://creativecommons.org/licenses/by/4.0/",
      "width": 900,
      "height": 764,
      "alt": "A three-branch tree. Heliconius melpomene (Amazon) on the left, Heliconius elevatus (Guianas) in the middle, Heliconius pardalinus (Andes) on the right, with a wing photograph under each name. Two arrows converge on the H. elevatus branch: one from the melpomene lineage labelled 0.7 per cent, one from the pardalinus lineage labelled 99.3 per cent. A time axis on the left runs from 813 thousand years ago at the top to 180 thousand years ago at the branch point.",
      "caption": "How H. elevatus came to have two ancestors. The two arrows are the whole argument: 99.3% of its genome traces to H. pardalinus and 0.7% to H. melpomene, meeting around 180,000 years ago. Note the wings — the hybrid does not look like a blend of its parents.",
      "changes": "cropped to panel e"
    },
    "questions": [
      {
        "heading": "Why can butterfly chromosomes split, and what changes when the W chromosome fuses?",
        "answer": [
          "Chromosome number stays stable for millions of years in many animal lineages, but some butterflies and moths depart dramatically from that pattern. Most Heliconius species carry 21 chromosomes in the haploid set; five species in the sapho lineage carry from 21 to 60 after repeated fissions, in which one ancestral chromosome became two.",
          "Lepidopteran chromosomes are holocentric: the machinery that moves a chromosome during cell division can attach along much of its length rather than at one localised centromere. A broken fragment is therefore not automatically left without attachment machinery. That architecture may make fissions easier to establish, but it does not explain why a rearrangement spread.",
          "Genomic work has also identified three separate occasions on which an autosome fused to the W — the chromosome only females carry. Once fused, that copy stops being inherited like the other autosomes and passes from mother to daughter."
        ]
      },
      {
        "heading": "How did about 1% of a genome help form a hybrid species?",
        "answer": [
          "Gene flow is the movement of inherited variants between populations through reproduction. Where hybridisation is followed by generations of backcrossing, some DNA from one lineage can become a permanent part of another. Biologists call that introgression.",
          "Heliconius elevatus is the clearest Neotropical case. Genomic, behavioural and crossing evidence supports it as a hybrid species that has persisted as its own lineage for at least 180,000 years. Continuing gene flow with H. pardalinus keeps roughly 99% of their genomes very similar. The remaining fraction is the interesting part: a scattered set of regions inherited from H. melpomene, sitting on chromosomes right across the karyotype, associated with colour pattern, wing shape, host-plant preference and sex pheromones.",
          "The genome showed where the two histories differ. The case only became persuasive once those regions were matched to mapped traits, crossing experiments and behaviour in the field."
        ]
      },
      {
        "heading": "Is a decade-old conservation baseline still true?",
        "answer": [
          "Parides ascanius is restricted to coastal restinga and wetlands in south-eastern Brazil. The IUCN assessed it as Vulnerable globally in 2018; Brazil's national assessment listed it as Endangered in 2021.",
          "Seraphim and colleagues used mitochondrial COI sequences and eight microsatellite markers to compare the surviving populations. Their 2016 study found little genetic structure, no evidence of inbreeding and high migration among most sampled sites, although one population was more isolated by the metropolitan landscape.",
          "That result is a historical baseline, not a current diagnosis. A chromosome-scale reference plus genome-wide sampling from documented specimens could test how much diversity remains and whether habitat loss, drainage and fragmentation have since interrupted movement. Precise localities should remain out of public communication."
        ]
      }
    ],
    "evidence": {
      "heading": "What different genetic evidence can show",
      "body": [
        "Not all genetic data answers the same question, and the difference matters more than it sounds. A DNA barcode is a short standard fragment, usually read on Sanger or Oxford Nanopore: useful for flagging that two specimens differ, silent on how their genomes are organised. Short-read sequencing across many individuals — Illumina, typically — shows how variation is distributed through a population. A chromosome-scale reference genome, which needs long reads from Oxford Nanopore or PacBio, shows structure: where genes sit, what stays linked to what, where a chromosome has broken or fused.",
        "The cost and effort differ by orders of magnitude, and so does what you can conclude. Saying which kind of evidence a result came from is what keeps a barcode from being read as a genome."
      ]
    },
    "ethics": {
      "heading": "Planning responsible sampling",
      "body": [
        "Good sampling starts with local collaboration. Caligo helps teams consider permits, specimen records, benefit sharing and data management from the beginning, following the requirements of each country and project."
      ]
    }
  },
  "pilots": {
    "metaTitle": "Proposed pilot projects | Caligo",
    "metaDescription": "Four proposed investigations linking chromosome evolution, threatened-population connectivity, sustainable agriculture and seasonal movement to documented genomic evidence.",
    "title": "Proposed pilot projects",
    "opening": "Four proposed projects ask where Heliconius chromosomes changed, whether Parides populations remain connected, how soybean-pest populations respond to selection, and whether Panacea migration leaves a genomic signature. Each begins with published evidence and identifies what Caligo would need to test next.",
    "fieldLabels": {
      "proposedQuestion": "What the proposed Caligo pilot project would test"
    }
  },
  "caligo": {
    "metaTitle": "Discover Caligo | Eye, eyespot and evidence",
    "metaDescription": "A popular-science story about the Caligo genus, compound eyes, wing eyespots, scales and how competing explanations are tested.",
    "meetTheNamesake": {
      "heading": "Meet the owl butterflies",
      "body": "Caligo is a Neotropical genus of owl butterflies, known for their beauty and the large eyespots on their wings.",
      "sourceNote": "Caligo is a Neotropical genus of owl butterflies."
    },
    "compoundEye": {
      "eyebrow": "Look at the right structure",
      "heading": "Compound eye, not wing eyespot",
      "body": "The bright round feature in the photograph is the butterfly’s compound eye, a visual organ built from many small units called ommatidia. The large ringed marks on the wings are eyespots: patterns formed by scales. They can resemble eyes in a photograph, but they are different structures with different functions. Keeping that distinction clear is the first step before asking what either feature does."
    },
    "hypotheses": {
      "heading": "What might a wing eyespot do?",
      "intro": "An eyespot can look obvious to us and still have several possible biological explanations. Each hypothesis makes a different prediction, and its importance can change with predator, light, behaviour and species.",
      "labels": {
        "prediction": "What we would expect",
        "limitation": "What this does not settle"
      },
      "rows": [
        {
          "hypothesis": "Resemble the eye of a larger animal",
          "prediction": "Some predators should hesitate or avoid attacking when the pattern is visible.",
          "limitation": "Avoidance must be tested against simpler effects of size, contrast and novelty; a human impression of “an eye” is not enough."
        },
        {
          "hypothesis": "Redirect an attack toward the wing",
          "prediction": "Strikes should land more often near the eyespot, potentially sparing the head or body.",
          "limitation": "More wing strikes do not automatically mean fewer attacks or higher survival, and outcomes depend on the predator and damage."
        },
        {
          "hypothesis": "Attract attention because it is conspicuous",
          "prediction": "High contrast, placement or motion should draw a predator’s attention even when the mark is not interpreted as an eye.",
          "limitation": "Conspicuousness alone does not say whether the effect helps the butterfly, harms it or changes with context."
        },
        {
          "hypothesis": "Play a role in signalling among butterflies",
          "prediction": "Responses should vary with sex, courtship, territorial behaviour or the light environment in which butterflies see one another.",
          "limitation": "Evidence must separate communication between butterflies from predator-related effects."
        }
      ],
      "resultNarrow": "In a 2024 field experiment with Caligo martia, damage patterns were consistent with attacks being redirected toward the wings, but the eyespots did not reduce overall attack risk. That supports deflection in this system; it does not establish one universal function for every Caligo species. [S18]",
      "sourceNote": "Primary source: Iserhard et al. 2024 [S18]."
    },
    "scales": {
      "heading": "A wing pattern is built from thousands of scales",
      "body": "Butterfly scales are tiny structures that overlap across the wing. Pigments absorb some wavelengths; microscopic architecture can scatter, reflect or suppress light. A study of a dark eyespot region in Caligo memnon described nanoscale structures associated with its black appearance. Elsewhere in the Neotropics, the glasswing Greta oto achieves transparency through much lower scale density, narrow bristle-like scales and irregular wax nanopillars that reduce reflection. Similar-looking effects can arise from very different physical arrangements. That is another reason to connect visible traits with microscopy, development and comparative genomics. [S19][S12]"
    },
    "genomicsCould": {
      "heading": "From the visible butterfly to inherited information",
      "body": "A genome adds another layer of evidence beneath the visible organism. Researchers can compare genes and regulatory regions involved in scale development, pigmentation, vision or behaviour across related species, then investigate when those regions changed, crossed between lineages or evolved under different pressures. Experiments, microscopy, natural history and sensory biology remain essential for understanding perception and behaviour."
    }
  },
  "projects": {
    "rail": {
      "overview": "Overview",
      "heliconius": "Heliconius",
      "parides": "Parides ascanius",
      "soybean": "Soybean Lepidoptera",
      "panacea": "Panacea prola"
    },
    "metaTitle": "Proposed pilot projects | Caligo",
    "metaDescription": "Four proposed pilot projects linking published evidence to testable Neotropical genomics questions.",
    "title": "Proposed pilot projects",
    "intro": "Each proposed pilot project begins with published evidence and a question that demands more. Follow the organism, the observations and samples the work would need, the contribution of genomics and the evidence supplied by ecology, taxonomy or experiment.",
    "pilotProposal": {
      "heading": "The proposed Caligo pilot project",
      "leadsLabel": "Pilot project leads",
      "goalLabel": "What the pilot project would do"
    }
  },
  "about": {
    "metaTitle": "About | Caligo",
    "metaDescription": "Caligo’s purpose, scientific stance and place in the wider biodiversity-genomics landscape.",
    "title": "About Caligo",
    "body": "Caligo is a Latin American-led effort focused on reference genomes for Neotropical butterflies and moths. It brings together organisms, documented specimens, taxonomy and comparative genomics so regional questions can be investigated with evidence that remains traceable and reusable.",
    "name": {
      "heading": "Why Caligo",
      "body": [
        "Caligo is a Neotropical genus of owl butterflies, named for the large eyespots on their wings. They are common, widely recognised across the region, and have never had a reference genome — which is roughly the situation the network exists to change."
      ]
    },
    "leadership": {
      "heading": "Leadership",
      "intro": "The initiative is coordinated by researchers from institutions in Latin America and internationally."
    },
    "facilities": {
      "heading": "Partner facilities",
      "intro": "Seven institutions in Colombia, Panama, Brazil, Ecuador and Chile provide the sequencing platforms the network can currently draw on."
    },
    "events": {
      "heading": "Events",
      "intro": "Where the network has met, and what is planned next."
    },
    "positioning": {
      "heading": "Connections and context",
      "body": "Caligo is engaged with EBP Latin America, the Earth BioGenome Project's regional initiative, and with Genotropics, a network working on the genomic diversity of tropical organisms."
    },
    "governance": {
      "heading": "Governance",
      "intro": "Decisions are made by an organising committee drawn from the participating institutions. The model is still a draft and the committee can change it."
    }
  },
  "participate": {
    "metaTitle": "Participate | Caligo",
    "metaDescription": "Ways for researchers, students, collections, educators, naturalists, institutions and supporters to begin a conversation with Caligo.",
    "title": "Participate",
    "intro": "Caligo is built by people who know the organisms, the collections and the landscapes. Tell us what you work on and what you would like to investigate — that conversation is where most collaborations start.",
    "contact": {
      "heading": "Start a conversation",
      "body": "Write with a short introduction, your connection to Neotropical butterflies or moths, and the question or kind of contribution you would like to discuss.",
      "email": "genomica.neotropical@gmail.com",
      "ariaLabel": "Email Caligo at genomica.neotropical@gmail.com"
    },
    "audiences": {
      "heading": "Who the network is for",
      "items": [
        "Researchers and collections with taxonomic, specimen, ecological or genomic expertise",
        "Students and early-career scientists looking to learn, contribute or connect a research question",
        "Educators and communicators developing accurate, engaging Neotropical science resources",
        "Naturalists with documented observations and deep knowledge of organisms or places",
        "Institutions and supporters interested in responsible regional biodiversity genomics"
      ]
    },
    "discord": {
      "heading": "Meet the Caligo community",
      "body": "Discord offers an informal space for questions, introductions, shared resources and conversation across countries and disciplines. Email remains the route for formal or sensitive enquiries.",
      "active": {
        "button": "Join the Discord",
        "ariaLabel": "Join the Caligo Discord community; opens an external site"
      },
      "pending": {
        "button": "New invite link coming soon",
        "ariaLabel": "Caligo Discord invite link will be added soon",
        "note": "The community option remains here while a new invitation link is prepared. You can contact Caligo by email now."
      }
    },
    "beforeSubmitting": {
      "heading": "Begin safely",
      "body": "A first email is not the place for precise localities of threatened species, unpublished specimen records, biological material, permit files or personal data. Describe the topic in general terms and we will agree a secure route for the rest."
    },
    "languagePolicy": {
      "heading": "Working languages",
      "body": "Official communications are in English and Spanish. Portuguese is also used in meetings, with informal translation among participants who understand both."
    }
  },
  "sourceDrawer": {
    "open": "Sources and methods",
    "close": "Close sources and methods",
    "citationLabel": "Evidence",
    "checkedDate": "Checked",
    "databaseAccessed": "Database accessed",
    "scopeLabel": "What this source supports",
    "limitsLabel": "Limits and exclusions",
    "methodNote": "Method note",
    "externalContext": "Related external context",
    "preprint": "Preprint; not peer reviewed at the time of checking.",
    "sensitiveLocalities": "Precise sensitive-species localities are not shown.",
    "mutableData": "Mutable database or institutional record; access date shown."
  },
  "notFound": {
    "title": "This page has not been assembled yet",
    "body": "The address may have changed, or the page may never have existed. Here is the way back.",
    "homeLink": "Back to the home page"
  },
  "footer": {
    "tagline": "A Latin American network building reference genomes for the butterflies and moths of the Neotropics.",
    "rights": "Caligo",
    "contact": "Contact",
    "navHeading": "Explore",
    "languageHeading": "Language",
    "sources": "Sources and methods"
  }
} as const;

/** Widen literal leaves so the Spanish dict can mirror the shape. */
export type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly DeepWiden<U>[]
        : T extends object
          ? { [K in keyof T]: DeepWiden<T[K]> }
          : T;

export type Dict = DeepWiden<typeof en>;
