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
    "proposition": "Caligo is a Latin American-led network building reference genomes for Neotropical butterflies and moths. Each genome is linked to a documented specimen."
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
    "sourceLinkLabel": "Source",
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
    "body": "Committees organise sampling and permits, sequencing, analysis, training and communication. The committee sheet lists each group and its current members.",
    "cta": "Open the committee sheet"
  },
  "join": {
    "title": "Join the network",
    "body": "The registration form asks for your country, institution, taxonomic groups of interest, and your experience with genomes or sequencing. It takes a few minutes and is open now.",
    "cta": "Open the registration form",
    "privacyNote": "Responses are collected through Google Forms and sent to the Caligo organising team.",
    "ctaSecondary": "Join the network"
  },
  "home": {
    "metaTitle": "Caligo | Genomes of Neotropical butterflies and moths",
    "metaDescription": "A Latin American-led effort developing reference genomes connected to documented specimens of Neotropical butterflies and moths.",
    "hero": {
      "kicker": "Latin American-led genomics",
      "title": "The Neotropics are rich in species but short on reference genomes.",
      "body": "Caligo connects researchers, collections and sequencing facilities to change that."
    },
    "questions": {
      "heading": "Four questions genomes can help answer",
      "intro": "Each discovery reveals what to ask next."
    },
    "researchCards": [
      {
        "question": "How can butterfly chromosomes split and fuse, yet still work?",
        "scienceLink": "Read how the chromosomes changed",
        "projectLink": "See the proposed Heliconius study"
      },
      {
        "question": "Are threatened butterfly populations still connected a decade later?",
        "scienceLink": "Read what the 2016 population study found",
        "projectLink": "See how Caligo would revisit connectivity"
      },
      {
        "question": "How do crop pests move and evolve resistance across soybean landscapes?",
        "scienceLink": "Read what genomics reveals about movement and resistance",
        "projectLink": "See the proposed soybean landscape study"
      },
      {
        "question": "Thousands of Panacea prola fly north-east. Where do they come from?",
        "scienceLink": "Read the evidence for seasonal movement",
        "projectLink": "See how Caligo would trace the migration wave"
      }
    ],
    "pilotsTeaser": {
      "heading": "From questions to pilot projects",
      "intro": "Caligo is shaping four projects on chromosome change, threatened-population connectivity, crop pests and seasonal migration."
    },
    "intro": {
      "eyebrow": "Why butterflies and moths",
      "title": "A rich fauna with many unanswered genomic questions",
      "body": [
        "Butterflies make evolutionary change unusually easy to see. Wing patterns can maintain reproductive barriers. DNA inherited from another lineage can help form a hybrid species, and chromosome numbers can change sharply among close relatives.",
        "Reference genomes are still missing across much of Neotropical Lepidoptera diversity. Caligo links each assembly to a documented specimen so researchers can check which organism was sequenced and where it came from."
      ]
    },
    "pillars": {
      "eyebrow": "How the work is shaped",
      "title": "Guiding principles for regional genomics"
    },
    "closing": {
      "title": "Bring a question, an organism or a perspective",
      "body": "You can contribute specimens, sequencing capacity, taxonomic knowledge or a research question. Send us an email or join the conversation on Discord."
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
    "metaDescription": "What genetic evidence from Neotropical butterflies and moths reveals about chromosomes, hybrid species, conservation, museum collections, crop pests and seasonal movement.",
    "title": "Questions genomes can help answer",
    "intro": "A short genetic marker can compare populations. Hundreds of captured genes can place an old museum specimen on a family tree. A chromosome-scale assembly can show where chromosomes split or fused. The studies below explain what each dataset resolved and which questions still need specimens, fieldwork or experiments.",
    "questionsHeading": "Questions genomes can help answer",
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
      "caption": "How H. elevatus came to have two ancestors. The two arrows show that 99.3% of its genome traces to H. pardalinus and 0.7% to H. melpomene, with the lineages meeting around 180,000 years ago. The hybrid does not look like a blend of its parents.",
      "changes": "cropped to panel e"
    },
    "questions": [
      {
        "heading": "How can butterfly chromosomes split and fuse, yet still work?",
        "answer": [
          "Chromosome number remains stable for millions of years in many animal lineages. Some butterflies and moths are different. Most Heliconius species carry 21 chromosomes in the haploid set, but five species in the sapho group have between 21 and 60 after repeated fissions.",
          "Lepidopteran chromosomes are holocentric. During cell division, the machinery that moves them can attach along much of the chromosome instead of at one localised centromere. A broken fragment can therefore retain the machinery needed to move into a daughter cell. This may help chromosome fissions persist, but it does not explain why they spread through a population.",
          "In the Heliconius sapho group, genomic studies identified three W-autosome fusion events. The W fused with chromosome 4 in their common ancestor, followed by separate fusions with chromosomes 9 and 14 in two descendant lineages."
        ]
      },
      {
        "heading": "How did just 1% of a genome help form a hybrid species?",
        "answer": [
          "Gene flow is the movement of inherited variants between populations through reproduction. Where hybridisation is followed by generations of backcrossing, some DNA from one lineage can become a permanent part of another. Biologists call that introgression.",
          "Heliconius elevatus formed through hybridisation and has persisted as a distinct lineage for at least 180,000 years. Continuing gene flow with H. pardalinus keeps about 99% of their genomes similar. About 1% of the H. elevatus genome came from H. melpomene. These regions occur across several chromosomes and are associated with colour pattern, wing shape, host-plant preference and sex pheromones.",
          "Genomic comparisons located the regions inherited from H. melpomene. Trait mapping, crossing experiments and field observations then connected those regions to differences between the species."
        ]
      },
      {
        "heading": "Are threatened butterfly populations still connected a decade later?",
        "answer": [
          "Parides ascanius is restricted to coastal restinga and wetlands in south-eastern Brazil. The IUCN assessed it as Vulnerable globally in 2018. Brazil's national assessment listed it as Endangered in 2021.",
          "Seraphim and colleagues used mitochondrial COI sequences and eight microsatellite markers to compare the surviving populations. Their 2016 study found little genetic structure, no evidence of inbreeding and high migration among most sampled sites, although one population was more isolated by the metropolitan landscape.",
          "The 2016 result provides a baseline but does not show whether the populations remain connected today. A chromosome-scale reference and new population sampling could measure how much diversity remains and whether habitat loss, drainage or fragmentation has interrupted gene flow. Precise localities should remain out of public communication."
        ]
      },
      {
        "heading": "Can DNA from a century-old museum specimen redraw the moth family tree?",
        "answer": [
          "Natural-history collections preserve species that may be difficult to collect again, but age and storage break their DNA into short fragments. Target enrichment can recover hundreds of selected genes from those fragments.",
          "St Laurent and colleagues recovered an average of more than 400 of 515 targeted loci from 19 dry museum specimens. Together with recently collected material, those sequences represented 47 species and 32 of the 36 recognised genera of Mimallonidae, supporting a revised classification with six subfamilies, eight tribes and three newly described genera.",
          "Mayer and colleagues later applied the approach to 37 pinned butterflies and moths collected between 1892 and 2017, recovering hundreds to thousands of nuclear loci. These sequences can place a museum specimen on an evolutionary tree and help revise its classification. Because they cover selected genes rather than the complete genome, they cannot show chromosome structure, gene order or large rearrangements. A chromosome-scale reference from fresh or well-preserved material would provide that complementary information."
        ]
      },
      {
        "heading": "How do crop pests move and evolve resistance across soybean landscapes?",
        "answer": [
          "Several closely related moth species occur in Brazilian soybean fields and can be difficult to distinguish during monitoring. Reliable identification matters because movement and resistance can differ among species.",
          "Brazilian studies have found changes in susceptibility to insecticidal proteins that require repeated, species-specific testing. Genomic data can distinguish the species, compare movement among populations and identify variants associated with resistance.",
          "Genomes do not measure crop damage or prove that a variant causes resistance by themselves. Field trials, bioassays, agronomy and growers’ observations are still needed to choose a management response."
        ]
      },
      {
        "heading": "Thousands of Panacea prola fly north-east. Where do they come from?",
        "answer": [
          "In 2020, Gallice and colleagues recorded 2,509 Panacea prola during fifty one-hour observations in south-eastern Peru. Only 19 flew in another direction. They presented the observation as the first evidence of an Amazonian insect migration.",
          "The closest available genomic reference is from another member of the same subfamily, Batesia hypochlora. It cannot reveal where the moving Panacea came from, whether they belonged to one population or several, or whether the movement repeats each year.",
          "Comparing samples from different places, seasons and years could estimate ancestry and connectivity. Genomes would still need to be combined with field observations, environmental data or other movement evidence."
        ]
      }
    ],
    "evidence": {
      "heading": "What different genetic evidence can show",
      "body": [
        "DNA barcodes help identify specimens and compare closely related species. Genome-wide data from many individuals can estimate genetic diversity, population structure, gene flow and inbreeding. A chromosome-scale reference shows how DNA is arranged into chromosomes, including gene order, fusions, fissions and other structural changes.",
        "These datasets require different samples, equipment and analyses, and they answer different biological questions."
      ]
    },
    "ethics": {
      "heading": "Planning responsible sampling",
      "body": [
        "Sampling plans need permits, specimen records, agreements on how research results, training and other benefits will be shared, and a plan for managing data. Requirements differ among countries, so local collaborators need to be involved from the start."
      ]
    }
  },
  "pilots": {
    "metaTitle": "Proposed pilot projects | Caligo",
    "metaDescription": "Four proposed investigations linking chromosome evolution, threatened-population connectivity, sustainable agriculture and seasonal movement to documented genomic evidence.",
    "title": "Proposed pilot projects",
    "opening": "These four pilot projects begin where earlier studies leave off. Each asks what new samples and genomic data could reveal.",
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
          "limitation": "Avoidance must be tested against simpler effects of size, contrast and novelty. A human impression of “an eye” is not enough."
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
      "resultNarrow": "In a 2024 field experiment with Caligo martia, damage patterns were consistent with attacks being redirected toward the wings, but the eyespots did not reduce overall attack risk. That supports deflection in this system. It does not establish one universal function for every Caligo species. [S18]",
      "sourceNote": "Primary source: Iserhard et al. 2024 [S18]."
    },
    "scales": {
      "heading": "A wing pattern is built from thousands of scales",
      "body": "Butterfly scales are tiny structures that overlap across the wing. Pigments absorb some wavelengths. Microscopic architecture can scatter, reflect or suppress light. A study of a dark eyespot region in Caligo memnon described nanoscale structures associated with its black appearance. Elsewhere in the Neotropics, the glasswing Greta oto achieves transparency through much lower scale density, narrow bristle-like scales and irregular wax nanopillars that reduce reflection. Similar-looking effects can arise from very different physical arrangements. That is another reason to connect visible traits with microscopy, development and comparative genomics. [S19][S12]"
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
    "intro": "These four pilot projects begin where earlier studies leave off. Each asks what new samples and genomic data could reveal.",
    "pilotProposal": {
      "heading": "The proposed Caligo pilot project",
      "leadsLabel": "Pilot project leads",
      "resourcesLabel": "Starting material and capacity"
    }
  },
  "about": {
    "metaTitle": "About | Caligo",
    "metaDescription": "Caligo’s purpose, scientific stance and place in the wider biodiversity-genomics landscape.",
    "title": "About Caligo",
    "body": "Caligo is a Latin American-led effort to build reference genomes for Neotropical butterflies and moths. Each genome is linked to an identified specimen and the taxonomic expertise needed to verify it. Researchers can then use these genomes to study questions defined in the region.",
    "name": {
      "heading": "Why Caligo",
      "body": [
        "Caligo is Latin for darkness or dimness. It is also a Neotropical genus of owl butterflies, recognisable by the large eyespots on their wings. The name comes from a familiar regional butterfly, but Caligo covers the much wider diversity of Neotropical butterflies and moths."
      ]
    },
    "building": {
      "heading": "What Caligo is building",
      "items": [
        {
          "title": "Sequence undersampled groups",
          "body": "Produce DNA barcodes, population data and reference assemblies for Neotropical families and subfamilies that remain poorly represented."
        },
        {
          "title": "Build regional capacity",
          "body": "Expand sequencing, sample banking and bioinformatics in Latin America."
        },
        {
          "title": "Training and fair credit",
          "body": "Support training, open data and shared publications while recognising everyone who contributes specimens, knowledge or analysis."
        }
      ]
    },
    "workflow": {
      "eyebrow": "From specimen to shared evidence",
      "heading": "Keep every genome linked to its specimen",
      "projectName": "Project Psyche",
      "introAfter": " coordinates butterfly and moth sequencing across Europe through sampling hubs, shared standards and openly released genomes. Caligo draws on that model for a Latin American-led programme focused on Neotropical species.",
      "steps": [
        "Identify the organism and preserve a voucher specimen",
        "Agree permissions, roles, credit and benefit sharing",
        "Sequence the material with an appropriate regional facility",
        "Assemble the genome and check its quality and identity",
        "Deposit the sequence and connect it to specimen metadata",
        "Use the genome in comparative studies and update it when better data become available"
      ]
    },
    "leadership": {
      "heading": "Leadership",
      "intro": "The initiative is coordinated by researchers from institutions in Latin America and internationally."
    },
    "facilities": {
      "heading": "Partner facilities",
      "intro": "Seven partner institutions in Colombia, Panama, Brazil, Ecuador and Chile provide sequencing platforms for Caligo projects."
    },
    "events": {
      "heading": "Events",
      "intro": "Caligo held its first sequencing workshop in 2026 and is planning a hackathon for 2027."
    },
    "positioning": {
      "heading": "Connections and context",
      "body": "Caligo is engaged with EBP Latin America, the Earth BioGenome Project's regional initiative, and with Genotropics, a network working on the genomic diversity of tropical organisms."
    }
  },
  "participate": {
    "metaTitle": "Participate | Caligo",
    "metaDescription": "Ways for researchers, students, collections, educators, naturalists, institutions and supporters to begin a conversation with Caligo.",
    "title": "Participate",
    "intro": "Caligo is built by people who know the organisms, collections and places where the work happens. Tell us what you study and what you would like to investigate. Most collaborations start with a conversation.",
    "contact": {
      "heading": "Start a conversation",
      "body": "Email Caligo with your research interests, your connection to Neotropical butterflies or moths and the contribution you would like to discuss.",
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
    "benefits": {
      "heading": "What participation can lead to",
      "intro": "Depending on the project and available funding, participants may take part in:",
      "items": [
        "New collaborations around organisms, collections, methods or research questions",
        "Training, exchanges and shared technical experience",
        "Joint research and funding proposals",
        "Shared publications that recognise regional expertise"
      ]
    },
    "discord": {
      "heading": "Meet the Caligo community",
      "body": "Discord is an informal space for introductions, questions and shared resources across countries and disciplines.",
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
      "heading": "A short introduction is enough",
      "body": "Tell us who you are, what you study and what you would like to explore. We can arrange how to share specimen records, permits or other project files later."
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
    "preprint": "Preprint. A peer-reviewed journal version was not found when this source was checked.",
    "sensitiveLocalities": "Precise sensitive-species localities are not shown.",
    "mutableData": "Mutable database or institutional record. The access date is shown."
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
