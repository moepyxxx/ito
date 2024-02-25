import * as restc from "typed-rest-client/RestClient";

export const client = new restc.RestClient(
  "vsts-node-api",
  "http://localhost:3001"
);
