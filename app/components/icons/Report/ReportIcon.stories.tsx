import type { Meta, StoryObj } from "@storybook/react";

import { ReportIcon } from "./ReportIcon";

const meta = {
  title: "icons/ReportIcon",
  component: ReportIcon,
  args: {
    color: "black",
    size: 24,
  },
  argTypes: {},
} satisfies Meta<typeof ReportIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
