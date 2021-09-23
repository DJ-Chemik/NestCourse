import { Field, ObjectType } from "@nestjs/graphql";
import { Movie } from "src/movie/movie.model";
import { Director } from "./director.model";

@ObjectType()
export class DirectorExtended extends Director {
    @Field(type => [Movie])
    movies: Movie[];    
}