import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { GenderType, SpecieType, StageType } from '../../../common';

@ObjectType({ description: '鳥さん詳細' })
export class Torisan {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nickname: string;

  @Field(() => Int)
  stage_type: StageType;

  @Field(() => Int)
  specie_id: SpecieType;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  birth_date: Date;

  @Field(() => Int)
  gender_type: GenderType;

  @Field(() => Int, { nullable: true })
  objective_body_weight: number | null;

  @Field(() => Int, { nullable: true })
  objective_amount_of_water: number | null;

  @Field(() => Int, { nullable: true })
  staple_food_id: number | null;

  @Field(() => [Int], { nullable: true })
  additional_food_ids: number[] | null;
}

@InputType()
export class CreateTorisan {
  @Field(() => String)
  nickname: string;

  @Field(() => Int)
  stage_type: StageType;

  @Field(() => Int)
  specie_id: SpecieType;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  birth_date: Date;

  @Field(() => Int)
  gender_type: GenderType;
}
