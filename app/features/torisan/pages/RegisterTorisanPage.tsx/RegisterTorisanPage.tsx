"use client";

import { Typography } from "@/components/atoms/Typography";
import { RegisterTorisanForm } from "../../components/RegisterTorisanForm";

export const RegisterTorisanPage: React.FC = () => {
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
      <RegisterTorisanForm onSubmit={(data) => console.warn(data)} />
    </div>
  );
};
