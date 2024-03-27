import { useCookies } from "react-cookie";

/**
 * 認証状態を判定するhooks
 * TODO: 認証状態を判定してい返すようにする
 */
export const useAuth = () => {
  const [cookies] = useCookies(["access_token"]);

  return !!cookies;
};
