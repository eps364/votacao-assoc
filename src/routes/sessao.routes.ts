import { Router } from 'express';
import { add } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import SessaoCriar from '../services/SessaoCriar';
import SessaoRepository from '../repositories/SessaoRepository';

const sessaoRouter = Router();

sessaoRouter.get('/', async (request, response) => {
  const sessaoRepository = getCustomRepository(SessaoRepository);
  const sessoes = await sessaoRepository.find();
  return response.json(sessoes);
});

sessaoRouter.post('/', async (request, response) => {
  try {
    const { inicio, pautaId, duracao } = request.body;

    if (duracao) {
      const fim = add(new Date(inicio), { minutes: duracao });
    } else {
      const fim = add(new Date(inicio), { minutes: 1 });
    }

    const criarSessao = new SessaoCriar();

    const sessao = await criarSessao.execute({ inicio, fim, pautaId });

    return response.json(sessao);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessaoRouter;
