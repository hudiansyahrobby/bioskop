import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFilmDto {
  @ApiProperty()
  @IsString()
  nama: string;

  @ApiProperty()
  @IsString()
  poster: string;
}
