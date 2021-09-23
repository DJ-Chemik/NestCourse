import { Injectable } from '@nestjs/common';
import { Actor } from 'src/interfaces/actor';

@Injectable()
export class ActorService {
  constructor() {}

  private actors: Actor[] = [
    {
      name: 'John',
      age: 41,
      movies: ['Coco'],
    },
    {
      name: 'James',
      age: 33,
      movies: ['Avatar', 'Czarna Wdowa'],
    },
    {
      name: 'Jacob',
      age: 27,
      movies: ['Avatar', 'Coco'],
    },
    {
      name: 'Zenon',
      age: 52,
      movies: [],
    },
  ];

  getAllActors() {
    return this.actors;
  }
}
