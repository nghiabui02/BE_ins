import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleWare/middleware";
import bcrypt from 'bcrypt'
import { Repository } from "typeorm";

class AuthService {
    private Repository: Repository<User>;
    constructor() {
        this.Repository = AppDataSource.getRepository(User);
    }

    register = async (user: any) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.Repository.save(user);
    }

    checkUser = async (user: any) => {
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
}
export default new AuthService();