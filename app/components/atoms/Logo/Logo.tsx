import Link from "next/link";
import Image from "next/image";
import { useIsAuth } from "@/contexts/AuthContext";

export const Logo: React.FC = () => {
  const isAuth = useIsAuth();
  return (
    <Link href={isAuth ? "/p" : "/"} className="">
      <Image src="/logo.svg" alt="itoロゴ" width="178" height="44" />
    </Link>
  );
};
