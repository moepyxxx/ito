"use client";

import { signup } from "@/api";
import { Title } from "@/components/molecules/Title";
import { AuthForm } from "@/components/organisms/AuthForm/AuthForm";
import { useRouter } from "next/navigation";
import React from "react";

export const Signup: React.FC = () => {
  const router = useRouter();
  const handleSubmit = async (data: AuthForm) => {
    const res = await signup({ user: data });
    console.warn(res);
    if (res) {
      // TODO: refresh token
      router.push("/p");
    }
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
