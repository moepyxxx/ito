import { Signin } from "@/features/auth/pages/Signin";
import { Metadata } from "next";
import { MetaDescription, MetaTitle } from "@/utils/meta";

export const metadata: Metadata = {
  title: `サインイン | ${MetaTitle}`,
  description: MetaDescription,
};

export default function SigninPage() {
  return <Signin />;
}
