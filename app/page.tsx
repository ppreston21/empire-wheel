import Link from "next/link";
import { CompetencyWheel } from "@/components/competency-wheel";
import { ProgressSummary } from "@/components/progress-summary";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
      <div className="grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]">
        <section>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#b28d4c]">Your competency map</p>
          <h1 className="max-w-xl font-serif text-5xl leading-[1.05] text-stone-100 md:text-7xl">Learn to<br /><em className="font-normal text-[#d4b77c]">do history.</em></h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-stone-400">Study scholarship. Examine primary sources. Build claims and defend them with evidence.</p>
          <Link href="/mesopotamia" className="mt-9 inline-flex border border-[#a17e42] bg-[#9c773a]/15 px-6 py-4 text-xs font-bold uppercase tracking-[.2em] text-[#e6ce9d] transition hover:bg-[#9c773a]/30">
            Enter Mesopotamia <span className="ml-5">→</span>
          </Link>
        </section>
        <section className="px-5 pt-8"><CompetencyWheel /></section>
      </div>
      <ProgressSummary />
      <p className="mt-5 text-xs text-stone-600">The remaining seventeen fields are locked for this initial release.</p>
    </main>
  );
}
