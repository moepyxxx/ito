import type { Meta, StoryObj } from "@storybook/react";

import {
  BaseTemplate,
  DisabledTemplate,
  EditTemplate,
  RequiredTemplate,
} from "./StoryTemplate";
import { FormRadioGroup } from "./FormRadioGroup";

export type Story = StoryObj<typeof FormRadioGroup>;

const meta = {
  title: "forms/FormRadioGroup",
  component: FormRadioGroup,
  args: {
    selections: [
      { value: 1, label: "より良くなった" },
      { value: 2, label: "より悪くなった" },
      { value: 3, label: "変わらない（いつもと異なる）" },
    ],
    label: "体調の変化",
  },
} satisfies Meta<typeof FormRadioGroup>;

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
