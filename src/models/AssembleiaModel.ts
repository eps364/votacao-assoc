import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Pauta from './PautaModel';

@Entity('assembleia')
class Assembleia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  assembleia: string;

  @Column()
  descricao: string;

  @Column()
  data: Date;

  @Column()
  pauta_id: string;

  @OneToMany(() => Pauta, pauta => pauta.id)
  @JoinColumn({ name: 'pauta_id' })
  pauta: Pauta[];
}

export default Assembleia;
