import { IconType } from "@/components/atoms/Icon";
import { Logo } from "@/components/atoms/Logo";
import { IconButton } from "@/components/molecules/IconButton";
import { IconTextLink } from "@/components/molecules/IconTextLink";
import { mediaQuery, useAuth, useMediaQuery } from "@/hooks";

const subMenus: {
  path: string;
  icon: IconType;
  label: string;
}[] = [
  { path: "/p/faq", label: "よくある質問", icon: "faq" },
  { path: "/p/account", label: "アカウント設定", icon: "account" },
];

export const HeaderMenu: React.FC = () => {
  const isSp = useMediaQuery(mediaQuery.sp);
  const isAuth = useAuth();

  return (
    <div className="w-full flex items-center justify-between">
      <Logo />
      {isAuth && (
        <nav
          aria-label="サブメニュー"
          className={`flex ${isSp ? "gap-x-1" : "gap-x-3"}`}>
          {subMenus.map((menu, index) =>
            isSp ? (
              <IconButton
                element={{ elementType: "a", href: menu.path }}
                icon={menu.icon}
                label={menu.label}
                key={index}
                labelHidden={true}
              />
            ) : (
              <IconTextLink
                href={menu.path}
                key={index}
                color="black"
                icon={menu.icon}
                label={menu.label}
              />
            )
          )}
        </nav>
      )}
    </div>
  );
};
