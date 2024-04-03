import type { Meta, StoryObj } from "@storybook/react";

import { Edit } from "./Edit";
import { createMockTorisan } from "@/gql/mock";

const meta = {
  title: "torisan/page/Edit",
  component: Edit,
  args: {
    torisanId: 1,
  },
  argTypes: {},
  parameters: {
    msw: {
      handlers: [createMockTorisan()],
    },
  },
} satisfies Meta<typeof Edit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
