import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DirectorInput {
    @Field()
    name: string;

    @Field()
    surname: string;

    @Field(() => Boolean)
    isAlive: boolean;

    @Field(() => Date)
    birthDate: Date;
}