import { getConnection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilmService {
  async create(createFilmDto: CreateFilmDto) {
    const { nama, poster } = createFilmDto;
    const id = uuidv4();
    const newFilm = await getConnection().manager.query(
      `INSERT INTO film (id, nama, poster) VALUES(?, ?, ?)`,
      [id, nama, poster],
    );
    return newFilm;
  }

  async findAll(page: number = 1, size: number = 10) {
    const [totalFilms] = await getConnection().manager.query(
      `SELECT COUNT(*) as totalItems FROM film`,
    );

    const films = await getConnection().manager.query(
      `SELECT * FROM film
      ORDER BY updated_at DESC
      LIMIT ?
      OFFSET ?`,
      [+size, (+page - 1) * 10],
    );

    const paginatedFilms = {
      totalItems: +totalFilms.totalItems,
      totalPage: Math.ceil(+totalFilms.totalItems / 10),
      page: page,
      limit: 10,
      items: films,
    };
    return paginatedFilms;
  }

  async findOne(id: string) {
    const film = await getConnection().manager.query(
      `SELECT * FROM film WHERE id = ?`,
      [id],
    );
    return film;
  }

  async update(id: string, updateFilmDto: UpdateFilmDto) {
    const { nama, poster } = updateFilmDto;
    let updatedFilm = '';
    if (poster) {
      updatedFilm = await getConnection().manager.query(
        `UPDATE film SET nama = ?, poster = ? WHERE id = ?`,
        [nama, poster, id],
      );
    } else {
      updatedFilm = await getConnection().manager.query(
        `UPDATE film SET nama = ? WHERE id = ?`,
        [nama, id],
      );
    }

    return updatedFilm;
  }

  async remove(id: string) {
    const deletedFilm = await getConnection().manager.query(
      `DELETE FROM film WHERE id = ?`,
      [id],
    );
    return deletedFilm;
  }
}
