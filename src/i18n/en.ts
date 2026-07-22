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
    "exploreThisPilot": "Explore this pilot"
  },
  "status": {
    "publishedEvidence": "Published evidence",
    "databaseSnapshot": "Dated database snapshot",
    "proposedCaligoWork": "Proposed pilot",
    "proposedPilot": "Proposed pilot",
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
    "aiConceptCaveat": "",
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
    "proposedPilots": "Pilots",
    "about": "About",
    "participate": "Participate",
    "caligoStory": "Discover",
    "network": "Network",
    "projects": "Pilots",
    "capacity": "Learning and exchange",
    "join": "Join"
  },
  "cta": {
    "exploreScience": "Explore the questions",
    "seeProposedPilots": "Meet the proposed pilots",
    "contact": "Contact Caligo",
    "join": "Start a conversation",
    "seeScience": "See how the science works",
    "howToTakePart": "Ways to take part",
    "readVision": "Read about Caligo"
  },
  "join": {
    "title": "Join the network",
    "body": "The registration form asks for your country, institution, taxonomic groups of interest, and your experience with genomes or sequencing. It takes a few minutes and is open now.",
    "cta": "Open the registration form",
    "newTabNote": "Opens Google Forms in a new tab.",
    "privacyNote": "The form is hosted on Google Forms. The information you submit goes to the Caligo organizing team and is used only to register your interest and help shape the network.",
    "formNameNote": "The form is still titled \"Genomics of Neotropical Lepidoptera\", the initiative's earlier name.",
    "ctaSecondary": "Join the network"
  },
  "home": {
    "metaTitle": "Caligo | Genomes of Neotropical butterflies and moths",
    "metaDescription": "A Latin American-led effort developing reference genomes connected to documented specimens of Neotropical butterflies and moths.",
    "rail": {
      "overview": "Overview",
      "fromOrganismToGenome": "From organism to genome",
      "whatReferenceSupports": "What a reference supports",
      "questions": "Questions",
      "proposedPilots": "Proposed pilots",
      "discoverCaligo": "Discover Caligo"
    },
    "hero": {
      "kicker": "Neotropical butterfly and moth genomics",
      "title": "Latin America has one of the richest Lepidoptera faunas on Earth, and one of the least-sequenced",
      "body": "Caligo is a collaborative network generating genomic resources for Neotropical butterflies and moths, connecting regional expertise, building local capacity, and ensuring fair benefit-sharing."
    },
    "snapshot": {
      "heading": "Extraordinary diversity. Uneven genomic coverage.",
      "body": "The Neotropics hold an exceptional variety of butterflies and moths, from familiar longwings to small, little-studied moth lineages. Yet genomic research remains concentrated in a limited set of organisms, and tropical groups are still underrepresented. Caligo’s contribution is practical: develop reference genomes tied to specimens whose identity and origin can be checked, then use them with ecological, taxonomic and population evidence to ask regional questions. [S01]",
      "sourceNote": "Regional framing follows Wright et al. 2026 [S01]. Caligo does not publish a Neotropical genome-coverage percentage because no frozen, reproducible denominator-and-assembly analysis is yet available. NCBI documentation was checked 16 July 2026 [S23].",
      "sourceIds": [
        "wright-2026",
        "ncbi-datasets-2026"
      ]
    },
    "journey": {
      "heading": "From organism to genome",
      "intro": "A trustworthy genomic resource is a chain of biological and documentary decisions, not just a sequence file.",
      "assemblyDiagram": {
        "conceptual": "Educational animation — conceptual, not data",
        "title": "Assemble, then assess",
        "description": "A simplified genome-assembly workflow. Overlapping reads align into fewer, longer contigs. Ordering links organise contigs into several chromosome-scale units while one unresolved gap remains visible. A final assessment checks continuity, completeness and known limits or gaps without reporting numeric scores. The marks are illustrative and do not represent sequence data, an assembly or a result from Caligo.",
        "play": "Play the explanation",
        "replay": "Replay",
        "ready": "Ready to animate",
        "playing": "Explanation playing",
        "finished": "Explanation complete",
        "reduced": "Complete explanation shown without motion",
        "reads": "overlapping reads",
        "contigs": "longer contigs",
        "ordering": "order links",
        "chromosomes": "chromosome-scale units",
        "gap": "unresolved gap",
        "assessment": "assessment",
        "continuity": "continuity",
        "completeness": "completeness",
        "limits": "limits + gaps",
        "summary": "several units · one conceptual gap remains",
        "disclaimer": "Illustrative workflow — not sequence data, scores or Caligo results"
      },
      "steps": [
        {
          "title": "Ask and identify",
          "body": "Start with a biological question and the best available identification."
        },
        {
          "title": "Record provenance",
          "body": "Capture who, where, when, permissions and collection context."
        },
        {
          "title": "Preserve a voucher",
          "body": "Keep a traceable specimen or material record that can be examined again."
        },
        {
          "title": "Extract and sequence",
          "body": "Turn a documented sample into DNA reads without breaking the chain of evidence."
        },
        {
          "title": "Assemble and assess",
          "body": "Build the genomic resource and report its completeness, continuity and limits."
        },
        {
          "title": "Deposit and credit",
          "body": "Connect sequence, metadata, voucher, methods and contributor credit in durable repositories."
        }
      ]
    },
    "uses": {
      "heading": "One reference genome, four different investigations",
      "intro": "A reference genome is an assembled DNA sequence used as a common map. It becomes informative only when researchers add the right specimens, samples, observations and comparisons for the question at hand.",
      "rows": [
        {
          "use": "Identify samples and organise sequence reads",
          "hook": "A common genomic map helps researchers place new DNA fragments and compare them consistently.",
          "referenceContribution": "Provides coordinates for read mapping and regions that can help distinguish known lineages.",
          "whatElseIsNeeded": "Verified specimens, reliable taxonomy, comparison data and contamination-aware methods.",
          "cannotShowAlone": "It does not prove the identity of an unknown sample or settle species boundaries by itself."
        },
        {
          "use": "Compare chromosomes and gene order",
          "hook": "Related genomes can reveal where chromosomes split, fused, inverted or kept the same structure.",
          "referenceContribution": "Lets researchers align chromosome regions and examine conserved gene blocks, known as synteny.",
          "whatElseIsNeeded": "Chromosome-scale assemblies from related species, trustworthy relationships and explicit comparison methods.",
          "cannotShowAlone": "It does not explain why a rearrangement evolved or what effect it had on an organism."
        },
        {
          "use": "Study variation within and among populations",
          "hook": "Many individuals mapped to the same reference can reveal patterns of relatedness, diversity and connectivity.",
          "referenceContribution": "Provides a shared coordinate system for comparing inherited variants across samples.",
          "whatElseIsNeeded": "Planned sampling across individuals, places or times; ecological metadata; and demographic models.",
          "cannotShowAlone": "One reference individual cannot represent all variation or reveal a population’s movement history."
        },
        {
          "use": "Compare living populations with museum history",
          "hook": "Historical specimens can place today’s genomes against records collected decades, or more than a century, earlier.",
          "referenceContribution": "Helps organise fragmented historical DNA and compare it with present-day samples.",
          "whatElseIsNeeded": "Curated specimens, strong provenance, damage-aware methods and cautious interpretation of uneven historical sampling.",
          "cannotShowAlone": "A reference genome cannot repair missing collection records or turn a biased archive into a complete past population."
        }
      ]
    },
    "questions": {
      "heading": "Six questions that open whole worlds",
      "intro": "Six doorways into the questions regional genomics can investigate. Each leads to the full story on the Science page.",
      "labels": {
        "example": "A Neotropical example",
        "evidence": "Evidence scientists would need",
        "genomesCan": "What genomes can contribute",
        "limits": "Evidence needed beyond genomics",
        "sources": "Sources"
      },
      "items": [
        {
          "question": "How can chromosomes split and fuse while a lineage keeps evolving?",
          "body": "A butterfly lineage can reorganise the packages that hold its DNA without simply breaking apart.",
          "answer": "Chromosomes are long packages of DNA. A chromosome fission occurs when one ancestral chromosome becomes two; a fusion joins DNA from two ancestral chromosomes into one. These changes can reshape which genes stay linked, how often DNA is recombined during reproduction and how sex chromosomes evolve. In Heliconius, most species have 21 chromosomes in the haploid set, yet five species in the sapho subclade range from 21 to 60 after extensive fissions. Genomic evidence also supports three separate fusions between the female-specific W chromosome and autosomes. The striking numbers show that major structural change occurred. They do not, by themselves, reveal whether selection, chance or another process made those changes persist. That requires comparisons across species, traits and evolutionary histories. [S02][S03]",
          "example": "Most Heliconius retain 21 haploid chromosomes, while members of one lineage reach counts as high as 60; researchers also identified three W–autosome fusion events. [S02]",
          "evidence": "Chromosome-scale assemblies from several related species; chromosome counts or microscopy where available; reliable species relationships; and trait, recombination or breeding evidence that can test consequences.",
          "genomesCan": "Show which chromosome regions correspond across species, locate fissions and fusions, and reveal how recombination and linked variation changed around them.",
          "limits": "A genome comparison cannot establish why a rearrangement spread, whether it caused speciation, or how it affects behaviour and survival without additional biological evidence.",
          "closing": "The deeper question reaches beyond chromosome counts to what changed when the genome was repackaged.",
          "sourceNote": "Primary sources: Rueda-M et al. 2024 [S02]; Mackay-Smith et al. 2026 [S03].",
          "sourceIds": [
            "rueda-2024",
            "mackay-smith-2026"
          ]
        },
        {
          "question": "When does DNA cross the boundary between lineages?",
          "body": "Evolutionary history is not always a tidy tree: neighbouring lineages can exchange inherited variation.",
          "answer": "Gene flow is the movement of inherited variants between populations through reproduction. When hybridisation is followed by repeated breeding, some DNA from one lineage can become a lasting part of another; scientists call that introgression. Heliconius offers a vivid Neotropical example. Genomic, behavioural and crossing evidence supports H. elevatus as a hybrid species that has persisted as a distinct lineage for more than 720,000 generations. Ongoing gene flow with H. pardalinus makes roughly 99% of their genomes very similar, while a small set of regions inherited from H. melpomene is associated with colour pattern, wing shape, host-plant preference, sex pheromones and mate choice. The genome revealed where histories differ, but the case became persuasive only when those patterns were joined to trait mapping, experiments and behaviour. [S04][S05]",
          "example": "In H. elevatus, a small fraction of the genome carries trait-linked ancestry from H. melpomene even though continuing gene flow with H. pardalinus homogenises most of the genome. [S04]",
          "evidence": "Many individuals from the relevant populations; a strong reference genome; phased or otherwise well-resolved genomic data; explicit demographic models; and independent evidence from traits, geography, behaviour or crosses.",
          "genomesCan": "Detect regions with different evolutionary histories, estimate patterns of ancestry and test whether inherited variants moved between lineages.",
          "limits": "Genomic similarity alone cannot prove that a transferred variant was adaptive, identify the ecological mechanism or show that hybridisation created a species.",
          "closing": "A surprising patch of shared DNA is the beginning of an investigation, not its conclusion.",
          "sourceNote": "Primary sources: Rosser et al. 2024 [S04]; Edelman et al. 2019 [S05].",
          "sourceIds": [
            "rosser-2024",
            "edelman-2019"
          ]
        },
        {
          "question": "Which populations remain connected, and which are becoming isolated?",
          "body": "Two populations can look alike even after the routes between them have begun to disappear.",
          "answer": "Population connectivity means that individuals, and therefore inherited variants, still move among populations often enough to leave a detectable signal. Genetic diversity is the variety of inherited DNA variants within a population or species. Both depend on sampling: which individuals, places and moments are included. Parides ascanius, a threatened butterfly of Brazil’s coastal habitats, provides a useful baseline. A study published in 2016 found low genetic structure and inferred substantial migration among the populations it sampled. That does not guarantee that connectivity is unchanged today, especially where habitat loss, drainage and fragmentation continue. A new genomic study would need to compare carefully designed contemporary sampling with the earlier evidence, while protecting sensitive localities. [S06][S07][S08]",
          "example": "Earlier genetic work on sampled P. ascanius populations found little structure and high inferred migration; that published result is a baseline to revisit, not proof of present-day connectivity. [S06]",
          "evidence": "Many individuals from a planned set of populations and times; a reference genome; habitat and landscape information; demographic models; and, where possible, direct observations or mark–recapture data.",
          "genomesCan": "Estimate relatedness, population structure, historical and recent gene flow, inbreeding and changes in genomic diversity.",
          "limits": "Genomes alone cannot show the exact route an individual travelled, measure habitat quality or determine conservation priorities without ecological and social context.",
          "closing": "Connectivity is not a line on a map; it is a moving relationship that must be measured again.",
          "sourceNote": "Primary study and assessments: Seraphim et al. 2016 [S06]; IUCN 2018 [S07]; ICMBio 2021 [S08].",
          "sourceIds": [
            "seraphim-2016",
            "iucn-parides-2018",
            "icmbio-parides-2021"
          ]
        }
      ]
    },
    "pilotsTeaser": {
      "heading": "Four proposed pilots, four ways to test the approach",
      "intro": "Four biological puzzles shape four proposed lines of work. The Pilots page connects each question to published evidence, methods and proposed next steps."
    },
    "namesakeTeaser": {
      "heading": "Look closer: form becomes evidence",
      "body": "A glasswing makes transparency with sparse, altered scales and anti-reflective nanostructures. Heliconius butterflies can see ultraviolet differences invisible to us. Museum specimens can still yield hundreds of genetic loci after more than a century. These are not isolated curiosities: each visible surprise opens a question about development, evolution or change through time. [S12][S13][S16]",
      "linkLabel": "Discover the organism stories",
      "sourceNote": "Sources: Pomerantz et al. 2021 [S12]; Chakraborty et al. 2023 [S13]; Mayer et al. 2021 [S16].",
      "sourceIds": [
        "pomerantz-2021",
        "chakraborty-2023",
        "mayer-2021"
      ]
    },
    "name": {
      "eyebrow": "About the name",
      "title": "A name for what remains to be seen",
      "body": "Caligo is Latin for fog and the name of a Neotropical genus of owl butterflies. On the wing, an eyespot becomes scales, then inherited information. The name holds the project’s thesis: a fauna this rich should not remain this dimly known.",
      "sourceNote": "Caligo is the name selected through the initiative’s naming survey. The etymology and biological imagery are a present-day framing of the name, not a claim about how survey participants made their choice."
    },
    "intro": {
      "eyebrow": "Why this matters",
      "title": "A rich fauna with many unanswered genomic questions",
      "body": [
        "Butterflies and moths make visible some of evolution’s boldest experiments: transparency, mimicry, chemical defence, migration, shifting host plants and changing chromosomes.",
        "Caligo links those observable lives to documented specimens and genomic evidence, so regional questions can be compared without separating the sequence from the organism that produced it."
      ]
    },
    "pillars": {
      "eyebrow": "How the work is shaped",
      "title": "Guiding principles for regional genomics"
    },
    "tiersTeaser": {
      "eyebrow": "Different data, different questions",
      "title": "A barcode, a reference genome and a population dataset are not interchangeable",
      "body": "Each provides a different scale of evidence. Caligo’s public science pages explain what each can show, what additional data it needs and where interpretation must stop."
    },
    "closing": {
      "title": "Bring a question, an organism or a perspective",
      "body": "Caligo welcomes conversations with researchers, students, collections, institutions, educators, naturalists and supporters who care about rigorous, regionally grounded genomics of Neotropical butterflies and moths."
    },
    "stats": {
      "participants": "participants",
      "facilities": "sequencing facilities",
      "countries": "countries",
      "pilots": "proposed pilots",
      "asOf": "as of July 2026"
    }
  },
  "science": {
    "metaTitle": "Science | Caligo",
    "metaDescription": "How reference genomes become useful evidence when taxonomy, sampling, ecology, provenance and permissions remain connected.",
    "title": "Science",
    "intro": "Genomics is most powerful when it stays connected to organisms, collections, landscapes and clear questions. A reference genome provides a common map for comparison; the biological conclusion comes from the specimens, samples, observations and tests placed around it.",
    "questionsHeading": "Six questions genomes can help investigate",
    "questionLabels": {
      "hook": "Why it draws us in",
      "answer": "The story",
      "example": "Neotropical example",
      "evidence": "Evidence needed",
      "genomesCan": "What genomes can contribute",
      "limits": "Evidence needed beyond genomics",
      "value": "Why an answer matters",
      "caligoConnection": "Connection to Caligo",
      "sourceNote": "Sources and scope"
    },
    "tiersTitle": "Three scales of genetic evidence",
    "tiersOpenQuestion": "A short DNA barcode can support identification, a reference genome can organise whole-genome comparisons, and a population dataset can reveal variation among many individuals. None substitutes for the others, and each depends on a documented biological record.",
    "breadthTitle": "Make room for the moths, the small-bodied lineages and the difficult names",
    "breadthBody": "Lepidoptera genomics has advanced rapidly, but effort remains uneven: familiar butterflies and larger moths are better represented than many small-bodied and tropical lineages. A regionally useful programme should combine broad taxonomic representation with questions defined by researchers who know the organisms, collections and landscapes. [S01]",
    "pilotsTitle": "Why begin with pilots",
    "pilotsIntro": "A pilot lets Caligo test whether the entire chain of evidence works before any wider scale is claimed. A well-chosen pilot should:",
    "pilotsReasons": [
      "connect a clear biological question to documented specimens and an appropriate genomic strategy;",
      "reveal missing permissions, metadata or taxonomic work before they become expensive problems;",
      "compare realistic quality, time and cost assumptions across different workflows;",
      "test how data, methods, repository records and contributor credit remain linked;",
      "check whether another team can understand and reuse the records without undocumented knowledge;",
      "show where training, shared interpretation and local infrastructure need strengthening;",
      "produce enough evidence to decide what should be repeated, revised, scaled or stopped."
    ],
    "seeProjects": "Explore the four proposed pilot questions.",
    "questions": [
      {
        "heading": "How can chromosomes split and fuse while a lineage keeps evolving?",
        "hook": "A butterfly lineage can reorganise the packages that hold its DNA without simply breaking apart.",
        "answer": "Chromosomes are long packages of DNA. A chromosome fission occurs when one ancestral chromosome becomes two; a fusion joins DNA from two ancestral chromosomes into one. These changes can reshape which genes stay linked, how often DNA is recombined during reproduction and how sex chromosomes evolve. In Heliconius, most species have 21 chromosomes in the haploid set, yet five species in the sapho subclade range from 21 to 60 after extensive fissions. Genomic evidence also supports three separate fusions between the female-specific W chromosome and autosomes. The striking numbers show that major structural change occurred. They do not, by themselves, reveal whether selection, chance or another process made those changes persist. That requires comparisons across species, traits and evolutionary histories. [S02][S03]",
        "example": "Most Heliconius retain 21 haploid chromosomes, while members of one lineage reach counts as high as 60; researchers also identified three W–autosome fusion events. [S02]",
        "evidence": "Chromosome-scale assemblies from several related species; chromosome counts or microscopy where available; reliable species relationships; and trait, recombination or breeding evidence that can test consequences.",
        "genomesCan": "Show which chromosome regions correspond across species, locate fissions and fusions, and reveal how recombination and linked variation changed around them.",
        "limits": "A genome comparison cannot establish why a rearrangement spread, whether it caused speciation, or how it affects behaviour and survival without additional biological evidence.",
        "closing": "The deeper question reaches beyond chromosome counts to what changed when the genome was repackaged.",
        "caligoConnection": "Direct context for the proposed Heliconius pilot.",
        "sourceNote": "Primary sources: Rueda-M et al. 2024 [S02]; Mackay-Smith et al. 2026 [S03].",
        "sourceIds": [
          "rueda-2024",
          "mackay-smith-2026"
        ],
        "value": "It can reveal how genome architecture changes the conditions under which variation is inherited and compared."
      },
      {
        "heading": "When does DNA cross the boundary between lineages?",
        "hook": "Evolutionary history is not always a tidy tree: neighbouring lineages can exchange inherited variation.",
        "answer": "Gene flow is the movement of inherited variants between populations through reproduction. When hybridisation is followed by repeated breeding, some DNA from one lineage can become a lasting part of another; scientists call that introgression. Heliconius offers a vivid Neotropical example. Genomic, behavioural and crossing evidence supports H. elevatus as a hybrid species that has persisted as a distinct lineage for more than 720,000 generations. Ongoing gene flow with H. pardalinus makes roughly 99% of their genomes very similar, while a small set of regions inherited from H. melpomene is associated with colour pattern, wing shape, host-plant preference, sex pheromones and mate choice. The genome revealed where histories differ, but the case became persuasive only when those patterns were joined to trait mapping, experiments and behaviour. [S04][S05]",
        "example": "In H. elevatus, a small fraction of the genome carries trait-linked ancestry from H. melpomene even though continuing gene flow with H. pardalinus homogenises most of the genome. [S04]",
        "evidence": "Many individuals from the relevant populations; a strong reference genome; phased or otherwise well-resolved genomic data; explicit demographic models; and independent evidence from traits, geography, behaviour or crosses.",
        "genomesCan": "Detect regions with different evolutionary histories, estimate patterns of ancestry and test whether inherited variants moved between lineages.",
        "limits": "Genomic similarity alone cannot prove that a transferred variant was adaptive, identify the ecological mechanism or show that hybridisation created a species.",
        "closing": "A surprising patch of shared DNA is the beginning of an investigation, not its conclusion.",
        "caligoConnection": "Relevant to Heliconius comparisons and to any pilot asking about movement, hybridisation or adaptation.",
        "sourceNote": "Primary sources: Rosser et al. 2024 [S04]; Edelman et al. 2019 [S05].",
        "sourceIds": [
          "rosser-2024",
          "edelman-2019"
        ],
        "value": "It can clarify how lineages remain distinct while exchanging inherited variation with neighbours."
      },
      {
        "heading": "When does one scientific name conceal more than one lineage?",
        "hook": "A name is a testable hypothesis about identity. DNA alone cannot confirm it automatically.",
        "answer": "Taxonomy asks which organisms belong together, how they differ and what name applies. Genomes can reveal deep splits, overlooked relatives or unexpected mixing, but a genomic cluster is not automatically a species. Scientists also need specimens, morphology, life history, geography, earlier names and the rules of nomenclature. This matters especially for the Neotropics, where many moth groups remain less studied than familiar butterflies. A phylogenomic study of the predominantly Neotropical sack-bearer moth family Mimallonidae compared hundreds of genetic loci across most recognised genera, including data recovered from dry museum specimens. The result reorganised higher-level relationships and showed how collections can help resolve moth diversity that is difficult to study from fresh material alone. [S17]",
        "example": "Researchers used 515 loci and material representing 32 of 36 recognised Mimallonidae genera, including historical dry specimens, to reassess relationships in this largely Neotropical moth family. [S17]",
        "evidence": "Documented specimens; morphology and natural history; type and nomenclatural research; broad geographic and taxonomic sampling; barcodes or genomic data; and explicit species-delimitation hypotheses.",
        "genomesCan": "Reveal relationships, hidden structure, hybridisation and diagnostic regions that deserve closer taxonomic study.",
        "limits": "Genomes cannot assign the correct name, replace examination of type material, or decide species boundaries without biological and nomenclatural judgement.",
        "closing": "The most useful result may be a better question about identity, not a faster label.",
        "caligoConnection": "Applies across the programme and is especially important for moth-rich and taxonomically difficult lineages.",
        "sourceNote": "Primary source: St Laurent et al. 2018 [S17].",
        "sourceIds": [
          "st-laurent-2018"
        ],
        "value": "It can improve identification and classification while keeping species decisions grounded in more than genetic clusters."
      },
      {
        "heading": "Which populations remain connected, and which are becoming isolated?",
        "hook": "Two populations can look alike even after the routes between them have begun to disappear.",
        "answer": "Population connectivity means that individuals, and therefore inherited variants, still move among populations often enough to leave a detectable signal. Genetic diversity is the variety of inherited DNA variants within a population or species. Both depend on sampling: which individuals, places and moments are included. Parides ascanius, a threatened butterfly of Brazil’s coastal habitats, provides a useful baseline. A study published in 2016 found low genetic structure and inferred substantial migration among the populations it sampled. That does not guarantee that connectivity is unchanged today, especially where habitat loss, drainage and fragmentation continue. A new genomic study would need to compare carefully designed contemporary sampling with the earlier evidence, while protecting sensitive localities. [S06][S07][S08]",
        "example": "Earlier genetic work on sampled P. ascanius populations found little structure and high inferred migration; that published result is a baseline to revisit, not proof of present-day connectivity. [S06]",
        "evidence": "Many individuals from a planned set of populations and times; a reference genome; habitat and landscape information; demographic models; and, where possible, direct observations or mark–recapture data.",
        "genomesCan": "Estimate relatedness, population structure, historical and recent gene flow, inbreeding and changes in genomic diversity.",
        "limits": "Genomes alone cannot show the exact route an individual travelled, measure habitat quality or determine conservation priorities without ecological and social context.",
        "closing": "Connectivity is not a line on a map; it is a moving relationship that must be measured again.",
        "caligoConnection": "Direct context for the proposed Parides ascanius pilot.",
        "sourceNote": "Primary study and assessments: Seraphim et al. 2016 [S06]; IUCN 2018 [S07]; ICMBio 2021 [S08].",
        "sourceIds": [
          "seraphim-2016",
          "iucn-parides-2018",
          "icmbio-parides-2021"
        ],
        "value": "It can provide evidence for monitoring change, provided genomic patterns are interpreted with habitat and demographic context."
      },
      {
        "heading": "Where do seasonal movements begin, end and connect?",
        "hook": "A sudden river of butterflies over a forest trail is an observation; its origin is a research question.",
        "answer": "Seasonal movement can connect populations, track rainfall or food, or place different life stages in different landscapes. A 2020 preprint reported a large seasonal movement of Panacea prola in south-eastern Peru and presented it as the first evidence for an Amazonian insect migration. Observing a mass movement does not reveal where the butterflies began, whether the same individuals return, or how far the phenomenon extends. Reference genomes and repeated population sampling can compare ancestry among places and seasons. Stable isotopes, weather, host plants, direct observations and movement tracking can add different pieces of evidence. Because the public movement report remains a preprint, it is presented as an intriguing published observation. [S09]",
        "example": "The documented event involved a seasonal mass movement of P. prola in south-eastern Peru; broader origins and connections remain open. [S09]",
        "evidence": "Repeated, responsibly permitted sampling across seasons and broad regions; a reference genome; environmental and host-plant records; and independent movement evidence such as observations, tagging or stable isotopes.",
        "genomesCan": "Compare ancestry among sampled groups, estimate connectivity and test whether seasonal aggregations draw from one or several populations.",
        "limits": "Genomes cannot reconstruct an individual flight path, determine the environmental trigger or define the full range of a movement without other evidence.",
        "closing": "The spectacle is visible; the network of populations behind it is still waiting to be traced.",
        "caligoConnection": "Direct context for the proposed Panacea prola pilot.",
        "sourceNote": "Public evidence: Gallice et al. 2020 preprint [S09].",
        "sourceIds": [
          "gallice-2020"
        ],
        "value": "It can connect a visible seasonal phenomenon to the population system that produces it."
      },
      {
        "heading": "What makes a biodiversity genome useful years from now?",
        "hook": "A sequence lasts scientifically only when people can trace the organism, the permissions, the methods and the credit behind it.",
        "answer": "A genome is more than a file of DNA letters. To be reusable, it needs a documented organism, a specimen or material record that can be checked, safe origin information, permissions, laboratory and computational methods, quality measures, repository identifiers and clear contributor credit. Historical collections show why that chain matters: target-enrichment methods have recovered hundreds of genetic loci from dry-pinned Lepidoptera, including specimens more than a century old, allowing present-day questions to reach back through time. FAIR principles emphasise findable and reusable data; CARE principles add collective benefit, authority, responsibility and ethics; access-and-benefit-sharing frameworks address how biological material is obtained and used. These frameworks guide questions, but they do not replace project-specific agreements or law. [S16][S20][S21][S22]",
        "example": "Museomics studies have recovered extensive genetic data from dry-pinned butterflies and moths collected across more than a century, when specimen identity and curation records were preserved. [S16]",
        "evidence": "Traceable specimen and material records; permissions and agreements; method versions; quality metrics; stable repository identifiers; contributor roles; and decisions about sensitive data.",
        "genomesCan": "Provide a durable comparative resource when sequence, metadata and biological evidence remain connected.",
        "limits": "Technical openness alone cannot establish legitimate authority, fair credit, appropriate benefit sharing or safe publication of sensitive information.",
        "closing": "The future value of a genome is designed long before anyone downloads it.",
        "caligoConnection": "Applies to every proposed pilot and to Caligo’s public explanation of responsible genomics.",
        "sourceNote": "Sources: Mayer et al. 2021 [S16]; FAIR [S20]; CARE [S21]; Nagoya Protocol [S22].",
        "sourceIds": [
          "mayer-2021",
          "fair-2016",
          "care-2020",
          "nagoya"
        ],
        "value": "It determines whether a genome remains traceable, interpretable and responsibly reusable beyond its first analysis."
      }
    ],
    "recordVsGenome": {
      "heading": "Different genetic records answer different questions",
      "intro": "The terms below describe different kinds of evidence. Naming the right one prevents a barcode from being presented as a whole genome, a fragmented assembly from being described as chromosome-complete or one individual from standing in for an entire population.",
      "labels": {
        "recordColHeading": "Evidence type",
        "canShow": "What it can show",
        "cannotEstablish": "What it cannot establish alone"
      },
      "rows": [
        {
          "record": "Occurrence record",
          "canShow": "That an organism was reported at a place and time, with reliability depending on identification and documentation.",
          "cannotEstablish": "Species boundaries, population connectivity or genetic diversity."
        },
        {
          "record": "DNA barcode",
          "canShow": "A short standardised DNA region that can support identification and comparison with reference records.",
          "cannotEstablish": "A complete genome, chromosome structure, population history or adaptive function."
        },
        {
          "record": "Raw sequence reads",
          "canShow": "The direct output of a sequencing instrument before the fragments are assembled and fully assessed.",
          "cannotEstablish": "A finished genome, reliable gene set or biological interpretation."
        },
        {
          "record": "Fragmented genome assembly",
          "canShow": "A reconstruction of much of the genome, usually in multiple pieces with known and unknown gaps.",
          "cannotEstablish": "The complete order of chromosomes, perfect accuracy or high-confidence annotation everywhere."
        },
        {
          "record": "Chromosome-scale reference genome",
          "canShow": "An assembly in which most sequence is organised into chromosome-sized units, providing a strong map for comparison.",
          "cannotEstablish": "All variation in the species, present-day connectivity, local adaptation or ecological cause."
        },
        {
          "record": "Population genomic dataset",
          "canShow": "Inherited variation across many sampled individuals, allowing tests of structure, diversity, ancestry and gene flow.",
          "cannotEstablish": "An unbiased picture if sampling is poor, an individual movement path, or a causal mechanism without experiments and ecology."
        }
      ]
    },
    "provenance": {
      "heading": "Keep the organism, the evidence and the permissions connected",
      "intro": "A strong genomic record lets a future researcher follow the full path from organism to sequence: what was sampled, who identified it, how the material was obtained and processed, what may be shared and how contributors should be credited. The fields below show the information that keeps that path traceable.",
      "templateLabel": "Record guide",
      "templateNote": "This illustrative field set shows the information needed for a traceable genomic record: specimen details, permissions, processing methods and repository location.",
      "fields": [
        "Scientific name, identifier and identification evidence",
        "Preserved specimen or traceable material record",
        "Country, date and a safe level of locality detail",
        "Collecting, access, transfer and use permissions",
        "Collector, identifier, curator and material custodian",
        "Tissue, extraction and storage history",
        "Sequencing technology and laboratory method versions",
        "Assembly, contamination and quality assessments",
        "Annotation evidence and confidence",
        "Repository names and stable identifiers",
        "Contributor roles, citation and credit",
        "Restrictions, cultural sensitivity and locality-protection decisions"
      ]
    },
    "ethics": {
      "heading": "Responsible genomics begins before sampling",
      "intro": "Good intentions do not replace permission, accountability or clear agreements. Every project should be able to answer the questions below in terms that participants, institutions and future data users can understand.",
      "questions": [
        "Who has authority to grant access to the organisms, site and associated knowledge?",
        "Who identified, collected, curated and provided the specimen or material?",
        "Which permits, agreements and restrictions apply to collection, transfer, sequencing and reuse?",
        "Who shaped the research question and who will lead interpretation and publication?",
        "Which location, cultural or personal information should be protected?",
        "How will contributor roles, citation, data use and benefits be handled?"
      ],
      "externalContext": "FAIR, CARE and access-and-benefit-sharing frameworks help teams ask better questions about reuse, authority and responsibility. Their application depends on the project, jurisdiction, institutions and communities involved. [S20][S21][S22]",
      "disclaimer": "For project-specific legal, ethical or institutional requirements, consult the relevant authorities and agreements. The site explains principles; it does not publish a universal Caligo policy or provide legal advice."
    },
    "tiers": {
      "heading": "Three scales of genetic evidence",
      "intro": "DNA barcodes, short-read datasets and reference assemblies each serve different questions and depend on different evidence."
    }
  },
  "pilots": {
    "metaTitle": "Proposed pilots | Caligo",
    "metaDescription": "Four proposed investigations linking chromosome evolution, threatened-population connectivity, sustainable agriculture and seasonal movement to documented genomic evidence.",
    "title": "Proposed pilots",
    "opening": "These four pilot directions pair published evidence with questions designed for Caligo. Each sets out the organisms, observations, samples and comparisons needed to turn a biological puzzle into testable work.",
    "whatAPilotCanTest": {
      "heading": "A pilot tests the entire evidence chain",
      "body": "The question, permissions, specimen record, DNA data, analysis, repositories and contributor credit all have to connect. A pilot is valuable when it reveals what works, what is missing and what should change before wider effort is considered."
    },
    "fieldLabels": {
      "hook": "The question in one sentence",
      "publishedContext": "What published evidence already shows",
      "proposedQuestion": "What the proposed Caligo pilot would test",
      "evidenceNeeded": "Evidence the pilot would need",
      "genomesCan": "What genomes can contribute",
      "limits": "Evidence needed beyond genomics",
      "closing": "The question to carry forward",
      "sourcesChecked": "Sources and scope"
    }
  },
  "caligo": {
    "metaTitle": "Discover Caligo | Eye, eyespot and evidence",
    "metaDescription": "A popular-science story about the Caligo genus, compound eyes, wing eyespots, scales and how competing explanations are tested.",
    "meetTheNamesake": {
      "heading": "Caligo: a name for the work ahead",
      "body": "Caligo is Latin for fog. It is also a Neotropical genus of owl butterflies, a name rooted in the region this network serves. On its wings, a mark resembles an eye but cannot see. Look closer and the pattern resolves into scales; closer still, into the inherited information that built them. A fauna this rich should not remain this dimly known.",
      "sourceNote": "Caligo is the name selected through the initiative’s naming survey. The etymology and biological imagery are a present-day framing of the name, not a claim about how survey participants made their choice."
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
    },
    "relatedStories": [
      {
        "title": "A wing that almost disappears",
        "body": "Greta oto combines sparse, altered scales with anti-reflective wax nanopillars. The research question is how development builds that optical surface and how often similar solutions evolved. [S12]",
        "placement": "Discover story"
      },
      {
        "title": "Colours beyond human vision",
        "body": "Female Heliconius charithonia can discriminate ultraviolet colour differences using a UV opsin linked to the W sex chromosome. The finding connects sensory behaviour, sex chromosomes and evolution. [S13]",
        "placement": "Discover story"
      },
      {
        "title": "A century-old specimen can still speak",
        "body": "With methods designed for fragmented DNA, dry-pinned museum Lepidoptera more than a century old can yield hundreds of genetic loci when their identity and history remain traceable. [S16]",
        "placement": "Discover story and Science provenance link"
      }
    ]
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
    "intro": "Each proposed pilot begins with published evidence and a question that demands more. Follow the organism, the observations and samples the work would need, the contribution of genomics and the evidence supplied by ecology, taxonomy or experiment.",
    "openToCollaborators": "Start a pilot conversation",
    "goalLabel": "Research question",
    "resourcesLabel": "Published and documented starting points",
    "motives": {
      "heading": "Why begin with pilots",
      "intro": "The initiative identified reasons to start with focused pilot projects.",
      "items": [
        "Demonstrate to funders that the network can generate genomes in Latin America and analyse them collaboratively.",
        "Develop workflows from sampling to data deposit.",
        "Train the regional network and standardise protocols.",
        "Respect permits, national laws and fair benefit-sharing requirements.",
        "Establish data and quality standards early.",
        "Build realistic cost estimates for the region.",
        "Deliver first scientific results to build momentum."
      ]
    },
    "pilotProposal": {
      "heading": "The proposed Caligo pilot",
      "leadsLabel": "Pilot leads",
      "goalLabel": "What the pilot would do",
      "resourcesLabel": "Available resources",
      "openLabel": "Open to collaborators",
      "closedLabel": "Not currently open to collaborators"
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
        "Caligo is Latin for fog. It is also a Neotropical genus of owl butterflies, a name rooted in the region this network serves. The name belongs to no single country, and neither does the work ahead.",
        "On its wings, a mark resembles an eye but cannot see. Look closer and the pattern resolves into scales; closer still, into the inherited information that built them.",
        "One of Earth’s richest Lepidoptera faunas should not remain among its least sequenced."
      ]
    },
    "beingDecided": {
      "heading": "What Caligo brings together",
      "questions": [
        "Questions shaped by researchers who know the region, organisms and collections",
        "Reference genomes connected to documented specimens or material records",
        "Taxonomy, natural history, ecology and population sampling alongside genomics",
        "Permissions, provenance, repositories and contributor credit as part of the scientific record"
      ]
    },
    "externalContext": {
      "heading": "Part of a wider scientific landscape",
      "body": "Caligo learns from global genome initiatives, public repositories, collections, taxonomic networks and data-governance frameworks while keeping its public claims specific to this initiative.",
      "disclaimer": "External projects provide scientific or methodological context. Formal partnerships and commitments are identified explicitly when they exist."
    },
    "objectives": {
      "heading": "Strategic objectives",
      "intro": "Caligo pursues complementary scientific and organizational goals."
    },
    "leadership": {
      "heading": "Leadership",
      "intro": "The initiative is coordinated by researchers from institutions in Latin America and internationally."
    },
    "governance": {
      "heading": "Governance",
      "intro": "How decisions are made and the network is organized. Governance documents are in preparation; items marked draft may change."
    },
    "vision": {
      "heading": "Vision",
      "body": "An international group that leads the genomic exploration of Latin American Lepidoptera by generating, curating, and using data documenting one of the planet's richest yet least-sequenced faunas, while building the people, partnerships, and infrastructure needed to sustain the work over the long term."
    },
    "mission": {
      "heading": "Mission",
      "body": "A collaborative network of researchers, taxonomists, students, and institutions across the Neotropics working together to produce high-quality genomic resources for butterflies and moths. The work is grounded in taxonomic expertise, shaped by regional research priorities, and connected to the global Lepidoptera genomics community on equal footing."
    }
  },
  "participate": {
    "metaTitle": "Participate | Caligo",
    "metaDescription": "Ways for researchers, students, collections, educators, naturalists, institutions and supporters to begin a conversation with Caligo.",
    "title": "Participate",
    "intro": "Good biodiversity genomics begins with people who know organisms, collections, landscapes, methods and questions. Whether you work in a laboratory, a museum, a classroom, the field or an institution, the useful first step is a clear conversation about what you know and what you hope to investigate.",
    "contact": {
      "heading": "Start a conversation",
      "body": "Write with a short introduction, your connection to Neotropical butterflies or moths, and the question or kind of contribution you would like to discuss.",
      "email": "genomica.neotropical@gmail.com",
      "ariaLabel": "Email Caligo at genomica.neotropical@gmail.com"
    },
    "audiences": {
      "heading": "Conversations Caligo welcomes",
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
        "ariaLabel": "Join the Caligo Discord community; opens an external site",
        "externalNote": "Opens Discord in a new tab."
      },
      "pending": {
        "button": "New invite link coming soon",
        "ariaLabel": "Caligo Discord invite link will be added soon",
        "note": "The community option remains here while a new invitation link is prepared. You can contact Caligo by email now."
      }
    },
    "beforeSubmitting": {
      "heading": "Begin safely",
      "body": "Please do not send precise localities for threatened or sensitive species, unpublished specimen records, biological material, permit files or personal data through a first-contact message. Describe the topic in general terms so the appropriate, secure next step can be agreed."
    },
    "privacyNote": "Any future form should display its privacy and data-use notice before a person submits information.",
    "membership": {
      "heading": "Membership",
      "intro": "Two levels of membership define different roles and responsibilities in the network."
    },
    "benefits": {
      "heading": "What members do and receive",
      "intro": "Active members contribute to the network and are eligible for authorship and voting rights."
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
    "mutableData": "Mutable database or institutional record; access date shown.",
    "noRegionalPercentage": "Regional genome coverage will be reported against a frozen taxonomic denominator, explicit realm rules and a dated, deduplicated assembly snapshot."
  },
  "compat": {
    "heading": "This material now lives elsewhere",
    "body": "The current explanation is part of the About page. Follow the link to continue."
  },
  "network": {
    "metaTitle": "Network | Caligo",
    "metaDescription": "The Caligo research network: partner sequencing facilities, initiative leaders and upcoming activities in Latin America.",
    "title": "Research network",
    "intro": "A Latin American-led collaboration of researchers, institutions and facilities working on reference genomes for Neotropical butterflies and moths.",
    "facilities": {
      "heading": "Partner facilities",
      "intro": "Sequencing and research facilities participating in the initiative."
    },
    "events": {
      "heading": "Events",
      "intro": "Initiative activities and planned gatherings."
    },
    "positioning": {
      "heading": "Connections and context",
      "body": "Caligo is engaged with EBP Latin America, the Earth BioGenome Project's regional initiative, and with Genotropics, a network working on the genomic diversity of tropical organisms. These connections place Caligo within a wider regional genomics landscape. Formal partnerships or shared programmes are identified explicitly."
    }
  },
  "notFound": {
    "title": "This page has not been assembled yet",
    "body": "The address may have changed, or the page may never have existed. Here is the way back.",
    "homeLink": "Back to the home page"
  },
  "footer": {
    "tagline": "Documented specimens. Reusable genomes. Neotropical questions.",
    "rights": "Caligo",
    "contact": "Contact",
    "navHeading": "Explore",
    "languageHeading": "Language",
    "sources": "Sources and methods",
    "aiDisclosure": "Concept illustrations are labelled and credited where used."
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
