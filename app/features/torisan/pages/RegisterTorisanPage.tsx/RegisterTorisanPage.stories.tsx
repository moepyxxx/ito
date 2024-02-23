import type { Meta, StoryObj } from "@storybook/react";

import { RegisterTorisanPage } from "./RegisterTorisanPage.tsx";

const meta = {
  title: "page/RegisterTorisanPage",
  component: RegisterTorisanPage,
  args: {},
  argTypes: {},
} satisfies Meta<typeof RegisterTorisanPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
