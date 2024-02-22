"use client";

import { Title } from "@/components/molecules/Title";
import { SwitchTorisanDetail } from "../../components/SwitchTorisanDetail";
import { useQuery } from "@apollo/client";
import { TORISANS, TORISANS_TYPE } from "@/gql/query";

export const SelectPage: React.FC = () => {
  const { loading, data } = useQuery<TORISANS_TYPE>(TORISANS);

  if (loading || data == null) return <></>;

  return (
    <>
      <Title
        title="鳥さん"
        description="鳥さん基本情報の確認・編集を行います"
      />
      {data && <SwitchTorisanDetail torisans={data.torisans} />}
    </>
  );
};
