import { Button } from "@/components/atoms/Button";
import { DecoratedLeading } from "@/components/atoms/DecoratedLeading";
import { IconImage } from "@/components/atoms/IconImage";
import { Logo } from "@/components/atoms/Logo";
import { TextLink } from "@/components/atoms/TextLink";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

const sampleTorisans = [
  {
    label: "うにちゃん",
    image: "unichan",
  },
  {
    label: "いと",
    image: "ito",
  },
  {
    label: "たまじろう",
    image: "tamajiro",
  },
];

const hooterLinks = [
  { label: "itoについてのお話", href: "/about" },
  { label: "開発ロードマップ", href: "/loadmap" },
  { label: "運営者情報", href: "/information" },
  { label: "ご利用規約・ガイドライン", href: "/guideline" },
];

export const Introduction: React.FC = async () => {
  return (
    <div className="text-center my-10">
      <DecoratedLeading size="large" color="secondary">
        Have a nice every special Day!
      </DecoratedLeading>
      <div className="pt-10">
        <Typography align="center">毎日の記録・観察から</Typography>
        <Typography align="center">
          鳥さんの健康管理をはじめませんか？
        </Typography>
      </div>
      <div className="pt-10 flex gap-x-5 justify-center">
        {sampleTorisans.map((torisan, index) => (
          <IconImage
            key={index}
            src={`/mascot/${torisan.image}.png`}
            label={torisan.label}
          />
        ))}
      </div>
      <div className="pt-10 text-center inline-block">
        <Image alt="itoの飾りロゴ" src="/favicon.svg" width={44} height={44} />
      </div>
      <div className="pt-14 flex flex-col w-full items-center">
        <Button
          element={{ elementType: "a", href: "/signup" }}
          variant={{ type: "primary" }}>
          記録・観察をはじめる<span className="text-xs">（サインアップ）</span>
        </Button>
        <TextLink href="/login" color="secondary" className="mt-3">
          サインインはこちら
        </TextLink>
      </div>
      <div className="pt-14 flex flex-col w-full items-center">
        {hooterLinks.map((link, index) => (
          <TextLink
            key={index}
            href={link.href}
            color="black"
            className="mt-3 text-sm">
            {link.label}
          </TextLink>
        ))}
      </div>
      <div className="pt-10 flex flex-col w-full items-center">
        <Logo />
      </div>
    </div>
  );
};
