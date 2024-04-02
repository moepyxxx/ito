import { Typography } from "@/components/atoms/Typography";
import { Note } from "../Note";

export type ListItem = {
  label: string;
  content: string;
};
type Props = {
  listItems: ListItem[];
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
          <Typography size="xSmall" className="block py-1">
            {item.label}
          </Typography>
          <Typography className="block">{item.content}</Typography>
        </div>
      ))}
    </div>
  );
};
