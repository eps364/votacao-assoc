import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Usuario from './UsuarioModel';
import Sessao from './SessaoModel';

@Entity('votos')
class Voto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  voto: boolean;

  @Column()
  usuario_id: string;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  sessao_id: string;

  @ManyToOne(() => Sessao)
  @JoinColumn({ name: 'sessao_id' })
  sessao: Sessao;
}

export default Voto;
