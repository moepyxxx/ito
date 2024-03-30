import type { Meta, StoryObj } from "@storybook/react";

import { DescriptionLink } from "./DescriptionLink";

const meta = {
  title: "molecules/DescriptionLink",
  component: DescriptionLink,

  args: {
    href: "",
    title: "新しい鳥さんの登録",
    description: "一緒に暮らしている鳥さんをitoに登録しましょう",
  },
  argTypes: {},
} satisfies Meta<typeof DescriptionLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
