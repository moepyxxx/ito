import { RegisterCompletePage } from "@/features/torisan/pages/RegisterCompletePage/RegisterCompletePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "鳥さんの登録完了 | マイページ | 愛鳥さんの毎日の記録・観察のためのサイト - ito",
  description:
    "itoは、一緒に暮らしている鳥さんの記録・観察を続けていくためのサイトです。毎日の記録を通して、鳥さんの健康を守りましょう",
};

export default function RegisterTorisanPageEntry() {
  return <RegisterCompletePage />;
}