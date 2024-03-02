import { Icon } from "@/components/atoms/Icon";
import { tv } from "tailwind-variants";

const stepperLabelStyles = tv({
  base: "flex items-center justify-center py-4 px-1 border-2 relative inline-block rounded-lg border-solid max-w-20 min-w-20",
  variants: {
    status: {
      current: "border-black text-black",
      done: "border-deep-gray text-deep-gray",
      todo: "border-deep-gray text-deep-gray",
    },
  },
});

type StepperStatus = "current" | "done" | "todo";

type Props = {
  label: string;
  status: StepperStatus;
  onClick: () => void;
};
export const StepperLabel: React.FC<Props> = ({ label, status, onClick }) => {
  return (
    <button onClick={onClick} className={stepperLabelStyles({ status })}>
      {label}
      {status === "done" && (
        <Icon
          className="absolute top-[-8px] right-[-8px]"
          icon="check"
          size={24}
          color="black"
        />
      )}
    </button>
  );
};
