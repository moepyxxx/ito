import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Paper } from "./Paper";

const meta = {
  title: "atoms/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
  },
  args: {
    children: <div>鳥ちゃんについて説明します。</div>,
  },
  render: (args) => (
    <div className="w-80">
      <Paper {...args} />
    </div>
  ),
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
