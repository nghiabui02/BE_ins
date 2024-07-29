import {Request, Response} from "express";
import commentService from "../service/commentService";
import messageService from "../service/messageService";

class MessageController{
    private messageService

    constructor() {
        this.messageService = messageService
    }
    findAll = async (req: Request, res: Response) => {
        let list = await this.messageService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.messageService.add(req.body);
        res.json("thêm thu chi thành công");
    }
    delete =async (req: Request, res: Response) => {
        await this.messageService.delete(req.params.id);
        res.json('xoá thành công');
    }

    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await commentService.findById(req.params.id)
        res.json(listClassRoom);
    }
    findByDate = async (req: Request, res: Response) => {
        let  listClassRoom= await commentService.findByDate(req.query.date)
        res.json(listClassRoom);
    }
    update = async (req: Request, res: Response) => {
        let data = await this.messageService.updateTrade(req.params.id, req.body);
        res.json(data)
    }
}
export default new MessageController()
