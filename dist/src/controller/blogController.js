"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogService_1 = __importDefault(require("../service/blogService"));
const blogs_1 = require("../entity/blogs");
class BlogController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await this.blogService.getAll();
            res.json(list);
        };
        this.add = async (req, res) => {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1;
            const day = currentDate.getDate();
            const hours = currentDate.getHours();
            const minutes = currentDate.getUTCMinutes();
            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
            const blog = new blogs_1.Blog();
            blog.tittle = req.body.tittle;
            blog.date = formattedDate;
            blog.content = req.body.content;
            blog.image = req.body.image;
            blog.user = req.body.user;
            let addedBlog = await this.blogService.add(blog);
            res.json(addedBlog);
        };
        this.delete = async (req, res) => {
            await this.blogService.delete(req.params.id);
            res.json('xoá thành công');
        };
        this.update = async (req, res) => {
            let result = await this.blogService.update(req.params.id, req.body);
            res.json("sửa thành công");
        };
        this.findById = async (req, res) => {
            let listClassRoom = await blogService_1.default.findById(req.params.id);
            res.json(listClassRoom);
        };
        this.blogService = blogService_1.default;
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blogController.js.map