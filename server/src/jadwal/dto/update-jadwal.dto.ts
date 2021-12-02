import { PartialType } from '@nestjs/swagger';
import { CreateJadwalDto } from './create-jadwal.dto';

export class UpdateJadwalDto extends PartialType(CreateJadwalDto) {}
