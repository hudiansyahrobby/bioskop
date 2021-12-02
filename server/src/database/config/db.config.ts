import { User } from 'src/users/entities/user.entity';
import { Tiket } from './../../tiket/entities/tiket.entity';
import { Studio } from './../../studio/entities/studio.entity';
import { Kursi } from './../../kursi/entities/kursi.entity';
import { Jadwal } from './../../jadwal/entities/jadwal.entity';
import { registerAs } from '@nestjs/config';
import { Film } from './../../film/entities/film.entity';

export default registerAs('database', () => {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'bioskop',
    synchronize: false,
    logging: false,
    // entities: [Film, Jadwal, Kursi, Studio, Tiket, User],
    // migrations: ['dist/database/migrations/*.js'],
    entities: [Film, Jadwal, Kursi, Studio, Tiket, User],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
  };
});
