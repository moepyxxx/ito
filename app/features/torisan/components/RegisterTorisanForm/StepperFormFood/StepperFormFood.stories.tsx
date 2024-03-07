import { Meta, StoryObj } from "@storybook/react";
import { StepperFormFood } from "./StepperFormFood";
import { SampleAction } from "../stories/sampleAction";

const meta = {
  title: "torisan/RegisterTorisanForm/StepperFormFood",
  component: StepperFormFood,
  args: {
    renderStepperActions: (enableNext) => SampleAction(enableNext, 2, true),
    onSubmit: (data) => console.warn(data),
    initialValue: null,
  },
} satisfies Meta<typeof StepperFormFood>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const InitialValue: Story = {
  args: {
    initialValue: {
      staple_food: 1,
      any_staple_food: "",
      other_foods: [1, 2, 0],
      any_other_foods: "その他",
    },
  },
};
