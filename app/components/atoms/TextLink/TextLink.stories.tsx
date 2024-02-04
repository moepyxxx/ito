import type { Meta, StoryObj } from "@storybook/react";

import { TextLink } from "./TextLink";
import { FaqIcon } from "@/components/icons/Faq";

const meta = {
  title: "atoms/TextLink",
  component: TextLink,
  args: {
    children: "保存して記録を終わる",
    color: "secondary",
    href: "https://www.google.com",
  },
  argTypes: {},
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <FaqIcon color="black" size={16} className="inline-block mr-1" />
        よくある質問
      </>
    ),
    color: "black",
  },
};
