import { Resolver, Mutation, Args, Context, Query, Int } from '@nestjs/graphql';
import { CreateTorisan } from './models/createTorisan.model';
import { TorisansService } from './torisans.service';
import { Torisan, TorisanBase } from './models/torisan.model';
import { ZodValidationPipe } from 'src/pipe/ZodValidationPipe';
import { CreateTorisanZodInput } from './models/torisan.schema';
import { Request } from 'express';

// NOTE: resolverは基本的にserviceを呼び出すだけなのでservice以下をmockするテスト手法は意味がなさそう。今後はかかない
@Resolver(() => Torisan)
export class TorisansResolver {
  constructor(private readonly torisansService: TorisansService) {}

  @Query(() => [TorisanBase])
  torisans(): TorisanBase[] {
    return [
      new TorisanBase({
        id: 1,
        name: 'うに',
        nickname: 'うにちゃん',
        specie_type: 1,
        birth_date: new Date('2020-01-02 00:00:00'),
        stage_type: 1,
        gender_type: 1,
      }),
      new TorisanBase({
        id: 1,
        name: 'いと',
        nickname: 'いとちゃん',
        specie_type: 1,
        birth_date: new Date('2020-01-02 00:00:00'),
        stage_type: 1,
        gender_type: 1,
      }),
      new TorisanBase({
        id: 1,
        name: 'たま',
        nickname: 'たまちゃん',
        specie_type: 1,
        birth_date: new Date('2020-01-02 00:00:00'),
        stage_type: 1,
        gender_type: 1,
      }),
    ];
    // const userId = context.req.app['user_id'];
    // return this.torisansService.findAll(userId);
  }

  @Query(() => Torisan)
  torisan(@Args('id') id: number): Torisan {
    return new Torisan({
      id,
      name: 'うに',
      nickname: 'うにちゃん',
      specie_type: 1,
      birth_date: new Date('2020-01-02 00:00:00'),
      stage_type: 1,
      gender_type: 1,
      objective: {
        amount_of_water: 15,
        amount_of_staple_food: 15,
        body_weight: null,
      },
      food: {
        staple_food_type: 1,
        any_staple_food: null,
        other_food_types: [1, 2, 3],
        any_other_foods: null,
      },
    });
    // const userId = context.req.app['user_id'];
    // return this.torisansService.findDetailById(userId, id);
  }

  @Mutation(() => Torisan)
  createTorisan(
    @Args(
      'torisan',
      new ZodValidationPipe<CreateTorisanZodInput, CreateTorisan>(),
    )
    torisan: CreateTorisan,
    @Context() context: { req: Request },
  ): Promise<Torisan> {
    const userId = context.req.app['user_id'];
    return this.torisansService.create(torisan, userId);
  }
}
