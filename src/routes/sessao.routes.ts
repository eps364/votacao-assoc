import { Router } from 'express';
import { parseISO } from 'date-fns';
import SessaoCriar from '../services/SessaoCriar';

const sessaoRouter = Router();

sessaoRouter.get('/', (request, response) =>
  response.json({ message: 'sessao OK' }),
);

sessaoRouter.post('/', async (request, response) => {
  try {
    const { inicio, fim } = request.body;

    const criarSessao = new SessaoCriar();

    const sessao = await criarSessao.execute({ inicio, fim });

    return response.json(sessao);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessaoRouter;
