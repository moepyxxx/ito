import { Introduction } from "@/components/pages/Introduction/Introduction";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `紹介 | ${MetaTitle}`,
  description: MetaDescription,
};

export default function IntroductionPage() {
  return <Introduction />;
}
