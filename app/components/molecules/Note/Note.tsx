import { Typography } from "@/components/atoms/Typography";

type Props = {
  title: string;
  content: React.ReactNode;
};
export const Note: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="bg-gray p-4 rounded-xl">
      <Typography bold>{title}</Typography>
      {content}
    </div>
  );
};
