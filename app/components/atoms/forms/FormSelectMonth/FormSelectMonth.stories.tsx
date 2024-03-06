import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FormSelectMonth } from "./FormSelectMonth";
import { Button } from "../../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createSelectMonthSchema } from "./createSelectMonthSchema";
import { getErrorMessage } from "@/utils";

type Story = StoryObj<typeof FormSelectMonth>;

const meta = {
  title: "forms/FormSelectMonth",
  component: FormSelectMonth,
  args: {
    label: "誕生日",
  },
} satisfies Meta<typeof FormSelectMonth>;

export default meta;

const BaseTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    birth_date: createSelectMonthSchema({ required: false }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<{ birth_date: null | Date }, any, FormSchemaType>({
    defaultValues: {
      birth_date: null,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onChange = (value: Date | null) => {
    setValue("birth_date", value);
  };

  return (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormSelectMonth
        {...args}
        {...register("birth_date")}
        onChange={onChange}
        errorMessage={errors.birth_date && errors.birth_date.message}
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
    birth_date: createSelectMonthSchema({
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
    setValue,
    formState: { errors },
  } = useForm<{ birth_date: null | Date }, any, FormSchemaType>({
    defaultValues: {
      birth_date: null,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onChange = (value: Date | null) => {
    setValue("birth_date", value);
  };

  return (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormSelectMonth
        {...args}
        {...register("birth_date")}
        onChange={onChange}
        errorMessage={errors.birth_date && errors.birth_date.message}
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
