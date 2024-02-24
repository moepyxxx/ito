import { Resolver, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean)
  signout(): Promise<boolean> {
    return this.userService.signout();
  }
}
