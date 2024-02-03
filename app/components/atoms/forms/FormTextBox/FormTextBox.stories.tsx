import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FormTextBox } from "./FormTextBox";
import { Button } from "../../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Story = StoryObj<typeof FormTextBox>;

const meta = {
  title: "form/FormTextBox",
  component: FormTextBox,
  args: {
    label: "今日の鳥さんの様子",
    inputType: "text",
  },
} satisfies Meta<typeof FormTextBox>;

export default meta;

const BaseTemplate: Story["render"] = (args) => {
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
    <form onSubmit={handleSubmit(console.log)} className="max-w-96">
      <FormTextBox
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

const RequiredTemplate: Story["render"] = (args) => {
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
    <form onSubmit={handleSubmit(console.log)} className="max-w-96">
      <FormTextBox
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

const DisabledTemplate: Story["render"] = (args) => {
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
    <form onSubmit={handleSubmit(console.log)} className="max-w-96">
      <FormTextBox
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
