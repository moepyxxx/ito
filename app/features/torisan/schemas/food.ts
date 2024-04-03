import { createCheckboxSchema } from "@/components/atoms/forms/FormCheckBox";
import { createRadioGroupSchema } from "@/components/atoms/forms/FormRadioGroup";
import { createTextBoxSchema } from "@/components/atoms/forms/FormTextBox/createTextBoxSchema";
import { getErrorMessage } from "@/utils";
import { z } from "zod";
import { OtherFoodsAnySelect, StapleFoodAnySelect } from "@ito/common";

export const foodSchema = z.object({
  staple_food_type: createRadioGroupSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
  any_staple_food: createTextBoxSchema({
    required: false,
    max: 50,
    requiredMaxMessage: getErrorMessage({ type: "max", value: 50 }),
  }),
  other_food_types: createCheckboxSchema({
    required: false,
  }),
  any_other_foods: createTextBoxSchema({
    required: false,
    requiredMessage: getErrorMessage({ type: "required" }),
    max: 50,
    requiredMaxMessage: getErrorMessage({ type: "max", value: 50 }),
  }),
});

export const addFoodOtherRule = (schema: z.ZodObject<any>) => {
  return schema
    .superRefine((data, ctx) => {
      if (
        data.staple_food_type === Number(StapleFoodAnySelect) &&
        !data.any_staple_food
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["any_staple_food"],
          message: "その他を選択している場合は記入してください",
        });
      }
      return true;
    })
    .superRefine((data, ctx) => {
      if (
        data.other_food_types.includes(Number(OtherFoodsAnySelect)) &&
        !data.any_other_foods
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["any_other_foods"],
          message: "その他を選択している場合は記入してください",
        });
      }
      return true;
    });
};

export type FormFoodSubmitType = z.infer<typeof foodSchema>;

export type FormFoodEditType = {
  staple_food_type: null | number;
  any_staple_food: string;
  other_food_types: number[];
  any_other_foods: string;
};

export const getInitialFoodValue = (
  initialValue: FormFoodSubmitType | null
): FormFoodEditType =>
  initialValue
    ? {
        staple_food_type: initialValue.staple_food_type
          ? initialValue.staple_food_type
          : null,
        any_staple_food: initialValue.any_staple_food,
        other_food_types:
          initialValue.other_food_types.length > 0
            ? initialValue.other_food_types
            : [],
        any_other_foods: initialValue.any_other_foods,
      }
    : {
        staple_food_type: null,
        any_staple_food: "",
        other_food_types: [],
        any_other_foods: "",
      };
