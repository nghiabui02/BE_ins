import {AppDataSource} from "../data-source";
import {Messages} from "../entity/messages";

class MessagesService{
    private Repository
    constructor() {
        this.Repository = AppDataSource.getRepository(Messages);
    }
    getAll = async () => {
        return await this.Repository.find()
    }
    add = async (message) => {

        return await this.Repository.save(message)
    }
    delete = async (id) => {
        return await this.Repository.delete(id)
    }
    update = async (id, data) => {
        return await this.Repository.update(id, data)
    }



}
export default new MessagesService()