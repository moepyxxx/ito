import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';
import { AuthUser } from './models/AuthUser.model';
import { InputAuthUser } from './models/InputAuthUser.model';

@Controller('api/auth')
export class AuthController {
  constructor(private supabaseService: SupabaseService) {}

  @Post('signup')
  @HttpCode(204)
  async signup(@Body('user') user: InputAuthUser): Promise<AuthUser> {
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

  @Post('signin')
  async signin(@Body('user') user: InputAuthUser): Promise<AuthUser> {
    console.log(user, 'user!');
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
