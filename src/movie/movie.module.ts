import { forwardRef, Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './movie.entity';
import { CinemaModule } from '../cinema/cinema.module';
import { GenreModule } from '../genre/genre.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieEntity]),
    forwardRef(() => CinemaModule),
    forwardRef(() => GenreModule),
  ],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
