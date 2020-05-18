import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Voto from './VotoModel';

@Entity('sessao')
class Sessao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  inicio: Date;

  @Column()
  fim: Date;

  @OneToMany(() => Voto, voto => voto.id)
  @JoinColumn({ name: 'voto_id' })
  voto: Voto[];

  @Column()
  voto_id: string;
}

export default Sessao;
