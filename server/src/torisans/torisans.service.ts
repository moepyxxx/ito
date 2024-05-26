import { Injectable } from '@nestjs/common';
import { CreateTorisan } from './models/createTorisan.model';
import { Torisan, TorisanBase } from './models/torisan.model';
import { TorisansRepository } from './torisans.repository';
import { EditTorisan } from './models/editTorisan.model';

@Injectable()
export class TorisansService {
  constructor(private repository: TorisansRepository) {}

  async findAll(userId: string): Promise<TorisanBase[]> {
    const summaries = await this.repository.findTorisanBases(userId);
    return summaries.map((summary) => {
      return new TorisanBase(summary);
    });
  }

  async findDetailById(userId: string, id: number): Promise<Torisan> {
    return await this.repository.findTorisanById(userId, id);
  }

  async create(torisan: CreateTorisan, userId: string): Promise<Torisan> {
    const { objective, food } = torisan;

    const createdBase = await this.repository.createTorisan(userId, {
      name: torisan.name,
      nickname: torisan.nickname,
      specie_type: torisan.specie_type,
      birth_date: torisan.birth_date,
      gender_type: torisan.gender_type,
      stage_type: torisan.stage_type,
    });

    const createdObjective = await this.repository.createTorisanObjective(
      userId,
      createdBase.id,
      {
        body_weight: objective.body_weight,
        amount_of_water: objective.amount_of_water,
        amount_of_staple_food: objective.amount_of_staple_food,
      },
    );

    const createdFood = await this.repository.createTorisanFood(
      userId,
      createdBase.id,
      {
        staple_food_type: food.staple_food_type,
        any_staple_food: food.any_staple_food,
        any_other_foods: food.any_other_foods,
      },
    );

    if (food.other_food_types.length > 0) {
      await this.repository.batchCreateTorisanFoodOtherFoodType(
        userId,
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
  }

  async edit(
    torisanId: number,
    torisan: EditTorisan,
    userId: string,
  ): Promise<Pick<Torisan, 'objective' | 'food' | 'id'>> {
    const { objective, food } = torisan;

    const updatedObjective = await this.repository.updateTorisanObjective(
      userId,
      torisanId,
      {
        body_weight: objective.body_weight,
        amount_of_water: objective.amount_of_water,
        amount_of_staple_food: objective.amount_of_staple_food,
      },
    );

    const updatedFood = await this.repository.updateTorisanFood(
      userId,
      torisanId,
      {
        staple_food_type: food.staple_food_type,
        any_staple_food: food.any_staple_food,
        any_other_foods: food.any_other_foods,
      },
    );

    await this.repository.batchDeleteTorisanFoodOtherFoodType(
      userId,
      torisanId,
    );

    if (food.other_food_types.length > 0) {
      await this.repository.batchCreateTorisanFoodOtherFoodType(
        userId,
        updatedFood.id,
        food.other_food_types,
      );
    }

    return {
      objective: updatedObjective,
      food: {
        ...updatedFood,
        other_food_types: food.other_food_types,
      },
      id: torisanId,
    };
  }
}
