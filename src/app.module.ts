import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { SampleModule } from './sample/sample.module';
import { ActorModule } from './actor/actor.module';
import { MovieModule } from './movie/movie.module';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaModule } from './cinema/cinema.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres' as const,
        host: '127.0.0.1',
        database: 'nest',
        username: 'docker',
        password: 'docker',
        synchronize: false,
        port: 5477,
        logging: true,
        entities: ['dist/**/*.entity{.ts,.js}'],
        migrations: [
          path.join(__dirname, '/../database/migrations/**/*{.ts,.js}'),
        ],
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    SampleModule,
    ActorModule,
    MovieModule,
    CinemaModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
