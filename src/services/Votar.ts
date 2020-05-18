import { getCustomRepository } from 'typeorm';
import Voto from '../models/VotoModel';
import VotoRepository from '../repositories/VotoRepository';
import sessaoRepository from '../repositories/sessaoRepository';

interface Request {
  sessao: string;
  voto: boolean;
  usuario: string;
}

class Votar {
  public async execute({ sessao, voto, usuario }: Request): Promise<Voto> {
    const votoRepository = getCustomRepository(VotoRepository);

    // Regra Validar Sessao

    // Regra Validar Usuario

    const votoConc = votoRepository.create({ sessao, voto, usuario });

    await votoRepository.save(votoConc);

    return votoConc;
  }
}
export default Votar;
