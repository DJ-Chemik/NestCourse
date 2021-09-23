import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1632419496627 implements MigrationInterface {
    name = 'Initial1632419496627'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Actors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_49ffdc5ecc3a8bb02b62fee3017" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Genres" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_90bee904675fa269fb6e81ec152" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Genres"`);
        await queryRunner.query(`DROP TABLE "Actors"`);
    }

}
