import { Args, Field, Int, ObjectType, Query, Resolver } from "@nestjs/graphql";
import { aaaaa, SampleService } from "./sample.service";
@ObjectType()
class HeroParameters {
    @Field(() => String)
    name: string;

    @Field(() => Int, { nullable: true })
    points: number;
}
@Resolver()
export class SampleResolver {

    constructor (private readonly sampleService: SampleService) {}

    @Query(() => String)
    sayHello(): string {
        return this.sampleService.sayHello();
    }

    @Query(() => String)
    sayHelloExtended(@Args('hero', { type: () => String, nullable: true }) hero?: string): string {
        return this.sampleService.sayHelloExtended(hero);
    }

    @Query(() => String)
    sayGoodbye(): string {
        return this.sampleService.sayGoodbye();
    }

    @Query(() => HeroParameters)
    getHeroParameters(@Args('hero', { type: () => String, nullable: true }) hero?: aaaaa): HeroParameters {
        return this.sampleService.getHeroParameters(hero) as HeroParameters;
    }
}
