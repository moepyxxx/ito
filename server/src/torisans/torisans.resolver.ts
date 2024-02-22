import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTorisan, Torisan } from './models/torisan.model';
import { TorisansService } from './torisans.service';

@Resolver(() => Torisan)
export class TorisansResolver {
  constructor(private readonly torisansService: TorisansService) {}

  @Query(() => [Torisan])
  torisans(): Promise<Torisan[]> {
    return this.torisansService.findAll();
  }

  @Query(() => Torisan)
  torisan(@Args('id') id: number): Promise<Torisan> {
    return this.torisansService.findDetailById(id);
  }

  @Mutation(() => Torisan)
  createTorisan(
    @Args('torisan') torisan: CreateTorisan,
  ): Promise<Pick<Torisan, 'nickname' | 'id'>> {
    return this.torisansService.create(torisan);
  }
}
