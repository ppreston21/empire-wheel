export type ReviewState = "draft" | "source-checked" | "historically-reviewed";

export type SourceState = "candidate" | "source-checked" | "historically-reviewed";
export type AccessStatus = "open" | "restricted" | "unavailable";

/** A checked description of an external resource, as required by R-004. */
export type SourceRecord = {
  id: string;
  state: SourceState;
  title: string;
  creator: string;
  resourceType: string;
  url: string;
  learnerPurpose: string;
  expectedTimeMinutes: number;
  accessStatus: AccessStatus;
  verificationDate: string | null;
};

export type ContentObject = { id: string; reviewState: ReviewState };

export type EvidenceObject = ContentObject & {
  title: string;
  description: string;
  observation: string;
  interpretations: string[];
  sourceIds: string[];
  locator: string;
};

export type NarrativeSection = ContentObject & {
  heading: string;
  paragraphs: string[];
  sourceIds: string[];
};
