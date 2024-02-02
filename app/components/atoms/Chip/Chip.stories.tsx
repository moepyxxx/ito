import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./Chip";

const meta = {
  title: "atoms/Chip",
  component: Chip,
  args: {
    children: "観察ステージ",
    color: "secondary",
  },
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {};
export const Error: Story = {
  args: {
    color: "error",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
