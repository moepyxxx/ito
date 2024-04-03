import { FormRadioGroup } from "@/components/atoms/forms/FormRadioGroup";
import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { NicknameSelections } from "@/features/torisan/constants";
import { FormBaseEditType } from "@/features/torisan/schemas/basic";
import { FC } from "react";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import {
  GenderSelections,
  SpecieSelections,
} from "../../../../../../common/src";
import { FormSelectMonth } from "@/components/atoms/forms/FormSelectMonth";
import { FormSelect } from "@/components/atoms/forms/FormSelect";

type Props = {
  rhfRegister: UseFormRegister<FormBaseEditType>;
  rhfErrors: FieldErrors<FormBaseEditType>;
  rhfSetValue: UseFormSetValue<FormBaseEditType>;
  rhfGetValues: UseFormGetValues<FormBaseEditType>;
};
export const RHFFormBase: FC<Props> = ({
  rhfRegister,
  rhfErrors,
  rhfSetValue,
  rhfGetValues,
}) => {
  return (
    <>
      <FormTextBox
        label="名前"
        inputType="text"
        {...rhfRegister("name")}
        required
        errorMessage={rhfErrors.name && rhfErrors.name.message}
      />
      <FormRadioGroup
        label="ニックネーム"
        selections={NicknameSelections}
        {...rhfRegister("nickname")}
        required
        errorMessage={rhfErrors.nickname && rhfErrors.nickname.message}
      />
      <FormSelect
        label="種類"
        selections={SpecieSelections}
        {...rhfRegister("specie_type")}
        required
        errorMessage={rhfErrors.specie_type && rhfErrors.specie_type.message}
      />
      <FormRadioGroup
        label="種類"
        selections={GenderSelections}
        {...rhfRegister("gender_type")}
        required
        errorMessage={rhfErrors.gender_type && rhfErrors.gender_type.message}
      />
      <FormSelectMonth
        label="誕生日"
        {...rhfRegister("birth_date")}
        onChange={(value: Date | null) => {
          rhfSetValue("birth_date", value);
        }}
        initialValue={rhfGetValues("birth_date")}
        required
        errorMessage={rhfErrors.birth_date && rhfErrors.birth_date.message}
      />
    </>
  );
};
