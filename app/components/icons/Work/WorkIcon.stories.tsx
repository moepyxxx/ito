import type { Meta, StoryObj } from "@storybook/react";

import { WorkIcon } from "./WorkIcon";

const meta = {
  title: "icons/WorkIcon",
  component: WorkIcon,
  args: {
    color: "black",
    size: 24,
  },
  argTypes: {},
} satisfies Meta<typeof WorkIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
