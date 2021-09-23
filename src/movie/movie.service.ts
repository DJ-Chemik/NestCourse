import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Movie } from 'src/interfaces/movie';
import { CinemaService } from '../cinema/cinema.service';
import { GenreService } from '../genre/genre.service';

@Injectable()
export class MovieService {
  constructor(

    @Inject(forwardRef(() => CinemaService))
    private readonly cinemaService: CinemaService,
    @Inject(forwardRef(() => GenreService))
    private readonly genreService: GenreService,
  ) {}

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
