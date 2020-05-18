import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Sessao;
