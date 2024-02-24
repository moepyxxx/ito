import { Test, TestingModule } from '@nestjs/testing';
import { TorisansService } from './torisans.service';
import { Torisan } from './models/torisan.model';
import { Gender, Specie, Stage } from 'common';
import { mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

describe('TorisansService', () => {
  let torisansService: TorisansService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [TorisansService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    torisansService = app.get<TorisansService>(TorisansService);
    prisma = app.get<PrismaService>(PrismaService);
  });

  describe('torisans', () => {
    it('登録している鳥さん情報一覧を取得することができる"', async () => {
      const want = [
        new Torisan({
          id: 1,
          nickname: 'うにちゃん',
          stage_type: Stage.Observation,
          specie_type: Specie.SekiseiInko,
          gender_type: Gender.Woman,
          name: 'うに',
          birth_date: new Date('2020-04-22'),
        }),
      ];

      prisma.torisan.findMany = jest.fn().mockResolvedValue([
        {
          id: 1,
          nickname: 'うにちゃん',
          user_id: '1',
          stage_type: Stage.Observation,
          specie_type: Specie.SekiseiInko,
          gender_type: Gender.Woman,
          name: 'うに',
          birth_date: new Date('2020-04-22'),
        },
      ]);

      const result = await torisansService.findAll('1');
      expect(result).toMatchObject(want);
    });
  });
});
