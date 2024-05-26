import {
  Gender,
  GenderType,
  OtherFood,
  OtherFoodType,
  OtherFoodsAnySelect,
  Specie,
  SpecieType,
  Stage,
  StageType,
  StapleFood,
  StapleFoodAnySelect,
  StapleFoodType,
} from '@ito/common';
import { createCustomUnion } from 'utils/createCustomUnion';
import {
  getMaxDateIsTodayError,
  getMaxCharsError,
  getMaxIntError,
  getRequiredError,
} from 'utils/getRequestErrorMessage';
import { z } from 'zod';

export const objectiveSchema = z
  .object({
    body_weight: z
      .number()
      .nonnegative()
      .max(50, getMaxIntError('目標体重', 50))
      .nullable(),
    amount_of_water: z
      .number()
      .nonnegative()
      .max(50, getMaxIntError('目標の水の量', 50))
      .nullable(),
    amount_of_staple_food: z
      .number()
      .nonnegative()
      .max(50, getMaxIntError('目標のごはんの量', 50))
      .nullable(),
  })
  .required();

export const foodSchema = z
  .object({
    staple_food_type: createCustomUnion<StapleFoodType>(
      StapleFood,
      '主食',
      true,
    ),
    any_staple_food: z
      .string()
      .max(50, getMaxCharsError('主食（その他）', 50))
      .nullable(),
    other_food_types: z.array(
      createCustomUnion<OtherFoodType>(OtherFood, '副食', true),
    ),
    any_other_foods: z
      .string()
      .max(50, getMaxCharsError('副食（その他）', 50))
      .nullable(),
  })
  .required()
  .superRefine((data, ctx) => {
    if (
      data.staple_food_type === StapleFoodAnySelect &&
      !data.any_staple_food
    ) {
      console.log('ここ通る？');
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['any_staple_food'],
        message: 'その他を選択している場合はその他（主食）に記入してください',
      });
    }
    return true;
  })
  .superRefine((data, ctx) => {
    if (
      data.other_food_types.includes(OtherFoodsAnySelect) &&
      !data.any_other_foods
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['any_other_foods'],
        message: 'その他を選択している場合はその他（副食）に記入してください',
      });
    }
    return true;
  });

export const createTorisanSchema = z
  .object({
    name: z
      .string()
      .min(1, getRequiredError('名前'))
      .max(20, getMaxCharsError('名前', 20)),
    nickname: z
      .string()
      .min(1, getRequiredError('ニックネーム'))
      .max(25, getMaxCharsError('ニックネーム', 25)),
    stage_type: createCustomUnion<StageType>(Stage, 'ステージ', true),
    specie_type: createCustomUnion<SpecieType>(Specie, '鳥さんの種類', true),
    birth_date: z.date().max(new Date(), getMaxDateIsTodayError('誕生日')),
    gender_type: createCustomUnion<GenderType>(Gender, '性別', true),
    objective: objectiveSchema,
    food: foodSchema,
  })
  .required();

export type CreateTorisanZodInput = z.infer<typeof createTorisanSchema>;

export const editTorisanSchema = z
  .object({
    objective: objectiveSchema,
    food: foodSchema,
  })
  .required();

export type EditTorisanZodInput = z.infer<typeof editTorisanSchema>;
