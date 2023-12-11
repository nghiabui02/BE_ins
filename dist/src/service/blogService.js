"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const blogs_1 = require("../entity/blogs");
class BlogService {
    constructor() {
        this.getAll = async () => {
            return await this.Repository.find({
                relations: {
                    user: true,
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
            return await this.Repository.find({ where: { id: id } });
        };
        this.Repository = data_source_1.AppDataSource.getRepository(blogs_1.Blog);
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blogService.js.map