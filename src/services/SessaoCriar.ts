import { getCustomRepository } from 'typeorm';
import Sessao from '../models/SessaoModel';
import SessaoRepository from '../repositories/SessaoRepository';
import PautaRepository from '../repositories/PautaRepository';

interface Request {
  inicio: datetime;
  fim: datetime;
  pauta_id: string;
}

class SessaoCriar {
  public async execute({ inicio, fim, pauta_id }: Request): Promise<Sessao> {
    const sessaoRepository = getCustomRepository(SessaoRepository);
    const pautaRepository = getCustomRepository(PautaRepository);

    const pauta = await pautaRepository.findOne(pauta_id);

    if (!pauta) throw new Error('Pauta não encontrada!');

    const sessao = sessaoRepository.create({ inicio, fim, pauta_id });

    await sessaoRepository.save(sessao);

    return sessao;
  }
}

export default SessaoCriar;
