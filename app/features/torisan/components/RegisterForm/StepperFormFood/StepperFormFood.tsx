import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RenderStepActions } from "@/components/layouts/StepperLayout/useStepper";
import {
  FormFoodEditType,
  FormFoodSubmitType,
  addFoodOtherRule,
  foodSchema,
  getInitialFoodValue,
} from "../../../schemas/food";
import { RHFFormFood } from "../../RHF/RHFFormFood";

type Props = {
  renderStepperActions: RenderStepActions;
  onSubmit: (data: FormFoodSubmitType) => void;
  initialValue: FormFoodSubmitType | null;
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
  } = useForm<FormFoodEditType, any, FormFoodSubmitType>({
    defaultValues: getInitialFoodValue(initialValue),
    mode: "onChange",
    resolver: zodResolver(addFoodOtherRule(foodSchema)),
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
      <RHFFormFood
        rhfRegister={register}
        rhfErrors={errors}
        currentStapleFood={currentStapleFood}
        currentOtherFoods={currentOtherFoods}
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
