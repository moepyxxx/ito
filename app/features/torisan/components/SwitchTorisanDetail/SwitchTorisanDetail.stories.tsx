import type { Meta, StoryObj } from "@storybook/react";

import { SwitchTorisanDetail } from "./SwitchTorisanDetail";
import { Gender, Stage } from "@/features/torisan/types";

const meta = {
  title: "organisms/SwitchTorisanDetail",
  component: SwitchTorisanDetail,
  args: {
    torisans: [
      {
        id: 1,
        basic: {
          nickname: "いと",
          birth_date: "string",
          species_id: 1,
          gender_type: Gender.Man,
        },
        stage: Stage.Observation,
      },
      {
        id: 2,
        basic: {
          nickname: "たまじろう",
          birth_date: "string",
          species_id: 1,
          gender_type: Gender.Man,
        },
        stage: Stage.Observation,
      },
      {
        id: 3,
        basic: {
          nickname: "うにちゃん",
          birth_date: "string",
          species_id: 1,
          gender_type: Gender.Woman,
        },
        stage: Stage.Observation,
      },
    ],
  },
  argTypes: {},
} satisfies Meta<typeof SwitchTorisanDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
