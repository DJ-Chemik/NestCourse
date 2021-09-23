import { forwardRef, Module } from '@nestjs/common';
import { MovieModule } from '../movie/movie.module';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './actor.entity';
import { CinemaModule } from '../cinema/cinema.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActorEntity]),
    forwardRef(() => CinemaModule),
    forwardRef(() => MovieModule),
  ],
  controllers: [ActorController],
  providers: [ActorService],
  exports: [ActorService],
})
export class ActorModule {}
