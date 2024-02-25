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

export const useQuery = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { loading, data, error } = apolloUseQuery<TData, TVariables>(
    query,
    options
  );

  if (error?.networkError) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore resultはserver側で定義して存在するよう設定したため
    const { error: errorType, message } = error.networkError.result;
    if (errorType === "UNAUTHORIZED_ERROR_TYPE") {
      router.push("/signin?authError=true");
    } else {
      setErrorMessage(message);
    }
  }

  return {
    loading,
    data,
    errorMessage,
  };
};
