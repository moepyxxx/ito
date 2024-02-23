import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';
import { InputAuthUser } from './models/InputAuthUser.model';
import { AuthUser } from './models/AuthUser.model';

@Injectable()
export class UserService {
  constructor(private supabaseService: SupabaseService) {}

  async signup(user: InputAuthUser): Promise<AuthUser> {
    const { email, password } = user;
    const { data } = await this.supabaseService.supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:3000/p',
      },
    });
    return new AuthUser({
      email: data?.user?.email,
      id: data?.user?.id,
      refresh_token: data?.session?.refresh_token,
      access_token: data?.session?.access_token,
    });
  }

  async signin(user: InputAuthUser): Promise<AuthUser> {
    const { email, password } = user;
    const { data } =
      await this.supabaseService.supabase.auth.signInWithPassword({
        email,
        password,
      });
    return new AuthUser({
      email: data?.user?.email,
      id: data?.user?.id,
      refresh_token: data?.session?.refresh_token,
      access_token: data?.session?.access_token,
    });
  }
}
