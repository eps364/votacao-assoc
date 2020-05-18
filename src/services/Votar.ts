import { getCustomRepository } from 'typeorm';
import Voto from '../models/VotoModel';
import VotoRepository from '../repositories/VotoRepository';
import sessaoRepository from '../repositories/sessaoRepository';

interface Request {
  sessao_id: string;
  voto: boolean;
  usuario_id: string;
}

class Votar {
  public async execute({
    sessao_id,
    voto,
    usuario_id,
  }: Request): Promise<Voto> {
    const votoRepository = getCustomRepository(VotoRepository);

    // Regra Validar Sessao

    // Regra Validar Usuario

    const votoConc = votoRepository.create({ sessao_id, voto, usuario_id });

    await votoRepository.save(votoConc);

    return votoConc;
  }
}
export default Votar;
