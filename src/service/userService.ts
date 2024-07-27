import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import { Repository } from "typeorm";

class UserService {
    private Repository: Repository<User>;
    constructor() {
        this.Repository = AppDataSource.getRepository(User);
    }
    getAll = async () => {
        return await this.Repository.find()
    }
    findById = async (id: any) => {
        return await this.Repository.find(
            {where: {id: id}})
    }
    update = async ({id, data}: any) => {
        return await this.Repository.update(id, data)
    }
}
export default new UserService();