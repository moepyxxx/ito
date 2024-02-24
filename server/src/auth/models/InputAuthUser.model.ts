import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InputAuthUser {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
