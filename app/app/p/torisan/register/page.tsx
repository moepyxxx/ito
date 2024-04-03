import { Register } from "@/features/torisan/pages/Register";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `鳥さんの登録 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function RegisterTorisanPageEntry() {
  return <Register />;
}
