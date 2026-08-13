import { describe, expect, it } from "vitest";
import { competencies, curriculumModules } from "../lib/curriculum";
import { moduleOne } from "../content/spokes/sumer/modules/module-01";
import type { EvidenceObject, SourceRecord } from "../content/types";
import { assertPublishableEvidence, developmentReviewContent, learnerVisibleContent, releaseReadyContent } from "../lib/publication";

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
    expect(moduleOne.evidence.label).toMatch(/historically reviewed evidence lab/i);
    expect(moduleOne.exercise).toMatchObject({ minWords: 300, maxWords: 600 });
  });

  it("provides bounded, source-checked reading guides with resilient fallbacks", () => {
    expect(moduleOne.resources).toHaveLength(2);
    const readingSourceIds = new Set(moduleOne.resources.map(({ sourceId }) => sourceId));
    expect(moduleOne.sourceLedger.filter(({ id }) => readingSourceIds.has(id))).toHaveLength(2);
    for (const resource of moduleOne.resources) {
      const source = moduleOne.sourceLedger.find(({ id }) => id === resource.sourceId);
      expect(["source-checked", "historically-reviewed"]).toContain(resource.reviewState);
      expect(resource.learnerQuestion).toBeTruthy();
      expect(source?.accessStatus).toBe("open");
      expect(source?.verificationDate).toBeTruthy();
      expect(source?.url).toMatch(/^https:\/\//);
      expect(source?.learnerPurpose).toBeTruthy();
      expect(source?.expectedTimeMinutes).toBeGreaterThan(0);
      expect(resource.locator).toMatch(/(pp\.|page)/i);
      expect(resource.readingUrl).toMatch(/#page=\d+$/);
      expect(resource.guide.authorArgument).toBeTruthy();
      expect(resource.guide.evidenceToNotice.length).toBeGreaterThan(1);
      expect(resource.guide.vocabulary.length).toBeGreaterThan(1);
      expect(resource.guide.questionsAndLimits.length).toBeGreaterThan(1);
      expect(resource.unavailableFallback.learnerTask).toBeTruthy();
      expect(resource.unavailableFallback.guidance.length).toBeGreaterThan(1);
      expect(resource.citation).toBeTruthy();
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
      id, reviewState, evidenceType: "Test type", title: id, description: "Test description", observation: "Test observation",
      context: "Test context", interpretations: ["Test interpretation"], uncertainty: "Test uncertainty", guidedQuestions: [], sourceIds, locator: "catalogue-1",
      image: { url: "https://example.test/image.jpg", alt: "Test image", credit: "Test credit", rights: "Test rights" },
    });
    const visible = learnerVisibleContent(
      [evidence("draft", "draft", [checkedSource.id]), evidence("candidate-backed", "source-checked", [candidateSource.id]), evidence("checked", "source-checked", [checkedSource.id])],
      [checkedSource, candidateSource], (item) => item.sourceIds,
    );
    expect(visible.map(({ id }) => id)).toEqual(["checked"]);
  });

  it("makes only historically reviewed evidence release-ready", () => {
    expect(moduleOne.evidenceObjects).toHaveLength(3);
    expect(new Set(moduleOne.evidenceObjects.map(({ evidenceType }) => evidenceType)).size).toBeGreaterThan(1);
    expect(moduleOne.evidenceObjects.every(({ reviewState }) => reviewState === "historically-reviewed")).toBe(true);
    expect(releaseReadyContent(moduleOne.evidenceObjects, moduleOne.sourceLedger, (item) => item.sourceIds)).toHaveLength(3);
    expect(developmentReviewContent(moduleOne.evidenceObjects, moduleOne.sourceLedger, (item) => item.sourceIds)).toEqual([]);
  });

  it("rejects historically reviewed evidence without a source and locator", () => {
    const invalid: EvidenceObject = {
      id: "missing-source", reviewState: "historically-reviewed", evidenceType: "Test type", title: "Invalid evidence",
      description: "Test description", observation: "Test observation", context: "Test context",
      interpretations: ["Test interpretation"], uncertainty: "Test uncertainty", guidedQuestions: [], sourceIds: [], locator: "",
      image: { url: "https://example.test/image.jpg", alt: "Test image", credit: "Test credit", rights: "Test rights" },
    };
    expect(() => assertPublishableEvidence(invalid, [])).toThrow(/requires a source and locator/i);
  });
});
