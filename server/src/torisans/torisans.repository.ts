import { Injectable } from '@nestjs/common';
import type {
  torisan as TorisanType,
  torisan_objective as TorisanObjectiveType,
  torisan_staple_food as TorisanStapleFoodType,
  Prisma,
} from '../../prisma/generated';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TorisansRepository {
  constructor(private prisma: PrismaService) {}

  async createTorisan(
    tx: Prisma.TransactionClient,
    userId: string,
    torisan: Omit<TorisanType, 'id' | 'created_at' | 'updated_at' | 'user_id'>,
  ): Promise<TorisanType> {
    return await tx.torisan.create({
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
    tx: Prisma.TransactionClient,
    userId: string,
    torisanId: number,
    torisan: Omit<
      TorisanObjectiveType,
      'id' | 'created_at' | 'updated_at' | 'user_id' | 'torisan_id'
    >,
  ): Promise<TorisanObjectiveType> {
    return await tx.torisan_objective.create({
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
    tx: Prisma.TransactionClient,
    userId: string,
    torisanId: number,
    torisan: Omit<
      TorisanStapleFoodType,
      'id' | 'created_at' | 'updated_at' | 'user_id' | 'torisan_id'
    >,
  ): Promise<TorisanStapleFoodType> {
    return await tx.torisan_staple_food.create({
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
    tx: Prisma.TransactionClient,
    userId: string,
    torisanId: number,
    torisanStapleFoodId: number,
    otherFoodTypes: number[],
  ): Promise<number> {
    const result = await tx.torisan_staple_food_other_food_type.createMany({
      data: otherFoodTypes.map((otherFoodType) => {
        return {
          torisan_id: torisanId,
          torisan_staple_food_id: torisanStapleFoodId,
          other_food_type: otherFoodType,
          user_id: userId,
        };
      }),
    });
    return result.count;
  }
}
