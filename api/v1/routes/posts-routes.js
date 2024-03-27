const express = require('express')
const router = express.Router();
const { getRecordsController, createRecordsController, updateRecordsController, deleteRecordsController } = require('../controllers/posts-controllers');

router.get('/posts', getRecordsController);
router.post('/posts', createRecordsController);
router.put('/posts/:id', updateRecordsController);
router.delete('/posts/:id', deleteRecordsController);

module.exports = router;