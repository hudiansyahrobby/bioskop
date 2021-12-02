import { MigrationInterface, QueryRunner } from 'typeorm';

export class tiket1637605213059 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE tiket (
        id CHAR(36) PRIMARY KEY NOT NULL,
        harga INT NOT NULL,
        userId CHAR(36),
        filmId CHAR(36),
        studioId CHAR(36),
        kursiId CHAR(36),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE tiket
      `);
  }
}
