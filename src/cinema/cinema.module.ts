import { forwardRef, Module } from '@nestjs/common';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';
import { ActorModule } from '../actor/actor.module';

@Module({
  imports: [
    forwardRef(() => ActorModule),
  ],
  controllers: [CinemaController],
  providers: [CinemaService],
  exports: [CinemaService],
})
export class CinemaModule {}
