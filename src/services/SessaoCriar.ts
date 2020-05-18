import { getCustomRepository } from 'typeorm';
import Sessao from '../models/SessaoModel';
import SessaoRepository from '../repositories/SessaoRepository';

interface Request {
  inicio: datetime;
  fim: datetime;
  pauta_id: string;
}

class SessaoCriar {
  public async execute({ inicio, fim, pauta_id }: Request): Promise<Sessao> {
    const sessaoRepository = getCustomRepository(SessaoRepository);

    const sessao = sessaoRepository.create({ inicio, fim, pauta_id });

    await sessaoRepository.save(sessao);

    return sessao;
  }
}

export default SessaoCriar;
