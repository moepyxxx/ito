import { Injectable } from '@nestjs/common';
import type {
  torisan as TorisanType,
  torisan_objective as TorisanObjectiveType,
  torisan_staple_food as TorisanStapleFoodType,
  torisan_staple_food_other_food_type as TorisanStapleFoodOtherFoodType,
} from '../../prisma/generated';
import { PrismaService } from 'src/prisma.service';
import { Torisan } from './models/torisan.model';

@Injectable()
export class TorisansRepository {
  constructor(private prisma: PrismaService) {}

  async findTorisanBases(userId: string): Promise<TorisanType[]> {
    return await this.prisma.getRlsClient(userId).torisan.findMany({});
  }

  async findTorisanById(userId: string, id: number): Promise<Torisan> {
    const torisan = await this.prisma.getRlsClient(userId).torisan.findUnique({
      where: {
        id,
      },
    });
    const torisanObjective = await this.prisma
      .getRlsClient(userId)
      .torisan_objective.findFirst({
        where: {
          torisan_id: id,
        },
      });

    const torisanStapleFood = await this.prisma
      .getRlsClient(userId)
      .torisan_staple_food.findFirst({
        where: {
          torisan_id: id,
        },
      });

    if (
      torisan == null ||
      torisanObjective == null ||
      torisanStapleFood == null
    ) {
      throw new Error('Torisan not found');
    }

    let torisanStapleFoodOtherFoodTypes: TorisanStapleFoodOtherFoodType[] = [];
    if (torisanStapleFood !== null) {
      torisanStapleFoodOtherFoodTypes = await this.prisma
        .getRlsClient(userId)
        .torisan_staple_food_other_food_type.findMany({
          where: {
            torisan_staple_food_id: torisanStapleFood.id,
          },
        });
    }

    return new Torisan({
      ...torisan,
      objective: torisanObjective,
      food: {
        ...torisanStapleFood,
        other_food_types: torisanStapleFoodOtherFoodTypes.map(
          (torisanStapleFoodOtherFoodType) =>
            torisanStapleFoodOtherFoodType.other_food_type,
        ),
      },
    });
  }

  async createTorisan(
    userId: string,
    torisan: Omit<TorisanType, 'id' | 'created_at' | 'updated_at' | 'user_id'>,
  ): Promise<TorisanType> {
    return await this.prisma.getRlsClient(userId).torisan.create({
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
  }

  async createTorisanObjective(
    userId: string,
    torisanId: number,
    torisan: Omit<
      TorisanObjectiveType,
      'id' | 'created_at' | 'updated_at' | 'user_id' | 'torisan_id'
    >,
  ): Promise<TorisanObjectiveType> {
    return await this.prisma.getRlsClient(userId).torisan_objective.create({
      data: {
        torisan_id: torisanId,
        body_weight: torisan.body_weight,
        amount_of_water: torisan.amount_of_water,
        amount_of_staple_food: torisan.amount_of_staple_food,
        user_id: userId,
      },
    });
  }

  async createTorisanFood(
    userId: string,
    torisanId: number,
    torisan: Omit<
      TorisanStapleFoodType,
      'id' | 'created_at' | 'updated_at' | 'user_id' | 'torisan_id'
    >,
  ): Promise<TorisanStapleFoodType> {
    return await this.prisma.getRlsClient(userId).torisan_staple_food.create({
      data: {
        torisan_id: torisanId,
        staple_food_type: torisan.staple_food_type,
        any_staple_food: torisan.any_staple_food,
        any_other_foods: torisan.any_other_foods,
        user_id: userId,
      },
    });
  }

  async batchCreateTorisanFoodOtherFoodType(
    userId: string,
    torisanStapleFoodId: number,
    otherFoodTypes: number[],
  ): Promise<number> {
    const result = await this.prisma
      .getRlsClient(userId)
      .torisan_staple_food_other_food_type.createMany({
        data: otherFoodTypes.map((otherFoodType) => {
          return {
            torisan_staple_food_id: torisanStapleFoodId,
            other_food_type: otherFoodType,
            user_id: userId,
          };
        }),
      });
    return result.count;
  }
}
