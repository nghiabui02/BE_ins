"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const like_1 = require("../entity/like");
class LikeService {
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
        this.Repository = data_source_1.AppDataSource.getRepository(like_1.Like);
    }
}
exports.default = new LikeService();
//# sourceMappingURL=likeService.js.map