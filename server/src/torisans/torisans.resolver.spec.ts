import { Test, TestingModule } from '@nestjs/testing';
import { TorisansResolver } from './torisans.resolver';
import { TorisansService } from './torisans.service';
import { Torisan } from './models/torisan.model';
import { Gender, Specie, Stage } from 'common';
import { mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

describe('TorisansResolver', () => {
  let torisansResolver: TorisansResolver;
  let torisansService: TorisansService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [TorisansService, TorisansResolver, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    torisansResolver = app.get<TorisansResolver>(TorisansResolver);
    torisansService = app.get<TorisansService>(TorisansService);
  });

  describe('torisans', () => {
    it('登録している鳥さん情報一覧を取得することができる"', async () => {
      const want: Torisan[] = [
        {
          id: 1,
          nickname: 'うにちゃん',
          stage_type: Stage.Observation,
          specie_type: Specie.SekiseiInko,
          gender_type: Gender.Woman,
          name: 'うに',
          birth_date: new Date('2020-04-22'),
        },
      ];

      jest
        .spyOn(torisansService, 'findAll')
        .mockImplementation(() => Promise.resolve(want));

      const result = await torisansResolver.torisans();
      expect(result).toBe(want);
    });
  });
});
