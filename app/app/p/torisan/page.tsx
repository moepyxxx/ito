import { SelectDetail } from "@/features/torisan/pages/SelectDetail";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `鳥さん一覧 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function TorisanSelectDetailPage() {
  return <SelectDetail />;
}
