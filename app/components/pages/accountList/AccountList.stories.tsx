import type { Meta, StoryObj } from "@storybook/react";

import { AccountList } from "./AccountList";

const meta = {
  title: "page/AccountList",
  component: AccountList,
  argTypes: {},
  args: {
    children: "Contents",
  },
} satisfies Meta<typeof AccountList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
