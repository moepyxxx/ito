// @ito/commonを利用したいが、nestjsがcommonjsのためECMAScriptモジュールを利用できない
// 一旦ここでcommonjsのモジュールをコピペする…つらい

// nestjsはあまりECMAScript対応する気なさそう
// see: https://stackoverflow.com/questions/74830166/unable-to-import-esm-module-in-nestjs

// 以下でなんとかできるかも
// see: https://blog.cybozu.io/entry/2020/10/06/170000

/** 性別 */
export const Gender = {
  Unknown: 1,
  Man: 2,
  Woman: 3,
} as const;

export type GenderKey = keyof typeof Gender;
export type GenderType = (typeof Gender)[keyof typeof Gender];

export const GenderLabel: Record<GenderType, string> = {
  [Gender.Unknown]: '不明',
  [Gender.Woman]: '女の子',
  [Gender.Man]: '男の子',
};

export const Specie = {
  SekiseiInko: 1,
  OkameInko: 2,
  KozakuraInko: 3,
} as const;
export type SpecieKey = keyof typeof Specie;
export type SpecieType = (typeof Specie)[keyof typeof Specie];

/** ステージ */
export const Stage = {
  Observation: 1,
  MedicalTreatment: 2,
  Hospitalization: 3,
} as const;
export type StageKey = keyof typeof Stage;
export type StageType = (typeof Stage)[keyof typeof Stage];

export const StageLabel: Record<StageType, string> = {
  [Stage.Observation]: '観察ステージ',
  [Stage.MedicalTreatment]: '通院ステージ',
  [Stage.Hospitalization]: '入院ステージ',
};
