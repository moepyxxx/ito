import {
  DocumentNode,
  NoInfer,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
} from "@apollo/client";
import { useRouter } from "next/navigation";
import { useQuery as apolloUseQuery } from "@apollo/client";
import { useState } from "react";
import { useCookies } from "react-cookie";

export const useQuery = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cookies] = useCookies(["access_token"]);

  const { loading, data, error } = apolloUseQuery<TData, TVariables>(query, {
    ...options,
    context: {
      headers: {
        Authorization: `Bearer ${cookies.access_token}`,
      },
    },
  });

  if (error) {
    if (error.networkError) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore resultはserver側で定義して存在するよう設定したため
      const { error: errorType } = error.networkError.result;
      if (errorType === "UNAUTHORIZED_ERROR_TYPE") {
        router.push("/signin?authError=true");
      }
    } else {
      setErrorMessage(
        "予期しないエラーが発生しました。管理人へお問い合わせか、しばらく経ってからやり直してください"
      );
    }
  }

  return {
    loading,
    data,
    errorMessage,
  };
};
