import { competencies } from "@/lib/curriculum";

export function CompetencyWheel() {
  const center = 200;
  const radius = 164;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-label="18-spoke competency wheel; Mesopotamia is active">
      <svg viewBox="0 0 400 400" role="img" className="h-full w-full overflow-visible">
        <title>Empire Wheel competency map</title>
        <circle cx={center} cy={center} r={radius} fill="#171714" stroke="#514b3f" strokeWidth="1" />
        <circle cx={center} cy={center} r="105" fill="none" stroke="#37342e" strokeWidth="1" />
        <circle cx={center} cy={center} r="50" fill="#11110f" stroke="#9a783e" strokeWidth="1" />
        {competencies.map((competency, index) => {
          const angle = (index * 360) / competencies.length - 90;
          const radians = (angle * Math.PI) / 180;
          const x = center + radius * Math.cos(radians);
          const y = center + radius * Math.sin(radians);
          const active = index === 0;
          return (
            <g key={competency}>
              <line x1={center} y1={center} x2={x} y2={y} stroke={active ? "#c59b50" : "#46423a"} strokeWidth={active ? 4 : 1} />
              <circle cx={x} cy={y} r={active ? 8 : 4} fill={active ? "#d2aa62" : "#5b574e"} />
            </g>
          );
        })}
        <text x="200" y="196" textAnchor="middle" fill="#e7d4a7" fontFamily="Georgia, serif" fontSize="13" letterSpacing="2">EMPIRE</text>
        <text x="200" y="214" textAnchor="middle" fill="#817867" fontSize="8" letterSpacing="2">WHEEL</text>
      </svg>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-7 text-center">
        <span className="block whitespace-nowrap font-serif text-lg text-[#e1c78f]">Mesopotamia</span>
        <span className="text-[10px] uppercase tracking-[.2em] text-[#a98b54]">Active field</span>
      </div>
    </div>
  );
}
