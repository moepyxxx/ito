import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TorisanModule } from './torisans/torisans.module';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { SupabaseService } from './supabase.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    UserModule,
    TorisanModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    AuthModule,
  ],
  providers: [SupabaseService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // この辺どう書く？
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '/graphql', method: RequestMethod.POST });
  }
}
