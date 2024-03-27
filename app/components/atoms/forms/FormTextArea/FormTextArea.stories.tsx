import type { Meta, StoryObj } from "@storybook/react";

import { FormTextArea } from "./FormTextArea";

import {
  BaseTemplate,
  DisabledTemplate,
  EditTemplate,
  RequiredTemplate,
} from "./StoryTemplate";

export type Story = StoryObj<typeof FormTextArea>;

const meta = {
  title: "forms/FormTextArea",
  component: FormTextArea,
  args: {
    label: "気になることのメモ",
  },
} satisfies Meta<typeof FormTextArea>;

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
