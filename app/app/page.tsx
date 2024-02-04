import { Typography } from "@/components/atoms/Typography";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "愛鳥さんの毎日の記録・観察のためのサイト - ito",
  description: "一緒に暮らしている鳥さんの記録・観察を続けていくためのサイト",
};

export default function Home() {
  return <Typography>Hello!</Typography>;
}
