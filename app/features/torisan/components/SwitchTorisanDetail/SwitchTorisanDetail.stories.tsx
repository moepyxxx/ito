import type { Meta, StoryObj } from "@storybook/react";

import { SwitchTorisanDetail } from "./SwitchTorisanDetail";
import { Specie, Stage } from "@ito/common";

const meta = {
  title: "organisms/SwitchTorisanDetail",
  component: SwitchTorisanDetail,
  args: {
    torisans: [
      {
        id: "1",
        nickname: "いと",
        specie_type: 1,
        stage_type: Stage.Observation,
      },
      {
        id: "2",
        nickname: "たまじろう",
        specie_type: Specie.SekiseiInko,
        stage_type: Stage.Observation,
      },
      {
        id: "3",
        nickname: "うにちゃん",
        specie_type: Specie.SekiseiInko,
        stage_type: Stage.Observation,
      },
    ],
  },
  argTypes: {},
} satisfies Meta<typeof SwitchTorisanDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
