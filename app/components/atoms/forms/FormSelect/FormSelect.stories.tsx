import type { Meta, StoryObj } from "@storybook/react";

import { FormSelect } from "./FormSelect";
import {
  BaseTemplate,
  DisabledTemplate,
  EditTemplate,
  RequiredTemplate,
} from "./StoryTemplate";

export type Story = StoryObj<typeof FormSelect>;

const meta = {
  title: "forms/FormSelect",
  component: FormSelect,
  args: {
    selections: [
      { value: 1, label: "セキセイインコ" },
      { value: 2, label: "オカメインコ" },
      { value: 3, label: "コザクラインコ" },
    ],
    label: "種類",
  },
} satisfies Meta<typeof FormSelect>;

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
