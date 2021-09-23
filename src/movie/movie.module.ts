import { forwardRef, Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { CinemaModule } from '../cinema/cinema.module';
import { GenreModule } from '../genre/genre.module';

@Module({
  imports: [
    forwardRef(() => CinemaModule),
    forwardRef(() => GenreModule),
  ],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
