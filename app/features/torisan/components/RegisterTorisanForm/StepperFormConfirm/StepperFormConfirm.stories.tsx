import { Meta, StoryObj } from "@storybook/react";
import { StepperFormConfirm } from "./StepperFormConfirm";
import { SampleAction } from "../stories/sampleAction";
import { Gender, Specie } from "@ito/common";

const meta = {
  title: "torisan/RegisterTorisanForm/StepperFormConfirm",
  component: StepperFormConfirm,
  args: {
    renderStepperActions: (enableNext) => SampleAction(enableNext, 0, false),
    onSpecificStep: (step) => console.warn(step),
    torisan: {
      basic: {
        name: "いと",
        nickname: 1,
        birth_date: new Date("2021-01-01"),
        gender: Gender.Man,
        specie_id: Specie.SekiseiInko,
      },
      objective: {
        body_weight: 35.3,
        amount_of_staple_food: 30,
        amount_of_water: null,
      },
      food: {
        staple_food: 1,
        any_staple_food: "",
        other_foods: [2, 3, 4, 5, 6, 7, 0],
        any_other_foods: "ハコベ, 豆苗",
      },
    },
  },
} satisfies Meta<typeof StepperFormConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
