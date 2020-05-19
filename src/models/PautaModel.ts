import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Assembleia from './AssembleiaModel';
import Sessao from './SessaoModel';

@Entity('pautas')
class Pauta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pauta: string;

  @Column()
  descricao: string;

  @Column()
  assembleia_id: string;

  @ManyToOne(() => Assembleia)
  @JoinColumn({ name: 'assembleia_id' })
  assembleia: Assembleia[];

  @Column()
  sessao_id: string;

  @OneToMany(() => Sessao, sessao => sessao.id)
  @JoinColumn({ name: 'sessao_id' })
  sessoes: Sessao[];
}

export default Pauta;
