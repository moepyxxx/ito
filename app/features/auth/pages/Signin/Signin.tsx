"use client";

import { signin } from "@/api";
import { Title } from "@/components/molecules/Title";
import { AuthForm } from "@/features/auth/components/AuthForm/AuthForm";
import { useRouter } from "next/navigation";
import React from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

export const Signin: React.FC = () => {
  const router = useRouter();
  const [_, setCookie] = useCookies(["access_token"]);

  const handleSubmit = async (data: AuthForm) => {
    const res = await signin({ user: data });
    if (res.error == null) {
      setCookie("access_token", res.result?.accessToken);
      router.push("/p");
      return;
    }
    toast.error(res.error.message);
  };
  return (
    <>
      <Title title="サインイン" />
      <AuthForm
        submitLabel="サインイン"
        otherLink={{
          href: "/signup",
          label: "サインアップ",
        }}
        onSubmit={handleSubmit}
      />
    </>
  );
};
