import { Icon, IconType } from "@/components/atoms/Icon";
import { Logo } from "@/components/atoms/Logo";
import { TextLink } from "@/components/atoms/TextLink";
import { IconButton } from "@/components/molecules/IconButton";
import { mediaQuery, useMediaQuery } from "@/hooks";

const subMenus: {
  path: string;
  icon: IconType;
  label: string;
}[] = [
  { path: "/faq", label: "よくある質問", icon: "faq" },
  { path: "/account", label: "アカウント設定", icon: "account" },
];

export const HeaderMenu: React.FC = () => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <div className="w-full flex items-center justify-between">
      <Logo />
      <div className={`flex gap-${isSp ? "1" : "4"}`}>
        {subMenus.map((menu, index) =>
          isSp ? (
            <IconButton
              element={{ elementType: "a", href: menu.path }}
              icon={menu.icon}
              key={index}
            />
          ) : (
            <TextLink href={menu.path} key={index} color="black">
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
          )
        )}
      </div>
    </div>
  );
};
