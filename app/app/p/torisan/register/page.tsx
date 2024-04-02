import { RegisterTorisanPage } from "@/features/torisan/pages/RegisterTorisanPage";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `鳥さんの登録 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function RegisterTorisanPageEntry() {
  return <RegisterTorisanPage />;
}
