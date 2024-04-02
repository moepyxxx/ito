import type { Meta, StoryObj } from "@storybook/react";

import { TorisanProfileBoard } from "./TorisanProfileBoard";
import { Gender, Specie, Stage } from "@ito/common";

const meta = {
  title: "torisan/TorisanProfileBoard",
  component: TorisanProfileBoard,
  args: {
    nickname: "いと",
    src: "/sample/icon.png",
    stageType: Stage.Observation,
    specieType: Specie.SekiseiInko,
    birthDate: new Date("2021-01-01"),
    genderType: Gender.Woman,
  },
  argTypes: {},
} satisfies Meta<typeof TorisanProfileBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
