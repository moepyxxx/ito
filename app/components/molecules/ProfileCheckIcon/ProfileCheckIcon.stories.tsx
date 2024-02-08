import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCheckIcon } from "./ProfileCheckIcon";

const meta = {
  title: "molecules/ProfileCheckIcon",
  component: ProfileCheckIcon,

  args: {
    isChecked: true,
    nickname: "いと",
    src: "/sample/icon.png",
  },
  argTypes: {},
} satisfies Meta<typeof ProfileCheckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {};
export const NotChecked: Story = {
  args: {
    isChecked: false,
  },
};
