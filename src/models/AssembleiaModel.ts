import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import Pauta from './PautaModel';

@Entity('assembleias')
class Assembleia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  assembleia: string;

  @Column()
  descricao: string;

  @Column()
  data: Date;
}

export default Assembleia;
