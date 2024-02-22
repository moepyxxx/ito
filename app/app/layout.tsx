"use client";

import "./globals.css";
import { GlobalLayout } from "@/components/layouts/GlobalLayout/GlobalLayout";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/gql/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`font-noto`}>
        <ApolloProvider client={client}>
          <GlobalLayout>{children}</GlobalLayout>
        </ApolloProvider>
      </body>
    </html>
  );
}
