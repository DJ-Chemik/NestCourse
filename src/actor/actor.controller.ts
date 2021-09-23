import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Get('/')
  getAll() {
    return this.actorService.getAll();
  }

  @Get('/all')
  getAllActors() {
    return this.actorService.getAllActors();
  }

  @Get('/relations')
  getAllWithRelations() {
    return this.actorService.getAllWithRelations();
  }

  @Post('/create')
  createOne(@Body() createActorDto: CreateActorDto) {
    return this.actorService.createOne(createActorDto);
  }
}
