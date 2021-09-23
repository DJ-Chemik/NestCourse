import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Cinema } from '../interfaces/cinema';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CinemaEntity } from './cinema.entity';
import { ActorService } from 'src/actor/actor.service';

@Injectable()
export class CinemaService {
  constructor(
    @InjectRepository(CinemaEntity)
    private readonly cinemaRepository: Repository<CinemaEntity>,
    @Inject(forwardRef(() => ActorService))
    private readonly actorService: ActorService,
  ) {}

  async getAll() {
    return await this.cinemaRepository.find();
  }

  async getByNames(names: string[]) {
    return await this.cinemaRepository.find({
      where: {
        name: In(names),
      },
    });
  }

  private cinemas: Cinema[] = [
    {
      name: 'IMAX',
      city: 'Poznań',
      seatsNumber: 120,
      visitedByActors: ['John', 'James'],
    },
    {
      name: 'Multikino',
      city: 'Katowice',
      seatsNumber: 200,
      visitedByActors: ['Zenon', 'James'],
    },
    {
      name: 'Helios',
      city: 'Podlasie Wielkopolski',
      seatsNumber: 100,
      visitedByActors: [],
    },
    {
      name: 'Cinema City',
      city: 'Poznań',
      seatsNumber: 99,
      visitedByActors: ['Jacob'],
    },
  ];

  getAllCinemas() {
    return this.cinemas;
  }

  getSelected() {
    const allActors = this.actorService.getAllActors();

    return this.cinemas.map((cinema) => {
      const selectedActors = allActors
        .filter((actors) => cinema.visitedByActors.includes(actors.name))
        .map((actor) => ({
          name: actor.name,
          age: actor.age,
        }));

      return {
        name: cinema.name,
        city: cinema.city,
        actors: selectedActors,
      };
    });
  }
}
