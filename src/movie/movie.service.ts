import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Movie } from 'src/interfaces/movie';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { MovieEntity } from './movie.entity';
import { CinemaService } from '../cinema/cinema.service';
import { GenreService } from '../genre/genre.service';
import { ActorService } from '../actor/actor.service';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    @Inject(forwardRef(() => CinemaService))
    private readonly cinemaService: CinemaService,
    @Inject(forwardRef(() => GenreService))
    private readonly genreService: GenreService,
  ) {}

  async getAll() {
    return await this.movieRepository.find();
  }

  async getByNames(title: string[]) {
    return await this.movieRepository.find({
      where: {
        title: In(title),
      },
    });
  }

  private movies: Movie[] = [
    {
      title: 'Avatar',
      year: 2009,
      genre: 'Sci-Fi',
      playedIn: ['IMAX', 'Helios', 'Cinema City'],
    },
    {
      title: 'Czarna Wdowa',
      year: 2021,
      genre: 'Akcja',
      playedIn: ['Multikino', 'Cinema City'],
    },
    {
      title: 'Coco',
      year: 2017,
      genre: 'Animacja',
      playedIn: ['IMAX', 'Multikino'],
    },
  ];

  getAllMovies() {
    return this.movies;
  }

  getMoviesAndCities() {
    const allCinemas = this.cinemaService.getAllCinemas();
    const allGenres = this.genreService.getAllGenres();

    return this.movies.map((movie) => ({
      title: movie.title,
      genre: allGenres.find((genre) => genre.name === movie.genre),
      cities: allCinemas
        .filter((cinema) => movie.playedIn.includes(cinema.name))
        ?.map((cinema) => cinema.city),
    }));
  }
}
