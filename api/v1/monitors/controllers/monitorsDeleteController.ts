import { Request, Response } from 'express';
import { deleteRecord } from '../../utils/firebase';

const deleteMonitorsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await deleteRecord('monitors', id);
        res.status(200).json({ id, deleted: true });
    } catch (error: any) {
        res.status(500).json({ error: "Error deleting monitor", details: error.message });
    }
};

export default deleteMonitorsController;
