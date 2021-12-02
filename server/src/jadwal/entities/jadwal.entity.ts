import { Kursi } from '../../kursi/entities/kursi.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Film } from './../../film/entities/film.entity';
import { Studio } from './../../studio/entities/studio.entity';
import { Tiket } from '../../tiket/entities/tiket.entity';

@Entity()
export class Jadwal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'datetime' })
  jam_mulai: Date;

  @Column({ type: 'datetime' })
  jam_selesai: Date;

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

  @OneToOne(() => Film)
  @JoinColumn()
  film: Film;

  @ManyToOne((type) => Studio, (studio) => studio.id)
  studio: Studio;

  @OneToMany((type) => Tiket, (tiket) => tiket.id)
  tiket: Tiket[];

  @ManyToMany(() => Kursi)
  @JoinTable()
  kursi: Kursi[];
}
