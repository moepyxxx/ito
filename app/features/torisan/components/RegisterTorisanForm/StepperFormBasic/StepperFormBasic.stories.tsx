import { Meta, StoryObj } from "@storybook/react";
import { StepperFormBasic } from "./StepperFormBasic";
import { SampleAction } from "../stories/sampleAction";
import { Gender, Specie } from "@ito/common";
import { fn } from "@storybook/test";

const meta = {
  title: "torisan/RegisterTorisanForm/StepperFormBasic",
  component: StepperFormBasic,
  args: {
    renderStepperActions: (enableNext) => SampleAction(enableNext, 0, false),
    onSubmit: (data) => fn()(data),
    initialValue: null,
  },
} satisfies Meta<typeof StepperFormBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const InitialValue: Story = {
  args: {
    initialValue: {
      name: "いと",
      nickname: 1,
      gender_type: Gender.Man,
      specie_type: Specie.SekiseiInko,
      birth_date: new Date("2021-01-01"),
    },
  },
};
