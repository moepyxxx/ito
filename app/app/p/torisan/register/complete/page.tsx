import { RegisterComplete } from "@/features/torisan/pages/RegisterComplete/RegisterComplete";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `鳥さんの登録完了 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function RegisterTorisanPageEntry() {
  return <RegisterComplete />;
}
