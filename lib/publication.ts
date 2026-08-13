import type { ContentObject, EvidenceObject, SourceRecord } from "@/content/types";

export function isCheckedSource(source: SourceRecord): boolean {
  return source.state !== "candidate" && Boolean(source.verificationDate);
}

export function isLearnerVisible<T extends ContentObject>(
  content: T,
  sources: readonly SourceRecord[],
  sourceIds: readonly string[] = [],
): boolean {
  if (content.reviewState === "draft") return false;
  return sourceIds.every((sourceId) => {
    const source = sources.find(({ id }) => id === sourceId);
    return source ? isCheckedSource(source) : false;
  });
}

export function learnerVisibleContent<T extends ContentObject>(
  content: readonly T[],
  sources: readonly SourceRecord[],
  getSourceIds: (item: T) => readonly string[] = () => [],
): T[] {
  return content.filter((item) => isLearnerVisible(item, sources, getSourceIds(item)));
}

/** Source-checked content is available only in the non-release review build. */
export function developmentReviewContent<T extends ContentObject>(
  content: readonly T[],
  sources: readonly SourceRecord[],
  getSourceIds: (item: T) => readonly string[] = () => [],
): T[] {
  if (process.env.NODE_ENV === "production") return [];
  return content.filter((item) =>
    item.reviewState === "source-checked"
    && isLearnerVisible(item, sources, getSourceIds(item)),
  );
}

export function releaseReadyContent<T extends ContentObject>(
  content: readonly T[],
  sources: readonly SourceRecord[],
  getSourceIds: (item: T) => readonly string[] = () => [],
): T[] {
  return content.filter((item) =>
    item.reviewState === "historically-reviewed"
    && isLearnerVisible(item, sources, getSourceIds(item)),
  );
}

/** Fail closed before evidence is placed in a learner-facing collection. */
export function assertPublishableEvidence(evidence: EvidenceObject, sources: readonly SourceRecord[]): void {
  if (evidence.reviewState !== "historically-reviewed") return;
  if (!evidence.locator.trim() || evidence.sourceIds.length === 0) {
    throw new Error(`Publishable evidence ${evidence.id} requires a source and locator.`);
  }
  if (!isLearnerVisible(evidence, sources, evidence.sourceIds)) {
    throw new Error(`Publishable evidence ${evidence.id} references an unchecked source.`);
  }
}
