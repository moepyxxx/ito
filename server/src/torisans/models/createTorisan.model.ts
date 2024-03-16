import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { GenderType, SpecieType, StageType } from '../../../common';

@InputType({ description: '鳥さんの目標' })
export class TorisanObjective {
  @Field(() => Float, { nullable: true })
  body_weight: number | null;

  @Field(() => Float, { nullable: true })
  amount_of_water: number | null;

  @Field(() => Float, { nullable: true })
  amount_of_staple_food: number | null;
}

@InputType({ description: '鳥さんのごはん' })
export class TorisanFood {
  @Field(() => Int, { nullable: true })
  staple_food_type: number;

  @Field(() => String, { nullable: true })
  any_staple_food: string | null;

  @Field(() => [Int])
  other_food_types: number[];

  @Field(() => String, { nullable: true })
  any_other_foods: string | null;
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

  @Field(() => TorisanObjective)
  objective: TorisanObjective;

  @Field(() => TorisanFood)
  food: TorisanFood;
}
