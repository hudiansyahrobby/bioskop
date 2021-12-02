import { Controller, Get } from '@nestjs/common';
import { StudioService } from './studio.service';

@Controller('studio')
export class StudioController {
  constructor(private readonly studioService: StudioService) {}

  @Get()
  findAll() {
    return this.studioService.findAll();
  }
}
