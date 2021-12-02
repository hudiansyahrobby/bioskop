import { User, Role } from './../../users/entities/user.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as bcrypt from 'bcrypt';

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const userInstance = [
      {
        nama: 'admin',
        email: 'admin@admin.com',
        password: await bcrypt.hash('admin123', 8),
        role: Role.Admin,
      },
    ];

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(userInstance)
      .execute();
  }
}
