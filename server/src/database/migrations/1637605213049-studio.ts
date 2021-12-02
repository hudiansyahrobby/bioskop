import { MigrationInterface, QueryRunner } from 'typeorm';

export class studio1637605213049 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE studio (
        id CHAR(36) PRIMARY KEY,
        nama_studio VARCHAR(255) NOT NULL
      ) ENGINE=InnoDB
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE studio
      `);
  }
}
