import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormRadioGroup } from "@/components/atoms/forms/FormRadioGroup";
import {
  OtherFoodsSelections,
  StapleFoodSelections,
} from "@/features/torisan/constants";
import { FormFoodEditType } from "../../../schemas/food";
import {
  OtherFoodsAnySelect,
  StapleFoodAnySelect,
} from "../../../../../../common/src";
import { FormCheckBox } from "@/components/atoms/forms/FormCheckBox";

type Props = {
  rhfRegister: UseFormRegister<FormFoodEditType>;
  rhfErrors: FieldErrors<FormFoodEditType>;
  currentStapleFood: number | null;
  currentOtherFoods: number[];
};

export const RHFFormFood: FC<Props> = ({
  rhfRegister,
  rhfErrors,
  currentStapleFood,
  currentOtherFoods,
}) => {
  return (
    <>
      <FormRadioGroup
        label="主食"
        selections={StapleFoodSelections}
        {...rhfRegister("staple_food_type")}
        required
        errorMessage={
          rhfErrors.staple_food_type && rhfErrors.staple_food_type.message
        }
      />
      {currentStapleFood === StapleFoodAnySelect && (
        <FormTextBox
          label="主食（その他）"
          {...rhfRegister("any_staple_food")}
          inputType="text"
          errorMessage={
            rhfErrors.any_staple_food && rhfErrors.any_staple_food.message
          }
        />
      )}
      <FormCheckBox
        label="副食・おやつ・栄養剤"
        selections={OtherFoodsSelections}
        {...rhfRegister("other_food_types")}
        errorMessage={
          rhfErrors.other_food_types && rhfErrors.other_food_types.message
        }
      />
      {currentOtherFoods.includes(OtherFoodsAnySelect) && (
        <FormTextBox
          label="副食・おやつ・栄養剤（その他）"
          {...rhfRegister("any_other_foods")}
          inputType="text"
          errorMessage={
            rhfErrors.any_other_foods && rhfErrors.any_other_foods.message
          }
        />
      )}
    </>
  );
};
