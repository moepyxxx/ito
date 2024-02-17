import { Module } from '@nestjs/common';
import { TorisansResolver } from './torisans.resolver';
import { TorisansService } from './torisans.service';

@Module({
  providers: [TorisansResolver, TorisansService],
})
export class TorisanModule {}
