import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InputAuthUser } from './models/InputAuthUser.model';
import { UserService } from './user.service';
import { AuthUser } from './models/AuthUser.model';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => AuthUser)
  signup(@Args('user') user: InputAuthUser): Promise<AuthUser> {
    return this.userService.signup(user);
  }

  @Mutation(() => AuthUser)
  signin(@Args('user') user: InputAuthUser): Promise<AuthUser> {
    return this.userService.signin(user);
  }
}
