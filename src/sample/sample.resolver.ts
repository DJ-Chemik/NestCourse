import { Query } from '@nestjs/graphql';

export class SampleResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
