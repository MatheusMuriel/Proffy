import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const connectionsControllers = new ConnectionsController();
const classesControllers = new ClassesController();

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);


export default routes;
