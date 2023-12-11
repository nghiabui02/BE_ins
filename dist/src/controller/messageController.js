"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentService_1 = __importDefault(require("../service/commentService"));
const messageService_1 = __importDefault(require("../service/messageService"));
class MessageController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await this.messageService.getAll();
            res.json(list);
        };
        this.add = async (req, res) => {
            let list = await this.messageService.add(req.body);
            res.json("thêm thu chi thành công");
        };
        this.delete = async (req, res) => {
            await this.messageService.delete(req.params.id);
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
            let data = await this.messageService.updateTrade(req.params.id, req.body);
            res.json(data);
        };
        this.messageService = messageService_1.default;
    }
}
exports.default = new MessageController();
//# sourceMappingURL=messageController.js.map