export type MockReview = {
  scores: {
    historicalAccuracy: number;
    useOfEvidence: number;
    reasoning: number;
    distinguishesInference: number;
  };
  strongestObservation: string;
  unsupportedClaim: string;
  missingEvidence: string;
  recommendedNextStep: string;
};

export function countWords(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

export function createMockReview(response: string): MockReview {
  const normalized = response.toLowerCase();
  const evidenceTerms = ["settlement", "monumental", "standardized", "seal", "token", "proto-cuneiform", "accounting"];
  const evidenceUsed = evidenceTerms.filter((term) => normalized.includes(term)).length;
  const inferenceLanguage = ["suggest", "indicat", "infer", "may", "could", "evidence", "does not prove"].some((term) => normalized.includes(term));

  return {
    scores: {
      historicalAccuracy: 7,
      useOfEvidence: Math.min(10, 4 + evidenceUsed),
      reasoning: evidenceUsed >= 3 ? 8 : 6,
      distinguishesInference: inferenceLanguage ? 9 : 5,
    },
    strongestObservation: evidenceUsed >= 3
      ? "You connect multiple kinds of material evidence rather than relying on a single find."
      : "You identify a relationship between economic coordination and administration.",
    unsupportedClaim: "Mock review cannot verify claims beyond the evidence set. Recheck any claim about rulers, coercion, ownership, or a unified state that the listed remains do not directly establish.",
    missingEvidence: evidenceUsed >= 5
      ? "Consider whether the sequence and scale of the evidence change the strength of your argument."
      : "Bring more of the listed evidence—especially administrative devices and accounting records—into the argument.",
    recommendedNextStep: "Name what each item directly shows, then state separately what you infer about centralization and what alternative explanations remain possible.",
  };
}
