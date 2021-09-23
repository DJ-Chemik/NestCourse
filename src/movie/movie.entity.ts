import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { GenreEntity } from '../genre/genre.entity';
import { CinemaEntity } from '../cinema/cinema.entity';
import { ActorEntity } from '../actor/actor.entity';

@Entity('Movies')
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'character varying',
    length: 20,
  })
  title: string;

  @Column({
    type: 'int',
  })
  year: number;

  @ManyToOne((type) => GenreEntity, (genre) => genre.movies)
  genre: GenreEntity[];

  @ManyToMany((type) => CinemaEntity, (cinema) => cinema.movies)
  cinemas: CinemaEntity[];

  @ManyToMany((type) => ActorEntity, (actor) => actor.movies)
  @JoinTable({
    name: 'actors_movies',
  })
  actors: ActorEntity[];
}
