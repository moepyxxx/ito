import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextBox } from "@/components/atoms/forms/FormTextBox";
import { Button } from "@/components/atoms/Button";

type Props = {
  // TODO: 型を入れる
  onSubmit: (torisan: any) => void;
};
export const RegisterTorisanForm: React.FC<Props> = () => {
  const schema = z.object({
    name: z.string().min(1),
    nickname: z.string().min(1),
    specie_id: z.coerce.number().nullable(),
    gender: z.coerce
      .number()
      .refine((value) => Object.values(Object).includes(value))
      .nullable(),
    birth_date: z.string().datetime().nullable(),
  });

  type FormSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    defaultValues: {
      name: "",
      nickname: "",
      specie_id: null,
      gender: null,
      birth_date: null,
    },
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(console.warn)} className="max-w-96">
      <FormTextBox
        label="名前"
        inputType="text"
        {...register("name")}
        required
        errorMessage={errors.name && errors.name.message}
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
