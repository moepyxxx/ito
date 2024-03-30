import { Meta, StoryObj } from "@storybook/react";
import { StepperFormObjective } from "./StepperFormObjective";
import { SampleAction } from "../stories/sampleAction";
import { fn } from "@storybook/test";

const meta = {
  title: "torisan/RegisterTorisanForm/StepperFormObjective",
  component: StepperFormObjective,
  args: {
    renderStepperActions: (enableNext) => SampleAction(enableNext, 1, false),
    onSubmit: fn(),
    initialValue: null,
  },
} satisfies Meta<typeof StepperFormObjective>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const InitialValue: Story = {
  args: {
    initialValue: {
      body_weight: 35.5,
      amount_of_staple_food: 10.5,
      amount_of_water: 5,
    },
  },
};
