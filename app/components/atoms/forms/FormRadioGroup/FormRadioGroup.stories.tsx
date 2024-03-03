import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FormRadioGroup } from "./FormRadioGroup";
import { Button } from "../../Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createRadioGroupSchema } from "./createRadioGroupSchema";
import { useErrorMessage } from "@/hooks";

type Story = StoryObj<typeof FormRadioGroup>;

const meta = {
  title: "forms/FormRadioGroup",
  component: FormRadioGroup,
  args: {
    selections: [
      { value: 1, label: "より良くなった" },
      { value: 2, label: "より悪くなった" },
      { value: 3, label: "変わらない（いつもと異なる）" },
    ],
    label: "体調の変化",
  },
} satisfies Meta<typeof FormRadioGroup>;

export default meta;

const BaseTemplate: Story["render"] = (args: any) => {
  const schema = z.object({
    condition: createRadioGroupSchema({ required: false }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ condition: number | null }, any, FormSchemaType>({
    defaultValues: {
      condition: null,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormRadioGroup
        {...args}
        {...register("condition")}
        errorMessage={errors.condition && errors.condition.message}
        reset={() => setValue("condition", null)}
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
  const errorMessage = useErrorMessage();
  const schema = z.object({
    condition: createRadioGroupSchema({
      required: true,
      requiredMessage: errorMessage({ type: "required" }),
    }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ condition: number | null }, any, FormSchemaType>({
    defaultValues: {
      condition: null,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)}>
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

// 初期値がzodでtransformされないのでうまく表示されない。原因不明
// const DisabledTemplate: Story["render"] = (args: any) => {
//   const schema = z.object({
//     condition: z
//       .string()
//       .transform((value) => parseInt(value, 10))
//       .nullable(),
//   });

//   type FormSchemaType = z.infer<typeof schema>;

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<{ condition: number | null }, any, FormSchemaType>({
//     defaultValues: {
//       condition: 1,
//     },
//     mode: "onChange",
//     resolver: zodResolver(schema),
//   });

//   return (
//     <form onSubmit={handleSubmit(console.warn)}>
//       <FormRadioGroup
//         {...args}
//         {...register("condition")}
//         errorMessage={errors.condition && errors.condition.message}
//         disabled
//       />
//       <Button
//         className="mt-2"
//         element={{
//           elementType: "button",
//           buttonType: "submit",
//         }}>
//         データ確認
//       </Button>
//     </form>
//   );
// };
// export const Disabled: Story = {
//   render: DisabledTemplate,
// };
