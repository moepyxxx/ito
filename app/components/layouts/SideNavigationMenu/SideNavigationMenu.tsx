import { Paper } from "@/components/atoms/Paper";
import { navigationMenus } from "../FixedNavigationMenu";
import { TextLink } from "@/components/atoms/TextLink";
import { Icon } from "@/components/atoms/Icon";

export const SideNavigationMenu: React.FC = () => {
  return (
    <Paper className="max-w-[240px] w-full">
      <div className="flex flex-col">
        {navigationMenus.map((menu, index) => (
          <TextLink href={menu.path} key={index} color="black" className="py-2">
            <>
              <Icon
                icon={menu.icon}
                size={20}
                color="black"
                className="inline-block mr-1 items-center"
              />
              {menu.label}
            </>
          </TextLink>
        ))}
      </div>
    </Paper>
  );
};
