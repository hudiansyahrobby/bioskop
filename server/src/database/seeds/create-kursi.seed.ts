import { Kursi } from '../../kursi/entities/kursi.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateKursi implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const kursiInstance = new Array(30).fill(0).map((_, index) => {
      return {
        no_kursi: index + 1,
      };
    });

    await connection
      .createQueryBuilder()
      .insert()
      .into(Kursi)
      .values(kursiInstance)
      .execute();
  }
}
