import type { Meta, StoryObj } from "@storybook/react";

import { EditForm } from "./EditForm";
import { Gender, Specie } from "@ito/common";

const meta = {
  title: "torisan/EditForm",
  component: EditForm,
  args: {
    torisanId: 0,
    detailForEdit: {
      body_weight: 35.5,
      amount_of_staple_food: 10.5,
      amount_of_water: 5,
      staple_food_type: 1,
      any_staple_food: "",
      other_food_types: [1, 2, 0],
      any_other_foods: "その他",
    },
    detailReadonly: {
      birthDate: new Date("2021-10"),
      specieType: Specie.SekiseiInko,
      genderType: Gender.Man,
      nickname: "いとちゃん",
    },
  },
  argTypes: {},
} satisfies Meta<typeof EditForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
