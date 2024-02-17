import { Resolver, Query } from '@nestjs/graphql';
import { Torisan } from './models/torisan.model';
import { TorisansService } from './torisans.service';

@Resolver(() => Torisan)
export class TorisansResolver {
  constructor(private readonly torisansService: TorisansService) {}

  @Query(() => [Torisan])
  torisans(): Promise<Torisan[]> {
    return this.torisansService.findAll();
  }
}
