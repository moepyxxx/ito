import { Typography } from "@/components/atoms/Typography";

type Props = {
  title?: string;
  children: React.ReactNode;
};
export const Note: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="bg-gray p-4 rounded-xl">
      {title && <Typography bold>{title}</Typography>}
      {children}
    </div>
  );
};
