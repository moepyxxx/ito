import type { Meta, StoryObj } from "@storybook/react";

import { CheckIcon } from "./CheckIcon";

const meta = {
  title: "icons/CheckIcon",
  component: CheckIcon,
  args: {
    color: "black",
    size: 24,
  },
  argTypes: {},
} satisfies Meta<typeof CheckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
