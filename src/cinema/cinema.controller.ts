import { Controller, Get } from '@nestjs/common';
import { CinemaService } from './cinema.service';

@Controller('cinemas')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}
  @Get('/')
  getAll() {
    return this.cinemaService.getAll();
  }

  @Get('/all')
  getAllActors() {
    return this.cinemaService.getAllCinemas();
  }

  @Get('/zadanie1')
  get() {
    return this.cinemaService.getSelected();
  }
}
