"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likeController_1 = __importDefault(require("../controller/likeController"));
const likeRouter = (0, express_1.Router)();
likeRouter.get('/', likeController_1.default.findAll);
likeRouter.post('/', likeController_1.default.add);
likeRouter.delete('/:id', likeController_1.default.delete);
likeRouter.get('/:id', likeController_1.default.findById);
likeRouter.get('/date', likeController_1.default.findByDate);
exports.default = likeRouter;
//# sourceMappingURL=likeRouter.js.map