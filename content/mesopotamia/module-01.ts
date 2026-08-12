import type { EvidenceObject, ReviewState, SourceRecord } from "@/content/types";

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
  // Verified records are added here by EW-017/EW-018. Unchecked candidates stay
  // in product research notes and cannot enter the learner-facing collection.
  sourceLedger: [],
  evidenceObjects: [],
};
