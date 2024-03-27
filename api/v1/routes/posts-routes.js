"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_controllers_1 = require("../controllers/posts-controllers");
const router = express_1.default.Router();
router.get('/posts', posts_controllers_1.getRecordsController);
router.post('/posts', posts_controllers_1.createRecordsController);
router.put('/posts/:id', posts_controllers_1.updateRecordsController);
router.delete('/posts/:id', posts_controllers_1.deleteRecordsController);
exports.default = router;
