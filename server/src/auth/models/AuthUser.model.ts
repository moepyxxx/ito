import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthUser {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  refreshToken: string;

  @Field(() => String)
  accessToken: string;

  constructor(user: {
    id: string;
    email: string;
    access_token: string;
    refresh_token: string;
  }) {
    this.id = user.id;
    this.email = user.email;
    this.accessToken = user.access_token;
    this.refreshToken = user.refresh_token;
  }
}
