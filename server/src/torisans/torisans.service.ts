import { Injectable } from '@nestjs/common';
import { CreateTorisan } from './models/createTorisan.model';
import { PrismaService } from 'src/prisma.service';
import { Torisan } from './models/torisan.model';

@Injectable()
export class TorisansService {
  constructor(private prisma: PrismaService) {}

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

    const createdBase = await this.prisma.getRlsClient(userId).torisan.create({
      data: {
        name: torisan.name,
        nickname: torisan.nickname,
        specie_type: torisan.specie_type,
        birth_date: torisan.birth_date,
        gender_type: torisan.gender_type,
        stage_type: torisan.stage_type,
        user_id: userId,
      },
    });

    const createdObjective = await this.prisma
      .getRlsClient(userId)
      .torisan_objective.create({
        data: {
          torisan_id: createdBase.id,
          body_weight: objective.body_weight,
          amount_of_water: objective.amount_of_water,
          amount_of_staple_food: objective.amount_of_staple_food,
          user_id: userId,
        },
      });

    const createdFood = await this.prisma
      .getRlsClient(userId)
      .torisan_staple_food.create({
        data: {
          torisan_id: createdBase.id,
          staple_food_type: food.staple_food_type,
          any_staple_food: food.any_staple_food,
          any_other_foods: food.any_other_foods,
          user_id: userId,
        },
      });

    if (food.other_food_types.length > 0) {
      await this.prisma
        .getRlsClient(userId)
        .torisan_staple_food_other_food_type.createMany({
          data: food.other_food_types.map((otherFoodType) => {
            return {
              torisan_id: createdBase.id,
              torisan_staple_food_id: createdFood.id,
              other_food_type: otherFoodType,
              user_id: userId,
            };
          }),
        });
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
  }
}
