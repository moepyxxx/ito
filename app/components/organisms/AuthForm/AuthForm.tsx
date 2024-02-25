import { Button } from "@/components/atoms/Button";
import { TextLink } from "@/components/atoms/TextLink";
import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { useErrorMessage } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type AuthForm = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (authForm: AuthForm) => void;
  submitLabel: string;
  otherLink?: {
    label: string;
    href: string;
  };
};

const PASSWORD_PATTERN = /^[a-zA-Z0-9!@#$%^&*()_+\-=<>?,./:;'"[\]{}~\\]+$/;
export const AuthForm: React.FC<Props> = ({
  onSubmit,
  submitLabel,
  otherLink,
}) => {
  const errorMessage = useErrorMessage();
  const schema = z.object({
    email: z
      .string()
      .min(1, errorMessage({ type: "required" }))
      .email(errorMessage({ type: "email" })),
    password: z
      .string()
      .min(1, errorMessage({ type: "required" }))
      .regex(
        PASSWORD_PATTERN,
        errorMessage({ type: "regex", enableRegex: "半角英数字記号" })
      ),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-96 mx-auto">
      <FormTextBox
        label="ユーザーID（メールアドレス）"
        inputType="text"
        {...register("email")}
        required
        errorMessage={errors.email && errors.email.message}
      />
      <FormTextBox
        label="パスワード"
        inputType="password"
        {...register("password")}
        required
        errorMessage={errors.password && errors.password.message}
      />
      <div className="flex flex-col items-center mt-8">
        <Button
          variant={{ type: "primary" }}
          element={{
            elementType: "button",
            buttonType: "submit",
          }}>
          {submitLabel}
        </Button>
        {otherLink && (
          <TextLink className="mt-2" color="secondary" href={otherLink.href}>
            {otherLink.label}
          </TextLink>
        )}
      </div>
    </form>
  );
};
