import type { Meta, StoryObj } from "@storybook/react";

import { FormSelectMonth } from "./FormSelectMonth";

import {
  BaseTemplate,
  DisabledTemplate,
  EditTemplate,
  RequiredTemplate,
} from "./StoryTemplate";

export type Story = StoryObj<typeof FormSelectMonth>;

const meta = {
  title: "forms/FormSelectMonth",
  component: FormSelectMonth,
  args: {
    label: "誕生日",
  },
} satisfies Meta<typeof FormSelectMonth>;

export default meta;

export const Base: Story = {
  render: BaseTemplate,
};

export const Required: Story = {
  render: RequiredTemplate,
};

export const Disabled: Story = {
  render: DisabledTemplate,
};

export const Edit: Story = {
  render: EditTemplate,
};
