import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Assembleia from './AssembleiaModel';
import Sessao from './SessaoModel';

@Entity('pauta')
class Pauta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pauta: string;

  @Column()
  descricao: string;

  @Column()
  sessao_id: string;

  @OneToMany(() => Sessao, sessao => sessao.id)
  @JoinColumn({ name: 'sessao_id' })
  sessao: Sessao[];
}

export default Pauta;
