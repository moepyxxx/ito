import { z } from "zod";
import { createRadioGroupSchema } from "@/components/atoms/forms/FormRadioGroup";

import { createSelectSchema } from "@/components/atoms/forms/FormSelect";
import { createSelectMonthSchema } from "@/components/atoms/forms/FormSelectMonth";
import { createTextBoxSchema } from "@/components/atoms/forms/FormTextBox/createTextBoxSchema";
import { getErrorMessage } from "@/utils";

export const baseSchema = z.object({
  name: createTextBoxSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
    max: 20,
    requiredMaxMessage: getErrorMessage({ type: "max", value: 20 }),
  }),
  nickname: createRadioGroupSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
  specie_type: createSelectSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
  gender_type: createRadioGroupSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
  birth_date: createSelectMonthSchema({
    required: true,
    requiredMessage: getErrorMessage({ type: "required" }),
  }),
});

export type FormBaseSubmitType = z.infer<typeof baseSchema>;
export type FormBaseEditType = {
  name: string;
  nickname: number | string | null;
  specie_type: number | null | string;
  gender_type: number | null | string;
  birth_date: Date | null;
};
