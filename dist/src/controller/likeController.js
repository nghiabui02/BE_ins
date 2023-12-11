"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const likeService_1 = __importDefault(require("../service/likeService"));
class LikeController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await this.likeService.getAll();
            res.json(list);
        };
        this.add = async (req, res) => {
            let list = await this.likeService.add(req.body);
            res.json("thêm thu chi thành công");
        };
        this.delete = async (req, res) => {
            await this.likeService.delete(req.params.id);
            res.json('xoá thành công');
        };
        this.findById = async (req, res) => {
            let listClassRoom = await likeService_1.default.findById(req.params.id);
            res.json(listClassRoom);
        };
        this.findByDate = async (req, res) => {
            let listClassRoom = await likeService_1.default.findByDate(req.query.date);
            res.json(listClassRoom);
        };
        this.likeService = likeService_1.default;
    }
}
exports.default = new LikeController();
//# sourceMappingURL=likeController.js.map