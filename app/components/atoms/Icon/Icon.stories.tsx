import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta = {
  title: "atoms/Icon",
  component: Icon,
  args: {
    color: "black",
    size: 24,
    icon: "home",
  },
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
