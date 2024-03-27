import type { Meta, StoryObj } from "@storybook/react";
import { FormCheckBox } from "./FormCheckBox";
import {
  BaseTemplate,
  DisabledTemplate,
  EditTemplate,
  RequiredTemplate,
} from "./StoryTemplate";

export type Story = StoryObj<typeof FormCheckBox>;

const meta = {
  title: "forms/FormCheckBox",
  component: FormCheckBox,
  args: {
    selections: [
      { value: 1, label: "塩土" },
      { value: 2, label: "ナッツ類" },
      { value: 3, label: "果物" },
      { value: 4, label: "野菜" },
    ],
    label: "お気に入りのおやつ",
  },
} satisfies Meta<typeof FormCheckBox>;

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
