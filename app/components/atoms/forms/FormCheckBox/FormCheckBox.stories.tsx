import type { Meta, StoryObj } from "@storybook/react";
import { useForm, useWatch } from "react-hook-form";

import { FormCheckBox } from "./FormCheckBox";
import { Button } from "../../Button";

type Story = StoryObj<typeof FormCheckBox>;

const Template: Story["render"] = (args) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      favoriteFoods: [],
    },
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormCheckBox {...args} {...register("favoriteFoods")} />
      <Button
        className="mt-2"
        element={{
          elementType: "button",
          buttonType: "submit",
        }}>
        送信
      </Button>
    </form>
  );
};

const meta = {
  title: "atoms/FormCheckBox",
  component: FormCheckBox,
  render: Template,
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

export const Base: Story = {};
