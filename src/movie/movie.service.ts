import { Injectable } from '@nestjs/common';
import { Movie } from 'src/interfaces/movie';

@Injectable()
export class MovieService {
  constructor() {}

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
}
