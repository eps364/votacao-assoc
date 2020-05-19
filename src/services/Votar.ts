import { getCustomRepository } from 'typeorm';
import Voto from '../models/VotoModel';
import VotoRepository from '../repositories/VotoRepository';
import SessaoRepository from '../repositories/SessaoRepository';
import UsuarioRepository from '../repositories/UsuarioRepository';

interface Request {
  sessaoId: string;
  voto: boolean;
  usuarioId: string;
}

class Votar {
  public async execute({ sessaoId, voto, usuarioId }: Request): Promise<Voto> {
    const votoRepository = getCustomRepository(VotoRepository);

    // Regra Validar Sessao
    const sessaoRepository = getCustomRepository(SessaoRepository);
    const sessao = await sessaoRepository.findOne({ id: sessaoId });
    if (!sessao) throw new Error('Sessão não encontrada!');

    // Regra Validar Usuario
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    const usuario = await usuarioRepository.findOne({ id: usuarioId });
    if (!usuario) throw new Error('Usuario não encontrada!');

    const jaVotou = await votoRepository.find({
      where: [
        {
          sessaoId,
          usuarioId,
        },
      ],
    });

    if (jaVotou.length > 0) throw new Error('Usuario já votou nesta sessao!');

    const votoConc = votoRepository.create({ sessaoId, voto, usuarioId });

    await votoRepository.save(votoConc);

    return votoConc;
  }
}
export default Votar;
