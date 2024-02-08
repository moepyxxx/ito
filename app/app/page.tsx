import { Metadata } from "next";

export const metadata: Metadata = {
  title: "愛鳥さんの毎日の記録・観察のためのサイト - ito",
  description: "一緒に暮らしている鳥さんの記録・観察を続けていくためのサイト",
};

import { sampleGet } from "../api";

export default async function Home() {
  const res = await sampleGet();
  console.warn(res);

  return "hello world";
}
