import { Module } from '@nestjs/common';
import { TiketService } from './tiket.service';
import { TiketController } from './tiket.controller';

@Module({
  controllers: [TiketController],
  providers: [TiketService]
})
export class TiketModule {}
