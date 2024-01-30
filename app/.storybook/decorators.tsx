import { Decorator } from "@storybook/react";
import React from "react";

import { PT_Sans_Narrow, Noto_Sans_JP } from "next/font/google";

const narrow = PT_Sans_Narrow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-narrow",
});
const noto = Noto_Sans_JP({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-noto",
});
export const BaseDecorator: Decorator = (Story) => (
  <div className={`${narrow.variable} ${noto.variable} font-noto`}>
    <Story />
  </div>
);
