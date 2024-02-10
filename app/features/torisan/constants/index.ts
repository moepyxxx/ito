import { StageType, Stage } from "../types";

export const StagLabel: Record<StageType, string> = {
  [Stage.Observation]: "観察ステージ",
  [Stage.MedicalTreatment]: "通院ステージ",
  [Stage.Hospitalization]: "入院ステージ",
};
