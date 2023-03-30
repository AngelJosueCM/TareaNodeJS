import express from 'express';
import controllers from '../controllers/videojuegos';
const router = express.Router();



router
  .get('/videojuegos', controllers.getAll)
  .get('/videojuegos/:id', controllers.get)
  .post('/videojuegos', controllers.create)
  .patch('/videojuegos/:id', controllers.update)
  .delete('/videojuegos/:id', controllers.remove);

export = router;