import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/')
  getAll() {
    return this.movieService.getAll();
  }

  @Get('/all')
  getAllActors() {
    return this.movieService.getAllMovies();
  }

  @Get('/zadanie1')
  get() {
    return this.movieService.getMoviesAndCities();
  }
}
