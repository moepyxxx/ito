import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Chip } from "./Chip";

const meta = {
  title: "atoms/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "観察ステージ",
  },
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
