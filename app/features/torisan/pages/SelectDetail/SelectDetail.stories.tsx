import type { Meta, StoryObj } from "@storybook/react";

import { SelectDetail } from "./SelectDetail";
import { createMockTorisans } from "@/gql/mock";

const meta = {
  title: "torisan/page/SelectDetail",
  component: SelectDetail,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [createMockTorisans()],
    },
  },
} satisfies Meta<typeof SelectDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
