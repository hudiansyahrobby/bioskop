import { IsDate, IsString } from 'class-validator';

export class CreateJadwalDto {
  @IsDate()
  jam_mulai: Date;

  @IsDate()
  jam_selesai: Date;

  @IsString()
  filmId: string;

  @IsString()
  studioId: string;
}
