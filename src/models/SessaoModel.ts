import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Pauta from './PautaModel';

@Entity('sessao')
class Sessao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  inicio: Date;

  @Column()
  fim: Date;

  @Column()
  pauta_id: string;

  @ManyToOne(() => Pauta)
  @JoinColumn({ name: 'pauta_id' })
  sessao: Pauta[];
}

export default Sessao;
