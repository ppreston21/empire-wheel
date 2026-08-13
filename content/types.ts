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

/** A learner-facing use of a checked source. */
export type ExternalResource = ContentObject & {
  sourceId: string;
  citation: string;
  locator: string;
  readingUrl: string;
  learnerQuestion: string;
  centralQuestionConnection: string;
  guide: {
    authorArgument: string;
    evidenceToNotice: string[];
    vocabulary: { term: string; context: string }[];
    questionsAndLimits: string[];
  };
  unavailableFallback: {
    learnerTask: string;
    guidance: string[];
  };
};

export type ContentObject = { id: string; reviewState: ReviewState };

export type EvidenceObject = ContentObject & {
  evidenceType: string;
  title: string;
  description: string;
  observation: string;
  context: string;
  interpretations: string[];
  uncertainty: string;
  guidedQuestions: { stage: "Observe" | "Contextualize" | "Interpret"; prompt: string }[];
  sourceIds: string[];
  locator: string;
  image: {
    url: string;
    alt: string;
    credit: string;
    rights: string;
  };
};

export type NarrativeSection = ContentObject & {
  heading: string;
  paragraphs: string[];
  sourceIds: string[];
};
