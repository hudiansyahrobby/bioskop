import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterJadwal1637637855167 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE jadwal 
        ADD FOREIGN KEY (filmId) REFERENCES film(id) ON DELETE SET NULL,
        ADD FOREIGN KEY (studioId) REFERENCES studio(id) ON DELETE SET NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE jadwal
        DROP FOREIGN KEY filmId,
        DROP FOREIGN KEY studioId
      `);
  }
}
