import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Director {
    @Field()
    name: string;

    @Field()
    surname: string;

    @Field(() => Boolean)
    isAlive: boolean;

    @Field(() => Date)
    birthDate: Date;
}