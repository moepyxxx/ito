import { Meta, StoryObj } from "@storybook/react";
import { useStepper } from "./useStepper";
import { StepperLabels } from "./StepperLabels";
import { StepperContent } from "./StepperContent";
import { StepperActions } from "./StepperActions";

type Story = StoryObj;

const StepLabelPairs = [
  { step: "step1", label: "体重" },
  { step: "step2", label: "お水" },
  { step: "step3", label: "ごはん" },
];

const Template: Story["render"] = ({ ...restArgs }) => {
  const {
    currentStep,
    currentStepIndex,
    onSpecificStep,
    onNextStep,
    onPrevStep,
    isExistNextStep,
    isExistPrevStep,
    isLastStep,
  } = useStepper(StepLabelPairs, 0);

  const contents = () => {
    switch (currentStep) {
      case "step1":
        return <p>Step1 Layout</p>;
      case "step2":
        return <p>Step2 Layout</p>;
      case "step3":
        return <p>Step3 Layout</p>;
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
      <StepperActions
        {...restArgs}
        submitLabel="送信する"
        currentStepIndex={currentStepIndex}
        enableNext={isLastStep ? true : isExistNextStep}
        enablePrev={isExistPrevStep}
        isLastStep={isLastStep}
        onClickNextStep={onNextStep}
        onClickPrevStep={onPrevStep}
        onClickSubmit={() => console.warn("action")}
      />
    </>
  );
};

const meta = {
  title: "layout/StepperLayout",
  render: Template,
  args: {
    stepLabelPairs: StepLabelPairs,
    submitLabel: "確認する",
  },
  argTypes: {},
} satisfies Meta;

export default meta;

export const Base: Story = {};
