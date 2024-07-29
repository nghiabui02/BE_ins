import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleWare/middleware";
import bcrypt from 'bcrypt'
import {QueryFailedError, Repository} from "typeorm";

class AuthService {
    private Repository: Repository<User>;
    constructor() {
        this.Repository = AppDataSource.getRepository(User);
    }

    async register(userData: any) {
        try {
            const user = this.Repository.create(userData);
            await this.Repository.save(user);
            return { message: 'User registered successfully' };
        } catch (error) {
            if (error instanceof QueryFailedError) {
                if (error.message.includes('unique constraint')) {
                    if (error.message.includes('username')) {
                        throw new Error('Username already exists');
                    }
                    if (error.message.includes('email')) {
                        throw new Error('Email already exists');
                    }
                }
            }
            throw new Error('Error registering user');
        }
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
                    let token = jwt.sign(payload, SECRET, {
                        expiresIn: 36000 * 10 * 100
                    });
                    return `Bearer ${token}`;
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