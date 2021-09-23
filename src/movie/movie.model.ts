import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Movie as IMovie } from "src/interfaces/movie";

@ObjectType()
export class Movie implements IMovie{
    @Field()
    title: string;
    
    @Field(() => Int)
    year: number;

    @Field()
    genre: string;

    @Field(() => [String])
    playedIn: string[];
}