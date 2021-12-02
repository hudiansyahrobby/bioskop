import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterJadwalKursi1637639278948 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE jadwal_kursi 
        ADD isBooked BOOLEAN
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE jadwal_kursi
        DROP COLUMN isBooked,
        `);
  }
}
