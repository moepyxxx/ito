import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "./TextButton";
import { fn } from "@storybook/test";

const meta = {
  title: "atoms/TextButton",
  component: TextButton,
  args: {
    children: "基本情報を修正する",
    color: "secondary",
    onClick: fn(),
  },
  argTypes: {},
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
