import { Typography } from "@/components/atoms/Typography";
import { tv } from "tailwind-variants";

const styleAlertWrap = tv({
  base: "w-full rounded p-4",
  variants: {
    type: {
      error: "bg-thin-error",
      warning: "bg-thin-warning",
    },
  },
});

type Props = {
  message: string;
  type: "error" | "warning";
};

export const Alert: React.FC<Props> = ({ message, type }) => {
  return (
    <div className={styleAlertWrap({ type })}>
      <Typography size="small" color={type}>
        {message}
      </Typography>
    </div>
  );
};
