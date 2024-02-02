import type { Meta, StoryObj } from "@storybook/react";

import { HomeIcon } from "./HomeIcon";

const meta = {
  title: "icons/HomeIcon",
  component: HomeIcon,
  args: {
    color: "black",
    size: 24,
  },
  argTypes: {},
} satisfies Meta<typeof HomeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
