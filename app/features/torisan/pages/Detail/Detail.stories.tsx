import type { Meta, StoryObj } from "@storybook/react";

import { Detail } from "./Detail";
import { createMockTorisan } from "@/gql/mock";

const meta = {
  title: "torisan/page/Detail",
  component: Detail,
  args: {
    torisanId: 1,
  },
  argTypes: {},
  parameters: {
    msw: {
      handlers: [createMockTorisan()],
    },
  },
} satisfies Meta<typeof Detail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const NoObjective: Story = {
  parameters: {
    msw: {
      handlers: [
        createMockTorisan({
          objective: {
            body_weight: null,
            amount_of_water: null,
            amount_of_staple_food: null,
          },
        }),
      ],
    },
  },
};

export const AnyFood: Story = {
  parameters: {
    msw: {
      handlers: [
        createMockTorisan({
          food: {
            staple_food_type: 0,
            any_staple_food:
              "ペレットとシードのミックスを食べてもらうようにしています",
            other_food_types: [1, 2, 0],
            any_other_foods:
              "食いしん坊なので人の食べているものを食べたがります。あげませんが…",
          },
        }),
      ],
    },
  },
};
