import Link from "next/link";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    // TODO: 認証状態によってリンク先を変える
    <Link href="/" className="">
      <Image src="/logo.svg" alt="itoロゴ" width="178" height="44" />
    </Link>
  );
};
