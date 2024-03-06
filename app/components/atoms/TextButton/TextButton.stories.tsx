import type { Meta, StoryObj } from "@storybook/react";

import { TextButton } from "./TextButton";

const meta = {
  title: "atoms/TextButton",
  component: TextButton,
  args: {
    children: "基本情報を修正する",
    color: "secondary",
    onClick: () => console.warn("clicked"),
  },
  argTypes: {},
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
