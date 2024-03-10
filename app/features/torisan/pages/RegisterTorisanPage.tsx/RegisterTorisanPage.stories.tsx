import type { Meta, StoryObj } from "@storybook/react";

import { RegisterTorisanPage } from "./RegisterTorisanPage";

const meta = {
  title: "torisan/RegisterTorisanPage",
  component: RegisterTorisanPage,
  args: {},
  argTypes: {},
} satisfies Meta<typeof RegisterTorisanPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
