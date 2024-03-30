import { Signup } from "@/features/auth/pages/Signup";
import { MetaDescription, MetaTitle } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `サインアップ | ${MetaTitle}`,
  description: MetaDescription,
};

export default function SignupPage() {
  return <Signup />;
}
