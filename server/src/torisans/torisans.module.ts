import { Module } from '@nestjs/common';
import { TorisansResolver } from './torisans.resolver';
import { TorisansService } from './torisans.service';
import { PrismaService } from 'src/prisma.service';
import { SupabaseService } from 'src/supabase.service';

@Module({
  providers: [
    PrismaService,
    TorisansResolver,
    TorisansService,
    SupabaseService,
  ],
})
export class TorisanModule {}
