import { IconType } from "@/components/atoms/Icon";
import { IconButton } from "@/components/molecules/IconButton";
import { usePathname } from "next/navigation";

export const navigationMenus: {
  icon: IconType;
  path: string;
  label: string;
  disable?: boolean;
}[] = [
  { icon: "home", path: "/p/home", label: "ホーム" },
  {
    icon: "notification",
    path: "/p/notification",
    disable: true,
    label: "お知らせ",
  },
  { icon: "work", path: "/p/work", label: "観察・記録" },
  { icon: "report", path: "/p/report", label: "レポート" },
  { icon: "torisan", path: "/p/torisan", label: "鳥さん" },
];

export const FixedNavigationMenu: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav
      aria-label="メインメニュー"
      className="fixed bottom-0 left-0 w-full flex px-5 py-1 justify-between items-center shadow-[0_-4px_8px_0_rgba(0,0,0,0.05)]">
      {navigationMenus.map((menu) => (
        <IconButton
          key={menu.path}
          icon={menu.icon}
          label={menu.label}
          disabled={menu.disable}
          strong={pathname === menu.path}
          element={{
            elementType: "a",
            href: menu.path,
          }}
        />
      ))}
    </nav>
  );
};
