import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { GenderType, SpecieType, StageType } from '@ito/common';

@ObjectType({ description: '鳥さん詳細' })
export class Torisan {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  nickname: string;

  @Field(() => Int)
  stage_type: StageType;

  @Field(() => Int)
  specie_type: SpecieType;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  birth_date: Date;

  @Field(() => Int)
  gender_type: GenderType;

  // @Field(() => Int, { nullable: true })
  // objective_body_weight: number | null;

  // @Field(() => Int, { nullable: true })
  // objective_amount_of_water: number | null;

  // @Field(() => Int, { nullable: true })
  // staple_food_id: number | null;

  // @Field(() => [Int], { nullable: true })
  // additional_food_ids: number[] | null;

  constructor(torisan: {
    id: number;
    nickname: string;
    stage_type: number;
    specie_type: number;
    gender_type: number;
    name: string;
    birth_date: Date;
  }) {
    this.id = torisan.id;
    this.nickname = torisan.nickname;
    this.stage_type = torisan.stage_type as StageType;
    this.specie_type = torisan.specie_type as SpecieType;
    this.gender_type = torisan.gender_type as GenderType;
    this.name = torisan.name;
    this.birth_date = torisan.birth_date;
  }
}

@InputType()
export class CreateTorisan {
  @Field(() => String)
  nickname: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  stage_type: StageType;

  @Field(() => Int)
  specie_type: SpecieType;

  @Field(() => Date)
  birth_date: Date;

  @Field(() => Int)
  gender_type: GenderType;
}
