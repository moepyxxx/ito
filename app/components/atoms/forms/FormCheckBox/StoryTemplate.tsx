import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormCheckBox, createCheckboxSchema } from ".";
import { Button } from "../../Button";
import { getErrorMessage } from "@/utils";
import { Story } from "./FormCheckBox.stories";

export const useStoryTemplate = (
  options: {
    defaultValue: (number | string)[];
    required: boolean;
    disabled: boolean;
  },
  args: any
) => {
  const { defaultValue, required, disabled } = options;

  const schema = z.object({
    favoriteFoods: createCheckboxSchema({
      required: required || false,
      requiredMessage: getErrorMessage({ type: "required" }),
    }),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ favoriteFoods: (string | number)[] }, FormSchemaType>({
    defaultValues: {
      favoriteFoods: defaultValue,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const render = (
    <form onSubmit={handleSubmit(console.warn)}>
      <FormCheckBox
        {...args}
        {...register("favoriteFoods")}
        errorMessage={errors.favoriteFoods && errors.favoriteFoods.message}
        disabled={disabled || false}
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
      defaultValue: [],
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
      defaultValue: [],
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
      defaultValue: ["1"],
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
      defaultValue: ["1"],
      required: false,
      disabled: false,
    },
    args
  );
  return render;
};
