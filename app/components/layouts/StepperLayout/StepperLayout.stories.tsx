import { Meta, StoryObj } from "@storybook/react";
import { useStepper } from "./useStepper";
import { StepperLabels } from "./StepperLabels";
import { StepperContent } from "./StepperContent";
import { useState } from "react";

type Story = StoryObj;

const StepLabelPairs = [
  { step: "step1", label: "体重" },
  { step: "step2", label: "お水" },
  { step: "step3", label: "ごはん" },
];

const Template: Story["render"] = () => {
  const {
    currentStep,
    currentStepIndex,
    onSpecificStep,
    renderStepperActions,
  } = useStepper(StepLabelPairs, 0, "送信する", () => console.warn("action"));

  const [userType, setUserType] = useState("");

  const contents = () => {
    switch (currentStep) {
      case "step1":
        return (
          <div>
            <div className="p-20">
              <p>Step1 type [next1]</p>
              <input
                type="text"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="border"
              />
            </div>
            {renderStepperActions(userType === "next1", {
              onClickNext: (onNext) => {
                console.warn("current:1, next:2");
                onNext();
              },
            })}
          </div>
        );
      case "step2":
        return (
          <div>
            <p className="p-20">Step2 Layout</p>
            {renderStepperActions(true, {
              onClickNext: (onNext) => {
                console.warn("current:2, next:3");
                onNext();
              },
              onClickPrev: (onPrev) => {
                console.warn("current:2, prev:1");
                onPrev();
              },
            })}
          </div>
        );
      case "step3":
        return (
          <div>
            <p className="p-20">Step3 Layout</p>
            {renderStepperActions(true, {
              onClickNext: (onNext) => {
                console.warn("current:3, next:none");
                onNext();
              },
              onClickPrev: (onPrev) => {
                console.warn("current:3, prev:2");
                onPrev();
              },
            })}
          </div>
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
