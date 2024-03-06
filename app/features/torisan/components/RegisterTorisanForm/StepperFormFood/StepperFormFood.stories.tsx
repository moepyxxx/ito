import { Meta, StoryObj } from "@storybook/react";
import { StepperFormFood } from "./StepperFormFood";
import { SampleAction } from "../stories/sampleAction";

const meta = {
  title: "torisan/RegisterTorisanForm/StepperFormFood",
  component: StepperFormFood,
  args: {
    renderStepperActions: (enableNext) => SampleAction(enableNext, 2, true),
  },
} satisfies Meta<typeof StepperFormFood>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
