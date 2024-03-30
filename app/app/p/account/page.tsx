import { AccountList } from "@/components/pages/accountList/AccountList";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `アカウント設定 | マイページ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function AccountListPage() {
  return <AccountList />;
}
