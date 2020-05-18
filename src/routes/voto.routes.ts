import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import Votar from '../services/Votar';
import VotarRepository from '../repositories/VotoRepository';

const votoRouter = Router();

votoRouter.get('/', async (request, response) => {
  const votarRepository = getCustomRepository(VotarRepository);
  const votos = await votarRepository.find();
  return response.json(votos);
});

votoRouter.post('/', async (request, response) => {
  try {
    const { sessao_id, voto, usuario_id } = request.body;

    const votar = new Votar();

    const votoConcluido = await votar.execute({ sessao_id, voto, usuario_id });

    return response.json(votoConcluido);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default votoRouter;
