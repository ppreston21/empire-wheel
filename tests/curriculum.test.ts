import { describe, expect, it } from "vitest";
import { competencies, curriculumModules } from "../lib/curriculum";

describe("initial curriculum", () => {
  it("defines all 18 competency spokes", () => {
    expect(competencies).toHaveLength(18);
  });

  it("offers ten modules and only unlocks Module 1", () => {
    expect(curriculumModules).toHaveLength(10);
    expect(curriculumModules.filter((module) => module.status === "available")).toEqual([
      expect.objectContaining({ number: 1, title: "Sumer and the First Cities" }),
    ]);
  });
});
