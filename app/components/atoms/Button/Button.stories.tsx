import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "記録・観察をはじめる",
    variant: {
      type: "primary",
    },
    element: {
      elementType: "button",
      onClick: action("onClick"),
    },
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: {
      type: "secondary",
    },
  },
};
export const Default: Story = {
  args: {
    variant: {
      type: "default",
    },
    children: "次へ",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DefaultDisabled: Story = {
  args: {
    disabled: true,
    variant: {
      type: "default",
    },
    children: "次へ",
  },
};

export const WithCounter: Story = {
  args: {
    variant: {
      type: "primary",
      counter: 43,
    },
  },
};
