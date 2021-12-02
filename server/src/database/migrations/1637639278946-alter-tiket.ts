import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterTiket1637639278946 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE tiket 
        ADD FOREIGN KEY (userId) REFERENCES user(id) ON DELETE SET NULL,
        ADD FOREIGN KEY (filmId) REFERENCES film(id) ON DELETE SET NULL,
        ADD FOREIGN KEY (studioId) REFERENCES studio(id) ON DELETE SET NULL,
        ADD FOREIGN KEY (kursiId) REFERENCES kursi(id) ON DELETE SET NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE jadwal
            DROP FOREIGN KEY userIdId,
            DROP FOREIGN KEY filmId,
            DROP FOREIGN KEY studioId,
            DROP FOREIGN KEY kursiId
        `);
  }
}
