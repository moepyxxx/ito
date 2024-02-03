import type { Meta, StoryObj } from "@storybook/react";
import { useForm, useWatch } from "react-hook-form";

import { FormCheckBox } from "./FormCheckBox";
import { Button } from "../../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Story = StoryObj<typeof FormCheckBox>;

const meta = {
  title: "atoms/FormCheckBox",
  component: FormCheckBox,
  args: {
    selections: [
      { value: "1", label: "塩土" },
      { value: "2", label: "ナッツ類" },
      { value: "3", label: "果物" },
      { value: "4", label: "野菜" },
    ],
    label: "お気に入りのおやつ",
  },
} satisfies Meta<typeof FormCheckBox>;

export default meta;

const BaseTemplate: Story["render"] = (args) => {
  const schema = z.object({
    favoriteFoods: z.array(z.string()),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      favoriteFoods: [],
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormCheckBox
        {...args}
        {...register("favoriteFoods")}
        errorMessage={errors.favoriteFoods && errors.favoriteFoods.message}
      />
      <Button
        className="mt-2"
        element={{
          elementType: "button",
          buttonType: "submit",
        }}>
        データ確認
      </Button>
    </form>
  );
};
export const Base: Story = {
  render: BaseTemplate,
};

const RequiredTemplate: Story["render"] = (args) => {
  const schema = z.object({
    favoriteFoods: z
      .array(z.string())
      .min(1, { message: "1つ以上選択してください" }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      favoriteFoods: [],
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormCheckBox
        {...args}
        {...register("favoriteFoods")}
        errorMessage={errors.favoriteFoods && errors.favoriteFoods.message}
        required
      />
      <Button
        className="mt-2"
        element={{
          elementType: "button",
          buttonType: "submit",
        }}>
        データ確認
      </Button>
    </form>
  );
};
export const Required: Story = {
  render: RequiredTemplate,
};

const DisabledTemplate: Story["render"] = (args) => {
  const schema = z.object({
    favoriteFoods: z.array(z.string()),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      favoriteFoods: ["1", "3"],
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormCheckBox
        {...args}
        {...register("favoriteFoods")}
        errorMessage={errors.favoriteFoods && errors.favoriteFoods.message}
        disabled
      />
      <Button
        className="mt-2"
        element={{
          elementType: "button",
          buttonType: "submit",
        }}>
        データ確認
      </Button>
    </form>
  );
};
export const Disabled: Story = {
  render: DisabledTemplate,
};
