import { Typography } from "@/components/atoms/Typography";

type Props = {
  message: string;
};
export const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="w-full rounded bg-thin-error p-4">
      <Typography size="small" color="error">
        {message}
      </Typography>
    </div>
  );
};
