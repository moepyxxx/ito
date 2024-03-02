import { Meta, StoryObj } from "@storybook/react";
import { StepperLabel } from "./StepperLabel";

const meta = {
  title: "molecules/StepperLabel",
  component: StepperLabel,
  args: {
    label: "ごはん",
    status: "current",
    onClick: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof StepperLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Current: Story = {};
export const Done: Story = {
  args: {
    status: "done",
  },
};
export const Todo: Story = {
  args: {
    status: "todo",
  },
};
