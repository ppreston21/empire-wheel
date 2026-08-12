import Link from "next/link";
import { curriculumModules } from "@/lib/curriculum";

export default function MesopotamiaPage() {
  return (
    <main className="relative mx-auto max-w-5xl px-6 py-14 lg:px-10 lg:py-20">
      <Link href="/" className="text-xs uppercase tracking-[.18em] text-stone-500 hover:text-stone-300">← Competency wheel</Link>
      <div className="mt-10 border-b border-white/10 pb-12">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-[#b28d4c]">Field 01 · Active curriculum</p>
        <h1 className="mt-4 font-serif text-5xl text-stone-100 md:text-6xl">Ancient Mesopotamia</h1>
        <p className="mt-5 max-w-2xl leading-7 text-stone-400">Develop a foundation for interpreting the societies of ancient Mesopotamia through scholarship, material evidence, and primary sources.</p>
        <div className="mt-7 flex gap-7 text-xs uppercase tracking-[.15em] text-stone-500"><span>10 modules</span><span>0% complete</span></div>
      </div>
      <ol className="mt-8 space-y-3">
        {curriculumModules.map((module) => {
          const available = module.status === "available";
          const content = (
            <div className={`group flex items-center gap-5 border px-5 py-5 transition md:px-7 ${available ? "border-[#8c6c38] bg-[#9c773a]/10 hover:bg-[#9c773a]/20" : "border-white/[.07] text-stone-600"}`}>
              <span className={`font-serif text-2xl ${available ? "text-[#d3b779]" : "text-stone-700"}`}>{String(module.number).padStart(2, "0")}</span>
              <div className="min-w-0 flex-1"><p className={`font-serif text-lg ${available ? "text-stone-200" : "text-stone-500"}`}>{module.title}</p><p className="mt-1 text-[10px] uppercase tracking-[.18em]">{available ? "Available now" : "Locked · forthcoming"}</p></div>
              <span aria-hidden="true" className="text-stone-500">{available ? "→" : "◇"}</span>
            </div>
          );
          return <li key={module.number}>{available ? <Link href="/mesopotamia/module-1">{content}</Link> : content}</li>;
        })}
      </ol>
    </main>
  );
}
