import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";

const meta = {
  title: "molecules/Title",
  component: Title,
  args: {
    title: "鳥さん",
    description: "鳥さん基本情報の確認・編集",
  },
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
export const NoDescription: Story = {
  args: {
    description: undefined,
  },
};
