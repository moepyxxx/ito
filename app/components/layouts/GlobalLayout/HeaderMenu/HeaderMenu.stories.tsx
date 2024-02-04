import type { Meta, StoryObj } from "@storybook/react";

import { HeaderMenu } from "./HeaderMenu";

const meta = {
  title: "layout/globalLayout/HeaderMenu",
  component: HeaderMenu,
  argTypes: {},
} satisfies Meta<typeof HeaderMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
