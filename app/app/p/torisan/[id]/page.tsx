import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `鳥さんの詳細画面 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function TorisanDetailPageEntry() {
  return <p>詳細</p>;
}
