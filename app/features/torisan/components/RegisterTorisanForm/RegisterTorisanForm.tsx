import { useStepper } from "@/components/layouts/StepperLayout/useStepper";
import {
  StepperContent,
  StepperLabels,
} from "@/components/layouts/StepperLayout";
import {
  FormSubmitType as TorisanBasic,
  StepperFormBasic,
} from "./StepperFormBasic";
import {
  FormSubmitType as TorisanObjective,
  StepperFormObjective,
} from "./StepperFormObjective";
import {
  FormSubmitType as TorisanFood,
  StepperFormFood,
} from "./StepperFormFood";
import { useState } from "react";
import { StepperFormConfirm } from "./StepperFormConfirm";

const StepLabelPairs = [
  { step: "basic", label: "基本" },
  { step: "objective", label: "目標" },
  { step: "food", label: "ごはん" },
  { step: "confirm", label: "確認" },
];

export type RegisterTorisan = TorisanBasic & {
  objective: TorisanObjective;
  food: TorisanFood;
};

type Props = {
  onSubmit: (torisan: RegisterTorisan) => void;
};
export const RegisterTorisanForm: React.FC<Props> = ({ onSubmit }) => {
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

  const [torisanBasic, setTorisanBasic] = useState<TorisanBasic | null>(null);
  const [torisanObjective, setTorisanObjective] =
    useState<TorisanObjective | null>(null);
  const [torisanFood, setTorisanFood] = useState<TorisanFood | null>(null);

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
