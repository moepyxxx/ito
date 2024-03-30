import { SelectPage } from "@/features/torisan/pages/SelectPage";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `鳥さん一覧 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function TorisanSelectPage() {
  return <SelectPage />;
}
