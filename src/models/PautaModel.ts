import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Assembleia from './AssembleiaModel';

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
}

export default Pauta;
