import { client } from ".";

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
): Promise<AuthResUser | null> {
  const response = await client.create<AuthResUser>(
    "/api/auth/signup",
    request
  );
  return response.result;
}

export async function signin(
  request: AuthReqBody
): Promise<AuthResUser | null> {
  const response = await client.create<AuthResUser>(
    "/api/auth/signin",
    request
  );
  return response.result;
}
