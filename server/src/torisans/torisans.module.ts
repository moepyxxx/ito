import { Module } from '@nestjs/common';
import { TorisansResolver } from './torisans.resolver';
import { TorisansService } from './torisans.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, TorisansResolver, TorisansService],
})
export class TorisanModule {}
