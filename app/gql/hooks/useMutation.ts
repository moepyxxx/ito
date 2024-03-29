import {
  DocumentNode,
  MutationHookOptions,
  NoInfer,
  OperationVariables,
  TypedDocumentNode,
} from "@apollo/client";
import { useRouter } from "next/navigation";
import { useMutation as apolloUseMutation } from "@apollo/client";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthTokens } from "@/contexts/AuthContext";

export const useMutation = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: MutationHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => {
  const router = useRouter();
  const authTokens = useAuthTokens();

  const [mutationFn, { data: result, loading, error }] = apolloUseMutation<
    TData,
    TVariables
  >(query, {
    ...options,
    context: {
      headers: {
        Authorization: `Bearer ${authTokens?.accessToken}`,
      },
    },
  });

  useEffect(() => {
    if (error == null) {
      return;
    }

    if (error.networkError) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore resultはserver側で定義して存在するよう設定したため
      const { error: errorType } = error.networkError.result;
      toast.info("セッションが切れました。ログインしてください");
      if (errorType === "UNAUTHORIZED_ERROR_TYPE") {
        router.push("/signin?authError=true");
      }
      return;
    }
    toast.error(
      "予期しないエラーが発生しました。管理人へお問い合わせか、しばらく経ってからやり直してください"
    );
  }, [error, router]);

  return {
    mutationFn,
    loading,
    result,
  };
};
