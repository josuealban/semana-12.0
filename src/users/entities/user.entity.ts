import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {Rol} from '../enums/rol.enum'; // Importa el enum Rol si lo necesitas
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type:'enum', enum: Rol, default:Rol.CLIENTE}) // Asigna un rol por defecto
  rol: string; // 'admin', 'usuario', etc.
}
