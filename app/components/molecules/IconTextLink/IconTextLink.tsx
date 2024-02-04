import { Icon, IconType } from "@/components/atoms/Icon";
import { TextLink } from "@/components/atoms/TextLink";

type Props = {
  icon: IconType;
  label: string;
  href: string;
  color: "primary" | "secondary" | "black" | "error";
};

export const IconTextLink: React.FC<Props> = ({ icon, label, href, color }) => {
  return (
    <TextLink href={href} color={color} className="py-2">
      <>
        <Icon
          icon={icon}
          size={20}
          color={color}
          className="inline-block mr-1 items-center"
        />
        {label}
      </>
    </TextLink>
  );
};
