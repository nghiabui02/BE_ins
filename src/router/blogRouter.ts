import {Router} from "express";
import blogController from "../controller/blogController";

const blogRouter = Router();
blogRouter.get('/', blogController.findAll);
blogRouter.post('/', blogController.add);
blogRouter.delete('/:id', blogController.delete);
blogRouter.put('/:id', blogController.update);
blogRouter.get('/:id', blogController.findById);
export default blogRouter;