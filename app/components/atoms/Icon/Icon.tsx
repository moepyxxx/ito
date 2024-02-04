import { SvgProps } from "../../icons/props";
import { HomeIcon } from "../../icons/Home";
import { AccountIcon } from "../../icons/Account";
import { CheckIcon } from "../../icons/Check";
import { FaqIcon } from "../../icons/Faq";
import { NotificationIcon } from "../../icons/Notification";
import { ReportIcon } from "../../icons/Report";
import { TorisanIcon } from "../../icons/Torisan";
import { WorkIcon } from "../../icons/Work";

export type IconType =
  | "home"
  | "account"
  | "check"
  | "faq"
  | "notification"
  | "report"
  | "torisan"
  | "work";

type Props = {
  icon: IconType;
} & SvgProps;

export const Icon: React.FC<Props> = (props) => {
  const { icon, ...restArgs } = props;
  switch (icon) {
    case "home":
      return <HomeIcon {...restArgs} />;
    case "account":
      return <AccountIcon {...restArgs} />;
    case "check":
      return <CheckIcon {...restArgs} />;
    case "faq":
      return <FaqIcon {...restArgs} />;
    case "notification":
      return <NotificationIcon {...restArgs} />;
    case "report":
      return <ReportIcon {...restArgs} />;
    case "torisan":
      return <TorisanIcon {...restArgs} />;
    case "work":
      return <WorkIcon {...restArgs} />;
    default:
      return <HomeIcon {...restArgs} />;
  }
};
