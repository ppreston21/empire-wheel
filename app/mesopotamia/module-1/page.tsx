import Link from "next/link";

const sections = ["Overview", "Key concepts", "Primary source", "Source analysis exercise"];

export default function ModuleOnePage() {
  return (
    <main className="relative mx-auto max-w-5xl px-6 py-14 lg:px-10 lg:py-20">
      <Link href="/mesopotamia" className="text-xs uppercase tracking-[.18em] text-stone-500 hover:text-stone-300">← Mesopotamia curriculum</Link>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_280px]">
        <article>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#b28d4c]">Module 01</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-tight text-stone-100 md:text-6xl">Sumer and the First Cities</h1>
          <div className="mt-10 border-l-2 border-[#9c773a] bg-[#9c773a]/10 p-7">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c39d5b]">Module placeholder</p>
            <p className="mt-3 leading-7 text-stone-300">Verified lesson material and primary-source evidence will be added in the next content milestone. No historical claims or source text are presented on this placeholder page.</p>
          </div>
        </article>
        <aside className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-2">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-stone-500">In this module</p>
          <ol className="mt-6 space-y-5">
            {sections.map((section, index) => <li key={section} className="flex gap-4 text-sm text-stone-500"><span className="font-serif text-[#8c744a]">{index + 1}</span><span>{section}</span></li>)}
          </ol>
          <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-5 text-stone-600">Content is not yet available in v0.1.</p>
        </aside>
      </div>
    </main>
  );
}
