import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FormRadioGroup } from "./FormRadioGroup";
import { Button } from "../../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Story = StoryObj<typeof FormRadioGroup>;

const meta = {
  title: "forms/FormRadioGroup",
  component: FormRadioGroup,
  args: {
    selections: [
      { value: "1", label: "より良くなった" },
      { value: "2", label: "より悪くなった" },
      { value: "3", label: "変わらない（いつもと異なる）" },
    ],
    label: "体調の変化",
  },
} satisfies Meta<typeof FormRadioGroup>;

export default meta;

const BaseTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    condition: z.string(),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      condition: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormRadioGroup
        {...args}
        {...register("condition")}
        errorMessage={errors.condition && errors.condition.message}
        reset={() => setValue("condition", "")}
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

const RequiredTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    condition: z.string().min(1, { message: "選択必須です" }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      condition: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormRadioGroup
        {...args}
        {...register("condition")}
        errorMessage={errors.condition && errors.condition.message}
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

const DisabledTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    condition: z.string(),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      condition: "1",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <FormRadioGroup
        {...args}
        {...register("condition")}
        errorMessage={errors.condition && errors.condition.message}
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
