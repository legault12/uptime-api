import { Request, Response } from 'express';
import { createRecord, getRecords, updateRecord, deleteRecord } from '../utils/firebase';

const getRecordsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts = await getRecords('posts');
        res.status(200).json(posts);
    } catch (error: any) {
        res.status(500).json({ error: "Error getting records", details: error.message });
    }
};

const createRecordsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const newPost = await createRecord('posts', req.body);
        res.status(201).json(newPost);
    } catch (error: any) {
        res.status(500).json({ error: "Error creating record", details: error.message });
    }
};

const updateRecordsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedPost = await updateRecord('posts', id, req.body);
        res.status(200).json(updatedPost);
    } catch (error: any) {
        res.status(500).json({ error: "Error updating record", details: error.message });
    }
};

const deleteRecordsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deleteRecord('posts', id);
        res.status(200).json({ id, deleted: true });
    } catch (error: any) {
        res.status(500).json({ error: "Error deleting record", details: error.message });
    }
};

export { getRecordsController, createRecordsController, updateRecordsController, deleteRecordsController };
