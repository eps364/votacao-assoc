import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Pauta;
