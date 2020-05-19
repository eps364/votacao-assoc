import { Router } from 'express';
import PautaCriar from '../services/PautaCriar';

const pautaRouter = Router();

pautaRouter.get('/', (request, response) =>
  response.json({ message: 'Pauta OK' }),
);

pautaRouter.post('/', async (request, response) => {
  try {
    const { pauta, descricao, assembleiaId } = request.body;

    const criarPauta = new PautaCriar();

    const pautaConc = await criarPauta.execute({
      pauta,
      descricao,
      assembleiaId,
    });

    return response.json(pautaConc);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default pautaRouter;
