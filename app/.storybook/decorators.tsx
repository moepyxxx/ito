import { ApolloProvider } from "@apollo/client";
import { client } from "../gql/client";
import React from "react";
import { AuthProvider } from "../contexts/AuthContext";

export const ApolloProviderDecorator = (Story) => (
  <ApolloProvider client={client}>
    <Story />
  </ApolloProvider>
);

export const AuthProviderDecorator = (Story) => (
  <AuthProvider>
    <Story />
  </AuthProvider>
);
