"use client";

import { signin } from "@/api";
import { Title } from "@/components/molecules/Title";
import { AuthForm } from "@/components/organisms/AuthForm/AuthForm";
import { useRouter } from "next/navigation";
import React from "react";

export const Signin: React.FC = () => {
  const router = useRouter();
  const handleSubmit = async (data: AuthForm) => {
    const res = await signin({ user: data });
    console.warn(res);
    if (res) {
      // TODO: refresh token
      router.push("/p");
    }
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
