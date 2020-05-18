import { Router } from 'express';
import Votar from '../services/Votar';

const votoRouter = Router();

votoRouter.get('/', (request, response) =>
  response.json({ message: 'Assembleia OK' }),
);

votoRouter.post('/', async (request, response) => {
  try {
    const { voto, usuario_id } = request.body;

    const votar = new Votar();

    const votoConcluido = await votar.execute({ voto, usuario_id });

    return response.json(votoConcluido);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default votoRouter;
