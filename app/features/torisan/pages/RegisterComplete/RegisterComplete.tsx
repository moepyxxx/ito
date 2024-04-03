"use client";

import { Typography } from "@/components/atoms/Typography";
import { DecoratedLeading } from "@/components/atoms/DecoratedLeading";
import { Title } from "@/components/molecules/Title";
import { IconImage } from "@/components/atoms/IconImage";
import { Button } from "@/components/atoms/Button";
import { useSearchParams, notFound } from "next/navigation";
import { useMemo } from "react";
import { PageLayout } from "@/components/layouts/PageLayout/PageLayout";

export const RegisterComplete: React.FC = () => {
  const searchParams = useSearchParams();

  const torisanId = useMemo(() => {
    const id = searchParams.get("torisan_id") ?? "";
    if (id === "") {
      notFound();
    }
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      notFound();
    }
    return parsedId;
  }, [searchParams]);

  return (
    <PageLayout>
      <div className="text-center m-x-auto flex flex-col items-center">
        <DecoratedLeading color="secondary" size="large" className="mt-8">
          Welcome!
        </DecoratedLeading>
        <Title title="登録が完了しました" />
        <Typography>
          ぜひitoをたくさん使って
          <br />
          毎日の鳥さんの記録・観察を続けてくださいね
        </Typography>
        <IconImage className="my-8" src={`/mascot/ito.png`} label="いと" />
        <div className="flex flex-col items-center gap-4">
          <Button
            element={{
              elementType: "a",
              href: `/p/work/${torisanId}`,
            }}
            variant={{
              type: "primary",
            }}>
            今日の記録をはじめる
          </Button>
          <Button
            element={{
              elementType: "a",
              href: `/p/torisan/${torisanId}`,
            }}
            variant={{
              type: "secondary-border",
            }}>
            鳥さん情報を見る
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
