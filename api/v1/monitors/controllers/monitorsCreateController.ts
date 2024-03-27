import { Request, Response } from 'express';
import { createRecord } from '../../utils/firebase';

const createMonitorsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const newMonitor = await createRecord('monitors', req.body);
        res.status(201).json(newMonitor);
    } catch (error: any) {
        res.status(500).json({ error: "Error creating monitor", details: error.message });
    }
};

export default createMonitorsController;
