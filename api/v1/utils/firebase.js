const admin = require('firebase-admin');
const db = admin.firestore();

const getRecords = async (collection) => {
    try {
        const snapshot = await db.collection(collection).get();
        return snapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }))
        
    } catch (error) {
        console.error("Error getting records: ", error);
        throw error;
    }
}

const createRecord = async (collection, data) => {
    try {
        const docRef = await db.collection(collection).add(data);
        return { id: docRef.id, ...data};
        
    } catch (error) {
        console.error("Error creating record: ", error);
        throw error;
    }
}

const updateRecord = async (collection, id, data) => {
    try {
        const docRef = db.collection(collection).doc(id);
        await docRef.update(data);
        const updatedDoc = await docRef.get();
        return { id, ...updatedDoc.data };
        
    } catch (error) {
        console.error("Error updating record: ", error);
        throw error;
    }
}

const deleteRecord = async (collection, id) => {
    try {
        await db.collection(collection).doc(id).delete();
        return { id, deleted: true };
        
    } catch (error) {
        console.error("Error deleting record: ", error);
        throw error;
    }
}

module.exports = {getRecords, createRecord, updateRecord, deleteRecord};