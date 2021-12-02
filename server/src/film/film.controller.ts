import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/etc/decorators/roles.decorator';
import { Role } from 'src/users/entities/user.entity';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmService } from './film.service';

@ApiTags('film')
@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.Admin)
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        nama: {
          type: 'string',
        },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createFilmDto: CreateFilmDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const _createFilmDto = {
      ...createFilmDto,
      poster: file.filename,
    };
    return this.filmService.create(_createFilmDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.filmService.findAll(query.page, query.size);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmService.findOne(id);
  }

  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFilmDto: UpdateFilmDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const _updateFilmDto = {
      ...updateFilmDto,
      poster: file?.filename,
    };
    return this.filmService.update(id, _updateFilmDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmService.remove(id);
  }
}
