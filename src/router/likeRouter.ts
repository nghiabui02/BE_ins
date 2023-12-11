import {Router} from "express";
import likeController from "../controller/likeController";

const likeRouter = Router();
likeRouter.get('/', likeController.findAll);
likeRouter.post('/', likeController.add);
likeRouter.delete('/:id', likeController.delete);
likeRouter.get('/:id', likeController.findById);
likeRouter.get('/date', likeController.findByDate);
export default likeRouter;
