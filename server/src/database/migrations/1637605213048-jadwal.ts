import { MigrationInterface, QueryRunner } from 'typeorm';

export class jadwal1637605213048 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE jadwal (
        id varchar(36) PRIMARY KEY NOT NULL, 
        jam_mulai DATETIME NOT NULL, 
        jam_selesai DATETIME NOT NULL, 
        filmId varchar(36), 
        studioId varchar(36),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE jadwal
      `);
  }
}
