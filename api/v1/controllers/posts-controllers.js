const { createRecord, getRecords, updateRecord, deleteRecord }  = require('../utils/firebase');

const getRecordsController = async (req, res) => {
    try {
        const posts = await getRecords('posts');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: "Error getting records", details: error.message });
    }
};

const createRecordsController = async (req, res) => {
    try {
        const newPost = await createRecord('posts', req.body);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: "Error creating record", details: error.message })
    }
}

const updateRecordsController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await updateRecord('posts', id, req.body);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: "Error updating record", details: error.message })
    }
}

const deleteRecordsController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteRecord('posts', id);
        res.status(200).json({ id, deleted: true });
    } catch (error) {
        res.status(500).json({ error: "Error deleting record", details: error.message })
    }
}

module.exports = {getRecordsController, createRecordsController, updateRecordsController, deleteRecordsController};