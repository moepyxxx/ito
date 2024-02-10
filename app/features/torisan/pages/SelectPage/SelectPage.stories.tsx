import type { Meta, StoryObj } from "@storybook/react";

import { SelectPage } from "./SelectPage";
import { mockHandlers } from "../../api/_mock";

const meta = {
  title: "page/SelectPage",
  component: SelectPage,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: mockHandlers,
    },
  },
} satisfies Meta<typeof SelectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
