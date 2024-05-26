"use client";

import { mediaQuery, useMediaQuery } from "@/hooks";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { SideNavigationMenu } from "./SideNavigationMenu";
import { FixedNavigationMenu } from "./FixedNavigationMenu";
import { useIsAuth } from "@/contexts/AuthContext";

type Props = {
  children: React.ReactNode;
};
export const GlobalLayout: React.FC<Props> = ({ children }) => {
  const isSp = useMediaQuery(mediaQuery.sp);
  const isAuth = useIsAuth();
  return (
    <div className="max-w-[800px] mx-auto">
      <HeaderMenu />
      <main className={isSp ? "w-full my-2" : "flex items-start my-8"}>
        <div className={isSp || !isAuth ? "w-full" : "w-[calc(100%-240px)]"}>
          {children}
        </div>
        {!isSp && isAuth && <SideNavigationMenu />}
      </main>
      {isSp && isAuth && <FixedNavigationMenu />}
    </div>
  );
};
