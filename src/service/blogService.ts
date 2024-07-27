import {AppDataSource} from "../data-source";
import {User} from "../entity/user";
import {Blog} from "../entity/blogs";
import { FindOptionsWhere, ObjectId, Repository} from "typeorm";

class BlogService {
    private Repository: Repository<Blog>

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
    add = async (blog: any) => {
        return await this.Repository.save(blog)
    }
    delete = async (id: string | number | string[] | Date | ObjectId | number[] | Date[] | ObjectId[] | FindOptionsWhere<Blog>) => {
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