import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    color: "primary",
    variant: "contained",
    size: "large",
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Color: Story = {
  args: {
    color: "primary",
  },
};

export const Variant: Story = {
  args: {
    variant: "outlined",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCounter: Story = {
  args: {
    counter: 1,
  },
};

export const LongText: Story = {
  args: {
    children: "Button with long long long text",
  },
};
