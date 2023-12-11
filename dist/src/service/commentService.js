"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const comment_1 = require("../entity/comment");
class CommentService {
    constructor() {
        this.getAll = async () => {
            return await this.Repository.find({
                relation: {
                    user: true,
                    blog: true
                }
            });
        };
        this.add = async (blog) => {
            return await this.Repository.save(blog);
        };
        this.delete = async (id) => {
            return await this.Repository.delete(id);
        };
        this.update = async (id, data) => {
            return await this.Repository.update(id, data);
        };
        this.findById = async (id) => {
            return await this.Repository.find({
                relation: {
                    user: true,
                    blog: true
                }
            }, {
                where: id
            });
        };
        this.findByDate = async (date) => {
            return await this.Repository.find({
                where: {
                    date: date
                }
            });
        };
        this.Repository = data_source_1.AppDataSource.getRepository(comment_1.Comment);
    }
}
exports.default = new CommentService();
//# sourceMappingURL=commentService.js.map