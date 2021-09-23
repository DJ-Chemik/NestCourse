// import { MigrationInterface, QueryRunner, In, getConnection } from 'typeorm';
// import { ActorEntity } from '../../src/actor/actor.entity';
// import { CinemaEntity } from '../../src/cinema/cinema.entity';
// import { actorsData } from './data/actors';
// import { cinemasData } from './data/cinemas';
// import { GenreEntity } from '../../src/genre/genre.entity';
// import { MovieEntity } from '../../src/movie/movie.entity';
// import { moviesData } from './data/movies';
// import { genresData } from './data/genre';
//
// export class SeedData1801556481452 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<any> {
//     const connection = await getConnection('seed');
//
//     const actorRepository = connection.getRepository(ActorEntity);
//     const cinemaRepository = connection.getRepository(CinemaEntity);
//     const movieRepository = connection.getRepository(MovieEntity);
//     const genreRepository = connection.getRepository(GenreEntity);
//
//     await actorRepository.save(actorsData as unknown as ActorEntity);
//     await cinemaRepository.save(cinemasData as unknown as CinemaEntity);
//     await genreRepository.save(genresData as unknown as GenreEntity);
//     await movieRepository.save(moviesData as unknown as MovieEntity);
//
//     for (const actor of actorsData) {
//       if (actor.movies?.length) {
//         (actor as unknown as ActorEntity).movies = await movieRepository.find({
//           where: {
//             id: In(actor.movies),
//           },
//         });
//       }
//       if (actor.cinemas?.length) {
//         (actor as unknown as ActorEntity).cinemas = await cinemaRepository.find(
//           {
//             where: {
//               id: In(actor.cinemas),
//             },
//           },
//         );
//       }
//       await actorRepository.save(actor as unknown as ActorEntity);
//     }
//
//     for (const cinema of cinemasData) {
//       if (cinema.movies?.length) {
//         (cinema as unknown as CinemaEntity).movies = await movieRepository.find(
//           {
//             where: {
//               id: In(cinema.movies),
//             },
//           },
//         );
//       }
//       await cinemaRepository.save(cinema as unknown as CinemaEntity);
//     }
//   }
//
//   public async down(queryRunner: QueryRunner): Promise<any> {}
// }
