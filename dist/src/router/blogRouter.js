"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = __importDefault(require("../controller/blogController"));
const blogRouter = (0, express_1.Router)();
blogRouter.get('/', blogController_1.default.findAll);
blogRouter.post('/', blogController_1.default.add);
blogRouter.delete('/:id', blogController_1.default.delete);
blogRouter.put('/:id', blogController_1.default.update);
blogRouter.get('/:id', blogController_1.default.findById);
exports.default = blogRouter;
//# sourceMappingURL=blogRouter.js.map