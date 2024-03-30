import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `記録 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function WorkPageEntry() {
  return <p>記録します</p>;
}
