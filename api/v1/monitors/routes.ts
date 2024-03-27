import express, { Router } from 'express';
import {
    getRecordsController,
    createRecordsController,
    updateRecordsController,
    deleteRecordsController
} from '../controllers/posts-controllers';

const router: Router = express.Router();

router.get('/posts', getRecordsController);
router.post('/posts', createRecordsController);
router.put('/posts/:id', updateRecordsController);
router.delete('/posts/:id', deleteRecordsController);

export default router;
