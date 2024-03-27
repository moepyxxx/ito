"use client";

import { signup } from "@/api";
import { Title } from "@/components/molecules/Title";
import { AuthForm } from "@/features/auth/components/AuthForm/AuthForm";
import { useRouter } from "next/navigation";
import React from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

export const Signup: React.FC = () => {
  const router = useRouter();

  const [_, setCookie] = useCookies(["access_token"]);

  const handleSubmit = async (data: AuthForm) => {
    const res = await signup({ user: data });
    if (res.error == null) {
      setCookie("access_token", res.result?.accessToken);
      router.push("/p");
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
