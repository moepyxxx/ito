import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';
import { AuthUser } from './models/AuthUser.model';
import { InputAuthUser } from './models/InputAuthUser.model';
import { AuthApiError } from '@supabase/supabase-js';
import {
  CAN_NOT_AUTHORIZE_MESSAGE,
  INTERNAL_SERVER_ERROR_MESSAGE,
  USER_DUPLICATED_MESSAGE,
} from 'constants/errorMessage';

@Controller('api/auth')
export class AuthController {
  constructor(private supabaseService: SupabaseService) {}

  @Post('signup')
  @HttpCode(204)
  async signup(@Body('user') user: InputAuthUser): Promise<AuthUser> {
    const { email, password } = user;
    const { data, error } = await this.supabaseService.supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'http://localhost:3000/p',
      },
    });

    if (error && data.user == null) {
      if (error.message === 'User already registered') {
        throw new HttpException(
          USER_DUPLICATED_MESSAGE,
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        INTERNAL_SERVER_ERROR_MESSAGE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return new AuthUser({
      email: data?.user?.email,
      id: data?.user?.id,
      refresh_token: data?.session?.refresh_token,
      access_token: data?.session?.access_token,
    });
  }

  @Post('signin')
  async signin(@Body('user') user: InputAuthUser): Promise<AuthUser> {
    const { email, password } = user;
    const { data, error } =
      await this.supabaseService.supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error && data.user == null) {
      if (error instanceof AuthApiError) {
        console.log('api error dayo');
        throw new HttpException(
          CAN_NOT_AUTHORIZE_MESSAGE,
          HttpStatus.UNAUTHORIZED,
        );
      } else {
        throw new HttpException(
          INTERNAL_SERVER_ERROR_MESSAGE,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return new AuthUser({
      email: data.user.email,
      id: data.user.id,
      refresh_token: data.session.refresh_token,
      access_token: data.session.access_token,
    });
  }
}
