import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import Usuario from './UsuarioModel';

@Entity('voto')
class Voto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuario_id: string;

  @Column()
  voto: boolean;
}

export default Voto;
