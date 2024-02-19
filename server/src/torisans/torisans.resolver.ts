import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTorisan, Torisan } from './models/torisan.model';
import { TorisansService } from './torisans.service';
import { SummaryTorisan } from './models/summaryTorisan.model';

@Resolver(() => Torisan)
export class TorisansResolver {
  constructor(private readonly torisansService: TorisansService) {}

  @Query(() => [SummaryTorisan])
  summaryTorisans(): Promise<SummaryTorisan[]> {
    return this.torisansService.findSummaryAll();
  }

  @Query(() => Torisan)
  torisan(@Args('id') id: number): Promise<Torisan> {
    return this.torisansService.findDetailById(id);
  }

  @Mutation(() => Torisan)
  createTorisan(@Args('torisan') torisan: CreateTorisan): Promise<Torisan> {
    return this.torisansService.create(torisan);
  }
}
