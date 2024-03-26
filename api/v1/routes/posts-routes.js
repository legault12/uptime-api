const express = require('express')
const router = express.Router();
const { createRecord, getRecords, updateRecord, deleteRecord }  = require('../utils/firebase');
const { getRecordsController } = require('../controllers/posts-controllers');

// get posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await getRecords('posts');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({error: 'YOU HAVE FAILED'})
    }
});

module.exports = router;