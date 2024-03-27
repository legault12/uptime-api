import { Request, Response } from 'express';
import { updateRecord } from '../../utils/firebase';

const updateMonitorsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedMonitor = await updateRecord('monitors', id, req.body);
        res.status(200).json(updatedMonitor);
    } catch (error: any) {
        res.status(500).json({ error: "Error updating monitor", details: error.message });
    }
};

export default updateMonitorsController;
