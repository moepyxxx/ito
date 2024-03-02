import { Typography } from "@/components/atoms/Typography";
import { getHtmlCodeFromColorKey } from "@/utils/color";

type Props = {
  listItems: {
    label: string;
    content: string;
  }[];
};

export const List: React.FC<Props> = ({ listItems }) => {
  return (
    <div>
      {listItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-left py-2"
          style={
            // tailwindでどうしてもbottomだけにstyleが当たらない（3.4.1の最新まで上げたがダメ）
            index !== listItems.length - 1
              ? {
                  borderBottom: `1px solid ${getHtmlCodeFromColorKey("thin_gray")}`,
                }
              : {}
          }>
          <Typography size="xSmall" className="block pt-1">
            {item.label}
          </Typography>
          <Typography className="block">{item.content}</Typography>
        </div>
      ))}
    </div>
  );
};
