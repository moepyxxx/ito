import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class UserService {
  constructor(private supabaseService: SupabaseService) {}

  // NOTE: 要確認。signoutしてもjwtトークンが残ってる限りリクエストは送れてそう
  async signout(): Promise<boolean> {
    const { error } = await this.supabaseService.supabase.auth.signOut();
    if (error) {
      throw new Error('Failed to sign out');
    }
    return true;
  }
}
