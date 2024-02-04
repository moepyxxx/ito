import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { IconButton } from "./IconButton";

const meta = {
  title: "atoms/IconButton",
  component: IconButton,

  args: {
    icon: "home",
    label: "ホーム",
    description: "ホームへ移動",
    element: {
      elementType: "button",
      onClick: () => action("clicked"),
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

export const NoLabel: Story = {
  args: {
    label: undefined,
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
