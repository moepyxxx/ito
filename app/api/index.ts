import * as restc from "typed-rest-client/RestClient";

export async function sampleGet() {
  const client = new restc.RestClient("vsts-node-api", "http://localhost:3000");

  const response = await client.get<any>("/api/todos/1");

  return response.result;
}
