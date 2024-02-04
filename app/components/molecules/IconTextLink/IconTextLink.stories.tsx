import type { Meta, StoryObj } from "@storybook/react";

import { IconTextLink } from "./IconTextLink";

const meta = {
  title: "molecules/IconTextLink",
  component: IconTextLink,

  args: {
    href: "/",
    icon: "faq",
    label: "よくある質問",
    color: "black",
  },
  argTypes: {},
} satisfies Meta<typeof IconTextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
