import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { GenderType, SpecieType, StageType } from '../../../common';

@ObjectType({ description: '鳥さんの目標' })
export class TorisanObjectiveObject {
  @Field(() => Float, { nullable: true })
  body_weight: number | null;

  @Field(() => Float, { nullable: true })
  amount_of_water: number | null;

  @Field(() => Float, { nullable: true })
  amount_of_staple_food: number | null;
}

@ObjectType({ description: '鳥さんのごはん' })
export class TorisanFoodObject {
  @Field(() => Int, { nullable: true })
  staple_food_type: number;

  @Field(() => String, { nullable: true })
  any_staple_food: string | null;

  @Field(() => [Int])
  other_food_types: number[];

  @Field(() => String, { nullable: true })
  any_other_foods: string | null;
}

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

  @Field(() => TorisanObjectiveObject)
  objective: TorisanObjectiveObject;

  @Field(() => TorisanFoodObject)
  food: TorisanFoodObject;

  constructor(torisan: {
    id: number;
    nickname: string;
    stage_type: number;
    specie_type: number;
    gender_type: number;
    name: string;
    birth_date: Date;
    objective: TorisanObjectiveObject;
    food: TorisanFoodObject;
  }) {
    this.id = torisan.id;
    this.nickname = torisan.nickname;
    this.stage_type = torisan.stage_type as StageType;
    this.specie_type = torisan.specie_type as SpecieType;
    this.gender_type = torisan.gender_type as GenderType;
    this.name = torisan.name;
    this.birth_date = torisan.birth_date;
    this.objective = torisan.objective;
    this.food = torisan.food;
  }
}
