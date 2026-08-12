"use client";

import { useEffect, useState } from "react";
import { moduleOne } from "@/content/mesopotamia/module-01";
import { countWords, createMockReview, type MockReview } from "@/lib/module-review";
import { markModuleOneComplete, readModuleOneComplete } from "@/lib/progress";

const sectionLabel = "text-xs font-bold uppercase tracking-[.2em] text-[#b28d4c]";

export function ModuleOneLesson() {
  const [response, setResponse] = useState("");
  const [review, setReview] = useState<MockReview | null>(null);
  const [complete, setComplete] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const words = countWords(response);
  const valid = words >= moduleOne.exercise.minWords && words <= moduleOne.exercise.maxWords;

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

      <section id="timeline" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>04 · Timeline</p>
        <ol className="mt-6 border-l border-[#765f38]">
          {moduleOne.timeline.map((item) => <li key={item.date} className="relative grid gap-1 pb-7 pl-7 sm:grid-cols-[120px_1fr]"><span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border border-[#c39d5b] bg-[#11110f]" /><time className="font-serif text-[#d4b77c]">{item.date}</time><span className="text-stone-300">{item.event}</span></li>)}
        </ol>
      </section>

      <section id="evidence" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>05 · Source evidence</p>
        <div className="mt-6 border border-[#8c6c38] bg-[#9c773a]/10 p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#e0bd78]">{moduleOne.evidence.label}</p>
          <p className="mt-3 border-l border-[#b28d4c] pl-4 text-sm leading-6 text-stone-400">{moduleOne.evidence.notice}</p>
          <blockquote className="mt-7 font-serif text-2xl leading-9 text-stone-200">{moduleOne.evidence.summary}</blockquote>
          <ul className="mt-7 grid gap-2 text-sm text-stone-400 sm:grid-cols-2">
            {moduleOne.evidence.items.map((item) => <li key={item}>◇ {item}</li>)}
          </ul>
        </div>
      </section>

      <section id="exercise" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>06 · Analysis exercise</p>
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
        <p className={sectionLabel}>07 · Reviewer feedback</p>
        {!review ? <div className="mt-6 border border-dashed border-white/15 p-7 text-stone-500">Mocked reviewer feedback appears here after a valid submission. No ideal answer is shown before your attempt.</div> : <Review review={review} />}
      </section>

      <section id="progress" className="border-t border-white/10 pt-10">
        <p className={sectionLabel}>08 · Completion & progress</p>
        <div className={`mt-6 flex items-center justify-between gap-6 border p-6 ${complete ? "border-[#8c6c38] bg-[#9c773a]/10" : "border-white/10"}`}>
          <div><p className="font-serif text-2xl text-stone-200">{complete ? "Module complete" : "Analysis not yet submitted"}</p><p className="mt-2 text-sm text-stone-500">{complete ? "Your completion is saved in this browser." : "Submit 300–600 words to complete Module 1."}</p></div>
          <span className="font-serif text-3xl text-[#d4b77c]" aria-hidden="true">{complete ? "✓" : "○"}</span>
        </div>
      </section>
    </>
  );
}

function Review({ review }: { review: MockReview }) {
  const scores = [["Historical accuracy", review.scores.historicalAccuracy], ["Use of evidence", review.scores.useOfEvidence], ["Reasoning", review.scores.reasoning], ["Distinguishes inference", review.scores.distinguishesInference]] as const;
  const notes = [["Strongest observation", review.strongestObservation], ["Unsupported claim", review.unsupportedClaim], ["Missing evidence", review.missingEvidence], ["Recommended next step", review.recommendedNextStep]] as const;
  return <div className="mt-6 border border-[#8c6c38] bg-[#9c773a]/10 p-6 md:p-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#e0bd78]">Mock reviewer response · not expert assessment</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{scores.map(([label, score]) => <div key={label} className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-stone-300"><span>{label}</span><strong className="font-serif text-2xl text-[#ddc184]">{score}<span className="text-sm text-stone-600">/10</span></strong></div>)}</div><dl className="mt-7 space-y-5">{notes.map(([label, note]) => <div key={label}><dt className="text-xs font-bold uppercase tracking-[.14em] text-stone-500">{label}</dt><dd className="mt-2 leading-7 text-stone-300">{note}</dd></div>)}</dl></div>;
}
