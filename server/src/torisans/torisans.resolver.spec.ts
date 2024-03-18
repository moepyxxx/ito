import { ZodValidationPipe } from 'src/pipe/ZodValidationPipe';
import { CreateTorisanZodInput } from './models/torisan.schema';
import { CreateTorisan } from './models/createTorisan.model';
import { Gender, Specie, Stage } from 'common';
import { BadRequestException } from '@nestjs/common';

describe('CreateTorisanValidationPipe', () => {
  let target: ZodValidationPipe<CreateTorisanZodInput, CreateTorisan>;
  const baseInput: CreateTorisanZodInput = {
    nickname: 'うにちゃん',
    name: 'うに',
    specie_type: Specie.SekiseiInko,
    birth_date: new Date('2020-01-02 00:00:00'),
    stage_type: Stage.Observation,
    gender_type: Gender.Woman,
    objective: {
      amount_of_water: 15,
      amount_of_staple_food: 15,
      body_weight: null,
    },
    food: {
      staple_food_type: 1,
      any_staple_food: null,
      other_food_types: [],
      any_other_foods: null,
    },
  };

  beforeEach(() => {
    target = new ZodValidationPipe<CreateTorisanZodInput, CreateTorisan>();
  });

  const tables: [Partial<CreateTorisanZodInput>, string][] = [
    [{ name: 'あ'.repeat(21) }, '名前は最大20文字です'],
    [{ name: '' }, '名前は必須です'],
    [{ nickname: 'あ'.repeat(26) }, 'ニックネームは最大25文字です'],
    [{ nickname: '' }, 'ニックネームは必須です'],
    [{ stage_type: 5 }, 'ステージには適切な値が入力してください'],
    [{ specie_type: 5 }, '鳥さんの種類には適切な値が入力してください'],
    [{ gender_type: 4 }, '性別には適切な値が入力してください'],
    [
      {
        objective: {
          ...baseInput.objective,
          body_weight: 51,
        },
      },
      '目標体重は50以下にしてください',
    ],
    [
      {
        objective: {
          ...baseInput.objective,
          amount_of_water: 51,
        },
      },
      '目標の水の量は50以下にしてください',
    ],
    [
      {
        objective: {
          ...baseInput.objective,
          amount_of_staple_food: 51,
        },
      },
      '目標のごはんの量は50以下にしてください',
    ],
    [
      {
        food: {
          ...baseInput.food,
          staple_food_type: 3,
        },
      },
      '主食には適切な値が入力してください',
    ],
    [
      {
        food: {
          ...baseInput.food,
          staple_food_type: 0,
          any_staple_food: 'あ'.repeat(51),
        },
      },
      '主食（その他）は最大50文字です',
    ],
    [
      {
        food: {
          ...baseInput.food,
          staple_food_type: 0,
          any_staple_food: '',
        },
      },
      'その他を選択している場合はその他（主食）に記入してください',
    ],
    [
      {
        food: {
          ...baseInput.food,
          other_food_types: [10],
        },
      },
      '副食には適切な値が入力してください',
    ],
    [
      {
        food: {
          ...baseInput.food,
          other_food_types: [2, 0],
          any_other_foods: 'あ'.repeat(51),
        },
      },
      '副食（その他）は最大50文字です',
    ],
    [
      {
        food: {
          ...baseInput.food,
          other_food_types: [2, 0],
          any_other_foods: null,
        },
      },
      'その他を選択している場合はその他（副食）に記入してください',
    ],
  ];

  it.each(tables)(
    'zod validation additional (%s) is %s',
    (additionalInput, expected) => {
      expect(() =>
        target.transform(
          {
            ...baseInput,
            ...additionalInput,
          },
          {} as any,
        ),
      ).toThrow(new BadRequestException(expected));
    },
  );
});
