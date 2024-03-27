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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecordsController = exports.updateRecordsController = exports.createRecordsController = exports.getRecordsController = void 0;
const firebase_1 = require("../utils/firebase");
const getRecordsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield (0, firebase_1.getRecords)('posts');
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ error: "Error getting records", details: error.message });
    }
});
exports.getRecordsController = getRecordsController;
const createRecordsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPost = yield (0, firebase_1.createRecord)('posts', req.body);
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(500).json({ error: "Error creating record", details: error.message });
    }
});
exports.createRecordsController = createRecordsController;
const updateRecordsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedPost = yield (0, firebase_1.updateRecord)('posts', id, req.body);
        res.status(200).json(updatedPost);
    }
    catch (error) {
        res.status(500).json({ error: "Error updating record", details: error.message });
    }
});
exports.updateRecordsController = updateRecordsController;
const deleteRecordsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, firebase_1.deleteRecord)('posts', id);
        res.status(200).json({ id, deleted: true });
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting record", details: error.message });
    }
});
exports.deleteRecordsController = deleteRecordsController;
