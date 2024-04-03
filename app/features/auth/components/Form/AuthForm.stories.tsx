import { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";

const meta = {
  title: "auth/Form",
  component: Form,
  argTypes: {},
  args: {
    onSubmit: () => {},
    otherLink: {
      href: "/signup",
      label: "サインアップ",
    },
    submitLabel: "サインイン",
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {};
