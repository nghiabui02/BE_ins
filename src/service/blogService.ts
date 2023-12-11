import {AppDataSource} from "../data-source";
import {User} from "../entity/user";
import {Blog} from "../entity/blogs";

class BlogService{
    private Repository
    constructor() {
        this.Repository = AppDataSource.getRepository(Blog);
    }
    getAll = async () => {
        return await this.Repository.find({
            relations: {
                user: true,
            }
        })
    }
    add = async (blog) => {
        return await this.Repository.save(blog)
    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    update = async (id, data) => {
        return await this.Repository.update(id, data)
    }
    findById = async (id) => {
        return await this.Repository.find(
            {where: {id: id}})
    }


}
export default new BlogService()