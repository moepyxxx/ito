import { Injectable } from '@nestjs/common';
import { CreateTorisan, Torisan } from './models/torisan.model';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TorisansService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string): Promise<Torisan[]> {
    const summaries = await this.prisma.torisan.findMany({
      where: { user_id: userId },
    });
    return summaries.map((summary) => {
      return new Torisan(summary);
    });
  }

  async findDetailById(userId: string, id: number): Promise<Torisan> {
    const torisan = await this.prisma.torisan.findUnique({
      where: {
        id,
        user_id: userId,
      },
    });
    return new Torisan(torisan);
  }

  async create(
    torisan: CreateTorisan,
    userId: string,
  ): Promise<Pick<Torisan, 'nickname' | 'id'>> {
    const { id, nickname } = await this.prisma.torisan.create({
      data: {
        nickname: torisan.nickname,
        name: torisan.name,
        birth_date: torisan.birth_date,
        specie_type: torisan.specie_type,
        stage_type: torisan.stage_type,
        gender_type: torisan.gender_type,
        user_id: userId,
      },
    });
    return {
      id,
      nickname,
    };
  }
}
