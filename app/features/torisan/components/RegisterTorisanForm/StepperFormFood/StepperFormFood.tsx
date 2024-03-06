import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { RenderStepActions } from "@/components/layouts/StepperLayout/useStepper";
import {
  FormRadioGroup,
  createRadioGroupSchema,
} from "@/components/atoms/forms/FormRadioGroup";
import { useErrorMessage } from "@/hooks";
import { createTextBoxSchema } from "@/components/atoms/forms/FormTextBox/createTextBoxSchema";
import {
  FormCheckBox,
  createCheckboxSchema,
} from "@/components/atoms/forms/FormCheckBox";
import {
  OtherFoodsAnySelect,
  OtherFoodsSelections,
  StapleFoodAnySelect,
  StapleFoodSelections,
} from "@/features/torisan/constants";

type Props = {
  renderStepperActions: RenderStepActions;
};
export const StepperFormFood: React.FC<Props> = ({ renderStepperActions }) => {
  const getErrorMessage = useErrorMessage();

  const schema = z
    .object({
      staple_food: createRadioGroupSchema({
        required: true,
        requiredMessage: getErrorMessage({ type: "required" }),
      }),
      any_staple_food: createTextBoxSchema({
        required: false,
      }),
      other_foods: createCheckboxSchema({
        required: false,
      }),
      any_other_foods: createTextBoxSchema({
        required: false,
        requiredMessage: getErrorMessage({ type: "required" }),
      }),
    })
    .superRefine((data, ctx) => {
      if (
        data.staple_food === Number(StapleFoodAnySelect) &&
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
        data.other_foods.includes(Number(OtherFoodsAnySelect)) &&
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

  type FormSchemaType = z.infer<typeof schema>;
  type FormEditType = {
    staple_food: null | number;
    any_staple_food: string;
    other_foods: number[];
    any_other_foods: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<FormEditType, any, FormSchemaType>({
    defaultValues: {
      staple_food: null,
      any_staple_food: "",
      other_foods: [],
      any_other_foods: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const currentStapleFood = useWatch({
    control,
    name: "staple_food",
  });
  const currentOtherFoods = useWatch({
    control,
    name: "other_foods",
  });

  return (
    <form
      onSubmit={handleSubmit(console.warn)}
      className="max-w-96 flex flex-col space-y-10">
      <FormRadioGroup
        label="主食"
        selections={StapleFoodSelections}
        {...register("staple_food")}
        required
        errorMessage={errors.staple_food && errors.staple_food.message}
      />
      {/** @ts-expect-error 実態はzodのtransformのタイミングが異なるためstring同士で比較している… */}
      {currentStapleFood === StapleFoodAnySelect && (
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
        {...register("other_foods")}
        errorMessage={errors.other_foods && errors.other_foods.message}
      />
      {/** @ts-expect-error 実態はzodのtransformのタイミングが異なるためstring同士で比較している… */}
      {currentOtherFoods.includes(OtherFoodsAnySelect) && (
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
        {renderStepperActions(!isValid, {
          onClickNext: (onNext: () => void) => {
            handleSubmit(console.warn);
            onNext();
          },
        })}
      </div>
    </form>
  );
};
