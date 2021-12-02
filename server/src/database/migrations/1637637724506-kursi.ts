import { MigrationInterface, QueryRunner } from 'typeorm';

export class kursi1637637724506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE kursi(
            id CHAR(36) PRIMARY KEY,
            no_kursi INT NOT NULL
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE kursi
      `);
  }
}
