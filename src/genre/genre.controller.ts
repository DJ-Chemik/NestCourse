import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GenreService } from './genre.service';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get('/')
  getAll() {
    return this.genreService.getAll();
  }

  @Get('/all')
  getAllActors() {
    return this.genreService.getAllGenres();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.genreService.getById(id);
  }

  @Post('/:id')
  update(@Param('id') id: string) {
    return this.genreService.update(id);
  }

  @Post('/update/:id')
  updateSecondOption(@Param('id') id: string) {
    return this.genreService.updateSecondOption(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.genreService.delete(id);
  }
}
