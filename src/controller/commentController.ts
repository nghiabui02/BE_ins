import blogService from "../service/blogService";
import {Request, Response} from "express";
import commentService from "../service/commentService";

class CommentController{
    private commentService

    constructor() {
        this.commentService = commentService
    }
    findAll = async (req: Request, res: Response) => {
        let list = await this.commentService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.commentService.add(req.body);
        res.json("thêm thu chi thành công");
    }
    delete =async (req: Request, res: Response) => {
        await this.commentService.delete(req.params.id);
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
        let data = await this.commentService.updateTrade(req.params.id, req.body);
        res.json(data)
    }
}
export default new CommentController()
