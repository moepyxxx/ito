import type { Meta, StoryObj } from "@storybook/react";

import { GlobalLayout } from "./GlobalLayout";

const meta = {
  title: "layout/GlobalLayout",
  component: GlobalLayout,
  argTypes: {},
  args: {
    children: "Contents",
  },
} satisfies Meta<typeof GlobalLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
