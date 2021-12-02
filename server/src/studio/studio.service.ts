import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class StudioService {
  async findAll() {
    const studios = await getConnection().manager.query(`SELECT * FROM studio`);
    return studios;
  }
}
