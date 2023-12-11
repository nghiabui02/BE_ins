"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentService_1 = __importDefault(require("../service/commentService"));
class CommentController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await this.commentService.getAll();
            res.json(list);
        };
        this.add = async (req, res) => {
            let list = await this.commentService.add(req.body);
            res.json("thêm thu chi thành công");
        };
        this.delete = async (req, res) => {
            await this.commentService.delete(req.params.id);
            res.json('xoá thành công');
        };
        this.findById = async (req, res) => {
            let listClassRoom = await commentService_1.default.findById(req.params.id);
            res.json(listClassRoom);
        };
        this.findByDate = async (req, res) => {
            let listClassRoom = await commentService_1.default.findByDate(req.query.date);
            res.json(listClassRoom);
        };
        this.update = async (req, res) => {
            let data = await this.commentService.updateTrade(req.params.id, req.body);
            res.json(data);
        };
        this.commentService = commentService_1.default;
    }
}
exports.default = new CommentController();
//# sourceMappingURL=commentController.js.map