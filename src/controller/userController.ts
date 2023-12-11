import {Request, Response} from "express";
import productService from "../service/userService";
import * as fs from "fs";
import userService from "../service/userService";

class UserController {
    private userService;

    constructor() {
        this.userService = userService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.userService.getAll();
        res.json(listProduct);
    }
    register = async (req: Request, res: Response) => {
        let result = await userService.register(req.body);
        res.json(result);
    }

    login = async (req: Request, res: Response) => {
        try {
            let resultCheck = await userService.checkUser(req.body);
            res.status(200).json({
                message: {

                    token : resultCheck,
                    username :req.body.username},
                success: true,

            });
        } catch (e) {
            console.log('error login: ', e);
            res.status(500).json({
                message: 'error login',
                success: false
            });

        }
    }
    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await userService.findById(req.params.id)
        res.json(listClassRoom);
    }
    update = async (req: Request, res: Response) => {
        let result = await this.userService.update(req.params.id, req.body);
        res.json("sửa thành công")
    }
}

export default new UserController();
