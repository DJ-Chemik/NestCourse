import { Module } from '@nestjs/common';
import { MovieModule } from 'src/movie/movie.module';
import { DirectorResolver } from './director.resolver';
import { DirectorService } from './director.service';

@Module({
  imports: [MovieModule],
  controllers: [],
  providers: [DirectorResolver, DirectorService],
})
export class DirectorModule {}
