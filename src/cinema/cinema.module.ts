import { forwardRef, Module } from '@nestjs/common';
import { CinemaController } from './cinema.controller';
import { CinemaService } from './cinema.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaEntity } from './cinema.entity';
import { ActorModule } from '../actor/actor.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CinemaEntity]),
    forwardRef(() => ActorModule),
  ],
  controllers: [CinemaController],
  providers: [CinemaService],
  exports: [CinemaService],
})
export class CinemaModule {}
