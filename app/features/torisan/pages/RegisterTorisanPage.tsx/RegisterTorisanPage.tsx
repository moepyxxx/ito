"use client";

import { Typography } from "@/components/atoms/Typography";
import {
  RegisterTorisan,
  RegisterTorisanForm,
} from "../../components/RegisterTorisanForm";
import { useRouter } from "next/navigation";
import {
  MutationCreateTorisanArgs,
  Mutation,
} from "@/gql/generated/client/graphql";
import { CREATE_TORISAN } from "@/gql/queries";
import { useMutation } from "@/gql/hooks";
import { Stage } from "@ito/common";

export const RegisterTorisanPage: React.FC = () => {
  const router = useRouter();
  const { mutationFn } = useMutation<
    Pick<Mutation, "createTorisan">,
    MutationCreateTorisanArgs
  >(CREATE_TORISAN);

  const handleSubmit = (data: RegisterTorisan) => {
    mutationFn({
      variables: {
        torisan: {
          ...data,
          nickname: getNickName(data.nickname, data.name),
          gender_type: data.gender_type as number,
          stage_type: Stage.Observation,
        },
      },
      onCompleted: (result) => {
        router.push(
          `/p/torisan/register/complete?torisan_id=${result.createTorisan.id}`
        );
      },
    });
  };

  const getNickName = (nickname: number | null, name: string) => {
    switch (nickname) {
      case 1:
        return name + "ちゃん";
      case 2:
        return name + "くん";
      default:
        return name;
    }
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
