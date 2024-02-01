import type { Meta, StoryObj } from "@storybook/react";

import { TextLink } from "./TextLink";

const meta = {
  title: "atoms/TextLink",
  component: TextLink,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "保存して記録を終わる",
    color: "secondary",
    href: "https://www.google.com/",
  },
  argTypes: {},
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
