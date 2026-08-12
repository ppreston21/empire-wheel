import { describe, expect, it } from "vitest";
import { countWords, createMockReview } from "../lib/module-review";

describe("module analysis helpers", () => {
  it("counts whitespace-separated words", () => {
    expect(countWords("  one\n two   three ")).toBe(3);
    expect(countWords("   ")).toBe(0);
  });

  it("returns bounded scores and rewards evidence and inference language", () => {
    const review = createMockReview("Settlement and monumental evidence may suggest coordination through seals, tokens, accounting, and proto-cuneiform records.");
    expect(Object.values(review.scores).every((score) => score >= 1 && score <= 10)).toBe(true);
    expect(review.scores.useOfEvidence).toBe(10);
    expect(review.scores.distinguishesInference).toBe(9);
  });
});
