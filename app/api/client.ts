import { HttpCodes } from "typed-rest-client/HttpClient";
import * as restc from "typed-rest-client/RestClient";

export const client = new restc.RestClient(
  "vsts-node-api",
  "http://localhost:3001"
);

export type Response<T> = {
  error: ErrorRes | null;
  result: T | null;
};

export type ErrorRes = {
  message: string;
};

export async function restRequest<T>(
  request: () => Promise<restc.IRestResponse<T>>
): Promise<Response<T>> {
  try {
    const response = await request();

    return {
      error: null,
      result: response.result,
    };
  } catch (e: any) {
    if (!isIRestResponse(e)) {
      throw new Error("Unexpected error");
    }
    return {
      error: {
        message: e.result?.message || "",
      },
      result: null,
    };
  }
}

// NOTE: 適当な型が当てられなかったため自作する
function isIRestResponse(
  e: any
): e is restc.IRestResponse<{ statusCode: HttpCodes; message: string }> {
  return (
    typeof e === "object" &&
    e !== null &&
    "statusCode" in e.result &&
    "message" in e.result &&
    typeof e.result.message === "string" &&
    typeof e.result.statusCode === "number"
  );
}
