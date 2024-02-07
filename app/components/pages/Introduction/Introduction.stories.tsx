import type { Meta, StoryObj } from "@storybook/react";

import { Introduction } from "./Introduction";

const meta = {
  title: "page/Introduction",
  component: Introduction,
  argTypes: {},
  args: {
    children: "Contents",
  },
} satisfies Meta<typeof Introduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
