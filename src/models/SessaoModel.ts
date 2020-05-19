import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Pauta from './PautaModel';
import Voto from './VotoModel';

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

  @ManyToOne(() => Pauta, pauta => pauta.id)
  @JoinColumn({ name: 'pauta_id' })
  pauta: Pauta;

  @OneToMany(() => Voto, voto => voto.sessao)
  votos: Voto[];
}

export default Sessao;
