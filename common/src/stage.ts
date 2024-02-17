/** ステージ */
export const Stage = {
  Observation: 1,
  MedicalTreatment: 2,
  Hospitalization: 3,
} as const;
export type StageKey = keyof typeof Stage;
export type StageType = (typeof Stage)[keyof typeof Stage];

export const StageLabel: Record<StageType, string> = {
  [Stage.Observation]: "観察ステージ",
  [Stage.MedicalTreatment]: "通院ステージ",
  [Stage.Hospitalization]: "入院ステージ",
};
