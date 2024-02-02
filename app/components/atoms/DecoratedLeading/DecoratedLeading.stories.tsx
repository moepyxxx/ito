import type { Meta, StoryObj } from "@storybook/react";

import { DecoratedLeading } from "./DecoratedLeading";

const meta = {
  title: "atoms/DecoratedLeading",
  component: DecoratedLeading,
  args: {
    children: "Good Morning!",
    color: "primary",
    size: "large",
  },
  argTypes: {},
} satisfies Meta<typeof DecoratedLeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = {
  args: {
    color: "secondary",
    size: "medium",
  },
};
