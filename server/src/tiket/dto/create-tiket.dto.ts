import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateTiketDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  filmId: string;

  @ApiProperty()
  @IsString()
  studioId: string;

  @ApiProperty()
  @IsString()
  kursiId: string;

  @ApiProperty()
  @IsString()
  jadwalId: string;
}
