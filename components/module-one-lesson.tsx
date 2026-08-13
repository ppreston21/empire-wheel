"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { moduleOne } from "@/content/spokes/sumer/modules/module-01";
import { countWords, createMockReview, type MockReview } from "@/lib/module-review";
import { markModuleOneComplete, readModuleOneComplete } from "@/lib/progress";
import { developmentReviewContent, learnerVisibleContent, releaseReadyContent } from "@/lib/publication";

const sectionLabel = "text-xs font-bold uppercase tracking-[.2em] text-[#b28d4c]";

export function ModuleOneLesson() {
  const [response, setResponse] = useState("");
  const [review, setReview] = useState<MockReview | null>(null);
  const [complete, setComplete] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const words = countWords(response);
  const valid = words >= moduleOne.exercise.minWords && words <= moduleOne.exercise.maxWords;
  const reviewEvidence = [
    ...releaseReadyContent(moduleOne.evidenceObjects, moduleOne.sourceLedger, (item) => item.sourceIds),
    ...developmentReviewContent(moduleOne.evidenceObjects, moduleOne.sourceLedger, (item) => item.sourceIds),
  ];
  const publishedResources = learnerVisibleContent(moduleOne.resources, moduleOne.sourceLedger, (item) => [item.sourceId]);

  useEffect(() => setComplete(readModuleOneComplete()), []);

  function submit() {
    setAttempted(true);
    if (!valid) return;
    setReview(createMockReview(response));
    setComplete(true);
    markModuleOneComplete();
  }

  return (
    <>
      <section id="objectives" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>01 · Learning objectives</p>
        <p className="mt-4 border-l border-amber-700/60 pl-4 text-sm leading-6 text-amber-200/70">Curriculum status: {moduleOne.reviewState}. Historical content and evidence remain unpublished until source and historical review are complete.</p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {moduleOne.learningObjectives.map((objective) => <li key={objective} className="border border-white/10 bg-white/[.02] p-5 leading-7 text-stone-300">{objective}</li>)}
        </ul>
      </section>

      <section id="overview" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>02 · Historical overview</p>
        <div className="mt-6 space-y-5 font-serif text-xl leading-9 text-stone-300">
          {moduleOne.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section id="concepts" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>03 · Key concepts</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {moduleOne.keyConcepts.map((concept) => <span key={concept} className="border border-[#7f6538] bg-[#9c773a]/10 px-4 py-2 text-sm text-[#dbc28e]">{concept}</span>)}
        </div>
      </section>

      <section id="read" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>04 · Read scholarship</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {publishedResources.map((resource) => {
            const source = moduleOne.sourceLedger.find(({ id }) => id === resource.sourceId);
            if (!source) return null;
            return <article key={resource.id} className="flex flex-col border border-white/10 bg-white/[.02] p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[.13em] text-[#bfa064]">
                <span>{source.resourceType}</span><span aria-hidden="true">·</span><span>{source.expectedTimeMinutes} min</span><span aria-hidden="true">·</span><span>{source.accessStatus} access</span>
              </div>
              <h2 className="mt-4 font-serif text-2xl leading-tight text-stone-100">{source.title}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-400">{source.creator}</p>
              <p className="mt-5 leading-7 text-stone-300">{source.learnerPurpose}</p>
              <div className="mt-5 border-l border-[#9c773a] pl-4">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-[#c9aa6d]">Bring this question</p>
                <p className="mt-2 font-serif text-lg leading-7 text-stone-200">{resource.learnerQuestion}</p>
              </div>
              <p className="mt-5 text-xs leading-5 text-stone-500">{resource.citation}</p>
              <a className="mt-6 w-fit border-b border-[#a98648] pb-1 text-sm font-bold text-[#e0bd78] hover:text-[#f0d9aa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b77c]" href={source.url} target="_blank" rel="noreferrer">Open resource <span className="sr-only">: {source.title}</span> ↗</a>
              <p className="mt-4 text-xs text-stone-600">Bibliography, access, and module fit reviewed · link checked {source.verificationDate}</p>
            </article>;
          })}
        </div>
      </section>

      <section id="timeline" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>05 · Timeline</p>
        <ol className="mt-6 border-l border-[#765f38]">
          {moduleOne.timeline.map((item) => <li key={item.date} className="relative grid gap-1 pb-7 pl-7 sm:grid-cols-[120px_1fr]"><span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border border-[#c39d5b] bg-[#11110f]" /><time className="font-serif text-[#d4b77c]">{item.date}</time><span className="text-stone-300">{item.event}</span></li>)}
        </ol>
      </section>

      <section id="evidence" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>06 · Source evidence</p>
        <div className="mt-6 border border-[#8c6c38] bg-[#9c773a]/10 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#e0bd78]">{moduleOne.evidence.label}</p>
          <p className="mt-3 border-l border-[#b28d4c] pl-4 text-sm leading-6 text-stone-400">{moduleOne.evidence.notice}</p>
          <blockquote className="mt-7 font-serif text-2xl leading-9 text-stone-200">{moduleOne.evidence.summary}</blockquote>
          <ul className="mt-7 grid gap-2 text-sm text-stone-400 sm:grid-cols-2">
            {moduleOne.evidence.items.map((item) => <li key={item}>◇ {item}</li>)}
          </ul>
          {reviewEvidence.length > 0 && <p role="status" className="mt-7 border border-amber-500/50 bg-amber-950/40 p-4 text-sm font-bold uppercase tracking-[.12em] text-amber-200">Evidence historically reviewed · wider draft module not release-ready</p>}
          <div className="mt-7 space-y-8">
            {reviewEvidence.map((item, index) => {
              const source = moduleOne.sourceLedger.find(({ id }) => id === item.sourceIds[0]);
              return <article key={item.id} className="overflow-hidden border border-white/10 bg-black/20">
                <div className="grid lg:grid-cols-[minmax(260px,.8fr)_1.2fr]">
                  <div className="relative min-h-72 bg-stone-200">
                    <Image src={item.image.url} alt={item.image.alt} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-contain" unoptimized />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#c9aa6d]">Object {index + 1} · {item.evidenceType}</p>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-stone-100">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-400">{item.description}</p>
                    <EvidenceField label="Direct observation">{item.observation}</EvidenceField>
                    <EvidenceField label="Catalogue context">{item.context}</EvidenceField>
                    <div className="mt-5"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#c9aa6d]">Interpretations to test</p><ul className="mt-2 space-y-2 text-sm leading-6 text-stone-300">{item.interpretations.map((interpretation) => <li key={interpretation}>◇ {interpretation}</li>)}</ul></div>
                    <EvidenceField label="Uncertainty and limits">{item.uncertainty}</EvidenceField>
                    <div className="mt-6 border-t border-white/10 pt-5"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#c9aa6d]">Your inquiry</p><ol className="mt-3 space-y-3">{item.guidedQuestions.map((question) => <li key={question.stage} className="grid gap-1 text-sm leading-6 sm:grid-cols-[110px_1fr]"><strong className="text-stone-500">{question.stage}</strong><span className="text-stone-300">{question.prompt}</span></li>)}</ol></div>
                    <p className="mt-5 text-xs leading-5 text-stone-500">Locator: {item.locator}<br />Credit: {item.image.credit}<br />Rights: {item.image.rights}</p>
                    {source && <a className="mt-4 inline-block border-b border-[#a98648] pb-1 text-sm font-bold text-[#e0bd78]" href={source.url} target="_blank" rel="noreferrer">Inspect collection record ↗</a>}
                  </div>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="exercise" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>07 · Analysis exercise</p>
        <h2 className="mt-5 font-serif text-3xl leading-tight text-stone-100">{moduleOne.exercise.prompt}</h2>
        <p className="mt-4 leading-7 text-stone-400">Build an argument from the evidence set. State which observations are direct evidence and which conclusions are historical inference.</p>
        <label htmlFor="analysis" className="mt-7 block text-xs font-bold uppercase tracking-[.15em] text-stone-400">Your analysis · 300–600 words</label>
        <textarea id="analysis" value={response} onChange={(event) => { setResponse(event.target.value); setAttempted(false); }} rows={14} className="mt-3 w-full resize-y border border-white/15 bg-black/20 p-5 leading-7 text-stone-200 outline-none transition focus:border-[#a98648]" placeholder="Begin with a claim, support it with specific evidence, and mark the limits of your inference…" />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
          <p className={`text-sm ${attempted && !valid ? "text-red-300" : "text-stone-500"}`} aria-live="polite">{words} words {attempted && !valid && `· Enter between ${moduleOne.exercise.minWords} and ${moduleOne.exercise.maxWords} words.`}</p>
          <button type="button" onClick={submit} className="border border-[#a17e42] bg-[#9c773a]/20 px-6 py-3 text-xs font-bold uppercase tracking-[.18em] text-[#ead19b] transition hover:bg-[#9c773a]/35">Submit analysis</button>
        </div>
      </section>

      <section id="review" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>08 · Reviewer feedback</p>
        {!review ? <div className="mt-6 border border-dashed border-white/15 p-7 text-stone-500">Mocked reviewer feedback appears here after a valid submission. No ideal answer is shown before your attempt.</div> : <Review review={review} />}
      </section>

      <section id="progress" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>09 · Completion & progress</p>
        <div className={`mt-6 flex items-center justify-between gap-6 border p-6 ${complete ? "border-[#8c6c38] bg-[#9c773a]/10" : "border-white/10"}`}>
          <div><p className="font-serif text-2xl text-stone-200">{complete ? "Module complete" : "Analysis not yet submitted"}</p><p className="mt-2 text-sm text-stone-500">{complete ? "Your completion is saved in this browser." : "Submit 300–600 words to complete Module 1."}</p></div>
          <span className="font-serif text-3xl text-[#d4b77c]" aria-hidden="true">{complete ? "✓" : "○"}</span>
        </div>
      </section>
    </>
  );
}

function EvidenceField({ label, children }: { label: string; children: string }) {
  return <div className="mt-5 border-l border-white/15 pl-4"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#c9aa6d]">{label}</p><p className="mt-2 text-sm leading-6 text-stone-300">{children}</p></div>;
}

function Review({ review }: { review: MockReview }) {
  const scores = [["Historical accuracy", review.scores.historicalAccuracy], ["Use of evidence", review.scores.useOfEvidence], ["Reasoning", review.scores.reasoning], ["Distinguishes inference", review.scores.distinguishesInference]] as const;
  const notes = [["Strongest observation", review.strongestObservation], ["Unsupported claim", review.unsupportedClaim], ["Missing evidence", review.missingEvidence], ["Recommended next step", review.recommendedNextStep]] as const;
  return <div className="mt-6 border border-[#8c6c38] bg-[#9c773a]/10 p-6 md:p-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#e0bd78]">Mock reviewer response · not expert assessment</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{scores.map(([label, score]) => <div key={label} className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-stone-300"><span>{label}</span><strong className="font-serif text-2xl text-[#ddc184]">{score}<span className="text-sm text-stone-600">/10</span></strong></div>)}</div><dl className="mt-7 space-y-5">{notes.map(([label, note]) => <div key={label}><dt className="text-xs font-bold uppercase tracking-[.14em] text-stone-500">{label}</dt><dd className="mt-2 leading-7 text-stone-300">{note}</dd></div>)}</dl></div>;
}
