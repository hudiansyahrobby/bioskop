import { Module } from '@nestjs/common';
import { JadwalService } from './jadwal.service';
import { JadwalController } from './jadwal.controller';

@Module({
  controllers: [JadwalController],
  providers: [JadwalService]
})
export class JadwalModule {}
