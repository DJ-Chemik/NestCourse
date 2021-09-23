import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

}
