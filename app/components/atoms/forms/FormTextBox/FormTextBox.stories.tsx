import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FormTextBox } from "./FormTextBox";
import { Button } from "../../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  createTextBoxNumberSchema,
  createTextBoxSchema,
} from "./createTextBoxSchema";
import { getErrorMessage } from "@/utils";

type Story = StoryObj<typeof FormTextBox>;

const meta = {
  title: "forms/FormTextBox",
  component: FormTextBox,
  args: {
    label: "今日の鳥さんの様子",
    inputType: "text",
  },
} satisfies Meta<typeof FormTextBox>;

export default meta;

const BaseTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    condition: createTextBoxSchema({
      required: false,
    }),
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

const RequiredTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    condition: createTextBoxSchema({
      required: true,
      requiredMessage: getErrorMessage({ type: "required" }),
    }),
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

const DisabledTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    condition: createTextBoxSchema({
      required: false,
    }),
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

const NumberTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    body_weight: createTextBoxNumberSchema({
      required: false,
    }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ body_weight: number | null }, any, FormSchemaType>({
    defaultValues: {
      body_weight: null,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)} className="max-w-96">
      <FormTextBox
        {...args}
        {...register("body_weight")}
        errorMessage={errors.body_weight && errors.body_weight.message}
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
export const Number: Story = {
  render: NumberTemplate,
  args: {
    label: "体重（g）",
    inputType: "number",
  },
};
