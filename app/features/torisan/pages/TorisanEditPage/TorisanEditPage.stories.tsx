import type { Meta, StoryObj } from "@storybook/react";

import { TorisanEditPage } from "./TorisanEditPage";
import { createMockTorisan } from "@/gql/mock";

const meta = {
  title: "torisan/page/TorisanEditPage",
  component: TorisanEditPage,
  args: {
    torisanId: 1,
  },
  argTypes: {},
  parameters: {
    msw: {
      handlers: [createMockTorisan()],
    },
  },
} satisfies Meta<typeof TorisanEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
