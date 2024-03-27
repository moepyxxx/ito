import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../Button";
import { Story } from "./FormTextArea.stories";
import { FormTextArea } from "./FormTextArea";
import { createTextAreaSchema } from "./createTextAreaSchema";
import { getErrorMessage } from "@/utils";

export const useStoryTemplate = (
  options: {
    defaultValue: string;
    required: boolean;
    disabled: boolean;
  },
  args: any
) => {
  const { defaultValue, required, disabled } = options;

  const schema = z.object({
    condition: createTextAreaSchema({
      required,
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
      condition: defaultValue,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const render = (
    <form onSubmit={handleSubmit(console.warn)} className="max-w-96">
      <FormTextArea
        {...args}
        {...register("condition")}
        errorMessage={errors.condition && errors.condition.message}
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
      defaultValue: "",
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
      defaultValue: "",
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
      defaultValue: "体調は良好です。元気に部屋の中を飛び回っています！",
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
      defaultValue: "体調は良好です。元気に部屋の中を飛び回っています！",
      required: false,
      disabled: false,
    },
    args
  );
  return render;
};
