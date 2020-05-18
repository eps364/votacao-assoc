import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Server OK' });
});

export default routes;