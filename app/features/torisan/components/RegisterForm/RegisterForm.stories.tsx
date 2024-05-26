import type { Meta, StoryObj } from "@storybook/react";

import { RegisterForm } from "./RegisterForm";
import { fn } from "@storybook/test";

const meta = {
  title: "torisan/RegisterForm",
  component: RegisterForm,
  args: {
    onSubmit: fn(),
  },
  argTypes: {},
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
