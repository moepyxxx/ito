import { Injectable } from '@nestjs/common';
import { Torisan } from './models/torisan.model';

@Injectable()
export class TorisansService {
  async findAll(): Promise<Torisan[]> {
    return [{ id: 1, nickname: 'unichan' }];
  }
}
