import type { Meta, StoryObj } from "@storybook/react";

import { RegisterTorisanForm } from "./RegisterTorisanForm";

const meta = {
  title: "torisan/RegisterTorisanForm",
  component: RegisterTorisanForm,
  args: {
    onSubmit: (torisan) => console.warn(torisan),
  },
  argTypes: {},
} satisfies Meta<typeof RegisterTorisanForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
