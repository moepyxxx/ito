import type { Meta, StoryObj } from "@storybook/react";

import { TorisanIcon } from "./TorisanIcon";

const meta = {
  title: "icons/TorisanIcon",
  component: TorisanIcon,
  args: {
    color: "black",
    size: 24,
  },
  argTypes: {},
} satisfies Meta<typeof TorisanIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
