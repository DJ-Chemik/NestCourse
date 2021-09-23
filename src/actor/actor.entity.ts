import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { MovieEntity } from '../movie/movie.entity';
import { CinemaEntity } from '../cinema/cinema.entity';

@Entity('Actors')
export class ActorEntity {
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
  age: number;

  @ManyToMany((type) => MovieEntity, (movie) => movie.actors)
  movies: MovieEntity[];

  @ManyToMany((type) => CinemaEntity, (cinema) => cinema.actors)
  cinemas: CinemaEntity[];
}
