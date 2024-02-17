import type { Meta, StoryObj } from "@storybook/react";

import { SelectTorisans } from "./SelectTorisans";
import { Stage } from "@/features/torisan/types";

const meta = {
  title: "organisms/SelectTorisans",
  component: SelectTorisans,
  args: {
    torisans: [
      {
        id: 1,
        nickname: "いと",
        src: "/mascot/ito.png",
        stage: Stage.Observation,
      },
      {
        id: 3,
        nickname: "たまじろう",
        src: "/mascot/tamajiro.png",
        stage: Stage.Observation,
      },
      {
        id: 2,
        nickname: "うにちゃん",
        src: "/mascot/unichan.png",
        stage: Stage.Observation,
      },
    ],
    onSubmit: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof SelectTorisans>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
