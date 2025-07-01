import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal', { precision: 18, scale: 2 })
  precio: number;

  @Column({ nullable: true })
  unidad: string;
}