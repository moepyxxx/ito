import { Module } from '@nestjs/common';
import { TorisansResolver } from './torisans.resolver';
import { TorisansService } from './torisans.service';
import { PrismaService } from 'src/prisma.service';
import { SupabaseService } from 'src/supabase.service';
import { TorisansRepository } from './torisans.repository';

@Module({
  providers: [
    PrismaService,
    TorisansResolver,
    TorisansService,
    TorisansRepository,
    SupabaseService,
  ],
})
export class TorisanModule {}
