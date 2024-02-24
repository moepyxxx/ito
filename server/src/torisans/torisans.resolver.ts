import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { CreateTorisan, Torisan } from './models/torisan.model';
import { TorisansService } from './torisans.service';
import { Request } from 'express';

// NOTE: resolverは基本的にserviceを呼び出すだけなのでservice以下をmockするテスト手法は意味がなさそう。今後はかかない
@Resolver(() => Torisan)
export class TorisansResolver {
  constructor(private readonly torisansService: TorisansService) {}

  @Query(() => [Torisan])
  torisans(@Context() context: { req: Request }): Promise<Torisan[]> {
    const userId = context.req.app['user_id'];
    return this.torisansService.findAll(userId);
  }

  @Query(() => Torisan)
  torisan(
    @Args('id') id: number,
    @Context() context: { req: Request },
  ): Promise<Torisan> {
    const userId = context.req.app['user_id'];
    return this.torisansService.findDetailById(userId, id);
  }

  @Mutation(() => Torisan)
  createTorisan(
    @Args('torisan') torisan: CreateTorisan,
    @Context() context: { req: Request },
  ): Promise<Pick<Torisan, 'nickname' | 'id'>> {
    const userId = context.req.app['user_id'];
    return this.torisansService.create(torisan, userId);
  }
}
