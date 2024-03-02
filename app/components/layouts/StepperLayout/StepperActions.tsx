import { Button } from "@/components/atoms/Button";

type Props = {
  currentStepIndex: number;
  enableNext: boolean;
  enablePrev: boolean;
  isLastStep: boolean;
  submitLabel: string;
  onClickNextStep: () => void;
  onClickPrevStep: () => void;
  onClickSubmit: () => void;
};
export const StepperActions = ({
  currentStepIndex,
  enableNext,
  enablePrev,
  isLastStep,
  submitLabel,
  onClickNextStep,
  onClickPrevStep,
  onClickSubmit,
}: Props) => {
  return (
    <div className="mt-4 flex flex-row flex-nowrap justify-between">
      <Button
        className={`${currentStepIndex === 0 && "opacity-0"}`}
        disabled={!enablePrev}
        variant={{
          type: "default",
        }}
        element={{
          onClick: onClickPrevStep,
          elementType: "button",
        }}>
        前へ
      </Button>
      {
        <Button
          disabled={!enableNext && !isLastStep}
          variant={{
            type: "default",
          }}
          element={{
            onClick: isLastStep ? onClickSubmit : onClickNextStep,
            elementType: "button",
          }}>
          {isLastStep ? submitLabel : "次へ"}
        </Button>
      }
    </div>
  );
};
