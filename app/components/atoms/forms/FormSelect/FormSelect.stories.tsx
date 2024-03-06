import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FormSelect } from "./FormSelect";
import { Button } from "../../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createSelectSchema } from "./createSelectSchema";
import { getErrorMessage } from "@/utils";

type Story = StoryObj<typeof FormSelect>;

const meta = {
  title: "forms/FormSelect",
  component: FormSelect,
  args: {
    selections: [
      { value: 1, label: "セキセイインコ" },
      { value: 2, label: "オカメインコ" },
      { value: 3, label: "コザクラインコ" },
    ],
    label: "種類",
  },
} satisfies Meta<typeof FormSelect>;

export default meta;

const BaseTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    specie_id: createSelectSchema({ required: false }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ specie_id: null | number }, any, FormSchemaType>({
    defaultValues: {
      specie_id: null,
    },
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormSelect
        {...args}
        {...register("specie_id")}
        errorMessage={errors.specie_id && errors.specie_id.message}
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
    specie_id: createSelectSchema({
      required: true,
      requiredMessage: getErrorMessage({
        type: "required",
      }),
    }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ specie_id: null | number }, any, FormSchemaType>({
    defaultValues: {
      specie_id: null,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormSelect
        {...args}
        {...register("specie_id")}
        errorMessage={errors.specie_id && errors.specie_id.message}
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
    condition: z.string().transform((value) => parseInt(value, 10)),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ specie_id: null | number }, any, FormSchemaType>({
    defaultValues: {
      specie_id: 1,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormSelect
        {...args}
        {...register("specie_id")}
        errorMessage={errors.specie_id && errors.specie_id.message}
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
