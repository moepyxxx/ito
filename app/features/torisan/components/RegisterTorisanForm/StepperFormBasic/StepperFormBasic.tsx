import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RenderStepActions } from "@/components/layouts/StepperLayout/useStepper";
import { Alert } from "@/components/molecules/Alert";
import {
  FormBaseEditType,
  FormBaseSubmitType,
  baseSchema,
  getInitialBaseValue,
} from "../../../schemas/basic";
import { RHFFormBase } from "../../RHF/RHFFormBase";

type Props = {
  renderStepperActions: RenderStepActions;
  onSubmit: (data: FormBaseSubmitType) => void;
  initialValue: FormBaseSubmitType | null;
};

export const StepperFormBasic: React.FC<Props> = ({
  renderStepperActions,
  onSubmit,
  initialValue,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormBaseEditType, any, FormBaseSubmitType>({
    defaultValues: getInitialBaseValue(initialValue),
    mode: "onChange",
    resolver: zodResolver(baseSchema),
  });

  return (
    <div className="flex flex-col space-y-10">
      <Alert
        message="基本情報は後から変更することはできません"
        type="warning"
      />
      <RHFFormBase
        rhfRegister={register}
        rhfErrors={errors}
        rhfSetValue={setValue}
        rhfGetValues={getValues}
      />
      <div className="pt-2">
        {/** 第一引数にはisValidを利用したいが、FormSelectMonthのonChange/triggerがうまくいかないため一旦断念 */}
        {renderStepperActions(true, {
          onClickNext: (onNext: () => void) => {
            handleSubmit((data) => {
              onSubmit(data);
              onNext();
            })();
          },
        })}
      </div>
    </div>
  );
};
