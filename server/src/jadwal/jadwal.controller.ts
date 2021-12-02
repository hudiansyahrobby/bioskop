import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JadwalService } from './jadwal.service';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { UpdateJadwalDto } from './dto/update-jadwal.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/etc/decorators/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Role } from 'src/users/entities/user.entity';

@Controller('jadwal')
export class JadwalController {
  constructor(private readonly jadwalService: JadwalService) {}

  @Post()
  @ApiBearerAuth()
  create(@Body() createJadwalDto: CreateJadwalDto) {
    return this.jadwalService.create(createJadwalDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.jadwalService.findAll(query.day);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jadwalService.findOne(id);
  }

  @Get(':id/kursi')
  findKursiOnJadwal(@Param('id') jadwalId: string) {
    return this.jadwalService.findKursiOnJadwal(jadwalId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateJadwalDto: UpdateJadwalDto) {
    return this.jadwalService.update(id, updateJadwalDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.jadwalService.remove(id);
  }
}
