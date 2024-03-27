import admin from 'firebase-admin';

const db = admin.firestore();

interface FirestoreDoc {
    id: string;
    [key: string]: any;
}

const getRecords = async (collection: string): Promise<FirestoreDoc[]> => {
    try {
        const snapshot = await db.collection(collection).get();
        return snapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }));
    } catch (error) {
        console.error("Error getting records: ", error);
        throw error;
    }
};

const createRecord = async (collection: string, data: any): Promise<FirestoreDoc> => {
    try {
        const docRef = await db.collection(collection).add(data);
        return { id: docRef.id, ...data };
    } catch (error) {
        console.error("Error creating record: ", error);
        throw error;
    }
};

const updateRecord = async (collection: string, id: string, data: any): Promise<FirestoreDoc> => {
    try {
        const docRef = db.collection(collection).doc(id);
        await docRef.update(data);
        const updatedDoc = await docRef.get();
        return { id, ...updatedDoc.data() };
    } catch (error) {
        console.error("Error updating record: ", error);
        throw error;
    }
};

const deleteRecord = async (collection: string, id: string): Promise<{ id: string, deleted: boolean }> => {
    try {
        await db.collection(collection).doc(id).delete();
        return { id, deleted: true };
    } catch (error) {
        console.error("Error deleting record: ", error);
        throw error;
    }
};

export { getRecords, createRecord, updateRecord, deleteRecord };
