import { Meta, StoryObj } from "@storybook/react";
import { StepperFormBasic } from "./StepperFormBasic";
import { SampleAction } from "../stories/sampleAction";

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
