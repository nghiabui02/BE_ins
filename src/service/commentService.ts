import {AppDataSource} from "../data-source";
import {Comment} from "../entity/comment";

class CommentService{
    private Repository
    constructor() {
        this.Repository = AppDataSource.getRepository(Comment);
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
    update = async (id,data) =>{
        return await this.Repository.update(id,data)
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
export default new CommentService()
