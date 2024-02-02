import type { Meta, StoryObj } from "@storybook/react";
import sampleImage from "../../../public/sample/icon.png";
import { action } from "@storybook/addon-actions";

import { IconButton } from "./IconButton";
import { HomeIcon } from "@/components/icons/Home";

const meta = {
  title: "atoms/IconButton",
  component: IconButton,

  args: {
    icon: <HomeIcon color="black" size={28} />,
    label: "ホーム",
    description: "ホームへ移動",
    element: {
      elementType: "button",
      onClick: () => action("clicked"),
    },
  },
  argTypes: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {};
export const Link: Story = {
  args: {
    element: {
      elementType: "a",
      href: "https://example.com",
    },
  },
};
