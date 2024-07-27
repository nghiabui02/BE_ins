import blogService from "../service/blogService";
import {Request, Response} from "express";
import {Blog} from "../entity/blogs";

class BlogController{
    private blogService

    constructor() {
        this.blogService = blogService
    }
    findAll = async (req: Request, res: Response) => {
        let list = await this.blogService.getAll();
        res.json(list);
    }
    add = async (req: Request, res: Response) => {

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const hours = currentDate.getHours()
        const minutes = currentDate.getUTCMinutes()
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

        const blog = new Blog();
        blog.tittle = req.body.tittle;
        blog.date = formattedDate; // Cập nhật trường date thành thời gian hiện tại
        blog.content = req.body.content;
        blog.image = req.body.image;
        blog.user = req.body.user;

        let addedBlog = await this.blogService.add(blog);
        res.json(addedBlog);
    }
    delete =async (req: Request, res: Response) => {
        await this.blogService.delete(req.params.id);

        res.json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.blogService.update(req.params.id, req.body);
        res.json("sửa thành công")
    }
    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await blogService.findById(req.params.id)
        res.json(listClassRoom);
    }
}
export default new BlogController()
