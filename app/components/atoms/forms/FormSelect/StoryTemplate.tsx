import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../Button";
import { Story } from "./FormSelect.stories";
import { getErrorMessage } from "@/utils";
import { FormSelect, createSelectSchema } from ".";

export const useStoryTemplate = (
  options: {
    defaultValue: null | number | string;
    required: boolean;
    disabled: boolean;
  },
  args: any
) => {
  const { defaultValue, required, disabled } = options;
  const schema = z.object({
    specie_id: createSelectSchema({
      required,
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
  } = useForm<{ specie_id: null | number | string }, any, FormSchemaType>({
    defaultValues: {
      specie_id: defaultValue,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const render = (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormSelect
        {...args}
        {...register("specie_id")}
        errorMessage={errors.specie_id && errors.specie_id.message}
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
      defaultValue: "1",
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
      defaultValue: "1",
      required: false,
      disabled: false,
    },
    args
  );
  return render;
};
