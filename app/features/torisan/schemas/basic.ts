import { z } from "zod";
import { createRadioGroupSchema } from "@/components/atoms/forms/FormRadioGroup";

import { createSelectSchema } from "@/components/atoms/forms/FormSelect";
import { createSelectMonthSchema } from "@/components/atoms/forms/FormSelectMonth";
import { createTextBoxSchema } from "@/components/atoms/forms/FormTextBox/createTextBoxSchema";
import { getErrorMessage } from "@/utils";
import { NicknameDefaultSelect } from "../constants";

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
  nickname: number | null;
  specie_type: number | null;
  gender_type: number | null;
  birth_date: Date | null;
};

export const getInitialBaseValue = (initialValue: FormBaseSubmitType | null) =>
  initialValue != null
    ? {
        name: initialValue.name,
        nickname:
          initialValue.nickname == null ? undefined : initialValue.nickname,
        specie_type: initialValue.specie_type,
        gender_type: initialValue.gender_type ? initialValue.gender_type : null,
        birth_date: initialValue.birth_date,
      }
    : {
        name: "",
        nickname: NicknameDefaultSelect,
        specie_type: null,
        gender_type: null,
        birth_date: null,
      };
