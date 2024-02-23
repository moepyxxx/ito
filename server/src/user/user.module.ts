import { Module } from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [SupabaseService, UserResolver, UserService],
})
export class UserModule {}
