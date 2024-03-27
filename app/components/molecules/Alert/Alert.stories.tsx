import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta = {
  title: "molecules/Alert",
  component: Alert,
  args: {
    message: "IDまたはパスワードが間違っています",
    type: "error",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Error: Story = {};

export const Warning: Story = {
  args: {
    message: "基本情報は後から変更することはできません",
    type: "warning",
  },
};
