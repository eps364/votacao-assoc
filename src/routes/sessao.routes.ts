import { Router } from 'express';
import SessaoCriar from '../services/SessaoCriar';

const sessaoRouter = Router();

sessaoRouter.get('/', (request, response) =>
  response.json({ message: 'Sessao OK' }),
);

sessaoRouter.post('/', async (request, response) => {
  try {
    const { inicio, fim, pauta_id } = request.body;

    const criarSessao = new SessaoCriar();

    const sessao = await criarSessao.execute({ inicio, fim, pauta_id });

    return response.json(sessao);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessaoRouter;
