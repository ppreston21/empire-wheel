import Link from "next/link";
import { ModuleOneLesson } from "@/components/module-one-lesson";
import { moduleOne } from "@/content/mesopotamia/module-01";

const sections = ["Objectives", "Overview", "Concepts", "Timeline", "Evidence", "Exercise", "Review", "Progress"];

export default function ModuleOnePage() {
  return <main className="relative mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
    <Link href="/mesopotamia" className="text-xs uppercase tracking-[.18em] text-stone-500 hover:text-stone-300">← Mesopotamia curriculum</Link>
    <header className="mt-10 border-b border-white/10 pb-12"><p className="text-xs font-bold uppercase tracking-[.25em] text-[#b28d4c]">Module {String(moduleOne.number).padStart(2, "0")} · Mesopotamia</p><h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-stone-100 md:text-7xl">{moduleOne.title}</h1><p className="mt-3 font-serif text-3xl text-[#d4b77c]">{moduleOne.period}</p><p className="mt-7 max-w-2xl leading-7 text-stone-400">Trace how material evidence for irrigation, surplus, temples, and accounting informs—but does not settle—arguments about the emergence of urban administration.</p></header>
    <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_220px]"><article className="space-y-14"><ModuleOneLesson /></article><aside className="order-first lg:order-last"><nav aria-label="Module sections" className="border-t border-white/10 pt-5 lg:sticky lg:top-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-stone-500">In this module</p><ol className="mt-5 grid grid-cols-2 gap-3 text-sm text-stone-500 lg:grid-cols-1">{sections.map((section, index) => <li key={section}><a href={`#${["objectives", "overview", "concepts", "timeline", "evidence", "exercise", "review", "progress"][index]}`} className="hover:text-[#d4b77c]"><span className="mr-3 font-serif text-[#8c744a]">{index + 1}</span>{section}</a></li>)}</ol></nav></aside></div>
  </main>;
}
