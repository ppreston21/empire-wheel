"use client";

import { useEffect, useState } from "react";
import { readModuleOneComplete } from "@/lib/progress";

export function ProgressSummary({ compact = false }: { compact?: boolean }) {
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    const update = () => setComplete(readModuleOneComplete());
    update();
    window.addEventListener("storage", update);
    window.addEventListener("empire-wheel-progress", update);
    return () => { window.removeEventListener("storage", update); window.removeEventListener("empire-wheel-progress", update); };
  }, []);

  if (compact) return <div className="mt-7 flex gap-7 text-xs uppercase tracking-[.15em] text-stone-500"><span>10 modules</span><span>{complete ? "10%" : "0%"} complete</span></div>;
  const values = complete ? ["10%", "10%", "1 / 10"] : ["0%", "0%", "0 / 10"];
  return <section aria-label="Learning progress" className="mt-20 grid border-y border-white/10 md:grid-cols-3">{["Overall progress", "Mesopotamia progress", "Modules completed"].map((label, index) => <div key={label} className="border-b border-white/10 px-7 py-7 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"><p className="text-xs uppercase tracking-[.16em] text-stone-500">{label}</p><p className="mt-2 font-serif text-3xl text-stone-200">{values[index]}</p></div>)}</section>;
}
