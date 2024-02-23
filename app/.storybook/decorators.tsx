import { ApolloProvider } from "@apollo/client";
import { client } from "../gql/client";
import React from "react";

export const ApolloProviderDecorator = (Story) => (
  <ApolloProvider client={client}>
    <Story />
  </ApolloProvider>
);
