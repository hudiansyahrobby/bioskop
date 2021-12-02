import { Studio } from './../../studio/entities/studio.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateStudio implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const studioInstance = [
      {
        nama_studio: 'Wibu Studio',
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into(Studio)
      .values(studioInstance)
      .execute();
  }
}
