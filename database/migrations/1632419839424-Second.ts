import {MigrationInterface, QueryRunner} from "typeorm";

export class Second1632419839424 implements MigrationInterface {
    name = 'Second1632419839424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cinemas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "seatsNumber" integer NOT NULL, CONSTRAINT "PK_d13b66806cd2f5fc8ab6161cff6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Movies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(20) NOT NULL, "year" integer NOT NULL, "genreId" uuid, CONSTRAINT "PK_3c3d780a38fe84af75495a4099f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "actors_cinemas" ("cinemasId" uuid NOT NULL, "actorsId" uuid NOT NULL, CONSTRAINT "PK_f6122579b59c058b719d3227ba3" PRIMARY KEY ("cinemasId", "actorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f96f9dcc1a7b70154fe651a850" ON "actors_cinemas" ("cinemasId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d5452992c56c199ec97e743473" ON "actors_cinemas" ("actorsId") `);
        await queryRunner.query(`CREATE TABLE "cinemas_movies" ("cinemasId" uuid NOT NULL, "moviesId" uuid NOT NULL, CONSTRAINT "PK_545b2fe775774f798feebac17f4" PRIMARY KEY ("cinemasId", "moviesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c27ba3dab746afe077c13b15f6" ON "cinemas_movies" ("cinemasId") `);
        await queryRunner.query(`CREATE INDEX "IDX_20cc73f6b8b2cee53e55898af2" ON "cinemas_movies" ("moviesId") `);
        await queryRunner.query(`CREATE TABLE "actors_movies" ("moviesId" uuid NOT NULL, "actorsId" uuid NOT NULL, CONSTRAINT "PK_e8e1c1db660d6d59e81a1aaa8d4" PRIMARY KEY ("moviesId", "actorsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_89d6125e543b5188943118bf3a" ON "actors_movies" ("moviesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0281d3b1a443bb64bc0fbd679f" ON "actors_movies" ("actorsId") `);
        await queryRunner.query(`ALTER TABLE "Movies" ADD CONSTRAINT "FK_3412d308254286a59259fb9bd82" FOREIGN KEY ("genreId") REFERENCES "Genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "actors_cinemas" ADD CONSTRAINT "FK_f96f9dcc1a7b70154fe651a8500" FOREIGN KEY ("cinemasId") REFERENCES "Cinemas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "actors_cinemas" ADD CONSTRAINT "FK_d5452992c56c199ec97e7434733" FOREIGN KEY ("actorsId") REFERENCES "Actors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cinemas_movies" ADD CONSTRAINT "FK_c27ba3dab746afe077c13b15f67" FOREIGN KEY ("cinemasId") REFERENCES "Cinemas"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cinemas_movies" ADD CONSTRAINT "FK_20cc73f6b8b2cee53e55898af24" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "actors_movies" ADD CONSTRAINT "FK_89d6125e543b5188943118bf3ad" FOREIGN KEY ("moviesId") REFERENCES "Movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "actors_movies" ADD CONSTRAINT "FK_0281d3b1a443bb64bc0fbd679fa" FOREIGN KEY ("actorsId") REFERENCES "Actors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "actors_movies" DROP CONSTRAINT "FK_0281d3b1a443bb64bc0fbd679fa"`);
        await queryRunner.query(`ALTER TABLE "actors_movies" DROP CONSTRAINT "FK_89d6125e543b5188943118bf3ad"`);
        await queryRunner.query(`ALTER TABLE "cinemas_movies" DROP CONSTRAINT "FK_20cc73f6b8b2cee53e55898af24"`);
        await queryRunner.query(`ALTER TABLE "cinemas_movies" DROP CONSTRAINT "FK_c27ba3dab746afe077c13b15f67"`);
        await queryRunner.query(`ALTER TABLE "actors_cinemas" DROP CONSTRAINT "FK_d5452992c56c199ec97e7434733"`);
        await queryRunner.query(`ALTER TABLE "actors_cinemas" DROP CONSTRAINT "FK_f96f9dcc1a7b70154fe651a8500"`);
        await queryRunner.query(`ALTER TABLE "Movies" DROP CONSTRAINT "FK_3412d308254286a59259fb9bd82"`);
        await queryRunner.query(`DROP INDEX "IDX_0281d3b1a443bb64bc0fbd679f"`);
        await queryRunner.query(`DROP INDEX "IDX_89d6125e543b5188943118bf3a"`);
        await queryRunner.query(`DROP TABLE "actors_movies"`);
        await queryRunner.query(`DROP INDEX "IDX_20cc73f6b8b2cee53e55898af2"`);
        await queryRunner.query(`DROP INDEX "IDX_c27ba3dab746afe077c13b15f6"`);
        await queryRunner.query(`DROP TABLE "cinemas_movies"`);
        await queryRunner.query(`DROP INDEX "IDX_d5452992c56c199ec97e743473"`);
        await queryRunner.query(`DROP INDEX "IDX_f96f9dcc1a7b70154fe651a850"`);
        await queryRunner.query(`DROP TABLE "actors_cinemas"`);
        await queryRunner.query(`DROP TABLE "Movies"`);
        await queryRunner.query(`DROP TABLE "Cinemas"`);
    }

}
