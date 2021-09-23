import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Director } from "./director.model";
import { directors, DirectorService } from "./director.service";

@Resolver()
export class DirectorResolver {
    constructor (private readonly directorService: DirectorService) {}

    @Query(() => Int)
    numberOfDirectors() {
        return this.directorService.getNumberOfDirectors();
    }

    @Query(() => [Director])
    directors() {
        return this.directorService.getDirectors();
    }

    @Query(() => [Director], {
        name: "directorsByNameOrEmptyTable",
        description: "Moje rozbudowane query"
    })
    directorsByName(@Args('name', { type: () => String, nullable: true }) name?: string) {
        return this.directorService.getDirectorsByName(name);
    }
}