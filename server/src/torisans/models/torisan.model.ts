import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '鳥さん' })
export class Torisan {
  @Field(() => Int)
  id: number;

  @Field()
  nickname: string;
}
