"use server";
import { client, restRequest, Response } from ".";

export type AuthReqBody = {
  user: {
    email: string;
    password: string;
  };
};

export type AuthResUser = {
  id: string;
  email: string;
  refreshToken: string;
  accessToken: string;
};

export async function signup(
  request: AuthReqBody
): Promise<Response<AuthResUser>> {
  return restRequest(() =>
    client.create<AuthResUser>("/api/auth/signup", request)
  );
}

export async function signin(
  request: AuthReqBody
): Promise<Response<AuthResUser>> {
  return restRequest(() =>
    client.create<AuthResUser>("/api/auth/signin", request)
  );
}
