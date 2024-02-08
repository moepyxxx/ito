import type { Meta, StoryObj } from "@storybook/react";

import { IconImage } from "./IconImage";

const meta = {
  title: "atoms/IconImage",
  component: IconImage,
  args: {
    src: "/sample/icon.png",
    label: "いとちゃん",
  },
  argTypes: {},
} satisfies Meta<typeof IconImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
export const Outlined: Story = {
  args: {
    outlined: "primary",
  },
};
