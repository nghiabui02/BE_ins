"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likeController_1 = __importDefault(require("../controller/likeController"));
const messageRouter = (0, express_1.Router)();
messageRouter.get('/', likeController_1.default.findAll);
messageRouter.post('/', likeController_1.default.add);
exports.default = messageRouter;
//# sourceMappingURL=messageRouter.js.map