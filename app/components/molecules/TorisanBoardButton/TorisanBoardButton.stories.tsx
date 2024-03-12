import type { Meta, StoryObj } from "@storybook/react";

import { TorisanBoardButton } from "./TorisanBoardButton";
import { fn } from "@storybook/test";

const meta = {
  title: "molecules/TorisanBoardButton",
  component: TorisanBoardButton,
  args: {
    isChecked: false,
    nickname: "いと",
    src: "/sample/icon.png",
    chipText: "観察ステージ",
    onClick: fn(),
  },
  decorators: [(story) => <div className="w-96">{story()}</div>],
  argTypes: {},
} satisfies Meta<typeof TorisanBoardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};

export const WithDecoration: Story = {
  args: {
    decorationMessage: "Congratulation!",
  },
};
