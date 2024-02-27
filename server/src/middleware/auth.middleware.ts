import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { UNAUTHORIZED_MESSAGE } from 'constants/errorMessage';
import { UNAUTHORIZED_ERROR_TYPE } from 'constants/errorType';
import { Request, Response, NextFunction } from 'express';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private supabaseService: SupabaseService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(HttpStatus.UNAUTHORIZED).send({
        message: UNAUTHORIZED_MESSAGE,
        error: UNAUTHORIZED_ERROR_TYPE,
      });
    }
    if (!authHeader.startsWith('Bearer ')) {
      return res.status(HttpStatus.UNAUTHORIZED).send({
        message: UNAUTHORIZED_MESSAGE,
        error: UNAUTHORIZED_ERROR_TYPE,
      });
    }

    // Bearer分を引いた文字列を取得
    const auth = authHeader.substring(7, authHeader.length);

    this.supabaseService.supabase.auth.getUser(auth).then(({ error, data }) => {
      if (error) {
        res.status(401).send({
          message: UNAUTHORIZED_MESSAGE,
          error: UNAUTHORIZED_ERROR_TYPE,
        });
      } else {
        req.app['user_id'] = data.user.id;
        next();
      }
    });
  }
}
