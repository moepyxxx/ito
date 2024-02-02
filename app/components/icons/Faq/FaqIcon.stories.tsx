import type { Meta, StoryObj } from "@storybook/react";

import { FaqIcon } from "./FaqIcon";

const meta = {
  title: "icons/FaqIcon",
  component: FaqIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    color: "black",
    size: 24,
  },
  argTypes: {},
} satisfies Meta<typeof FaqIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
