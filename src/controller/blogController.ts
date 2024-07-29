import blogService from "../service/blogService";
import {Request, Response} from "express";
import {Blog} from "../entity/blogs";
import {validate} from "class-validator";

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
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        const blog = new Blog();
        blog.title = req.body.title;
        blog.date = formattedDate;
        blog.content = req.body.content;
        blog.image = req.body.image;
        blog.user = req.body.user;
        const errors = await validate(blog);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        let addedBlog = await this.blogService.add(blog);
        res.status(201).json(addedBlog);
    }
    delete =async (req: Request, res: Response) => {
        await this.blogService.delete(req.params.id);

        res.status(204).json('xoá thành công');
    }
    update = async (req: Request, res: Response) => {
        let result = await this.blogService.update(req.params.id, req.body);
        res.status(200).json(result)
    }
    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await blogService.findById(req.params.id)
        res.json(listClassRoom);
    }
}
export default new BlogController()
