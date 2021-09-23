import { Injectable } from '@nestjs/common';
import { Genre } from '../interfaces/genre';

@Injectable()
export class GenreService {
  constructor() {}

  private genres: Genre[] = [
    {
      name: 'Sci-Fi',
      description: 'Sci-Fi',
    },
    {
      name: 'Akcja',
      description: 'Akcja',
    },
    {
      name: 'Animacja',
      description: 'Animacja',
    },
  ];

  getAllGenres() {
    return this.genres;
  }
}
