import { Request, Response } from 'express';
import { getRecords } from '../../utils/firebase';

const getMonitorsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const monitors = await getRecords('monitors');
        res.status(200).json(monitors);
    } catch (error: any) {
        res.status(500).json({ error: "Error getting monitors", details: error.message });
    }
};

export default getMonitorsController;
