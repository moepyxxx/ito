import { Field, InputType } from '@nestjs/graphql';
import { TorisanFood, TorisanObjective } from './createTorisan.model';

@InputType()
export class EditTorisan {
  @Field(() => TorisanObjective)
  objective: TorisanObjective;

  @Field(() => TorisanFood)
  food: TorisanFood;
}
