import {Router} from "express";
import blogController from "../controller/blogController";
import auth from "../middleWare/middleware";

const blogRouter = Router();
blogRouter.use(auth);
blogRouter.get('/', blogController.findAll);
blogRouter.post('/', blogController.add);
blogRouter.delete('/:id', blogController.delete);
blogRouter.put('/:id', blogController.update);
blogRouter.get('/:id', blogController.findById);
export default blogRouter;