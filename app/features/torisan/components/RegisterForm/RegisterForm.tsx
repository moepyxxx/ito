import { useStepper } from "@/components/layouts/StepperLayout/useStepper";
import {
  StepperContent,
  StepperLabels,
} from "@/components/layouts/StepperLayout";
import { StepperFormBasic } from "./StepperFormBasic";
import { StepperFormObjective } from "./StepperFormObjective";
import { StepperFormFood } from "./StepperFormFood";
import { useState } from "react";
import { StepperFormConfirm } from "./StepperFormConfirm";
import { FormBaseSubmitType } from "../../schemas/basic";
import { FormObjectiveSubmitType } from "../../schemas/objective";
import { FormFoodSubmitType } from "../../schemas/food";

const StepLabelPairs = [
  { step: "basic", label: "基本" },
  { step: "objective", label: "目標" },
  { step: "food", label: "ごはん" },
  { step: "confirm", label: "確認" },
];

export type RegisterForm = FormBaseSubmitType & {
  objective: FormObjectiveSubmitType;
  food: FormFoodSubmitType;
};

type Props = {
  onSubmit: (torisan: RegisterForm) => void;
};
export const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    currentStep,
    currentStepIndex,
    onSpecificStep,
    renderStepperActions,
  } = useStepper(StepLabelPairs, 0, "送信する", () => {
    if (!torisanBasic || !torisanObjective || !torisanFood) {
      console.warn("torisanBasic, torisanObjective, torisanFood is null");
      return;
    }
    onSubmit({
      ...torisanBasic,
      objective: torisanObjective,
      food: torisanFood,
    });
  });

  const [torisanBasic, setTorisanBasic] = useState<FormBaseSubmitType | null>(
    null
  );
  const [torisanObjective, setTorisanObjective] =
    useState<FormObjectiveSubmitType | null>(null);
  const [torisanFood, setTorisanFood] = useState<FormFoodSubmitType | null>(
    null
  );

  const contents = () => {
    switch (currentStep) {
      case "basic":
        return (
          <StepperFormBasic
            renderStepperActions={renderStepperActions}
            onSubmit={(data) => setTorisanBasic(data)}
            initialValue={torisanBasic}
          />
        );
      case "objective":
        return (
          <StepperFormObjective
            renderStepperActions={renderStepperActions}
            onSubmit={(data) => setTorisanObjective(data)}
            initialValue={torisanObjective}
          />
        );
      case "food":
        return (
          <StepperFormFood
            renderStepperActions={renderStepperActions}
            onSubmit={(data) => setTorisanFood(data)}
            initialValue={torisanFood}
          />
        );
      case "confirm":
        return (
          torisanBasic &&
          torisanObjective &&
          torisanFood && (
            <StepperFormConfirm
              onSpecificStep={onSpecificStep}
              renderStepperActions={renderStepperActions}
              torisan={{
                basic: torisanBasic,
                objective: torisanObjective,
                food: torisanFood,
              }}
            />
          )
        );
    }
  };

  return (
    <>
      <StepperLabels
        stepLabelPairs={StepLabelPairs}
        currentStepIndex={currentStepIndex}
        onClickSpecificStep={onSpecificStep}
      />
      <StepperContent>{contents()}</StepperContent>
    </>
  );
};
