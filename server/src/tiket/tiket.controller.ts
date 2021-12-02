import { User } from './../users/entities/user.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/etc/decorators/roles.decorator';
import { Role } from 'src/users/entities/user.entity';
import { CreateTiketDto } from './dto/create-tiket.dto';
import { TiketService } from './tiket.service';

@Controller('tiket')
export class TiketController {
  constructor(private readonly tiketService: TiketService) {}

  @Post()
  create(@Body() createTiketDto: CreateTiketDto) {
    return this.tiketService.create(createTiketDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Query() query, @Req() req: Request & { user: User }) {
    console.log('PENGGUNA', req.user);
    return this.tiketService.findAll(query.page, req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiketService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiketService.remove(id);
  }
}
