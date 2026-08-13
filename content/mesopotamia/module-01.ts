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
    label: "Draft evidence categories · not source objects",
    notice: "No reviewed evidence object is published in this module yet. The categories below are an acquisition checklist, not primary evidence or citations. Exact site, artifact, catalogue, chronology, rights, and scholarly context must be verified before publication.",
    summary: "The evidence lab will test claims about changing scale using exact records selected from four candidate categories.",
    items: [
      "Increasing settlement size",
      "Monumental architecture",
      "Standardized material culture",
      "Administrative seals and tokens",
      "Proto-cuneiform accounting records",
    ],
  },
  exercise: {
    prompt: "Which combination of evidence best explains changing coordination between the Ubaid and Uruk periods? Use three named objects, distinguish observation from inference, and explain one important limitation or competing interpretation.",
    minWords: 300,
    maxWords: 600,
  },
  sourceLedger: [
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
  evidenceObjects: [],
};
