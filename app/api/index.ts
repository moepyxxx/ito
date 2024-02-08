import * as restc from "typed-rest-client/RestClient";

export async function sampleGet() {
  const client = new restc.RestClient("vsts-node-api");

  const response = await client.get<any>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return response.result;
}
