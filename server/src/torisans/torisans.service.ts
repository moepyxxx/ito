import { Injectable } from '@nestjs/common';
import { CreateTorisan } from './models/createTorisan.model';
import { Torisan } from './models/torisan.model';
import { TorisansRepository } from './torisans.repository';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TorisansService {
  constructor(
    private repository: TorisansRepository,
    private prisma: PrismaService,
  ) {}

  // async findAll(userId: string): Promise<Torisan[]> {
  //   const summaries = await this.prisma
  //     .getRlsClient(userId)
  //     .torisan.findMany({});
  //   return summaries.map((summary) => {
  //     return new Torisan(summary);
  //   });
  // }

  // async findDetailById(userId: string, id: number): Promise<Torisan> {
  //   const torisan = await this.prisma.getRlsClient(userId).torisan.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  //   return new Torisan(torisan);
  // }

  async create(torisan: CreateTorisan, userId: string): Promise<Torisan> {
    const { objective, food } = torisan;

    return await this.prisma.getRlsClient(userId).$transaction(async (tx) => {
      const createdBase = await this.repository.createTorisanWithTx(
        tx,
        userId,
        {
          name: torisan.name,
          nickname: torisan.nickname,
          specie_type: torisan.specie_type,
          birth_date: torisan.birth_date,
          gender_type: torisan.gender_type,
          stage_type: torisan.stage_type,
        },
      );

      const createdObjective =
        await this.repository.createTorisanObjectiveWithTx(
          tx,
          userId,
          createdBase.id,
          {
            body_weight: objective.body_weight,
            amount_of_water: objective.amount_of_water,
            amount_of_staple_food: objective.amount_of_staple_food,
          },
        );

      const createdFood = await this.repository.createTorisanFoodWithTx(
        tx,
        userId,
        createdBase.id,
        {
          staple_food_type: food.staple_food_type,
          any_staple_food: food.any_staple_food,
          any_other_foods: food.any_other_foods,
        },
      );

      if (food.other_food_types.length > 0) {
        await this.repository.batchCreateTorisanFoodOtherFoodTypeWithTx(
          tx,
          userId,
          createdBase.id,
          createdFood.id,
          food.other_food_types,
        );
      }

      const {
        id: _,
        created_at: __,
        updated_at: ___,
        ...restObjective
      } = createdObjective;
      const { id: ____, created_at: _____, ...restFood } = createdFood;

      return new Torisan({
        id: createdBase.id,
        nickname: createdBase.nickname,
        stage_type: createdBase.stage_type,
        specie_type: createdBase.specie_type,
        name: createdBase.name,
        birth_date: createdBase.birth_date,
        gender_type: createdBase.gender_type,
        objective: restObjective,
        food: {
          ...restFood,
          other_food_types: food.other_food_types,
        },
      });
    });
  }
}
