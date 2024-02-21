import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TorisanModule } from './torisans/torisans.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    TorisanModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  // controllers: [AppController],
  // providers: [PrismaService],
})
export class AppModule {}
