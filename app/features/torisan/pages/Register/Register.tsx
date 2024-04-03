"use client";

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
import { PageLayout } from "@/components/layouts/PageLayout/PageLayout";
import { Title } from "@/components/molecules/Title";

export const Register: React.FC = () => {
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
    <PageLayout>
      <Title title="鳥さんの登録" description="鳥さんの情報を教えてください" />
      <RegisterTorisanForm onSubmit={handleSubmit} />
    </PageLayout>
  );
};
