import { StageType, Stage, Specie, SpecieType } from "../types";

export const StagLabel: Record<StageType, string> = {
  [Stage.Observation]: "観察ステージ",
  [Stage.MedicalTreatment]: "通院ステージ",
  [Stage.Hospitalization]: "入院ステージ",
};

export const SpecieSrcPath: Record<SpecieType, string> = {
  [Specie.SekiseiInko]: "/soecies/sekisei.png",
  [Specie.OkameInko]: "/soecies/okame.png",
  [Specie.KozakuraInko]: "/soecies/kozakura.png",
};
