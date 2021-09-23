import { Module } from '@nestjs/common';
import { DirectorResolver } from './director.resolver';
import { DirectorService } from './director.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DirectorResolver, DirectorService],
})
export class DirectorModule {}
