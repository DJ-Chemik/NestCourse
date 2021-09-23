import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor } from 'src/interfaces/actor';
import { MovieService } from '../movie/movie.service';
import { Repository } from 'typeorm';
import { ActorEntity } from './actor.entity';
import { CreateActorDto } from './dto/create-actor.dto';
import { CinemaService } from 'src/cinema/cinema.service';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private readonly actorRepository: Repository<ActorEntity>,
    @Inject(forwardRef(() => MovieService))
    private readonly movieService: MovieService,
    @Inject(forwardRef(() => CinemaService))
    private readonly cinemaService: CinemaService,
  ) {}

  async getAll() {
    return await this.actorRepository.find();
  }

  async createOne(createActorDto: CreateActorDto) {
    const movies = await this.movieService.getByNames(createActorDto.movies);
    const cinemas = await this.cinemaService.getByNames(createActorDto.cinemas);
    const actor = this.actorRepository.create({
      name: createActorDto.name,
      age: createActorDto.age,
      movies: movies,
      cinemas: cinemas,
    });

    return await this.actorRepository.save(actor);
  }

  async getAllWithRelations() {
    return await this.actorRepository.find({
      relations: ['movies', 'cinemas'],
      select: ['name'],
    });
  }

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

  getAllActorsAndTheirMovies() {
    return this.actors.map((actor) => {
      const allMovies = this.movieService.getAllMovies();
      return {
        name: actor.name,
        age: actor.age,
        movies: actor.movies.map((movieName) =>
          allMovies.find((movie) => movie.title === movieName),
        ),
      };
    });
  }
}
