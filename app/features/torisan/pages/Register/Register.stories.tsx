import type { Meta, StoryObj } from "@storybook/react";

import { Register } from "./Register";

const meta = {
  title: "torisan/page/Register",
  component: Register,
  args: {},
  argTypes: {},
} satisfies Meta<typeof Register>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
