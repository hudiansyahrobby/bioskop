import { Jadwal } from './../../jadwal/entities/jadwal.entity';
import { Tiket } from './../../tiket/entities/tiket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Studio {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama_studio: string;

  @OneToMany((type) => Tiket, (tiket) => tiket.id)
  tiket: Tiket[];

  @OneToMany((type) => Jadwal, (jadwal) => jadwal.id)
  jadwal: Jadwal[];
}
