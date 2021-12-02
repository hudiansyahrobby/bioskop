import { MigrationInterface, QueryRunner } from 'typeorm';

export class jadwalKursi1637639278947 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE jadwal_kursi (
            jadwalId varchar(36) NOT NULL, 
            kursiId varchar(36) NOT NULL, 
            FOREIGN KEY (jadwalId) REFERENCES jadwal(id),
            FOREIGN KEY (kursiId) REFERENCES kursi(id)
        )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
           DROP TABLE jadwal_kursi
        `);
  }
}
