import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { MovieEntity } from '../movie/movie.entity';
import { ActorEntity } from '../actor/actor.entity';

@Entity('Cinemas')
export class CinemaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'character varying',
    length: 20,
  })
  name: string;

  @Column({
    type: 'int',
  })
  seatsNumber: number;

  @ManyToMany((type) => ActorEntity, (actor) => actor.cinemas)
  @JoinTable({
    name: 'actors_cinemas',
  })
  actors: ActorEntity[];

  @ManyToMany((type) => MovieEntity, (movie) => movie.cinemas)
  @JoinTable({
    name: 'cinemas_movies',
  })
  movies: MovieEntity[];
}
