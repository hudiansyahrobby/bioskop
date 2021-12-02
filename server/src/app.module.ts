import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import dbConfig from './database/config/db.config';
import { FilmModule } from './film/film.module';
import { JadwalModule } from './jadwal/jadwal.module';
import { KursiModule } from './kursi/kursi.module';
import { StudioModule } from './studio/studio.module';
import { TiketModule } from './tiket/tiket.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'bioskop',
        synchronize: false,
        logging: false,
        entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
        seeds: ['dist/database/seeds/*.js'],
        migrations: ['dist/database/migrations/*.js'],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
    }),
    UsersModule,
    TiketModule,
    FilmModule,
    JadwalModule,
    StudioModule,
    KursiModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
