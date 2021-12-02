import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    const newUser = await this.authService.register(registerDto);

    return res.status(HttpStatus.CREATED).json({
      data: newUser,
    });
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const loggedInUser = await this.authService.login(loginDto);

    return res.status(HttpStatus.OK).json({
      data: loggedInUser,
    });
  }
}
