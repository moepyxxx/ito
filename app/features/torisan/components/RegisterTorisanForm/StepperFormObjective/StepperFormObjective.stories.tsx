import { Meta, StoryObj } from "@storybook/react";
import { StepperFormObjective } from "./StepperFormObjective";
import { SampleAction } from "../stories/sampleAction";

const meta = {
  title: "torisan/RegisterTorisanForm/StepperFormObjective",
  component: StepperFormObjective,
  args: {
    renderStepperActions: (enableNext) => SampleAction(enableNext, 1, false),
  },
} satisfies Meta<typeof StepperFormObjective>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
