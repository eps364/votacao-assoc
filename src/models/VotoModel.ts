import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Usuario from './UsuarioModel';
import Sessao from './SessaoModel';

@Entity('votos')
class Voto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuario_id: string;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  sessao_id: string;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'sessao_id' })
  sessao: Sessao;

  @Column()
  voto: boolean;
}

export default Voto;
