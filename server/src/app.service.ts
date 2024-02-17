import { Injectable } from '@nestjs/common';

// TODO: sampleわかってきたら消す
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
