export type CurriculumModule = {
  number: number;
  title: string;
  status: "available" | "locked";
};

export const curriculumModules: CurriculumModule[] = [
  { number: 1, title: "Before Sumer: Ubaid → Uruk", status: "available" },
  { number: 2, title: "The Urban Revolution", status: "locked" },
  { number: 3, title: "Gods, Temples & Administration", status: "locked" },
  { number: 4, title: "Inventing Information", status: "locked" },
  { number: 5, title: "Producing the City", status: "locked" },
  { number: 6, title: "Networks of Wealth", status: "locked" },
  { number: 7, title: "City Against City", status: "locked" },
  { number: 8, title: "The Sumerian Political World", status: "locked" },
  { number: 9, title: "Sumer at Its Apex", status: "locked" },
  { number: 10, title: "When City-States Meet Empire", status: "locked" },
];

export const competencies = [
  "Mesopotamia", "Egypt", "Anatolia", "Levant", "Persia", "Greece",
  "Rome", "South Asia", "East Asia", "Africa", "Americas", "Oceania",
  "Medieval Worlds", "Early Modern", "Modernity", "Historiography",
  "Source Criticism", "Research Methods",
] as const;
