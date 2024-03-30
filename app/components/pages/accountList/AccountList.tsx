import { Typography } from "@/components/atoms/Typography";
import { DescriptionLink } from "@/components/molecules/DescriptionLink";
import { Title } from "@/components/molecules/Title";

type Link = {
  href: string;
  title: string;
  description: string;
  disabled?: boolean;
};
const accountLinks: { heading: string; links: Link[] }[] = [
  {
    heading: "ユーザー設定",
    links: [
      {
        href: "/p/torisan/register",
        title: "新しい鳥さんの登録",
        description: "一緒に暮らしている鳥さんをitoに登録しましょう",
      },
      {
        href: "/p/logout",
        title: "ログアウト",
        disabled: true,
        description: "またitoに記録・観察しにきてくださいね",
      },
    ],
  },
  {
    heading: "itoについて",
    links: [
      {
        href: "/sub/loadmap",
        title: "開発ロードマップ",
        disabled: true,
        description: "今後の機能について（変わる可能性もあります）",
      },
      {
        href: "/sub/profile",
        title: "運営者情報",
        disabled: true,
        description: "運営元について",
      },
      {
        href: "/sub/guideline",
        title: "ご利用規約・ガイドライン",
        disabled: true,
        description: "規約・ガイドライン",
      },
    ],
  },
];

export const AccountList: React.FC = () => {
  return (
    <div className="px-4">
      <Title
        title="アカウント設定"
        description={`パートナーさん情報の確認・編集や
        新しい鳥さんを編集します`}
      />
      {accountLinks.map(({ heading, links }, index) => (
        <div key={index} className="mb-4">
          <Typography size="large" className="pb-2">
            {heading}
          </Typography>
          <div className="space-y-2">
            {links.map(({ href, title, description, disabled }) => (
              <DescriptionLink
                key={href}
                href={href}
                title={title}
                description={description}
                disabled={disabled}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
