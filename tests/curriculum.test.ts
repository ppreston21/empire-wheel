import { describe, expect, it } from "vitest";
import { competencies, curriculumModules } from "../lib/curriculum";
import { moduleOne } from "../content/mesopotamia/module-01";

describe("initial curriculum", () => {
  it("defines all 18 competency spokes", () => {
    expect(competencies).toHaveLength(18);
  });

  it("offers ten modules and only unlocks Module 1", () => {
    expect(curriculumModules).toHaveLength(10);
    expect(curriculumModules.filter((module) => module.status === "available")).toEqual([
      expect.objectContaining({ number: 1, title: "From Village to City: Ubaid → Uruk" }),
    ]);
  });

  it("provides the complete Module 1 content structure", () => {
    expect(moduleOne.learningObjectives).toHaveLength(4);
    expect(moduleOne.keyConcepts).toContain("writing/accounting");
    expect(moduleOne.timeline).toHaveLength(5);
    expect(moduleOne.evidence.label).toMatch(/placeholder/i);
    expect(moduleOne.exercise).toMatchObject({ minWords: 300, maxWords: 600 });
  });
});
