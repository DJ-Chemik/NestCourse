import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MovieEntity } from '../movie/movie.entity';

@Entity('Genres')
export class GenreEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'character varying',
    length: 20,
  })
  name: string;

  @Column({
    type: 'text',
  })
  description: string;

  @OneToMany((type) => MovieEntity, (movie) => movie.genre)
  movies: MovieEntity[];
}
