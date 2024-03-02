import { StepperLabel } from "@/components/molecules/StepperLabel";

export type StepLabelPair<T extends string> = { step: T; label: string };

type Props<Step extends string> = {
  renderStepperLabels?: () => React.ReactNode;
  stepLabelPairs: StepLabelPair<Step>[];
  currentStepIndex: number;
  onClickSpecificStep: (step: Step) => void;
};
export const StepperLabels = <Step extends string>({
  currentStepIndex,
  renderStepperLabels,
  stepLabelPairs,
  onClickSpecificStep,
}: Props<Step>) => {
  return (
    <>
      {renderStepperLabels == null ? (
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
        renderStepperLabels()
      )}
    </>
  );
};
