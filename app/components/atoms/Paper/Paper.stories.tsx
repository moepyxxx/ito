import type { Meta, StoryObj } from "@storybook/react";

import { Paper } from "./Paper";

const meta = {
  title: "atoms/Paper",
  component: Paper,
  args: {
    children: <div>鳥ちゃんについて説明します。</div>,
  },
  render: (args: any) => (
    <div className="w-80">
      <Paper {...args} />
    </div>
  ),
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
