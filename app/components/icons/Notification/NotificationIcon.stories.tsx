import type { Meta, StoryObj } from "@storybook/react";

import { NotificationIcon } from "./NotificationIcon";

const meta = {
  title: "icons/NotificationIcon",
  component: NotificationIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    color: "black",
    size: 24,
  },
  argTypes: {},
} satisfies Meta<typeof NotificationIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
