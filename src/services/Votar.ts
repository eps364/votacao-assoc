import { getCustomRepository } from 'typeorm';
import Voto from '../models/VotoModel';
import VotoRepository from '../repositories/VotoRepository';
import SessaoRepository from '../repositories/SessaoRepository';
import UsuarioRepository from '../repositories/UsuarioRepository';

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
    const sessaoRepository = getCustomRepository(SessaoRepository);
    const sessao = await sessaoRepository.findOne({ id: sessao_id });
    if (!sessao) throw new Error('Sessão não encontrada!');

    // Regra Validar Usuario
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    const usuario = await usuarioRepository.findOne({ id: usuario_id });
    if (!usuario) throw new Error('Usuario não encontrada!');

    const jaVotou = await votoRepository.find({
      where: [
        {
          sessao_id,
          usuario_id,
        },
      ],
    });

    if (jaVotou.length > 0) throw new Error('Usuario já votou nesta sessao!');

    const votoConc = votoRepository.create({ sessao_id, voto, usuario_id });

    await votoRepository.save(votoConc);

    return votoConc;
  }
}
export default Votar;
