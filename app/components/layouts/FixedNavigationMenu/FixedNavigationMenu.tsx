import { IconType } from "@/components/atoms/Icon";
import { IconButton } from "@/components/molecules/IconButton";

export const navigationMenus: {
  icon: IconType;
  path: string;
  label: string;
}[] = [
  { icon: "home", path: "/home", label: "ホーム" },
  { icon: "notification", path: "/notification", label: "お知らせ" },
  { icon: "work", path: "/work", label: "観察・記録" },
  { icon: "report", path: "/report", label: "レポート" },
  { icon: "torisan", path: "/torisans", label: "鳥さん" },
];

export const FixedNavigationMenu: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex px-5 py-1 justify-between items-center shadow-[0_-4px_8px_0_rgba(0,0,0,0.05)]">
      {navigationMenus.map((menu) => (
        <IconButton
          key={menu.path}
          icon={menu.icon}
          label={menu.label}
          element={{
            elementType: "a",
            href: menu.path,
          }}
        />
      ))}
    </div>
  );
};
