"use client";

import { Typography } from "@/components/atoms/Typography";
import {
  RegisterTorisan,
  RegisterTorisanForm,
} from "../../components/RegisterTorisanForm";
import { useRouter } from "next/navigation";

export const RegisterTorisanPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (data: RegisterTorisan) => {
    console.warn(data, "todo: submit");
    const torisanDummyId = 0;
    router.push(`/p/torisan/register/complete?torisan_id=${torisanDummyId}`);
  };

  return (
    <div className="px-4">
      <div className="my-8">
        <Typography className="text-center">
          新しい鳥さんの登録をします
        </Typography>
        <Typography className="text-center">
          鳥さんの情報を教えてください
        </Typography>
      </div>
      <RegisterTorisanForm onSubmit={handleSubmit} />
    </div>
  );
};
