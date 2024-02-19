import { Field, Int, ObjectType } from '@nestjs/graphql';
import type { SpecieType, StageType } from '../../../common';

@ObjectType({ description: '鳥さん' })
export class SummaryTorisan {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nickname: string;

  @Field(() => Int)
  stage_type: StageType;

  @Field(() => Int)
  specie_id: SpecieType;
}
