import type { Meta, StoryObj } from "@storybook/react";

import { TorisanBoardButton } from "./TorisanBoardButton";
import { Stage } from "@/features/torisan/types";

const meta = {
  title: "molecules/TorisanBoardButton",
  component: TorisanBoardButton,
  args: {
    isChecked: false,
    nickname: "いと",
    src: "/sample/icon.png",
    stage: Stage.Observation,
    onClick: () => {},
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
