"use client";

import { mediaQuery, useAuth, useMediaQuery } from "@/hooks";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { SideNavigationMenu } from "./SideNavigationMenu";
import { FixedNavigationMenu } from "./FixedNavigationMenu";

type Props = {
  children: React.ReactNode;
};
export const GlobalLayout: React.FC<Props> = ({ children }) => {
  const isSp = useMediaQuery(mediaQuery.sp);
  const isAuth = useAuth();
  return (
    <div className="max-w-[800px] my-auto">
      <HeaderMenu />
      <main className={isSp ? "w-full my-2" : "flex items-start my-8"}>
        <div className={isSp ? "w-full" : "w-[calc(100%-240px)]"}>
          {children}
        </div>
        {!isSp && isAuth && <SideNavigationMenu />}
      </main>
      {isSp && isAuth && <FixedNavigationMenu />}
    </div>
  );
};
