import {AppDataSource} from "../data-source";
import {User} from "../entity/user";
import {Blog} from "../entity/blogs";
import {Like} from "../entity/like";

class LikeService{
    private Repository
    constructor() {
        this.Repository = AppDataSource.getRepository(Like);
    }
    getAll = async () => {
        return await this.Repository.find({
            relation: {
                user: true,
                blog:true
            }
        })
    }
    add = async (blog) => {
        return await this.Repository.save(blog)
    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }

    findById = async (id) => {
        return await this.Repository.find(
            {
                relation:{
                    user: true,
                    blog: true
                }
            },
            {
                where: id
            }

        )
    }
    findByDate = async (date) =>{
        return await this.Repository.find({
            where: {
                date: date
            }
        })
    }


}
export default new LikeService()
