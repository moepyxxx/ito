import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private supabaseService: SupabaseService) {}

  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers['authorization'].startsWith('Bearer ')) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    // Bearer分を引いた文字列を取得
    const auth = req.headers['authorization'].substring(
      7,
      req.headers['authorization'].length,
    );

    this.supabaseService.supabase.auth.getUser(auth).then(({ error, data }) => {
      if (error) {
        res.status(401).send({ message: 'Unauthorized' });
      } else {
        req.app['user_id'] = data.user.id;
        next();
      }
    });
  }
}
