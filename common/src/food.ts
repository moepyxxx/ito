/** 主食 */
export const StapleFood = {
  Any: 0,
  Seed: 1,
  Pellet: 2,
} as const;

export type StapleFoodKey = keyof typeof StapleFood;
export type StapleFoodType = (typeof StapleFood)[keyof typeof StapleFood];

export const StapleFoodAnySelect = StapleFood.Any;

/** 副食・おやつ・ビタミン剤 */
export const OtherFood = {
  Any: 0,
  Seed: 1,
  Pellet: 2,
  Vegetable: 3,
  Fruit: 4,
  BolePowder: 5,
  SaltSoil: 6,
  Vitamin: 7,
} as const;

export type OtherFoodKey = keyof typeof OtherFood;
export type OtherFoodType = (typeof OtherFood)[keyof typeof OtherFood];

export const OtherFoodsAnySelect = OtherFood.Any;
