import { describe, expect, it } from "vitest";
import { competencies, curriculumModules } from "../lib/curriculum";
import { moduleOne } from "../content/mesopotamia/module-01";
import type { EvidenceObject, SourceRecord } from "../content/types";
import { assertPublishableEvidence, learnerVisibleContent } from "../lib/publication";

describe("initial curriculum", () => {
  it("defines all 18 competency spokes", () => {
    expect(competencies).toHaveLength(18);
  });

  it("offers ten modules and only unlocks Module 1", () => {
    expect(curriculumModules).toHaveLength(10);
    expect(curriculumModules.filter((module) => module.status === "available")).toEqual([
      expect.objectContaining({ number: 1, title: "Before Sumer: Ubaid → Uruk" }),
    ]);
  });

  it("provides the complete Module 1 content structure", () => {
    expect(moduleOne.learningObjectives).toHaveLength(4);
    expect(moduleOne.reviewState).toBe("draft");
    expect(moduleOne.keyConcepts).toContain("writing/accounting");
    expect(moduleOne.timeline).toHaveLength(5);
    expect(moduleOne.evidence.label).toMatch(/not source objects/i);
    expect(moduleOne.exercise).toMatchObject({ minWords: 300, maxWords: 600 });
  });

  it("publishes the historically reviewed Module 1 reading set", () => {
    expect(moduleOne.resources).toHaveLength(2);
    expect(moduleOne.sourceLedger).toHaveLength(2);
    for (const resource of moduleOne.resources) {
      const source = moduleOne.sourceLedger.find(({ id }) => id === resource.sourceId);
      expect(resource.reviewState).toBe("historically-reviewed");
      expect(resource.learnerQuestion).toBeTruthy();
      expect(source).toMatchObject({
        state: "historically-reviewed",
        accessStatus: "open",
        verificationDate: "2026-08-12",
      });
      expect(source?.url).toMatch(/^https:\/\//);
      expect(source?.learnerPurpose).toBeTruthy();
      expect(source?.expectedTimeMinutes).toBeGreaterThan(0);
    }
  });

  it("excludes draft content and content backed by unchecked candidate sources", () => {
    const checkedSource: SourceRecord = {
      id: "checked-source", state: "source-checked", title: "Checked resource",
      creator: "Example institution", resourceType: "catalogue",
      url: "https://example.test/catalogue", learnerPurpose: "Inspect the catalogue record.",
      expectedTimeMinutes: 10, accessStatus: "open", verificationDate: "2026-08-12",
    };
    const candidateSource: SourceRecord = { ...checkedSource, id: "candidate", state: "candidate", verificationDate: null };
    const evidence = (id: string, reviewState: EvidenceObject["reviewState"], sourceIds: string[]): EvidenceObject => ({
      id, reviewState, title: id, description: "Test description", observation: "Test observation",
      interpretations: ["Test interpretation"], sourceIds, locator: "catalogue-1",
    });
    const visible = learnerVisibleContent(
      [evidence("draft", "draft", [checkedSource.id]), evidence("candidate-backed", "source-checked", [candidateSource.id]), evidence("checked", "source-checked", [checkedSource.id])],
      [checkedSource, candidateSource], (item) => item.sourceIds,
    );
    expect(visible.map(({ id }) => id)).toEqual(["checked"]);
  });

  it("rejects historically reviewed evidence without a source and locator", () => {
    const invalid: EvidenceObject = {
      id: "missing-source", reviewState: "historically-reviewed", title: "Invalid evidence",
      description: "Test description", observation: "Test observation",
      interpretations: ["Test interpretation"], sourceIds: [], locator: "",
    };
    expect(() => assertPublishableEvidence(invalid, [])).toThrow(/requires a source and locator/i);
  });
});
