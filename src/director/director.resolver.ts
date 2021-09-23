import { Args, Int, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { MovieService } from "src/movie/movie.service";
import { Director } from "./director.model";
import { defaultDirectors, DirectorService } from "./director.service";
import { DirectorExtended } from "./directorExtended.model";

@Resolver(() => DirectorExtended)
export class DirectorResolver {
    constructor (
        private readonly directorService: DirectorService,
        private readonly movieService: MovieService,
    ) {}

    @Query(() => Int)
    numberOfDirectors() {
        return this.directorService.getNumberOfDirectors();
    }

    @Query(() => [DirectorExtended])
    directors() {
        return this.directorService.getDirectors();
    }

    @Query(() => [DirectorExtended], {
        name: "directorsByNameOrEmptyTable",
        description: "Moje rozbudowane query"
    })
    directorsByName(@Args('name', { type: () => String, nullable: true }) name?: string) {
        return this.directorService.getDirectorsByName(name);
    }

    @ResolveField()
    async movies(@Parent() directorsByNameOrEmptyTable: DirectorExtended) {
        return await this.movieService.getAll();
    }

}