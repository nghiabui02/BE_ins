import {Request, Response} from "express";
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
