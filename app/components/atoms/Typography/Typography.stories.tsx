import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  title: "atoms/Typography",
  component: Typography,
  args: {
    children: "今日のうにすけの体重を教えてください",
    element: "h1",
    size: "large",
  },
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: "記録・観察",
  },
};
export const H2: Story = {
  args: {
    size: "medium",
    element: "h2",
  },
};
export const H3: Story = {
  args: {
    size: "medium",
    align: "center",
    color: "error",
    element: "h3",
    children: "エラーが発生しました",
  },
};
export const P: Story = {
  args: {
    element: "p",
    size: "small",
  },
};
