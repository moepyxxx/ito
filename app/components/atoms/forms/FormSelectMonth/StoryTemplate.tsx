import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../Button";
import { Story } from "./FormSelectMonth.stories";
import { FormSelectMonth } from "./FormSelectMonth";
import { createSelectMonthSchema } from "./createSelectMonthSchema";
import { getErrorMessage } from "@/utils";

export const useStoryTemplate = (
  options: {
    defaultValue: null | Date;
    required: boolean;
    disabled: boolean;
  },
  args: any
) => {
  const { defaultValue, required, disabled } = options;

  const schema = z.object({
    birth_date: createSelectMonthSchema({
      required,
      requiredMessage: getErrorMessage({ type: "required" }),
    }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<{ birth_date: null | Date }, any, FormSchemaType>({
    defaultValues: {
      birth_date: defaultValue,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onChange = (value: Date | null) => {
    setValue("birth_date", value);
  };

  const render = (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormSelectMonth
        {...args}
        {...register("birth_date")}
        initialValue={getValues("birth_date")}
        onChange={onChange}
        errorMessage={errors.birth_date && errors.birth_date.message}
        required={required}
        disabled={disabled}
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
  return render;
};

export const BaseTemplate: Story["render"] = (args: any) => {
  const render = useStoryTemplate(
    {
      defaultValue: null,
      required: false,
      disabled: false,
    },
    args
  );
  return render;
};

export const RequiredTemplate: Story["render"] = (args: any) => {
  const render = useStoryTemplate(
    {
      defaultValue: null,
      required: true,
      disabled: false,
    },
    args
  );
  return render;
};

export const DisabledTemplate: Story["render"] = (args: any) => {
  const render = useStoryTemplate(
    {
      defaultValue: new Date("2021-01-01"),
      required: false,
      disabled: true,
    },
    args
  );
  return render;
};

export const EditTemplate: Story["render"] = (args: any) => {
  const render = useStoryTemplate(
    {
      defaultValue: new Date("2021-01-01"),
      required: false,
      disabled: false,
    },
    args
  );
  return render;
};
