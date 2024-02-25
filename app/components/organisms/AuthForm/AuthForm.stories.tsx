import { Meta, StoryObj } from "@storybook/react";
import { AuthForm } from "./AuthForm";

const meta = {
  title: "organisms/AuthForm",
  component: AuthForm,
  argTypes: {},
  args: {
    onSubmit: () => {},
    otherLink: {
      href: "/signup",
      label: "サインアップ",
    },
    submitLabel: "サインイン",
  },
} satisfies Meta<typeof AuthForm>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {};
