import { Field, Int, ObjectType, ID } from '@nestjs/graphql';
import type { SpecieType, StageType } from '../../../common';
import { torisan as Torisan } from '@prisma/client';

@ObjectType({ description: '鳥さん' })
export class SummaryTorisan {
  @Field(() => ID)
  id: bigint;

  @Field(() => String)
  nickname: string;

  @Field(() => Int)
  stage_type: StageType;

  @Field(() => Int)
  specie_id: SpecieType;

  constructor(torisan: Torisan) {
    this.id = torisan.id;
    this.nickname = torisan.nickname;
    this.stage_type = torisan.stage_type as StageType;
    this.specie_id = torisan.specie_id as SpecieType;
  }
}
