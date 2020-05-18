import { getCustomRepository } from 'typeorm';
import Pauta from '../models/PautaModel';
import PautaRepository from '../repositories/PautaRepository';

interface Request {
  pauta: string;
  descricao: string;
  assembleia_id: string;
}

class AssembleiaCriar {
  public async execute({
    pauta,
    descricao,
    assembleia_id,
  }: Request): Promise<Pauta> {
    const pautaRepository = getCustomRepository(PautaRepository);

    const pautaConc = pautaRepository.create({
      pauta,
      descricao,
      assembleia_id,
    });

    await pautaRepository.save(pautaConc);

    return pautaConc;
  }
}

export default AssembleiaCriar;
