import { OtherFoodsAnySelect, StapleFoodAnySelect } from '@ito/common';
import {
  getConstantsExceptionError,
  getMaxDateIsTodayError,
  getMaxCharsError,
  getMaxIntError,
  getRequiredError,
} from 'utils/getRequestErrorMessage';
import { z } from 'zod';

// note: enumの定義の方法にやや伸び代あり
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
    stage_type: z
      .number({ required_error: getRequiredError('ステージ') })
      .positive()
      .gte(1, getConstantsExceptionError('ステージ'))
      .lte(3, getConstantsExceptionError('ステージ')),
    specie_type: z
      .number({ required_error: getRequiredError('鳥さんの種類') })
      .positive()
      .gte(1, getConstantsExceptionError('鳥さんの種類'))
      .lte(3, getConstantsExceptionError('鳥さんの種類')),
    birth_date: z.date().max(new Date(), getMaxDateIsTodayError('誕生日')),
    gender_type: z
      .number({ required_error: getRequiredError('性別') })
      .positive()
      .gte(1, getConstantsExceptionError('性別'))
      .lte(3, getConstantsExceptionError('性別')),
    objective: z
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
      .required(),
    food: z
      .object({
        staple_food_type: z
          .number({ required_error: getRequiredError('主食') })
          .nonnegative()
          .gte(0, getConstantsExceptionError('主食'))
          .lte(2, getConstantsExceptionError('主食')),
        any_staple_food: z
          .string()
          .max(50, getMaxCharsError('主食（その他）', 50))
          .nullable(),
        other_food_types: z.array(
          z
            .number()
            .nonnegative()
            .gte(0, getConstantsExceptionError('副食'))
            .lte(7, getConstantsExceptionError('副食')),
        ),
        any_other_foods: z
          .string()
          .max(50, getMaxCharsError('副食（その他）', 50))
          .nullable(),
      })
      .required(),
  })
  .required()
  .superRefine((data, ctx) => {
    if (
      data.food.staple_food_type === StapleFoodAnySelect &&
      !data.food.any_staple_food
    ) {
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
      data.food.other_food_types.includes(OtherFoodsAnySelect) &&
      !data.food.any_other_foods
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['any_other_foods'],
        message: 'その他を選択している場合はその他（副食）に記入してください',
      });
    }
    return true;
  });

export type CreateTorisanZodInput = z.infer<typeof createTorisanSchema>;
