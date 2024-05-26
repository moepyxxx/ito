import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RenderStepActions } from "@/components/layouts/StepperLayout/useStepper";
import {
  FormObjectiveEditType,
  FormObjectiveSubmitType,
  getInitialObjectiveValue,
  objectiveSchema,
} from "../../../schemas/objective";
import { RHFFormObjective } from "../../RHF/RHFFormObjective";

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
    defaultValues: getInitialObjectiveValue(initialValue),
    mode: "onChange",
    resolver: zodResolver(objectiveSchema),
  });

  return (
    <div className="flex flex-col space-y-10">
      <RHFFormObjective rhfRegister={register} rhfErrors={errors} />
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
