import { Meta, StoryObj } from "@storybook/react";
import { StepperFormBasic } from "./StepperFormBasic";
import { Button } from "@/components/atoms/Button";

const SampleAction = (
  enableNext: boolean,
  currentStepIndex: number,
  isLastStep: boolean
) => (
  <div className="mt-4 flex flex-row flex-nowrap justify-between">
    <Button
      className={`${currentStepIndex === 0 && "opacity-0"}`}
      variant={{
        type: "default",
      }}
      element={{
        onClick: () => console.warn("prev"),
        elementType: "button",
      }}>
      前へ
    </Button>
    {
      <Button
        disabled={!enableNext && !isLastStep}
        variant={{
          type: "default",
        }}
        element={{
          onClick: isLastStep
            ? () => console.warn("submit")
            : () => console.warn("next"),
          elementType: "button",
        }}>
        {isLastStep ? "送信する" : "次へ"}
      </Button>
    }
  </div>
);

const meta = {
  title: "torisan/RegisterTorisanForm/StepperFormBasic",
  component: StepperFormBasic,
  args: {
    renderStepperActions: (enableNext) => SampleAction(enableNext, 0, false),
  },
} satisfies Meta<typeof StepperFormBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
