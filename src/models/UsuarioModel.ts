import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  nome: string;

  @Column('varchar')
  cpf: string;
}

export default Usuario;
