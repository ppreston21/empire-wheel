export type CurriculumModule = {
  number: number;
  title: string;
  status: "available" | "locked";
};

export const curriculumModules: CurriculumModule[] = [
  { number: 1, title: "From Village to City: Ubaid → Uruk", status: "available" },
  ...Array.from({ length: 9 }, (_, index) => ({
    number: index + 2,
    title: "Forthcoming module",
    status: "locked" as const,
  })),
];

export const competencies = [
  "Mesopotamia", "Egypt", "Anatolia", "Levant", "Persia", "Greece",
  "Rome", "South Asia", "East Asia", "Africa", "Americas", "Oceania",
  "Medieval Worlds", "Early Modern", "Modernity", "Historiography",
  "Source Criticism", "Research Methods",
] as const;
