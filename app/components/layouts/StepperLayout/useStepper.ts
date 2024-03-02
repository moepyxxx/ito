import { useMemo, useState } from "react";
import { StepLabelPair } from "./StepperLayout";

export const useStepper = <Step extends string>(
  stepLabels: StepLabelPair<Step>[],
  initialStepIndex: number
) => {
  const [currentStepIndex, setCurrentStepIndex] =
    useState<number>(initialStepIndex);

  const currentStep = useMemo(() => {
    return stepLabels[currentStepIndex].step;
  }, [currentStepIndex, stepLabels]);

  const onNextStep = () => {
    if (currentStepIndex < stepLabels.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const onPrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const onSpecificStep = (step: Step) => {
    setCurrentStepIndex(stepLabels.findIndex((pair) => pair.step === step));
  };

  const isExistNextStep = useMemo(() => {
    return currentStepIndex < stepLabels.length - 1;
  }, [currentStepIndex, stepLabels]);

  const isExistPrevStep = useMemo(() => {
    return currentStepIndex > 0;
  }, [currentStepIndex]);

  const isLastStep = useMemo(() => {
    return currentStepIndex === stepLabels.length - 1;
  }, [currentStepIndex, stepLabels]);

  return {
    currentStep,
    currentStepIndex,
    onNextStep,
    onPrevStep,
    onSpecificStep,
    isExistNextStep,
    isExistPrevStep,
    isLastStep,
  };
};
