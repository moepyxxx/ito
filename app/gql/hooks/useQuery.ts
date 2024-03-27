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
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

export const useQuery = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => {
  const router = useRouter();
  const [cookies] = useCookies(["access_token"]);

  const { loading, data, error } = apolloUseQuery<TData, TVariables>(query, {
    ...options,
    context: {
      headers: {
        Authorization: `Bearer ${cookies.access_token}`,
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
      if (errorType === "UNAUTHORIZED_ERROR_TYPE") {
        router.push("/signin?authError=true");
      }
      toast.info("セッションが切れました。ログインしてください");
      return;
    }
    toast.error(
      "予期しないエラーが発生しました。管理人へお問い合わせか、しばらく経ってからやり直してください"
    );
  }, [error, router]);

  return {
    loading,
    data,
  };
};
