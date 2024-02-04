import { Paper } from "@/components/atoms/Paper";
import { navigationMenus } from "../FixedNavigationMenu";
import { IconTextLink } from "@/components/molecules/IconTextLink";

export const SideNavigationMenu: React.FC = () => {
  return (
    <Paper className="max-w-[240px] w-full">
      <nav aria-label="メインメニュー" className="flex flex-col">
        {navigationMenus.map((menu, index) => (
          <IconTextLink
            href={menu.path}
            key={index}
            color="black"
            icon={menu.icon}
            label={menu.label}
          />
        ))}
      </nav>
    </Paper>
  );
};
