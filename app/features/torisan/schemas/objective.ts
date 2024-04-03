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
