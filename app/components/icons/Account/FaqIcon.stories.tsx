import type { Meta, StoryObj } from "@storybook/react";

import { AccountIcon } from "./Account";

const meta = {
  title: "icons/AccountIcon",
  component: AccountIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    color: "black",
    size: 24,
  },
  argTypes: {},
} satisfies Meta<typeof AccountIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
