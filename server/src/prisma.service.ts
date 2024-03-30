import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  // 妥協案
  // see: https://github.com/prisma/prisma-client-extensions/blob/main/audit-log-context/script.ts
  getRlsClient(userId: string) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const prisma = this;
    const prismaKai = prisma.$extends({
      query: {
        $allModels: {
          async $allOperations(options) {
            const [, result] = await prisma.$transaction([
              prisma.$executeRaw`SELECT set_config('app.user_id', ${userId}, false)`,
              options.query(options.args),
            ]);
            return result;
          },
        },
      },
    });
    return prismaKai;
  }
}
