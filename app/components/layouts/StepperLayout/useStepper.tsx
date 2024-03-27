import React, { useMemo, useState } from "react";
import { StepperActions } from ".";

export type StepLabelPair<T extends string> = { step: T; label: string };

export type RenderStepActions = (
  isEnableNext: boolean,
  actionFunc?: {
    onClickPrev?: (onPrev: () => void) => void;
    onClickNext?: (onNext: () => void) => void;
  }
) => React.ReactNode;

export const useStepper = <Step extends string>(
  stepLabels: StepLabelPair<Step>[],
  initialStepIndex: number,
  submitLabel: string,
  onClickSubmit: () => void
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

  const renderStepperActions: RenderStepActions = (
    isEnableNext: boolean,
    actionFunc?: {
      onClickPrev?: (onPrev: () => void) => void;
      onClickNext?: (onNext: () => void) => void;
    }
  ): React.ReactNode => {
    return (
      <StepperActions
        currentStepIndex={currentStepIndex}
        enableNext={isExistNextStep && isEnableNext}
        enablePrev={isExistPrevStep}
        isLastStep={isLastStep}
        submitLabel={submitLabel}
        onClickNextStep={() => {
          if (actionFunc?.onClickNext) {
            actionFunc.onClickNext(onNextStep);
          }
        }}
        onClickPrevStep={() => {
          if (actionFunc?.onClickPrev) {
            actionFunc.onClickPrev(onPrevStep);
          }
        }}
        onClickSubmit={onClickSubmit}
      />
    );
  };

  return {
    currentStep,
    currentStepIndex,
    onSpecificStep,
    renderStepperActions,
  };
};
