import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { RenderStepActions } from "@/components/layouts/StepperLayout/useStepper";
import { Note } from "@/components/molecules/Note";
import {
  FormObjectiveEditType,
  FormObjectiveSubmitType,
  objectiveSchema,
} from "../../../schemas/objective";

type Props = {
  renderStepperActions: RenderStepActions;
  onSubmit: (data: FormObjectiveSubmitType) => void;
  initialValue: FormObjectiveSubmitType | null;
};

export const StepperFormObjective: React.FC<Props> = ({
  renderStepperActions,
  onSubmit,
  initialValue,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormObjectiveEditType, any, FormObjectiveSubmitType>({
    defaultValues:
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
          },
    mode: "onChange",
    resolver: zodResolver(objectiveSchema),
  });

  return (
    <div className="flex flex-col space-y-10">
      <Note title="目標について">
        itoは毎日の鳥さんの健康状態の”変化”に気づくことを目的としており、基本的には記録された体重・食べたご飯の量やお水の量に関して、毎日の変化を通知します。しかし、すでにお医者さんをはじめとした専門の方により目指すべき標準目標の約束がある場合、毎日の変化について標準情報と比べた結果をレポートとして作成します。基本的にすでにお医者さんにかかった鳥さんのための機能であり、この目標はあなたの鳥さんを直接見た専門の方からのアドバイスがある場合のみ設定することをおすすめしています。
      </Note>
      <FormTextBox
        label="体重（g）"
        inputType="number"
        {...register("body_weight")}
        errorMessage={errors.body_weight && errors.body_weight.message}
      />
      <FormTextBox
        label="ごはんの量（g）"
        inputType="number"
        {...register("amount_of_staple_food")}
        errorMessage={
          errors.amount_of_staple_food && errors.amount_of_staple_food.message
        }
      />
      <FormTextBox
        label="お水の量（g）"
        inputType="number"
        {...register("amount_of_water")}
        errorMessage={errors.amount_of_water && errors.amount_of_water.message}
      />
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
