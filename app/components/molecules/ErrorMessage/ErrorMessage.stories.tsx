import { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from "./ErrorMessage";

const meta = {
  title: "molecules/ErrorMessage",
  component: ErrorMessage,
  args: {
    message: "IDまたはパスワードが間違っています",
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {};
