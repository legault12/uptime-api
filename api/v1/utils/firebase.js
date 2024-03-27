"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecord = exports.updateRecord = exports.createRecord = exports.getRecords = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const db = firebase_admin_1.default.firestore();
const getRecords = (collection) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const snapshot = yield db.collection(collection).get();
        return snapshot.docs.map(doc => (Object.assign({ id: doc.id }, doc.data())));
    }
    catch (error) {
        console.error("Error getting records: ", error);
        throw error;
    }
});
exports.getRecords = getRecords;
const createRecord = (collection, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield db.collection(collection).add(data);
        return Object.assign({ id: docRef.id }, data);
    }
    catch (error) {
        console.error("Error creating record: ", error);
        throw error;
    }
});
exports.createRecord = createRecord;
const updateRecord = (collection, id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = db.collection(collection).doc(id);
        yield docRef.update(data);
        const updatedDoc = yield docRef.get();
        return Object.assign({ id }, updatedDoc.data());
    }
    catch (error) {
        console.error("Error updating record: ", error);
        throw error;
    }
});
exports.updateRecord = updateRecord;
const deleteRecord = (collection, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.collection(collection).doc(id).delete();
        return { id, deleted: true };
    }
    catch (error) {
        console.error("Error deleting record: ", error);
        throw error;
    }
});
exports.deleteRecord = deleteRecord;
