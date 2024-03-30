"use client";

import "./globals.css";
import { GlobalLayout } from "@/components/layouts/GlobalLayout/GlobalLayout";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/gql/client";
import { CookiesProvider } from "react-cookie";
import { Slide, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  injectStyle();
  return (
    <html lang="ja">
      <body className={`font-noto`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <AuthProvider>
            <ApolloProvider client={client}>
              <GlobalLayout>{children}</GlobalLayout>
            </ApolloProvider>
          </AuthProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
