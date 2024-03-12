import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import { fn } from "@storybook/test";

const meta = {
  title: "molecules/IconButton",
  component: IconButton,

  args: {
    icon: "home",
    label: "ホーム",
    element: {
      elementType: "button",
      onClick: fn(),
    },
  },
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {};
export const Link: Story = {
  args: {
    element: {
      elementType: "a",
      href: "https://example.com",
    },
  },
};

export const LabelHidden: Story = {
  args: {
    labelHidden: true,
  },
};

export const Notification: Story = {
  args: {
    notification: true,
  },
};

export const Strong: Story = {
  args: {
    strong: true,
  },
};
