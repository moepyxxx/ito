import { createTextBoxNumberSchema } from "@/components/atoms/forms/FormTextBox/createTextBoxSchema";
import { getErrorMessage } from "@/utils";
import { z } from "zod";

export const objectiveSchema = z.object({
  body_weight: createTextBoxNumberSchema({
    required: false,
    max: 50,
    requiredMaxMessage: getErrorMessage({ type: "maxNumber", value: 50 }),
  }),
  amount_of_staple_food: createTextBoxNumberSchema({
    required: false,
    max: 50,
    requiredMaxMessage: getErrorMessage({ type: "maxNumber", value: 50 }),
  }),
  amount_of_water: createTextBoxNumberSchema({
    required: false,
    max: 50,
    requiredMaxMessage: getErrorMessage({ type: "maxNumber", value: 50 }),
  }),
});

export type FormObjectiveSubmitType = z.infer<typeof objectiveSchema>;
export type FormObjectiveEditType = {
  body_weight: number | null;
  amount_of_staple_food: number | null;
  amount_of_water: number | null;
};

export const getInitialObjectiveValue = (
  initialValue: FormObjectiveSubmitType | null
) =>
  initialValue != null
    ? {
        body_weight: initialValue.body_weight,
        amount_of_staple_food: initialValue.amount_of_staple_food,
        amount_of_water: initialValue.amount_of_water,
      }
    : {
        body_weight: null,
        amount_of_staple_food: null,
        amount_of_water: null,
      };
