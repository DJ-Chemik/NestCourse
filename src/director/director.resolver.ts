import { Resolver } from "@nestjs/graphql";
import { DirectorService } from "./director.service";

@Resolver()
export class DirectorResolver {
    constructor (private readonly directorService: DirectorService) {}

}