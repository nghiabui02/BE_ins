import blogService from "../service/blogService";
import {Request, Response} from "express";
import likeService from "../service/likeService";

class LikeController{
    private likeService

    constructor() {
        this.likeService = likeService
    }
    findAll = async (req: Request, res: Response) => {
        let list = await this.likeService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {
        let list = await this.likeService.add(req.body);
        res.json("thêm thu chi thành công");
    }
    delete =async (req: Request, res: Response) => {
        await this.likeService.delete(req.params.id);
        res.json('xoá thành công');
    }

    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await likeService.findById(req.params.id)
        res.json(listClassRoom);
    }
    findByDate = async (req: Request, res: Response) => {
        let  listClassRoom= await likeService.findByDate(req.query.date)
        res.json(listClassRoom);
    }
}
export default new LikeController()