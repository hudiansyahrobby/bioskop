import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kursi {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  no_kursi: number;
}
