import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

interface LoginUser extends User {
  token: string;
}
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerData: RegisterDto): Promise<User> {
    const [user] = await this.userService.findByEmail(registerData.email);
    console.log(user);
    if (user) {
      throw new ConflictException(
        `User with ${registerData.email} is already exist`,
      );
    }

    const createdUser = await this.userService.create(registerData);

    return createdUser;
  }

  async login(loginData: LoginDto): Promise<LoginUser> {
    const { email, password } = loginData;
    const [user] = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException();
    }

    const isValid = await this.validatePassword(password, user.password);

    if (!isValid) {
      throw new BadRequestException('Password is invalid');
    }

    user.password = undefined;

    const token = this.jwtService.sign({ ...user });

    (user as LoginUser).token = token;

    return user as LoginUser;
  }

  async validatePassword(password: string, hashedPassword): Promise<boolean> {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    return isPasswordValid;
  }
}
