import { Injectable } from '@nestjs/common';
import { CreateTorisan, Torisan } from './models/torisan.model';
import { Gender, Specie, Stage } from '../../common';
import { SummaryTorisan } from './models/summaryTorisan.model';

@Injectable()
export class TorisansService {
  async findSummaryAll(): Promise<SummaryTorisan[]> {
    return [
      {
        id: 1,
        nickname: 'unichan',
        specie_id: Specie.SekiseiInko,
        stage_type: Stage.Observation,
      },
    ];
  }
  async findDetailById(id: number): Promise<Torisan> {
    return {
      id,
      nickname: 'unichan',
      name: 'uni',
      birth_date: new Date('2020-04-22'),
      specie_id: Specie.SekiseiInko,
      stage_type: Stage.Observation,
      gender_type: Gender.Woman,
      objective_body_weight: 35.5,
      objective_amount_of_water: 5.4,
      staple_food_id: 1,
      additional_food_ids: [1, 2],
    };
  }

  async create(torisan: CreateTorisan): Promise<Torisan> {
    return torisan as Torisan;
  }
}
