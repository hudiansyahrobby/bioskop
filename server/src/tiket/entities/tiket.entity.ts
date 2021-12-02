import { Studio } from './../../studio/entities/studio.entity';
import { Kursi } from './../../kursi/entities/kursi.entity';
import { Film } from './../../film/entities/film.entity';
import { User } from './../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Jadwal } from '../../jadwal/entities/jadwal.entity';

@Entity()
export class Tiket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  harga: number;

  @ManyToOne((type) => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne((type) => Film, (film) => film.id, { onDelete: 'CASCADE' })
  film: Film;

  @ManyToOne((type) => Studio, (studio) => studio.id, { onDelete: 'CASCADE' })
  studio: Studio;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @OneToOne((type) => Kursi)
  @JoinColumn()
  kursi: Kursi;

  @ManyToOne((type) => Jadwal, (jadwal) => jadwal.id)
  jadwal: Jadwal;
}
