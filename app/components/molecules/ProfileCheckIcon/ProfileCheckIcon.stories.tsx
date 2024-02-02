import type { Meta, StoryObj } from "@storybook/react";
import sampleImage from "../../../public/sample/icon.png";

import { ProfileCheckIcon } from "./ProfileCheckIcon";

const meta = {
  title: "atoms/ProfileCheckIcon",
  component: ProfileCheckIcon,
  parameters: {
    layout: "centered",
  },
  args: {
    isChecked: true,
    nickname: "いと",
    src: sampleImage.src,
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
