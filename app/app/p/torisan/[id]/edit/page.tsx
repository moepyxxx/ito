import { Edit } from "@/features/torisan/pages/Edit";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `鳥さんの編集画面 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function TorisanEditPageEntry({
  params,
}: {
  params: { id: string };
}) {
  if (params.id == null || isNaN(Number(params.id))) return <></>;

  return <Edit torisanId={Number(params.id)} />;
}
