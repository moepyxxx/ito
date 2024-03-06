import { Button } from "@/components/atoms/Button";

export const SampleAction = (
  enableNext: boolean,
  currentStepIndex: number,
  isLastStep: boolean
) => (
  <div className="mt-4 flex flex-row flex-nowrap justify-between">
    <Button
      className={`${currentStepIndex === 0 && "opacity-0"}`}
      variant={{
        type: "default",
      }}
      element={{
        onClick: () => console.warn("prev"),
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
          onClick: isLastStep
            ? () => console.warn("submit")
            : () => console.warn("next"),
          elementType: "button",
        }}>
        {isLastStep ? "送信する" : "次へ"}
      </Button>
    }
  </div>
);
