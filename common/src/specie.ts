export const Specie = {
  SekiseiInko: 1,
  OkameInko: 2,
  KozakuraInko: 3,
} as const;

export type SpecieKey = keyof typeof Specie;
export type SpecieType = (typeof Specie)[keyof typeof Specie];

export const SpecieSelections = [
  { value: Specie.SekiseiInko, label: "セキセイインコ" },
  { value: Specie.OkameInko, label: "オカメインコ" },
  { value: Specie.KozakuraInko, label: "コザクラインコ" },
];

export const SpecieLabel: Record<SpecieType, string> = {
  [Specie.SekiseiInko]: "セキセイインコ",
  [Specie.OkameInko]: "オカメインコ",
  [Specie.KozakuraInko]: "コザクラインコ",
};
