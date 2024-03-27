import type { Meta, StoryObj } from "@storybook/react";

import { SelectTorisans } from "./SelectTorisans";
import { Stage } from "@ito/common";
import { fn } from "@storybook/test";

const meta = {
  title: "molecules/SelectTorisans",
  component: SelectTorisans,
  args: {
    torisans: [
      {
        id: "1",
        nickname: "いと",
        src: "/mascot/ito.png",
        stage: Stage.Observation,
      },
      {
        id: "3",
        nickname: "たまじろう",
        src: "/mascot/tamajiro.png",
        stage: Stage.Observation,
      },
      {
        id: "2",
        nickname: "うにちゃん",
        src: "/mascot/unichan.png",
        stage: Stage.Observation,
      },
    ],
    onSubmit: fn(),
    submitMessage: "鳥さんの情報を見る",
  },
  argTypes: {},
} satisfies Meta<typeof SelectTorisans>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
