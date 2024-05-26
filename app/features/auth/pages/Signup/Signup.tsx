"use client";

import { signup } from "@/api";
import { PageLayout } from "@/components/layouts/PageLayout/PageLayout";
import { Title } from "@/components/molecules/Title";
import { useSignin } from "@/contexts/AuthContext";
import { AuthForm, Form } from "@/features/auth/components/Form";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

export const Signup: React.FC = () => {
  const router = useRouter();
  const appSignin = useSignin();

  const handleSubmit = async (data: AuthForm) => {
    const res = await signup({ user: data });
    if (res.error == null) {
      if (res.result != null) {
        appSignin({
          accessToken: res.result.accessToken,
        });
        router.push("/p");
      }
      return;
    }
    toast.error(res.error.message);
  };
  return (
    <PageLayout>
      <Title title="サインアップ" />
      <Form
        submitLabel="サインアップ"
        otherLink={{
          href: "/signin",
          label: "サインイン",
        }}
        onSubmit={handleSubmit}
      />
    </PageLayout>
  );
};
