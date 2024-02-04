import type { Meta, StoryObj } from "@storybook/react";

import { FixedNavigationMenu } from "./FixedNavigationMenu";

const meta = {
  title: "layout/FixedNavigationMenu",
  component: FixedNavigationMenu,
  argTypes: {},
} satisfies Meta<typeof FixedNavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
