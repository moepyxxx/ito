import type { Meta, StoryObj } from "@storybook/react";

import { FormTextBox } from "./FormTextBox";

import {
  BaseTemplate,
  DisabledTemplate,
  EditTemplate,
  RequiredTemplate,
} from "./StoryTemplate";

export type Story = StoryObj<typeof FormTextBox>;

const meta = {
  title: "forms/FormTextBox",
  component: FormTextBox,
  args: {
    label: "今日の鳥さんの様子",
    inputType: "text",
  },
} satisfies Meta<typeof FormTextBox>;

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
