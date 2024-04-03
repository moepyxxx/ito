import { FC, createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useMount } from "react-use";

type AuthContextType = {
  accessToken: string;
  refreshToken: string;
  isAuth: boolean;
  signin: (params: { accessToken: string; refreshToken: string }) => void;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export type Props = {
  children: React.ReactNode;
};
export const AuthProvider: FC<Props> = ({ children }) => {
  const [cookie, setCookies] = useCookies(["access_token", "refresh_token"]);
  const [isAuth, setIsAuth] = useState(false);

  const accessToken = cookie["access_token"];
  const refreshToken = cookie["refresh_token"];

  const signin = (params: { accessToken: string; refreshToken: string }) => {
    setCookies("access_token", params.accessToken);
    setCookies("refresh_token", params.refreshToken);
    setIsAuth(true);
  };

  const signout = () => {
    setCookies("access_token", "");
    setCookies("refresh_token", "");
    setIsAuth(false);
  };

  useMount(async () => {
    if (accessToken && refreshToken) {
      setIsAuth(true);
    }
    // できた方が楽なのだが現状supabaseの不具合でrefresh tokenの更新がうまく動かないためコメントアウト
    // if (refreshToken && typeof refreshToken === "string") {
    //   const { result, error } = await refresh(refreshToken);
    //   if (error == null && result != null) {
    //     setCookies("access_token", result.accessToken);
    //     setCookies("refresh_token", result.refreshToken);
    //     setIsAuth(true);
    //     return;
    //   }

    //   toast.info("セッションが切れました。ログインしてください");
    //   setCookies("access_token", "");
    //   setCookies("refresh_token", "");
    //   setIsAuth(false);
    //   router.push("/signin?authError=true");
    //   return;
    // }
  });

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        isAuth,
        signin,
        signout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useIsAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useIsAuth must be used within an AuthProvider");
  }
  return context.isAuth;
};

export const useSignin = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useSignin must be used within an AuthProvider");
  }
  return context.signin;
};

export const useSignout = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useSignout must be used within an AuthProvider");
  }
  return context.signout;
};

export const useAuthTokens = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthTokens must be used within an AuthProvider");
  }
  return {
    accessToken: context.accessToken,
    refreshToken: context.refreshToken,
  };
};
