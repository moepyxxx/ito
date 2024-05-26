import { Detail } from "@/features/torisan/pages/Detail";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `鳥さんの詳細画面 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function TorisanDetailPageEntry({
  params,
}: {
  params: { id: string };
}) {
  if (params.id == null || isNaN(Number(params.id))) return <></>;

  return <Detail torisanId={Number(params.id)} />;
}
