import type { Meta, StoryObj } from "@storybook/react";

import { SelectPage } from "./SelectPage";
import { createMockTorisans } from "@/gql/mock";

const meta = {
  title: "torisan/page/SelectPage",
  component: SelectPage,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [createMockTorisans()],
    },
  },
} satisfies Meta<typeof SelectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
