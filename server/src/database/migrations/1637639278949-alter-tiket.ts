import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterTiket1637639278949 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE tiket 
        ADD COLUMN jadwalId VARCHAR(36),
        ADD FOREIGN KEY (jadwalId) REFERENCES jadwal(id) ON DELETE SET NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE tiket
        DROP COLUMN jadwalId
        `);
  }
}
