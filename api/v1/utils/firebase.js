const admin = require('firebase-admin');
// const { collection } = require('firebase/firestore/lite');
const db = admin.firestore();

const getRecords = async (collection) => {
    const snapshot = await db.collection(collection).get();
    return snapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
    }))
}

// const createRecord = async (collection, data) => {
//     await db.collection(collection).add(data);
// }

// const updateRecord = async (collection, id, data) => {
//     await db.collection(collection).doc(id).update(data);
// }

// const deleteRecord = async (collection, id) => {
//     await db.collection(collection).doc(id).delete();
// }

module.exports = {getRecords};