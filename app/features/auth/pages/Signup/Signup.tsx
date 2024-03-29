"use client";

import { signup } from "@/api";
import { Title } from "@/components/molecules/Title";
import { useSignin } from "@/contexts/AuthContext";
import { AuthForm } from "@/features/auth/components/AuthForm/AuthForm";
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
          refreshToken: res.result.refreshToken,
        });
        router.push("/p");
      }
      return;
    }
    toast.error(res.error.message);
  };
  return (
    <>
      <Title title="サインアップ" />
      <AuthForm
        submitLabel="サインアップ"
        otherLink={{
          href: "/signin",
          label: "サインイン",
        }}
        onSubmit={handleSubmit}
      />
    </>
  );
};
