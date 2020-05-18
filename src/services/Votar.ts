import { getCustomRepository } from 'typeorm';
import Voto from '../models/VotoModel';
import VotoRepository from '../repositories/VotoRepository';

interface Request {
  voto: boolean;
  usuario_id: string;
}

class Votar {
  public async execute({ voto, usuario_id }: Request): Promise<Voto> {
    const votoRepository = getCustomRepository(VotoRepository);

    const votoConc = votoRepository.create({ voto, usuario_id });

    await votoRepository.save(votoConc);

    return votoConc;
  }
}
export default Votar;
