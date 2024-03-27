"use client";

import { Title } from "@/components/molecules/Title";
import { TORISANS } from "@/gql/queries";
import { useQuery } from "@/gql/hooks";
import { Query } from "@/gql/generated/client/graphql";
import { SelectTorisans } from "@/components/molecules/SelectTorisans";
import { useRouter } from "next/navigation";
import { StageType } from "@ito/common";

export const SelectPage: React.FC = () => {
  const { loading, data } = useQuery<Pick<Query, "torisans">>(TORISANS);
  const router = useRouter();

  if (loading || data == null) return <></>;

  return (
    <>
      <Title
        title="鳥さん"
        description="鳥さん基本情報の確認・編集を行います"
      />
      {data && (
        <div className="px-4">
          {data.torisans && (
            <SelectTorisans
              submitMessage="鳥さんの情報を見る"
              onSubmit={(torisanId: string) => {
                router.push(`/p/torisan/${torisanId}`);
              }}
              torisans={data.torisans.map((torisan) => ({
                id: torisan.id,
                nickname: torisan.nickname,
                stage: torisan.stage_type as StageType,
                src: "/mascot/ito.png",
              }))}
            />
          )}
        </div>
      )}
    </>
  );
};
