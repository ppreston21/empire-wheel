import type { EvidenceObject, ExternalResource, ReviewState, SourceRecord } from "@/content/types";

export type ModuleContent = {
  reviewState: ReviewState;
  number: number;
  title: string;
  period: string;
  learningObjectives: string[];
  overview: string[];
  keyConcepts: string[];
  timeline: { date: string; event: string }[];
  evidence: { label: string; notice: string; summary: string; items: string[] };
  exercise: { prompt: string; minWords: number; maxWords: number };
  sourceLedger: SourceRecord[];
  resources: ExternalResource[];
  evidenceObjects: EvidenceObject[];
};

export const moduleOne: ModuleContent = {
  reviewState: "draft",
  number: 1,
  title: "Before Sumer",
  period: "Ubaid → Uruk",
  learningObjectives: [
    "Locate southern Mesopotamia and describe the module's chronological limits.",
    "Compare Ubaid patterns with evidence associated with Uruk's larger scale.",
    "Use multiple forms of archaeological evidence to support a historical claim.",
    "Separate direct observation from inference about coordination or control.",
  ],
  overview: [
    "Editorial draft pending source review: the Ubaid-to-Uruk transition is used here to investigate changing scale in settlements, institutions, production, exchange, and information practices—not to tell a single-cause story about the invention of cities.",
    "The completed lesson will place reviewed archaeological observations beside competing interpretations. Monumental buildings, standardized objects, or administrative media must not be treated by themselves as proof of a temple economy, centralized government, or coerced labor.",
  ],
  keyConcepts: [
    "irrigation", "surplus", "specialization", "temple economy (debated)",
    "urbanization", "administration", "writing/accounting",
  ],
  timeline: [
    { date: "~6500 BCE", event: "Ubaid period begins" },
    { date: "~5000 BCE", event: "Expanding irrigation and agricultural settlements" },
    { date: "~4000 BCE", event: "Uruk period" },
    { date: "~3500 BCE", event: "Major urban expansion" },
    { date: "~3300 BCE", event: "Earliest proto-cuneiform administrative texts" },
  ],
  evidence: {
    label: "Historically reviewed evidence lab · module release pending",
    notice: "An independent historical reviewer approved these exact objects and bounded claims. The wider module remains an editorial draft and is not release-ready until its remaining historical, accessibility, and product QA gates pass.",
    summary: "Compare three object types without treating any single survival as proof of centralized control.",
    items: [
      "Administration · inscribed and sealed clay tablet",
      "Production · ceramic beveled-rim bowl",
      "Authorization or control · impressed sealing",
    ],
  },
  exercise: {
    prompt: "What do the tablet 1988.433.1, bowl 62.70.25, and sealing 62.70.93 allow you to argue about Uruk-period recording, production, or control? Use all three named objects, distinguish observation from catalogue context and inference, and explain why this set cannot establish change from the Ubaid period.",
    minWords: 300,
    maxWords: 600,
  },
  sourceLedger: [
    {
      id: "met-329081",
      state: "historically-reviewed",
      title: "Proto-Cuneiform tablet with seal impressions: administrative account of barley distribution with cylinder seal impression of a male figure, hunting dogs, and boars",
      creator: "The Metropolitan Museum of Art",
      resourceType: "Museum collection record and open-access image · accession 1988.433.1",
      url: "https://www.metmuseum.org/art/collection/search/329081",
      learnerPurpose: "Inspect how inscribed and impressed marks coexist on one catalogued administrative object.",
      expectedTimeMinutes: 8,
      accessStatus: "open",
      verificationDate: "2026-08-13",
    },
    {
      id: "met-325431",
      state: "historically-reviewed",
      title: "Beveled rim bowl",
      creator: "The Metropolitan Museum of Art",
      resourceType: "Museum collection record and open-access image · accession 62.70.25",
      url: "https://www.metmuseum.org/art/collection/search/325431",
      learnerPurpose: "Examine one catalogued example before evaluating claims about standardization or mass production.",
      expectedTimeMinutes: 8,
      accessStatus: "open",
      verificationDate: "2026-08-13",
    },
    {
      id: "met-325498",
      state: "historically-reviewed",
      title: "Sealing",
      creator: "The Metropolitan Museum of Art",
      resourceType: "Museum collection record and open-access image · accession 62.70.93",
      url: "https://www.metmuseum.org/art/collection/search/325498",
      learnerPurpose: "Observe a surviving impression while testing what a sealing can and cannot establish about authority.",
      expectedTimeMinutes: 8,
      accessStatus: "open",
      verificationDate: "2026-08-13",
    },
    {
      id: "carter-philip-2010-beyond-ubaid",
      state: "historically-reviewed",
      title: "Beyond the Ubaid: Transformation and Integration in the Late Prehistoric Societies of the Middle East",
      creator: "Robert A. Carter and Graham Philip, editors · Institute for the Study of Ancient Cultures, University of Chicago",
      resourceType: "Open scholarly edited volume · PDF",
      url: "https://isac.uchicago.edu/sites/default/files/uploads/shared/docs/saoc63.pdf",
      learnerPurpose: "Read the editors’ introduction to compare regional integration with accounts that reduce the Ubaid to a prelude to cities.",
      expectedTimeMinutes: 25,
      accessStatus: "open",
      verificationDate: "2026-08-12",
    },
    {
      id: "crusemann-et-al-2019-uruk",
      state: "historically-reviewed",
      title: "Uruk: First City of the Ancient World",
      creator: "Nicola Crüsemann, Margarete van Ess, Markus Hilgert, and Beate Salje, editors · Getty Publications",
      resourceType: "Open scholarly exhibition catalogue · web and PDF",
      url: "https://www.getty.edu/publications/uruk/",
      learnerPurpose: "Use the introductory essays and catalogue groupings to assess how different kinds of material evidence support claims about urban scale.",
      expectedTimeMinutes: 20,
      accessStatus: "open",
      verificationDate: "2026-08-12",
    },
  ],
  resources: [
    {
      id: "read-beyond-ubaid",
      reviewState: "historically-reviewed",
      sourceId: "carter-philip-2010-beyond-ubaid",
      citation: "Carter, Robert A., and Graham Philip, eds. Beyond the Ubaid. Studies in Ancient Oriental Civilization 63. Chicago: The Oriental Institute, 2010.",
      learnerQuestion: "Which patterns do the editors treat as regional integration, and which conclusions about political control remain open?",
    },
    {
      id: "read-uruk-first-city",
      reviewState: "historically-reviewed",
      sourceId: "crusemann-et-al-2019-uruk",
      citation: "Crüsemann, Nicola, Margarete van Ess, Markus Hilgert, and Beate Salje, eds. Uruk: First City of the Ancient World. Los Angeles: Getty Publications, 2019.",
      learnerQuestion: "When the catalogue calls Uruk a “first city,” what evidence demonstrates scale, and what requires interpretation?",
    },
  ],
  evidenceObjects: [
    {
      id: "tablet-1988-433-1",
      reviewState: "historically-reviewed",
      evidenceType: "Administrative tablet",
      title: "Proto-Cuneiform tablet with seal impressions · 1988.433.1",
      description: "Clay tablet, 5.4 × 6 × 4.1 cm; catalogued as Jemdet Nasr period, ca. 3100–2900 BCE, Mesopotamia.",
      observation: "The pictured face bears incised geometric and pictorial marks arranged in horizontal bands; the surface also shows impressed figures.",
      context: "The Met catalogue identifies the object as an administrative account of barley distribution with a cylinder-seal impression and attributes it as probably from Uruk (modern Warka). Those readings and the geographic attribution are catalogue context, not conclusions available from shape alone.",
      interpretations: ["The coexistence of incised and impressed marks makes their relationship a question for investigation; this lab does not assign either an institutional function beyond the catalogue description.", "This object alone does not establish who administered the transaction or the size and centralization of an institution."],
      uncertainty: "The catalogue attributes the tablet as probably from Uruk but provides no recorded excavation, locale, or locus. The lab does not offer a sign-by-sign reading or infer the record's institutional owner.",
      guidedQuestions: [
        { stage: "Observe", prompt: "How are the visible marks grouped, and which features appear incised rather than impressed?" },
        { stage: "Contextualize", prompt: "Which details come from the Met's catalogue identification rather than from your inspection?" },
        { stage: "Interpret", prompt: "What relationship between inscription and sealing could you test, and what institutional claim remains unsupported?" },
      ],
      sourceIds: ["met-329081"],
      locator: "The Met object 329081 · accession 1988.433.1",
      image: { url: "https://images.metmuseum.org/CRDImages/an/web-large/DP293243.jpg", alt: "Square clay tablet with incised signs arranged in fields and seal impressions across the lower portion", credit: "The Metropolitan Museum of Art, Purchase, Raymond and Beverly Sackler Gift, 1988", rights: "Public Domain / The Met Open Access" },
    },
    {
      id: "bowl-62-70-25",
      reviewState: "historically-reviewed",
      evidenceType: "Production object",
      title: "Beveled rim bowl · 62.70.25",
      description: "Ceramic bowl, 8.2 × 19 × 19 cm; catalogued as Late Uruk, ca. 3300–3100 BCE, from Nippur in Mesopotamia.",
      observation: "The pictured vessel has a wide, uneven beveled rim, sloping walls, and a narrower flat base; its surface is coarse and undecorated.",
      context: "The catalogue identifies this individual vessel as a beveled rim bowl and attributes it to Nippur. It does not provide an assemblage count or production analysis.",
      interpretations: ["The object's simple form can prompt a production question, but the pictured specimen supplies no direct observation of how quickly, by whom, or in what quantity it was made.", "This individual bowl cannot by itself demonstrate mass production, rationing, centralized distribution, or coerced labor."],
      uncertainty: "The catalogue attributes the vessel to Nippur but provides no recorded excavation, locale, or locus. Claims about an assemblage require separately reviewed archaeological data rather than extrapolation from this specimen.",
      guidedQuestions: [
        { stage: "Observe", prompt: "Which features of the rim, walls, base, and surface can you describe without naming a production method?" },
        { stage: "Contextualize", prompt: "What does this one catalogue record establish about date and place, and what assemblage information is absent?" },
        { stage: "Interpret", prompt: "Which production claim might you investigate with a larger sample, and why can this bowl not settle it?" },
      ],
      sourceIds: ["met-325431"],
      locator: "The Met object 325431 · accession 62.70.25",
      image: { url: "https://images.metmuseum.org/CRDImages/an/web-large/DP-15117-022.jpg", alt: "Low coarse ceramic bowl with a broad irregular rim, sloping sides, and narrow base", credit: "The Metropolitan Museum of Art, Rogers Fund, 1962", rights: "Public Domain / The Met Open Access" },
    },
    {
      id: "sealing-62-70-93",
      reviewState: "historically-reviewed",
      evidenceType: "Sealing",
      title: "Sealing · 62.70.93",
      description: "Ceramic sealing, 5.99 cm; catalogued as Uruk period, fourth millennium BCE, from Nippur in Mesopotamia.",
      observation: "The pictured clay fragment is irregular and has a shallow central area crossed by several faint depressions.",
      context: "The museum classifies the object as a sealing and attributes it to Nippur. The record does not identify what it sealed or the actor who made the impression.",
      interpretations: ["The museum classification invites a question about sealing practice, but the visible fragment alone does not identify the sealed material or an administrative procedure.", "Without archaeological context or a securely identified design, this object does not reveal an administrator, institution, contents, or reach of control."],
      uncertainty: "The catalogue date spans the fourth millennium BCE and provides no recorded excavation, locale, or locus. The faint impression is not identified more specifically in this lab.",
      guidedQuestions: [
        { stage: "Observe", prompt: "Which depressions are plainly visible, and which details are too faint to identify securely?" },
        { stage: "Contextualize", prompt: "What does the catalogue classification add that the image alone does not show?" },
        { stage: "Interpret", prompt: "What could comparison with a securely excavated sealing reveal that this isolated record cannot?" },
      ],
      sourceIds: ["met-325498"],
      locator: "The Met object 325498 · accession 62.70.93",
      image: { url: "https://images.metmuseum.org/CRDImages/an/web-large/DP-15116-047.jpg", alt: "Irregular clay sealing fragment with a faint elongated divided impression", credit: "The Metropolitan Museum of Art, Rogers Fund, 1962", rights: "Public Domain / The Met Open Access" },
    },
  ],
};
