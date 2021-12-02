import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Role } from './entities/user.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const { nama, email, no_hp, password } = createUserDto;
    const id = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await getConnection().manager.query(
      `INSERT INTO user (id, nama, email, no_hp, password, role) VALUES(?, ?, ?, ?, ?, ?)`,
      [id, nama, email, no_hp, hashedPassword, Role.User],
    );
    return newUser;
  }

  async findAll() {
    const users = await getConnection().manager.query(
      'SELECT id, nama, email, no_hp FROM user',
    );
    return users;
  }

  async findByEmail(email: string) {
    const users = await getConnection().manager.query(
      `SELECT * FROM user WHERE email = ?`,
      [email],
    );
    return users;
  }

  async findOne(id: string) {
    const user = await getConnection().manager.query(
      `SELECT id, nama, email, no_hp FROM user WHERE id = ?`,
      [id],
    );
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { nama, email, no_hp, password } = updateUserDto;

    const updatedUser = await getConnection().manager.query(
      `UPDATE user SET nama = ?, email = ?, no_hp = ?, password = ? WHERE id = ?`,
      [nama, email, no_hp, password, id],
    );
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await getConnection().manager.query(
      `DELETE FROM user WHERE id = ?`,
      [id],
    );
    return deletedUser;
  }
}
