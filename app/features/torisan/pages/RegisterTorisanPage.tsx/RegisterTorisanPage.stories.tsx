import type { Meta, StoryObj } from "@storybook/react";

import { RegisterTorisanPage } from "./RegisterTorisanPage.tsx";
import { torisanMockHandlers } from "../../api/_mock";

const meta = {
  title: "page/RegisterTorisanPage",
  component: RegisterTorisanPage,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: torisanMockHandlers,
    },
  },
} satisfies Meta<typeof RegisterTorisanPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
