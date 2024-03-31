import {
  DocumentNode,
  NoInfer,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
} from "@apollo/client";
import { useRouter } from "next/navigation";
import { useQuery as apolloUseQuery } from "@apollo/client";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthTokens, useSignout } from "@/contexts/AuthContext";

export const useQuery = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => {
  const router = useRouter();
  const authTokens = useAuthTokens();
  const signout = useSignout();

  const { loading, data, error } = apolloUseQuery<TData, TVariables>(query, {
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
      signout();
      if (errorType === "UNAUTHORIZED_ERROR_TYPE") {
        router.push("/signin?authError=true");
      }
      return;
    }
    toast.error(
      "予期しないエラーが発生しました。管理人へお問い合わせか、しばらく経ってからやり直してください"
    );
  }, [error, router, signout]);

  return {
    loading,
    data,
  };
};
