import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

}
