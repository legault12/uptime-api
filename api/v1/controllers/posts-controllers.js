const { createRecord, getRecords, updateRecord, deleteRecord }  = require('../utils/firebase');

const getRecordsController = async (req, res) => {
    try {
        const posts = await getRecords('posts')
        res.status(200).json(posts);
    } catch (error) {
        
    }
}

const createRecordsController = (req, res) => {
    const something = await(createRecord)
}

module.exports = {getRecordsController};