import { Router } from 'express';
import AssembleiaCriar from '../services/AssembleiaCriar';

const assembleiaRouter = Router();

assembleiaRouter.get('/', (request, response) =>
  response.json({ message: 'Assembleia OK' }),
);

assembleiaRouter.post('/', async (request, response) => {
  try {
    const { assembleia, descricao, data } = request.body;

    const assembleiaCriar = new AssembleiaCriar();

    const assembleiaConcluido = await assembleiaCriar.execute({
      assembleia,
      descricao,
      data,
    });

    return response.json(assembleiaConcluido);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default assembleiaRouter;
