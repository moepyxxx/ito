import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { RenderStepActions } from "@/components/layouts/StepperLayout/useStepper";
import {
  FormRadioGroup,
  createRadioGroupSchema,
} from "@/components/atoms/forms/FormRadioGroup";
import { createTextBoxSchema } from "@/components/atoms/forms/FormTextBox/createTextBoxSchema";
import {
  FormCheckBox,
  createCheckboxSchema,
} from "@/components/atoms/forms/FormCheckBox";
import {
  OtherFoodsSelections,
  StapleFoodSelections,
} from "@/features/torisan/constants";
import { getErrorMessage } from "@/utils";
import { OtherFoodsAnySelect, StapleFoodAnySelect } from "@ito/common";

const schema = z
  .object({
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
  })
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

export type FormSubmitType = z.infer<typeof schema>;
type FormEditType = {
  staple_food_type: null | number | string;
  any_staple_food: string;
  other_food_types: (number | string)[];
  any_other_foods: string;
};

type Props = {
  renderStepperActions: RenderStepActions;
  onSubmit: (data: FormSubmitType) => void;
  initialValue: FormSubmitType | null;
};
export const StepperFormFood: React.FC<Props> = ({
  renderStepperActions,
  onSubmit,
  initialValue,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormEditType, any, FormSubmitType>({
    defaultValues: initialValue
      ? {
          staple_food_type: initialValue.staple_food_type
            ? initialValue.staple_food_type.toString()
            : null,
          any_staple_food: initialValue.any_staple_food,
          other_food_types:
            initialValue.other_food_types.length > 0
              ? initialValue.other_food_types.map((food) => food.toString())
              : [],
          any_other_foods: initialValue.any_other_foods,
        }
      : {
          staple_food_type: null,
          any_staple_food: "",
          other_food_types: [],
          any_other_foods: "",
        },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const currentStapleFood = useWatch({
    control,
    name: "staple_food_type",
  });
  const currentOtherFoods = useWatch({
    control,
    name: "other_food_types",
  });

  return (
    <div className="flex flex-col space-y-10">
      <FormRadioGroup
        label="主食"
        selections={StapleFoodSelections}
        {...register("staple_food_type")}
        required
        errorMessage={
          errors.staple_food_type && errors.staple_food_type.message
        }
      />
      {currentStapleFood === StapleFoodAnySelect.toString() && (
        <FormTextBox
          label="主食（その他）"
          {...register("any_staple_food")}
          inputType="text"
          errorMessage={
            errors.any_staple_food && errors.any_staple_food.message
          }
        />
      )}
      <FormCheckBox
        label="副食・おやつ・栄養剤"
        selections={OtherFoodsSelections}
        {...register("other_food_types")}
        errorMessage={
          errors.other_food_types && errors.other_food_types.message
        }
      />
      {currentOtherFoods.includes(OtherFoodsAnySelect.toString()) && (
        <FormTextBox
          label="副食・おやつ・栄養剤（その他）"
          {...register("any_other_foods")}
          inputType="text"
          errorMessage={
            errors.any_other_foods && errors.any_other_foods.message
          }
        />
      )}
      <div className="pt-2">
        {renderStepperActions(true, {
          onClickNext: (onNext: () => void) => {
            handleSubmit((data) => {
              onSubmit(data);
              onNext();
            })();
          },
          onClickPrev: (onPrev: () => void) => onPrev(),
        })}
      </div>
    </div>
  );
};
