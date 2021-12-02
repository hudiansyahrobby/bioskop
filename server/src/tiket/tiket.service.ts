import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CreateTiketDto } from './dto/create-tiket.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TiketService {
  async create(createTiketDto: CreateTiketDto) {
    const { userId, filmId, kursiId, studioId, jadwalId } = createTiketDto;
    const id = uuidv4();
    const harga = 40000;
    const newTiket = await getConnection().manager.query(
      `INSERT INTO tiket (id, harga, userId, filmId, kursiId, studioId, jadwalId) VALUES(?, ?, ?, ?, ?, ?, ?)`,
      [id, harga, userId, filmId, kursiId, studioId, jadwalId],
    );

    await getConnection().manager.query(
      `UPDATE jadwal_kursi
      SET isBooked = ?
      WHERE jadwalId = ? AND kursiId = ?`,
      [true, jadwalId, kursiId],
    );
    return newTiket;
  }

  async findAll(page: number = 1, userId) {
    // TODO make userId dynamic
    const [totalTiket] = await getConnection().manager.query(
      `SELECT COUNT(*) as totalItems FROM tiket WHERE tiket.userId = ?`,
      [userId],
    );

    const tikets = await getConnection().manager.query(
      `SELECT film.nama AS nama_film, film.poster, film.id AS filmId, 
       tiket.id AS tiketId, tiket.harga, 
       studio.nama_studio, 
       user.nama, 
       kursi.no_kursi,
       jadwal.jam_mulai, jadwal.jam_selesai
       FROM tiket 
       INNER JOIN film ON film.id=tiket.filmId 
       INNER JOIN studio ON studio.id=tiket.studioId
       INNER JOIN user ON user.id=tiket.userId
       RIGHT JOIN jadwal ON jadwal.id=tiket.jadwalId
       INNER JOIN kursi ON kursi.id=tiket.kursiId
       WHERE userId = ? 
       ORDER BY tiket.created_at DESC
       LIMIT 10
       OFFSET ?
       `,
      [userId, (page - 1) * 10],
    );
    const paginatedTikets = {
      totalItems: +totalTiket.totalItems,
      page: page,
      totalPage: Math.ceil(+totalTiket.totalItems / 10),
      limit: 10,
      items: tikets,
    };

    return paginatedTikets;
  }

  async findOne(id: string) {
    const [tiket] = await getConnection().manager.query(
      `SELECT film.nama, film.poster, film.id, tiket.id, tiket.harga, studio.nama_studio, user.nama, kursi.no_kursi
       FROM tiket 
       INNER JOIN film ON film.id=tiket.filmId 
       INNER JOIN studio ON studio.id=tiket.studioId
       INNER JOIN user ON user.id=tiket.userId
       INNER JOIN kursi ON kursi.id=tiket.kursiId
       WHERE tiket.id = ?
       `,
      [id],
    );
    return tiket;
  }

  async remove(id: string) {
    const deletedTiket = await getConnection().manager.query(
      `DELETE FROM tiket WHERE id = ?`,
      [id],
    );
    return deletedTiket;
  }
}
