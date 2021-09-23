import { Injectable } from '@nestjs/common';
import { Genre } from '../interfaces/genre';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenreEntity } from './genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private readonly genreRepository: Repository<GenreEntity>,
  ) {}

  async getAll() {
    return await this.genreRepository.find();
  }

  async getById(id: string) {
    return await this.genreRepository.findOne(id);
  }

  async delete(id: string) {
    return await this.genreRepository.delete(id);
  }

  async update(id: string) {
    const genre = await this.genreRepository.findOne(id);
    genre.name = 'NewName';
    return await this.genreRepository.update(id, { name: 'NewName' });
  }

  async updateSecondOption(id: string) {
    const genre = await this.genreRepository.findOne(id);
    genre.name = 'NewNameSecondOptions';
    return await this.genreRepository.save(genre);
  }

  private genres: Genre[] = [
    {
      name: 'Sci-Fi',
      description: 'Sci-Fi',
    },
    {
      name: 'Akcja',
      description: 'Akcja',
    },
    {
      name: 'Animacja',
      description: 'Animacja',
    },
  ];

  getAllGenres() {
    return this.genres;
  }
}
