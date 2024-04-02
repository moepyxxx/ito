import { Typography } from "@/components/atoms/Typography";
import { Note } from "../Note";

type Props = {
  listItems: {
    label: string;
    content: string;
  }[];
  note?: string;
};

export const List: React.FC<Props> = ({ listItems, note }) => {
  return (
    <div>
      {note && (
        <Note>
          <Typography size="small">{note}</Typography>
        </Note>
      )}
      {listItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-left py-2 border-solid border-b-thin-gray border-b">
          <Typography size="xSmall" className="block pt-1">
            {item.label}
          </Typography>
          <Typography className="block">{item.content}</Typography>
        </div>
      ))}
    </div>
  );
};
