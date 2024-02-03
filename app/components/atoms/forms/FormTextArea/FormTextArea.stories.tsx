import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FormTextArea } from "./FormTextArea";
import { Button } from "../../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Story = StoryObj<typeof FormTextArea>;

const meta = {
  title: "forms/FormTextArea",
  component: FormTextArea,
  args: {
    label: "気になることのメモ",
  },
} satisfies Meta<typeof FormTextArea>;

export default meta;

const BaseTemplate: Story["render"] = (args: any) => {
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
      condition: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)} className="max-w-96">
      <FormTextArea
        {...args}
        {...register("condition")}
        errorMessage={errors.condition && errors.condition.message}
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
    condition: z.string().min(1, "必須項目です"),
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
    <form onSubmit={handleSubmit(console.warn)} className="max-w-96">
      <FormTextArea
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
    condition: z.string().min(1, "必須項目です"),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      condition: "とっても元気です！",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)} className="max-w-96">
      <FormTextArea
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
