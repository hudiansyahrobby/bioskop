import { getConnection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateJadwalDto } from './dto/create-jadwal.dto';
import { UpdateJadwalDto } from './dto/update-jadwal.dto';
import { v4 as uuidv4 } from 'uuid';
import { endOfDay, endOfTomorrow, startOfDay, startOfTomorrow } from 'date-fns';
import { Kursi } from '../kursi/entities/kursi.entity';

@Injectable()
export class JadwalService {
  async create(createJadwalDto: CreateJadwalDto) {
    const { jam_mulai, jam_selesai, filmId, studioId } = createJadwalDto;
    const jadwalId = uuidv4();

    const newJadwal = await getConnection().manager.query(
      `INSERT INTO jadwal (id, jam_mulai, jam_selesai, filmId, studioId) VALUES(?, ?, ?, ?, ?)`,
      [jadwalId, jam_mulai, jam_selesai, filmId, studioId],
    );

    const kursi = await getConnection().manager.query(`SELECT * FROM kursi`);

    kursi.map(async (_kursi: Kursi) => {
      await getConnection().manager.query(
        `INSERT INTO jadwal_kursi (kursiId, jadwalId, isBooked) VALUES(?, ?, ?)`,
        [_kursi.id, jadwalId, false],
      );
    });
    return newJadwal;
  }

  async findAll(day: string) {
    let startDate = new Date();
    let endDate = new Date();
    if (day === 'today') {
      const today = new Date();
      startDate = startOfDay(today);
      endDate = endOfDay(today);
    } else if (day === 'tomorrow') {
      startDate = startOfTomorrow();
      endDate = endOfTomorrow();
    }

    const jadwals = await getConnection().manager.query(
      ` SELECT jadwal.id, jadwal.jam_mulai, jadwal.jam_selesai, film.nama, film.poster, studio.     nama_studio FROM jadwal 
        INNER JOIN film on film.id=jadwal.filmId
        INNER JOIN studio on studio.id=jadwal.studioId
        WHERE jam_mulai
        BETWEEN ? AND ?
        ORDER BY jam_mulai ASC `,
      [startDate, endDate],
    );
    return jadwals;
  }

  async findOne(id: string) {
    const jadwal = await getConnection().manager.query(
      `SELECT jadwal.id, jadwal.jam_mulai, jadwal.jam_selesai, 
      film.id AS filmId, film.nama, film.poster, 
      studio.id AS studioId, studio.nama_studio 
      FROM jadwal 
      INNER JOIN film on film.id=jadwal.filmId
      INNER JOIN studio on studio.id=jadwal.studioId
      WHERE jadwal.id = ?`,
      [id],
    );
    return jadwal;
  }

  async findKursiOnJadwal(jadwalId: string) {
    const kursi = await getConnection().manager.query(
      `SELECT kursi.id, kursi.no_kursi, jadwal_kursi.isBooked FROM jadwal_kursi 
      INNER JOIN kursi on kursi.id=jadwal_kursi.kursiId
      WHERE jadwal_kursi.jadwalId = ?
      ORDER BY no_kursi ASC
      `,
      [jadwalId],
    );
    return kursi;
  }

  async update(id: string, updateJadwalDto: UpdateJadwalDto) {
    const { jam_mulai, jam_selesai, filmId, studioId } = updateJadwalDto;

    const updatedJadwal = await getConnection().manager.query(
      `UPDATE jadwal SET jam_mulai = ?, jam_selesai = ?, filmId = ?, studioId = ? WHERE id = ?`,
      [jam_mulai, jam_selesai, filmId, studioId, id],
    );
    return updatedJadwal;
  }

  async remove(id: string) {
    const deletedJadwal = await getConnection().manager.query(
      `DELETE FROM jadwal WHERE id = ?`,
      [id],
    );
    return deletedJadwal;
  }
}
