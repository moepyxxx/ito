import { Resolver, Mutation, Args, Context, Query, Int } from '@nestjs/graphql';
import { CreateTorisan } from './models/createTorisan.model';
import { TorisansService } from './torisans.service';
import { Torisan } from './models/torisan.model';
import { ZodValidationPipe } from 'src/pipe/ZodValidationPipe';
import { CreateTorisanZodInput } from './models/torisan.schema';
import { Request } from 'express';

// NOTE: resolverは基本的にserviceを呼び出すだけなのでservice以下をmockするテスト手法は意味がなさそう。今後はかかない
@Resolver(() => Torisan)
export class TorisansResolver {
  constructor(private readonly torisansService: TorisansService) {}

  // Query root type must be provided.のエラーが出るためダミーで表示
  @Query(() => [Int])
  torisans(): number[] {
    return [1, 2, 3];
    // const userId = context.req.app['user_id'];
    // return this.torisansService.findAll(userId);
  }

  // @Query(() => Torisan)
  // torisan(
  //   @Args('id') id: number,
  //   @Context() context: { req: Request },
  // ): Promise<Torisan> {
  //   const userId = context.req.app['user_id'];
  //   return this.torisansService.findDetailById(userId, id);
  // }

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
