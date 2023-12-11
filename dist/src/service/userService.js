"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middleware_1 = require("../middleWare/middleware");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.getAll = async () => {
            return await this.Repository.find();
        };
        this.register = async (user) => {
            user.password = await bcrypt_1.default.hash(user.password, 10);
            return this.Repository.save(user);
        };
        this.checkUser = async (user) => {
            try {
                let userFind = await this.Repository.findOneBy({ username: user.username });
                if (!userFind) {
                    return 'User is not exist';
                }
                else {
                    let passWordCompare = await bcrypt_1.default.compare(user.password, userFind.password);
                    if (passWordCompare) {
                        let payload = {
                            idUser: userFind.id,
                            username: userFind.username,
                            role: 'admin',
                            image: userFind.image
                        };
                        payload["token"] = jsonwebtoken_1.default.sign(payload, middleware_1.SECRET, {
                            expiresIn: 36000 * 10 * 100
                        });
                        return payload;
                    }
                    else {
                        return 'Password is wrong';
                    }
                }
            }
            catch (e) {
                console.log("error checkUser", e);
            }
        };
        this.findById = async (id) => {
            return await this.Repository.find({ where: { id: id } });
        };
        this.update = async (id, data) => {
            return await this.Repository.update(id, data);
        };
        this.Repository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map