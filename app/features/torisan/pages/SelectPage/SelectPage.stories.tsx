import type { Meta, StoryObj } from "@storybook/react";

import { SelectPage } from "./SelectPage";

const meta = {
  title: "organisms/SelectPage",
  component: SelectPage,
  args: {},
  argTypes: {},
} satisfies Meta<typeof SelectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
