import { Button } from "@/components/atoms/Button";
import { StepperLabel } from "@/components/molecules/StepperLabel";

export type StepLabelPair<T extends string> = { step: T; label: string };

type Props<Step extends string> = {
  children: React.ReactNode;
  renderStepper?: () => React.ReactNode;
  stepLabelPairs: StepLabelPair<Step>[];
  currentStepIndex: number;
  enableNext: boolean;
  enablePrev: boolean;
  isLastStep: boolean;
  submitLabel: string;
  onClickNextStep: () => void;
  onClickPrevStep: () => void;
  onClickSpecificStep: (step: Step) => void;
  onClickSubmit: () => void;
};
export const StepperLayout = <Step extends string>({
  children,
  currentStepIndex,
  renderStepper,
  stepLabelPairs,
  enableNext,
  enablePrev,
  isLastStep,
  submitLabel,
  onClickSpecificStep,
  onClickNextStep,
  onClickPrevStep,
  onClickSubmit,
}: Props<Step>) => {
  return (
    <div className="mt-8">
      {renderStepper == null ? (
        <div className="flex flex-row flex-nowrap justify-center">
          {stepLabelPairs.map((stepLabelPair) => {
            return (
              <div key={stepLabelPair.step} className="px-1">
                <StepperLabel
                  label={stepLabelPair.label}
                  status={
                    currentStepIndex === stepLabelPairs.indexOf(stepLabelPair)
                      ? "current"
                      : stepLabelPairs.indexOf(stepLabelPair) < currentStepIndex
                        ? "done"
                        : "todo"
                  }
                  onClick={() => onClickSpecificStep(stepLabelPair.step)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        renderStepper()
      )}
      <div className="my-14 py-20 px-5 border-solid border-black border rounded text-center">
        {children}
      </div>
      <div className="flex flex-row flex-nowrap justify-between">
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
            disabled={!enableNext}
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
    </div>
  );
};
