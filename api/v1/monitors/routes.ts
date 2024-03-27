import express, { Router } from 'express';
import getMonitorsController from '../monitors/controllers/monitorsRequestController';
import createMonitorsController from '../monitors/controllers/monitorsCreateController';
import updateMonitorsController from '../monitors/controllers/monitorsUpdateController';
import deleteMonitorsController from '../monitors/controllers/monitorsDeleteController';

const router: Router = express.Router();

router.get('/monitors', getMonitorsController);
router.post('/monitors', createMonitorsController);
router.put('/monitors/:id', updateMonitorsController);
router.delete('/monitors/:id', deleteMonitorsController);

export default router;
