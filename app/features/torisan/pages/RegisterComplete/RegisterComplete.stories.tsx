import type { Meta } from "@storybook/react";

import { RegisterComplete } from "./RegisterComplete";

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: "torisan/page/RegisterComplete",
  component: RegisterComplete,
  args: {
    torisanId: 0,
  },
  argTypes: {},
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/p/torisans/register/complete",
        param: {
          torisan_id: "0",
        },
      },
    },
  },
} satisfies Meta<typeof RegisterComplete>;

export default meta;

// useSearchParamsがあるとstorybookがこけるため
// type Story = StoryObj<typeof meta>;
// export const Base: Story = {};
