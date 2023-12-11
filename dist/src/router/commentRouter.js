"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentController_1 = __importDefault(require("../controller/commentController"));
const commentRouter = (0, express_1.Router)();
commentRouter.get('/', commentController_1.default.findAll);
commentRouter.post('/', commentController_1.default.add);
commentRouter.put('/:id', commentController_1.default.update);
commentRouter.delete('/:id', commentController_1.default.delete);
commentRouter.get('/:id', commentController_1.default.findById);
commentRouter.get('/date', commentController_1.default.findByDate);
exports.default = commentRouter;
//# sourceMappingURL=commentRouter.js.map