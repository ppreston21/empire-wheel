export type ModuleContent = {
  number: number;
  title: string;
  period: string;
  learningObjectives: string[];
  overview: string[];
  keyConcepts: string[];
  timeline: { date: string; event: string }[];
  evidence: { label: string; notice: string; summary: string; items: string[] };
  exercise: { prompt: string; minWords: number; maxWords: number };
};

export const moduleOne: ModuleContent = {
  number: 1,
  title: "From Village to City",
  period: "Ubaid → Uruk",
  learningObjectives: [
    "Explain why southern Mesopotamian irrigation required coordination.",
    "Understand the role of temples as administrative institutions.",
    "Describe what distinguishes Uruk from earlier settlements.",
    "Separate archaeological evidence from historical inference.",
  ],
  overview: [
    "Across the Ubaid and Uruk periods, settlements in southern Mesopotamia grew in scale and became more internally specialized. Irrigated agriculture could produce surplus, but maintaining shared water systems also required sustained coordination.",
    "Monumental buildings, standardized objects, administrative devices, and later accounting texts provide evidence of changing institutions. Historians use those remains to ask how temples, administrators, and specialized workers organized resources and people. The evidence supports interpretations of increasing coordination, but it does not by itself reveal a single, uncontested form of political control.",
  ],
  keyConcepts: [
    "irrigation", "surplus", "specialization", "temple economy",
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
    label: "Placeholder source-evidence summary",
    notice: "Verified primary-source excerpts and artifact records are not yet available in this module. This provided summary is an evidence set for practicing interpretation; it is not a primary source or a citation.",
    summary: "Archaeologists find increasing settlement size, monumental architecture, standardized material culture, administrative seals and tokens, and eventually proto-cuneiform accounting records.",
    items: [
      "Increasing settlement size",
      "Monumental architecture",
      "Standardized material culture",
      "Administrative seals and tokens",
      "Proto-cuneiform accounting records",
    ],
  },
  exercise: {
    prompt: "What evidence supports the argument that increasing economic complexity required increasingly centralized administration?",
    minWords: 300,
    maxWords: 600,
  },
};
