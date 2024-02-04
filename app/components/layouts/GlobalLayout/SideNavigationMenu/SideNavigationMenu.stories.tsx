import type { Meta, StoryObj } from "@storybook/react";

import { SideNavigationMenu } from "./SideNavigationMenu";

const meta = {
  title: "layout/globalLayout/SideNavigationMenu",
  component: SideNavigationMenu,
  argTypes: {},
} satisfies Meta<typeof SideNavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
