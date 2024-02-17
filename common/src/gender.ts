/** 性別 */
export const Gender = {
  Unknown: 1,
  Man: 2,
  Woman: 3,
} as const;

export type GenderKey = keyof typeof Gender;
export type GenderType = (typeof Gender)[keyof typeof Gender];

export const GenderLabel: Record<GenderType, string> = {
  [Gender.Unknown]: "不明",
  [Gender.Woman]: "女の子",
  [Gender.Man]: "男の子",
};
