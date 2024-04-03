import type { Meta, StoryObj } from "@storybook/react";

import { ProfileBoard } from "./ProfileBoard";
import { Gender, Specie, Stage } from "@ito/common";

const meta = {
  title: "torisan/ProfileBoard",
  component: ProfileBoard,
  args: {
    nickname: "いと",
    src: "/sample/icon.png",
    stageType: Stage.Observation,
    specieType: Specie.SekiseiInko,
    birthDate: new Date("2021-01-01"),
    genderType: Gender.Woman,
  },
  argTypes: {},
} satisfies Meta<typeof ProfileBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
