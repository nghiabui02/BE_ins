import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleWare/middleware";
import bcrypt from 'bcrypt'

class UserService {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(User);
    }
    getAll = async () => {
        return await this.Repository.find()
    }
    register = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.Repository.save(user);
    }

    checkUser = async (user) => {
        try{
            let userFind = await this.Repository.findOneBy({username: user.username});
            if (!userFind) {
                return 'User is not exist'
            } else {
                let passWordCompare =  await bcrypt.compare(user.password, userFind.password);
                if (passWordCompare) {
                    let payload = {
                        idUser: userFind.id,
                        username: userFind.username,
                        role: 'admin',
                        image : userFind.image
                    }
                    payload["token"]= jwt.sign(payload, SECRET, {
                        expiresIn: 36000 * 10 * 100
                    })
                    return payload
                } else {
                    return 'Password is wrong'
                }
            }
        } catch (e) {
            console.log("error checkUser", e)
        }

    }
    findById = async (id) => {
        return await this.Repository.find(
            {where: {id: id}})
    }
    update = async (id, data) => {
        return await this.Repository.update(id, data)
    }
}
export default new UserService();