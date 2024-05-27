const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Migration1716849303743 {
    name = 'Migration1716849303743'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "providers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "UQ_d735474e539e674ba3702eddc44" UNIQUE ("name"), CONSTRAINT "PK_af13fc2ebf382fe0dad2e4793aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "productName" character varying NOT NULL, CONSTRAINT "UQ_270b1a4eb00eebe56b528e909f6" UNIQUE ("productName"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "providers"`);
    }
}
