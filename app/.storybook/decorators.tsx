import { ApolloProvider } from "@apollo/client";
import { client } from "../gql/client";
import React from "react";
import { AuthContextType, AuthProvider } from "../contexts/AuthContext";
import { fn } from "@storybook/test";

export const ApolloProviderDecorator = (Story) => (
  <ApolloProvider client={client}>
    <Story />
  </ApolloProvider>
);

export const AuthProviderDecorator = (Story, context) => {
  const mockedUseCustomAuth = fn<any, AuthContextType>().mockReturnValue({
    isAuth: context.parameters.auth?.isAuth ?? false,
    accessToken: "accessToken",
    signin: fn(),
    signout: fn(),
  });
  return (
    <AuthProvider useCustomAuth={mockedUseCustomAuth}>
      <Story />
    </AuthProvider>
  );
};
