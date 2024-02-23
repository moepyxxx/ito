export const Specie = {
  SekiseiInko: 1,
  OkameInko: 2,
  KozakuraInko: 3,
} as const;
export type SpecieKey = keyof typeof Specie;
export type SpecieType = (typeof Specie)[keyof typeof Specie];
